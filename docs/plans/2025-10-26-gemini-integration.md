# Google Gemini AI Tutor Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace simulated AI responses with real Google Gemini API integration using gemini-2.5-flash model for Socratic tutoring.

**Architecture:** Direct integration into existing AIHelperController. Frontend sends conversation history (last 10 messages) with each request. Backend builds Socratic system prompt, calls Gemini API, saves response to database.

**Tech Stack:** .NET 8 Web API, HttpClient, SQLite, Vanilla JavaScript, Google Gemini API (gemini-2.5-flash)

---

## Prerequisites

**Required:**
- Google Gemini API key (free from https://aistudio.google.com/app/apikey)
- SQLite3 installed on your system
- .NET 8 SDK installed

---

## Task 1: Update .gitignore and Create Configuration Template

**Files:**
- Modify: `.gitignore`
- Create: `api/appsettings.Development.json.template`
- Create: `docs/TEAM_SETUP.md`

**Step 1: Add appsettings.Development.json to .gitignore**

Open `.gitignore` and add these lines at the end:

```gitignore
# Development settings with API keys
appsettings.Development.json
api/appsettings.Development.json
```

**Step 2: Create configuration template**

Create file: `api/appsettings.Development.json.template`

```json
{
  "GeminiAPI": {
    "ApiKey": "YOUR_API_KEY_HERE",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

**Step 3: Create team setup instructions**

Create file: `docs/TEAM_SETUP.md`

```markdown
# Team Setup Instructions - Google Gemini AI Integration

## Step 1: Get Your Google Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key (starts with "AIza...")

## Step 2: Create Local Configuration File

1. Navigate to the `api/` folder in the project
2. Copy `appsettings.Development.json.template` to `appsettings.Development.json`
3. Open `appsettings.Development.json`
4. Replace `YOUR_API_KEY_HERE` with your actual API key
5. Save the file

**Example:**
```json
{
  "GeminiAPI": {
    "ApiKey": "AIzaSyABC123...your-actual-key",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  }
}
```

**IMPORTANT:** Never commit `appsettings.Development.json` to git! It's in .gitignore to protect your API key.

## Step 3: Run Database Migration

From the project root directory, run:

```bash
sqlite3 api/database.db < api/database-migrations/add-student-profiles.sql
```

## Step 4: Test the Integration

1. Start the API:
   ```bash
   cd api
   dotnet run
   ```

2. Open `index.html` in your browser

3. Navigate to "AI Helper" page

4. Ask a test question: "How do I solve 2x + 5 = 15?"

5. Verify you get a Socratic-style response (guiding questions, not direct answer)

## Troubleshooting

**Error: "AI assistant is not configured properly"**
- Check your API key is correctly pasted in `appsettings.Development.json`
- Verify the file is in the `api/` folder
- Make sure there are no extra spaces in the API key

**Error: "Unable to reach AI service"**
- Check your internet connection
- Verify the Gemini API endpoint is not blocked by firewall

**Error: Database migration fails**
- Make sure `api/database.db` exists
- Check you're running the command from the project root directory
```

**Step 4: Verify changes**

Run:
```bash
git status
```

Expected: Shows `.gitignore` as modified, new files not yet staged

**Step 5: Commit**

```bash
git add .gitignore api/appsettings.Development.json.template docs/TEAM_SETUP.md
git commit -m "chore: add Gemini API configuration template and setup docs"
```

---

## Task 2: Create Database Migration

**Files:**
- Create: `api/database-migrations/add-student-profiles.sql`

**Step 1: Create migrations directory**

```bash
mkdir -p api/database-migrations
```

**Step 2: Create migration SQL file**

Create file: `api/database-migrations/add-student-profiles.sql`

```sql
-- Migration: Add StudentProfiles table for future personalization
-- Date: 2025-10-26

-- Create StudentProfiles table (placeholder for future features)
CREATE TABLE IF NOT EXISTS StudentProfiles (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    StudentId TEXT NOT NULL UNIQUE,
    GradeLevel TEXT,
    PreferredSubjects TEXT,
    StruggleTopics TEXT,
    LearningStyleNotes TEXT,
    TotalInteractions INTEGER DEFAULT 0,
    LastActiveAt DATETIME,
    CreatedAt DATETIME NOT NULL
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_student_id ON StudentProfiles(StudentId);

-- Add StudentId column to Questions table (if not exists)
-- Note: SQLite doesn't have "ADD COLUMN IF NOT EXISTS", so we'll check first
-- This is safe to run multiple times

PRAGMA table_info(Questions);

-- If the column doesn't exist, this will add it
-- If it does exist, SQLite will throw an error but continue
ALTER TABLE Questions ADD COLUMN StudentId TEXT;

-- Verify tables created
SELECT 'StudentProfiles table created' as status;
SELECT 'Migration complete' as status;
```

**Step 3: Run migration**

From project root:

```bash
sqlite3 api/database.db < api/database-migrations/add-student-profiles.sql
```

Expected output:
```
status
StudentProfiles table created
status
Migration complete
```

**Step 4: Verify migration succeeded**

```bash
sqlite3 api/database.db "SELECT name FROM sqlite_master WHERE type='table' AND name='StudentProfiles';"
```

Expected: Returns "StudentProfiles"

**Step 5: Commit**

```bash
git add api/database-migrations/add-student-profiles.sql
git commit -m "feat: add StudentProfiles table for future personalization"
```

---

## Task 3: Update Models for Conversation History

**Files:**
- Modify: `api/Models/Question.cs`

**Step 1: Open Question.cs**

Open: `api/Models/Question.cs`

**Step 2: Add ConversationMessage class and update AskQuestionRequest**

Replace the entire file content with:

```csharp
namespace QualityEducationAPI.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionText { get; set; } = string.Empty;
        public string? Subject { get; set; }
        public string? StudentLevel { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class AIResponse
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Response { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    public class ConversationMessage
    {
        public string Role { get; set; } = string.Empty;  // "user" or "assistant"
        public string Content { get; set; } = string.Empty;
    }

    public class AskQuestionRequest
    {
        public string Question { get; set; } = string.Empty;
        public string? Subject { get; set; }
        public string? StudentLevel { get; set; }
        public List<ConversationMessage>? ConversationHistory { get; set; }  // NEW: Conversation context
    }

    public class AIResponseRequest
    {
        public int QuestionId { get; set; }
        public string Response { get; set; } = string.Empty;
    }

    // NEW: Gemini API models
    public class GeminiRequest
    {
        public List<GeminiContent> Contents { get; set; } = new();
    }

    public class GeminiContent
    {
        public List<GeminiPart> Parts { get; set; } = new();
    }

    public class GeminiPart
    {
        public string Text { get; set; } = string.Empty;
    }

    public class GeminiResponse
    {
        public List<GeminiCandidate>? Candidates { get; set; }
    }

    public class GeminiCandidate
    {
        public GeminiContent? Content { get; set; }
    }
}
```

**Step 3: Verify code compiles**

```bash
cd api
dotnet build
```

Expected: "Build succeeded. 0 Warning(s). 0 Error(s)"

**Step 4: Commit**

```bash
git add api/Models/Question.cs
git commit -m "feat: add conversation history and Gemini API models"
```

---

## Task 4: Update AIHelperController with Gemini Integration

**Files:**
- Modify: `api/Controllers/AIHelperController.cs`

**Step 1: Open AIHelperController.cs**

Open: `api/Controllers/AIHelperController.cs`

**Step 2: Replace entire file with Gemini integration**

Replace ALL content in `api/Controllers/AIHelperController.cs` with:

```csharp
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
            // Get configuration
            var apiKey = _configuration["GeminiAPI:ApiKey"];
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
            prompt.AppendLine("1. NEVER give direct answers to homework or test questions");
            prompt.AppendLine("2. Break complex problems into smaller guiding questions");
            prompt.AppendLine("3. Ask what the student already knows before explaining");
            prompt.AppendLine("4. Use examples and analogies appropriate for the grade level");
            prompt.AppendLine("5. Celebrate progress and encourage critical thinking");
            prompt.AppendLine("6. If student is stuck, provide hints but not solutions");
            prompt.AppendLine("7. Keep responses conversational and encouraging");
            prompt.AppendLine("8. Respond in 2-4 paragraphs maximum");
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
                prompt.AppendLine("Previous conversation context:");
                foreach (var message in conversationHistory.TakeLast(10))
                {
                    var role = message.Role == "user" ? "Student" : "Tutor";
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
```

**Step 3: Verify code compiles**

```bash
cd api
dotnet build
```

Expected: "Build succeeded. 0 Warning(s). 0 Error(s)"

If you get errors about HttpClientFactory, continue to next task to register it.

**Step 4: Commit**

```bash
git add api/Controllers/AIHelperController.cs
git commit -m "feat: integrate Google Gemini API for Socratic tutoring"
```

---

## Task 5: Register HttpClientFactory in Program.cs

**Files:**
- Modify: `api/Program.cs`

**Step 1: Open Program.cs**

Open: `api/Program.cs`

**Step 2: Add HttpClient registration**

Find the line that says `builder.Services.AddControllers();` and add this line RIGHT AFTER it:

```csharp
builder.Services.AddHttpClient();
```

Your Program.cs should look similar to this around that section:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddHttpClient();  // ADD THIS LINE

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
```

**Step 3: Verify code compiles**

```bash
cd api
dotnet build
```

Expected: "Build succeeded. 0 Warning(s). 0 Error(s)"

**Step 4: Commit**

```bash
git add api/Program.cs
git commit -m "feat: register HttpClientFactory for Gemini API calls"
```

---

## Task 6: Update Frontend to Send Conversation History

**Files:**
- Modify: `frontend/scripts/ai-helper.js`

**Step 1: Open ai-helper.js**

Open: `frontend/scripts/ai-helper.js`

**Step 2: Update the sendMessage() method**

Find the `async sendMessage()` method (starts around line 151) and replace it with:

```javascript
async sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message || this.isTyping) return;

  // Add user message to chat
  this.addMessage(message, 'user');
  input.value = '';

  // Show typing indicator
  this.showTypingIndicator();

  try {
    // Build conversation history from last 10 messages
    const conversationHistory = this.chatHistory.slice(-10).map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    // Call the real API
    const response = await fetch('/api/AIHelper/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: message,
        subject: 'General',  // TODO: Could detect subject from question
        studentLevel: 'K-12',  // TODO: Could get from user profile
        conversationHistory: conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Remove typing indicator and add AI response
    this.hideTypingIndicator();
    this.addMessage(data.response, 'ai');

  } catch (error) {
    console.error('Error getting AI response:', error);
    this.hideTypingIndicator();
    this.addMessage('I apologize, but I encountered an error. Please try again.', 'ai');
  }
}
```

**Step 3: Remove or comment out the old simulateAIResponse method**

Find the `async simulateAIResponse(userMessage)` method (starts around line 214) and either:
- Delete it entirely, OR
- Comment it out by adding `/*` before it and `*/` after it

**Step 4: Verify there are no syntax errors**

Open the browser's developer console (F12) and check for JavaScript errors.

**Step 5: Commit**

```bash
git add frontend/scripts/ai-helper.js
git commit -m "feat: update frontend to send conversation history to Gemini API"
```

---

## Task 7: Create Your Personal Configuration File

**Files:**
- Create: `api/appsettings.Development.json` (NOT committed to git)

**Step 1: Get your Gemini API key**

1. Open browser and go to: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key" button
4. Copy the API key (starts with "AIza...")

**Step 2: Create your personal config file**

Copy the template:

```bash
cp api/appsettings.Development.json.template api/appsettings.Development.json
```

**Step 3: Add your API key**

Open `api/appsettings.Development.json` and replace `YOUR_API_KEY_HERE` with your actual API key:

```json
{
  "GeminiAPI": {
    "ApiKey": "AIzaSyABC123...YOUR-ACTUAL-KEY-HERE",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

**Step 4: Verify file is gitignored**

```bash
git status
```

Expected: Should NOT show `appsettings.Development.json` in the list
(It should be ignored because of the .gitignore entry)

**Step 5: No commit needed** (file is gitignored)

---

## Task 8: Test the Integration End-to-End

**Step 1: Start the API**

```bash
cd api
dotnet run
```

Expected output should include:
```
Now listening on: http://localhost:5000
```

**Step 2: Open the application**

Open your browser and navigate to the `index.html` file (or http://localhost:5000 if serving it)

**Step 3: Go to AI Helper page**

Click on "AI Helper" in the navigation menu

**Step 4: Test with a math question**

Type in the chat: "What's the answer to 3x + 5 = 14?"

Expected: AI should respond with guiding questions like:
- "Let's work through this together! First, what operation is happening to x?"
- NOT: "x = 3"

**Step 5: Test conversation context**

After getting a response, ask a follow-up: "How do I isolate x?"

Expected: AI should reference the previous equation and build on the conversation

**Step 6: Test error handling**

Stop the API (Ctrl+C), then try to send a message.

Expected: Should show error message about connection problems

**Step 7: Check database**

Verify questions and responses are being saved:

```bash
sqlite3 api/database.db "SELECT Question, Response FROM Questions q JOIN AIResponses r ON q.Id = r.QuestionId ORDER BY q.CreatedAt DESC LIMIT 1;"
```

Expected: Shows your question and the AI's response

**Step 8: Test with invalid API key**

1. Edit `api/appsettings.Development.json`
2. Change API key to "INVALID_KEY"
3. Restart API (dotnet run)
4. Try asking a question

Expected: Should show user-friendly error "AI assistant is not configured properly"

5. Change API key back to your real key
6. Restart API

---

## Task 9: Final Verification and Documentation Update

**Step 1: Run full test suite**

Test these scenarios:

- [ ] Math question gets Socratic response (no direct answer)
- [ ] History question gets context-building questions
- [ ] English/grammar question gets analytical guidance
- [ ] Follow-up questions reference previous context
- [ ] Conversation maintains context across multiple exchanges
- [ ] Error messages are user-friendly (test with invalid key)
- [ ] Database saves all questions and responses
- [ ] Multiple conversations can happen (refresh page, start new chat)

**Step 2: Update README with new feature**

Open `README.md` and add a section about the AI Helper feature (if not already there):

```markdown
## AI Helper Feature

The AI Helper uses Google Gemini API to provide Socratic tutoring for K-12 students.

### Features
- Socratic teaching method (guides, doesn't give direct answers)
- Maintains conversation context
- Grade-level appropriate responses
- Covers STEM, History, and English subjects

### Setup
See [docs/TEAM_SETUP.md](docs/TEAM_SETUP.md) for configuration instructions.
```

**Step 3: Create a summary of changes**

Create file: `docs/GEMINI_INTEGRATION_COMPLETE.md`

```markdown
# Gemini Integration - Completion Summary

## What Was Changed

### Backend (.NET API)
- **AIHelperController.cs**: Replaced simulated responses with real Gemini API calls
- **Question.cs**: Added ConversationMessage model and conversation history support
- **Program.cs**: Registered HttpClientFactory for API calls
- **Database**: Added StudentProfiles table (placeholder for future features)

### Frontend (JavaScript)
- **ai-helper.js**: Updated to send last 10 messages as conversation context
- Removed simulated response function
- Now calls real `/api/AIHelper/ask` endpoint with history

### Configuration
- **appsettings.Development.json**: Team members create their own (gitignored)
- **appsettings.Development.json.template**: Template for team setup
- **.gitignore**: Added to prevent committing API keys

### Documentation
- **docs/TEAM_SETUP.md**: Step-by-step setup instructions
- **docs/plans/2025-10-26-gemini-ai-tutor-design.md**: Full design document
- **docs/plans/2025-10-26-gemini-integration.md**: This implementation plan

## How It Works

1. Student asks question in AI Helper chat
2. Frontend sends question + last 10 messages to backend
3. Backend builds Socratic system prompt with conversation context
4. Backend calls Google Gemini API (gemini-2.5-flash model)
5. Gemini responds with guiding questions (not direct answers)
6. Backend saves question and response to database
7. Frontend displays AI response in chat

## For Team Members

Each team member needs to:
1. Get their own free Gemini API key from https://aistudio.google.com/app/apikey
2. Follow instructions in `docs/TEAM_SETUP.md`
3. Create their own `api/appsettings.Development.json` file
4. Never commit their API key to git (it's gitignored)

## Future Enhancements (Not Implemented)

The database has placeholder structures for:
- Student learning profiles
- Personalized difficulty adjustment
- Mississippi curriculum alignment
- Progress tracking

These are NOT implemented yet, just placeholder tables for future work.

## Testing

See Task 8 in the implementation plan for full testing checklist.

Key test: Ask "What's the answer to 3x + 5 = 14?"
- ✅ Good: AI asks guiding questions about isolating variables
- ❌ Bad: AI directly says "x = 3"
```

**Step 4: Commit final documentation**

```bash
git add README.md docs/GEMINI_INTEGRATION_COMPLETE.md
git commit -m "docs: add Gemini integration completion summary and README update"
```

**Step 5: Push to remote (if ready to share)**

```bash
git push origin Shane
```

---

## Completion Checklist

Before considering this task complete, verify:

- [ ] All commits made successfully
- [ ] API compiles without errors (`dotnet build`)
- [ ] API runs without crashes (`dotnet run`)
- [ ] Frontend JavaScript has no syntax errors (check browser console)
- [ ] Gemini API integration works (get real responses)
- [ ] Responses follow Socratic method (guiding questions, not answers)
- [ ] Conversation context maintained across messages
- [ ] Error handling works (tested with invalid API key)
- [ ] Database saves questions and responses
- [ ] Team setup documentation is clear and complete
- [ ] No API keys committed to git
- [ ] All team members can follow TEAM_SETUP.md to configure locally

---

## Troubleshooting Guide

### Issue: "Build failed" errors

**Solution:**
- Check you're in the `api/` folder when running `dotnet build`
- Verify all using statements are present at top of files
- Check for typos in class/method names

### Issue: API returns 500 error

**Solution:**
- Check API logs in terminal where you ran `dotnet run`
- Verify `appsettings.Development.json` exists in `api/` folder
- Check API key is valid (not "YOUR_API_KEY_HERE")
- Verify database.db file exists

### Issue: "Connection string not found"

**Solution:**
- Check `appsettings.json` has ConnectionStrings section
- Verify database.db exists in api/ folder
- Check file path in connection string is correct: "Data Source=./database.db"

### Issue: Frontend shows "I apologize, but I encountered an error"

**Solution:**
- Open browser console (F12) and check for error messages
- Verify API is running (should see "Now listening on..." message)
- Check API logs for error details
- Verify fetch URL matches your API endpoint

### Issue: Gemini returns "401 Unauthorized"

**Solution:**
- Verify API key is correct in appsettings.Development.json
- Check there are no extra spaces before/after the API key
- Verify API key hasn't expired or been revoked
- Generate a new API key if needed

### Issue: Database migration fails

**Solution:**
- Check you're running command from project root (not api/ folder)
- Verify sqlite3 is installed: `sqlite3 --version`
- Check database.db file has write permissions
- Try running migration commands one at a time

### Issue: Team member can't get it working

**Solution:**
- Have them follow TEAM_SETUP.md step by step
- Verify they created appsettings.Development.json (not .template)
- Check their API key is valid (test at https://aistudio.google.com)
- Verify they ran database migration
- Check .gitignore is working (`git status` shouldn't show their config file)

---

## Next Steps (Future Features)

The following features have database structures but NO implementation:

1. **Student Profiles**: Track individual student learning patterns
2. **Personalization**: Adapt responses based on student history
3. **Curriculum Mapping**: Tag questions with Mississippi state standards
4. **Progress Tracking**: Show improvement over time
5. **Analytics Dashboard**: Visualize common struggle points

These will require additional implementation work beyond this plan.
