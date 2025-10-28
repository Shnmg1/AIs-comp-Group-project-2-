using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AIHelperController : ControllerBase
    {
        private readonly string _connectionString;

        public AIHelperController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpPost("ask")]
        public async Task<ActionResult<AIResponse>> AskQuestion(AskQuestionRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            // First, save the question
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

            // Generate AI response (simplified version - in production, this would integrate with a real AI service)
            var aiResponse = GenerateAIResponse(request.Question, request.Subject, request.StudentLevel);

            // Save the AI response
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
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions([FromQuery] string? subject = null, [FromQuery] int? limit = 50)
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

        private string GenerateAIResponse(string question, string? subject, string? studentLevel)
        {
            // This is a simplified AI response generator
            // In a real implementation, this would integrate with OpenAI, Azure OpenAI, or another AI service
            
            var questionLower = question.ToLower();
            
            // Check if this is a tutor prompt (contains pedagogical instructions)
            if (questionLower.Contains("you are an ai tutor") || questionLower.Contains("important guidelines"))
            {
                return GenerateTutorResponse(question, subject, studentLevel);
            }
            
            if (questionLower.Contains("algebra") || questionLower.Contains("math") || questionLower.Contains("equation"))
            {
                return @"I'd be happy to help you with algebra! Let's break this down step by step.

First, can you tell me what specific algebraic concept you're working with? For example:
- Are you solving linear equations?
- Working with quadratic equations?
- Simplifying expressions?

Once I know the specific problem, I can guide you through the process rather than just giving you the answer. This way, you'll learn the method and be able to solve similar problems on your own!

What's the specific equation or problem you're looking at?";
            }
            
            if (questionLower.Contains("history") || questionLower.Contains("civil war") || questionLower.Contains("historical"))
            {
                return @"Great question about history! I love helping students understand historical events and their significance.

To give you the best guidance, could you be more specific about what historical topic you'd like to explore? For example:
- Are you studying a particular war or conflict?
- Looking at social movements like the Civil Rights Movement?
- Analyzing causes and effects of historical events?

I can help you:
- Understand the context and background
- Identify key figures and their roles
- Analyze cause-and-effect relationships
- Develop critical thinking about historical significance

What specific historical topic or question are you working on?";
            }
            
            if (questionLower.Contains("english") || questionLower.Contains("grammar") || questionLower.Contains("writing") || questionLower.Contains("essay"))
            {
                return @"I'm excited to help you with English! Whether it's grammar, writing, or literature analysis, I'm here to guide your learning.

Could you tell me more about what you need help with? For example:
- Grammar and punctuation rules?
- Essay structure and organization?
- Literary analysis techniques?
- Reading comprehension strategies?

My approach is to help you understand the underlying principles so you can apply them to future work. I'll ask guiding questions and provide step-by-step explanations rather than just correcting your work.

What specific English concept or assignment are you working on?";
            }
            
            if (questionLower.Contains("help") || questionLower.Contains("don't understand") || questionLower.Contains("confused"))
            {
                return @"I'm here to help you understand! Learning can be challenging, but breaking things down step by step makes it much easier.

To give you the most helpful guidance, could you share:
1. What subject you're working on (English, History, or STEM)
2. The specific concept or problem you're struggling with
3. What you've tried so far (if anything)

Remember, it's completely normal to feel confused when learning something new. The key is to take it one step at a time and ask questions along the way!

What would you like to work on together?";
            }
            
            // Default response
            return @"That's an interesting question! I'd love to help you work through this step by step.

To provide you with the most helpful guidance, could you give me a bit more detail about:
- What subject this relates to (English, History, or STEM)
- The specific problem or concept you're working with
- What you already understand about the topic

I believe in helping you learn the process and reasoning behind solutions, not just giving you the answers. This way, you'll be able to tackle similar problems independently in the future!

What additional details can you share about your question?";
        }

        private string GenerateTutorResponse(string tutorPrompt, string? subject, string? studentLevel)
        {
            // Extract the student's actual question from the tutor prompt
            var lines = tutorPrompt.Split('\n');
            var studentQuestion = lines.LastOrDefault(line => line.StartsWith("Student's new question:"))?.Replace("Student's new question:", "").Trim() ?? "";
            
            if (string.IsNullOrEmpty(studentQuestion))
            {
                return @"I'm here to help you learn! Could you tell me what specific topic or problem you'd like to work on? I'll guide you through understanding the concepts step by step rather than just giving you the answer.";
            }

            var questionLower = studentQuestion.ToLower();
            
            // Generate pedagogical responses based on subject
            if (questionLower.Contains("quadratic") || questionLower.Contains("equation"))
            {
                return @"Great question about quadratic equations! Let's work through this together.

First, let me ask you some guiding questions:
1. Do you know what makes an equation 'quadratic'? What's the highest power of the variable?
2. Have you seen the standard form of a quadratic equation before?
3. What methods do you know for solving quadratics?

Instead of just showing you the answer, let's start with the basics. Can you tell me what you already know about quadratic equations? This will help me guide you to the solution step by step!";
            }
            
            if (questionLower.Contains("photosynthesis"))
            {
                return @"Excellent question about photosynthesis! This is a fundamental process in biology.

Let's break this down together:
1. What do you think plants need to make their own food?
2. Where do you think this process happens in the plant?
3. What do you know about sunlight and its role in plant growth?

I'll help you understand the process, but first, let's see what you already know. Can you tell me what you think photosynthesis is, in your own words? Then I can guide you through the scientific explanation step by step!";
            }
            
            if (questionLower.Contains("fraction"))
            {
                return @"Fractions can be tricky! Let's work through this together.

First, let me understand what you're working with:
1. Are you adding, subtracting, multiplying, or dividing fractions?
2. Do you know what the numerator and denominator represent?
3. Have you worked with equivalent fractions before?

Instead of just giving you the answer, let's start with what you know. Can you show me the fraction problem you're working on? I'll guide you through the steps to solve it yourself!";
            }
            
            if (questionLower.Contains("essay") || questionLower.Contains("write"))
            {
                return @"Writing essays is a skill that takes practice! I'm here to help you develop your writing abilities.

Let's start with some questions:
1. What type of essay are you writing? (persuasive, informative, narrative?)
2. Do you have a topic or prompt to work with?
3. What's the main point you want to make?

I won't write the essay for you, but I can help you:
- Organize your ideas
- Develop a strong thesis statement
- Structure your paragraphs
- Improve your arguments

What's your essay topic or prompt? Let's work through the planning process together!";
            }
            
            // Default pedagogical response
            return @"That's a great question! I'm excited to help you learn.

To give you the best guidance, could you tell me:
1. What subject area this relates to?
2. What specific part are you struggling with?
3. What have you tried so far?

Remember, I'm here to teach you HOW to think through problems, not just give you answers. This way, you'll be able to solve similar problems on your own in the future!

What additional details can you share about what you're working on?";
        }
    }
}
