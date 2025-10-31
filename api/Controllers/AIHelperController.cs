using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;
using System.Text;
using System.Text.Json;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AIHelperController : ControllerBase
    {
        private readonly string _connectionString;
        private readonly IConfiguration _configuration;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ILogger<AIHelperController> _logger;

        public AIHelperController(
            IConfiguration configuration,
            IHttpClientFactory httpClientFactory,
            ILogger<AIHelperController> logger)
        {
            _configuration = configuration;
            _httpClientFactory = httpClientFactory;
            _logger = logger;
            _connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpPost("ask")]
        public async Task<ActionResult<AIResponse>> AskQuestion(AskQuestionRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            // Save the question to database
            var questionQuery = @"
                INSERT INTO Questions (Question, Subject, StudentLevel, CreatedAt)
                VALUES (@question, @subject, @studentLevel, @createdAt);
                SELECT last_insert_rowid();";

            using var questionCommand = new SqliteCommand(questionQuery, connection);
            questionCommand.Parameters.AddWithValue("@question", request.Question);
            questionCommand.Parameters.AddWithValue("@subject", request.Subject ?? (object)DBNull.Value);
            questionCommand.Parameters.AddWithValue("@studentLevel", request.StudentLevel ?? (object)DBNull.Value);
            questionCommand.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);

            var questionId = Convert.ToInt32(await questionCommand.ExecuteScalarAsync());

            // Generate AI response using Gemini
            string aiResponse;
            try
            {
                aiResponse = await CallGeminiAPI(
                    request.Question,
                    request.Subject,
                    request.StudentLevel,
                    request.ConversationHistory
                );
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error calling Gemini API");

                // Return user-friendly error message based on exception type
                if (ex is HttpRequestException)
                {
                    aiResponse = "I'm having trouble connecting to the AI service. Please check your internet connection and try again.";
                }
                else if (ex.Message.Contains("401") || ex.Message.Contains("403"))
                {
                    aiResponse = "The AI assistant is not configured properly. Please contact your administrator.";
                }
                else if (ex.Message.Contains("429"))
                {
                    aiResponse = "Too many questions at once! Please wait a moment before asking another question.";
                }
                else
                {
                    aiResponse = "I encountered an unexpected error. Please try rephrasing your question or try again later.";
                }
            }

            // Save the AI response to database
            var responseQuery = @"
                INSERT INTO AIResponses (QuestionId, Response, CreatedAt)
                VALUES (@questionId, @response, @createdAt);
                SELECT last_insert_rowid();";

            using var responseCommand = new SqliteCommand(responseQuery, connection);
            responseCommand.Parameters.AddWithValue("@questionId", questionId);
            responseCommand.Parameters.AddWithValue("@response", aiResponse);
            responseCommand.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);

            var responseId = Convert.ToInt32(await responseCommand.ExecuteScalarAsync());

            return Ok(new AIResponse
            {
                Id = responseId,
                QuestionId = questionId,
                Response = aiResponse,
                CreatedAt = DateTime.UtcNow
            });
        }

        [HttpGet("questions")]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions(
            [FromQuery] string? subject = null,
            [FromQuery] int? limit = 50)
        {
            var questions = new List<Question>();

            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Question, Subject, StudentLevel, CreatedAt FROM Questions WHERE 1=1";
            var parameters = new List<SqliteParameter>();

            if (!string.IsNullOrEmpty(subject))
            {
                query += " AND Subject = @subject";
                parameters.Add(new SqliteParameter("@subject", subject));
            }

            query += " ORDER BY CreatedAt DESC";

            if (limit.HasValue)
            {
                query += " LIMIT @limit";
                parameters.Add(new SqliteParameter("@limit", limit.Value));
            }

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddRange(parameters);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                questions.Add(new Question
                {
                    Id = reader.GetInt32(0),
                    QuestionText = reader.GetString(1),
                    Subject = reader.IsDBNull(2) ? null : reader.GetString(2),
                    StudentLevel = reader.IsDBNull(3) ? null : reader.GetString(3),
                    CreatedAt = reader.GetDateTime(4)
                });
            }

            return Ok(questions);
        }

        [HttpGet("responses/{questionId}")]
        public async Task<ActionResult<AIResponse>> GetResponse(int questionId)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, QuestionId, Response, CreatedAt FROM AIResponses WHERE QuestionId = @questionId ORDER BY CreatedAt DESC LIMIT 1";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@questionId", questionId);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                var response = new AIResponse
                {
                    Id = reader.GetInt32(0),
                    QuestionId = reader.GetInt32(1),
                    Response = reader.GetString(2),
                    CreatedAt = reader.GetDateTime(3)
                };

                return Ok(response);
            }

            return NotFound();
        }

        private async Task<string> CallGeminiAPI(
            string question,
            string? subject,
            string? studentLevel,
            List<ConversationMessage>? conversationHistory)
        {
            // Get configuration - prioritize environment variable for production
            var apiKey = Environment.GetEnvironmentVariable("GEMINI_API_KEY")
                         ?? _configuration["GeminiAPI:ApiKey"];
            var model = _configuration["GeminiAPI:Model"] ?? "gemini-2.5-flash";
            var endpointTemplate = _configuration["GeminiAPI:Endpoint"]
                ?? "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent";

            if (string.IsNullOrEmpty(apiKey) || apiKey == "YOUR_API_KEY_HERE")
            {
                throw new InvalidOperationException("Gemini API key not configured");
            }

            // Build the endpoint URL
            var endpoint = endpointTemplate.Replace("{model}", model);
            var fullUrl = $"{endpoint}?key={apiKey}";

            // Build the system prompt with context
            var systemPrompt = BuildSocraticPrompt(question, subject, studentLevel, conversationHistory);

            // Create Gemini request
            var geminiRequest = new GeminiRequest
            {
                Contents = new List<GeminiContent>
                {
                    new GeminiContent
                    {
                        Parts = new List<GeminiPart>
                        {
                            new GeminiPart { Text = systemPrompt }
                        }
                    }
                }
            };

            // Serialize request
            var jsonRequest = JsonSerializer.Serialize(geminiRequest, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });

            // Make HTTP request
            var httpClient = _httpClientFactory.CreateClient();
            httpClient.Timeout = TimeSpan.FromSeconds(30);

            var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync(fullUrl, content);

            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                _logger.LogError($"Gemini API error: {response.StatusCode} - {errorContent}");
                throw new HttpRequestException($"{response.StatusCode}");
            }

            // Parse response
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var geminiResponse = JsonSerializer.Deserialize<GeminiResponse>(jsonResponse, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });

            // Extract text from response
            var responseText = geminiResponse?.Candidates?[0]?.Content?.Parts?[0]?.Text;

            if (string.IsNullOrEmpty(responseText))
            {
                throw new InvalidOperationException("Empty response from Gemini API");
            }

            return responseText;
        }

        private string BuildSocraticPrompt(
            string question,
            string? subject,
            string? studentLevel,
            List<ConversationMessage>? conversationHistory)
        {
            var prompt = new StringBuilder();

            // System instructions
            prompt.AppendLine("You are a Socratic tutor for Mississippi K-12 students. Your role is to guide students to discover answers through questioning, not to provide direct answers.");
            prompt.AppendLine();
            prompt.AppendLine("CORE RULES:");
            prompt.AppendLine("1. **NEVER give direct answers** to homework or test questions. Your goal is to teach the *process* of solving the problem.");
            prompt.AppendLine("2. **Ask Guiding Questions:** Instead of giving the answer, ask a question that leads the student to the next step. Break down complex problems into smaller, manageable steps.");
            prompt.AppendLine("3. **Assess Understanding:** Start by asking what the student already knows or has tried. For example: 'What have you tried so far?' or 'What part is confusing you?'");
            prompt.AppendLine("4. **Provide Hints, Not Solutions:** If a student is stuck, provide a small hint or a similar, simpler example. Let the student make the final connection.");
            prompt.AppendLine("5. **Be Encouraging and Patient:** Use positive reinforcement. Phrases like 'That's a great start!' or 'You're on the right track!' are very effective. Celebrate their progress.");
            prompt.AppendLine("6. **Use the Socratic Method:** Guide the student through their own thought process. Ask 'why' and 'how' to encourage deeper thinking.");
            prompt.AppendLine("7. **Keep it Conversational:** Maintain a friendly, supportive, and patient tone. Respond in 2-4 paragraphs maximum to avoid overwhelming the student.");
            prompt.AppendLine();

            // Add context
            if (!string.IsNullOrEmpty(subject))
            {
                prompt.AppendLine($"SUBJECT CONTEXT: {subject}");
            }
            if (!string.IsNullOrEmpty(studentLevel))
            {
                prompt.AppendLine($"GRADE LEVEL: {studentLevel}");
            }
            prompt.AppendLine();

            // Add conversation history if available
            if (conversationHistory != null && conversationHistory.Any())
            {
                prompt.AppendLine("PREVIOUS CONVERSATION HISTORY:");
                foreach (var message in conversationHistory.TakeLast(10)) // Take the last 10 messages for context
                {
                    var role = message.Role == "user" ? "Student" : "Tutor"; // Use "Student" and "Tutor" for clarity
                    prompt.AppendLine($"{role}: {message.Content}");
                }
                prompt.AppendLine();
            }

            // Add current question
            prompt.AppendLine($"Student's current question: {question}");
            prompt.AppendLine();
            prompt.AppendLine("Respond with a helpful, encouraging Socratic response that guides learning:");

            return prompt.ToString();
        }
    }
}
