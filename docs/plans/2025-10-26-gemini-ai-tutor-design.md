# AI Tutoring Feature with Google Gemini - Design Document

**Date:** October 26, 2025
**Project:** Mississippi Quality Education Platform
**Feature:** Socratic AI Tutor Integration

---

## Executive Summary

This document outlines the design for integrating Google Gemini API (gemini-2.5-flash model) into the existing Mississippi K-12 education platform. The AI tutor will use Socratic methodology to guide students through learning rather than providing direct answers, aligning with Mississippi state curriculum standards.

## Project Context

- **Existing System:** .NET 8 Web API backend, vanilla JavaScript frontend, SQLite database
- **Current State:** AI Helper page exists with simulated responses
- **Goal:** Replace simulated responses with real Gemini API integration
- **Team Constraint:** Must work on all team members' local machines without machine-specific configurations

---

## Architecture Overview

### High-Level Design

We'll integrate Google Gemini API directly into the existing `AIHelperController` by replacing the `GenerateAIResponse()` method with real API calls to Gemini.

**Key Components:**
1. **Frontend (ai-helper.js)**: Modified to send conversation history (last 10 messages) with each request
2. **Backend (AIHelperController)**: Updated to call Gemini API with Socratic tutoring system prompt
3. **Configuration (appsettings.Development.json)**: New gitignored file containing Gemini API key
4. **Database**: New StudentProfiles table added with placeholder fields for future personalization

**Selected Model:** gemini-2.5-flash
- Fast response times suitable for real-time chat
- Cost-effective for educational use
- Sufficient capabilities for K-12 tutoring

### Socratic Prompting Strategy

The system prompt instructs Gemini to:
- Never provide direct answers to homework problems
- Ask guiding questions to lead students to discover answers
- Break complex problems into smaller steps
- Use analogies and examples appropriate to grade level
- Adapt difficulty based on student responses
- Reference Mississippi curriculum when relevant

---

## Data Models & Database Schema

### New Table: StudentProfiles

```sql
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
```

**Purpose:** Placeholder structure for future personalization features. No logic implemented initially.

### Updated Questions Table

```sql
ALTER TABLE Questions ADD COLUMN StudentId TEXT;
```

**Purpose:** Link questions to student profiles for future tracking.

### New C# Models

```csharp
public class StudentProfile
{
    public int Id { get; set; }
    public string StudentId { get; set; } = string.Empty;  // Anonymous identifier
    public string? GradeLevel { get; set; }
    public string? PreferredSubjects { get; set; }  // JSON array for future
    public string? StruggleTopics { get; set; }      // JSON array for future
    public string? LearningStyleNotes { get; set; }  // Placeholder for ML insights
    public int TotalInteractions { get; set; }
    public DateTime? LastActiveAt { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ConversationMessage
{
    public string Role { get; set; } = string.Empty;  // "user" or "assistant"
    public string Content { get; set; } = string.Empty;
}
```

### Updated Request Model

```csharp
public class AskQuestionRequest
{
    public string Question { get; set; } = string.Empty;
    public string? Subject { get; set; }
    public string? StudentLevel { get; set; }
    public List<ConversationMessage>? ConversationHistory { get; set; }  // NEW
}
```

### Frontend Context Model

```javascript
{
    question: "user's current question",
    subject: "STEM",
    studentLevel: "Grade 8",
    conversationHistory: [
        { role: "user", content: "previous question" },
        { role: "assistant", content: "previous response" },
        // ... up to last 10 messages
    ]
}
```

---

## Gemini API Integration

### API Configuration

- **Model:** gemini-2.5-flash
- **Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`
- **Authentication:** API Key in header
- **Request Method:** POST
- **Response Format:** JSON

### Configuration Storage

**File:** `api/appsettings.Development.json` (gitignored)

```json
{
  "GeminiAPI": {
    "ApiKey": "YOUR_API_KEY_HERE",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  }
}
```

**Team Setup Instructions:**
1. Each team member creates their own `appsettings.Development.json`
2. Obtains free Gemini API key from Google AI Studio
3. Adds key to configuration file
4. File is gitignored, so keys never committed

### System Prompt Template

```text
You are a Socratic tutor for Mississippi K-12 students. Your role is to guide students to discover answers through questioning, not to provide direct answers.

CORE RULES:
1. NEVER give direct answers to homework or test questions
2. Break complex problems into smaller guiding questions
3. Ask what the student already knows before explaining
4. Use examples and analogies appropriate for {gradeLevel}
5. Celebrate progress and encourage critical thinking
6. If student is stuck, provide hints but not solutions
7. Keep responses conversational and encouraging
8. Adapt complexity to the student's grade level

SUBJECT CONTEXT: {subject}
GRADE LEVEL: {studentLevel}

Previous conversation context:
{conversationHistory}

Student's current question: {question}

Respond with a helpful, encouraging Socratic response that guides learning. Be concise (2-4 paragraphs max).
```

### Request Flow

1. **Frontend** sends POST to `/api/AIHelper/ask` with:
   - Current question
   - Subject/grade metadata
   - Last 10 conversation messages

2. **Backend** processes:
   - Builds full prompt from template
   - Injects conversation history
   - Calls Gemini API via HttpClient
   - Parses JSON response
   - Saves question and response to database
   - Returns response to frontend

3. **Frontend** displays:
   - Adds AI response to chat
   - Updates conversation history array
   - Maintains scroll position

### Error Handling

| Error Type | Handling Strategy |
|------------|------------------|
| API Timeout (>30s) | Return friendly message: "I'm having trouble connecting, please try again" |
| Rate Limit (429) | Return: "Too many questions at once, please wait a moment" |
| Invalid API Key (401) | Log error, return: "AI assistant is not configured properly" |
| Network Error | Return: "Unable to reach AI service, check your connection" |
| Empty/Invalid Response | Return: "I couldn't generate a response, please rephrase your question" |

---

## Implementation Changes

### Files to Modify

#### 1. `api/Controllers/AIHelperController.cs`

**Changes:**
- Add `IHttpClientFactory` dependency injection
- Add configuration for Gemini API settings
- Replace `GenerateAIResponse()` with `CallGeminiAPI()` method
- Update `AskQuestion` endpoint to accept `ConversationHistory`
- Add error handling for API failures
- Add request/response logging for debugging

**Key Methods:**
```csharp
private async Task<string> CallGeminiAPI(
    string question,
    string? subject,
    string? studentLevel,
    List<ConversationMessage>? history)
{
    // Build prompt from template
    // Make HTTP POST to Gemini
    // Parse response
    // Return text
}
```

#### 2. `frontend/scripts/ai-helper.js`

**Changes:**
- Modify `sendMessage()` to build conversation history
- Limit history to last 10 messages (5 exchanges)
- Format history as array of `{role, content}` objects
- Update fetch payload to include `conversationHistory`
- Handle new error response formats

**Key Logic:**
```javascript
async sendMessage() {
    // Build history from last 10 messages in chatHistory array
    const history = this.chatHistory.slice(-10).map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
    }));

    // Send with history
    const response = await fetch('/api/AIHelper/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question: message,
            subject: 'General',  // Could be enhanced later
            studentLevel: 'K-12',
            conversationHistory: history
        })
    });
}
```

#### 3. `api/Models/Question.cs`

**Changes:**
- Add `ConversationMessage` class
- Update `AskQuestionRequest` to include `ConversationHistory` property

### New Files to Create

#### 1. `api/appsettings.Development.json`

**Purpose:** Store Gemini API configuration (gitignored)

```json
{
  "GeminiAPI": {
    "ApiKey": "YOUR_API_KEY_HERE",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  }
}
```

#### 2. `api/database-migrations/add-student-profiles.sql`

**Purpose:** Database migration script for new features

```sql
-- Create StudentProfiles table
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

-- Add StudentId to Questions table
ALTER TABLE Questions ADD COLUMN StudentId TEXT;
```

#### 3. `.gitignore` update

**Add:**
```
appsettings.Development.json
api/appsettings.Development.json
```

#### 4. `docs/TEAM_SETUP.md`

**Purpose:** Instructions for team members to set up their local environment

```markdown
# Team Setup Instructions

## Google Gemini API Setup

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key"
4. Copy the generated API key

## Local Configuration

1. Create file: `api/appsettings.Development.json`
2. Add this content:
   ```json
   {
     "GeminiAPI": {
       "ApiKey": "PASTE_YOUR_API_KEY_HERE",
       "Model": "gemini-2.5-flash",
       "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
     }
   }
   ```
3. Save file (it's gitignored, won't be committed)

## Database Migration

Run the migration script:
```bash
sqlite3 api/database.db < api/database-migrations/add-student-profiles.sql
```

## Test the Integration

1. Start the API: `cd api && dotnet run`
2. Open `index.html` in browser
3. Navigate to AI Helper page
4. Ask a test question
5. Verify you get a Socratic-style response from Gemini
```

---

## Curriculum Alignment (Future Enhancement)

### Phase 1 (Current Design): Basic Integration
- ✅ Socratic tutoring behavior via system prompt
- ✅ Context-aware responses using conversation history
- ✅ Grade level awareness in prompts
- ✅ Subject tagging (STEM, History, English)

### Phase 2 (Future): Placeholder Structures
- ✅ StudentProfiles database table (structure only)
- ⏸️ No learning profile logic implemented yet
- ⏸️ No curriculum standard mapping yet
- ⏸️ No adaptive difficulty adjustment yet

### Phase 3 (Not in Scope): Full Personalization
- ❌ ML-based learning style detection
- ❌ Mississippi standards alignment
- ❌ Progress tracking and analytics
- ❌ Adaptive questioning based on student history

**Note:** Phase 2 and 3 features have placeholder database structures but no implementation.

---

## Testing Strategy

### Manual Testing Checklist

1. **Basic Functionality:**
   - [ ] AI responds to math questions with guiding questions
   - [ ] AI responds to history questions with context-building questions
   - [ ] AI responds to English questions with analytical questions
   - [ ] Responses do not contain direct answers

2. **Context Handling:**
   - [ ] AI references previous messages in conversation
   - [ ] Follow-up questions build on prior context
   - [ ] Context resets when starting new conversation

3. **Error Scenarios:**
   - [ ] Graceful handling when API key is invalid
   - [ ] Timeout errors show user-friendly message
   - [ ] Rate limit errors handled appropriately
   - [ ] Network errors display helpful message

4. **Cross-Team Compatibility:**
   - [ ] Works on Windows, Mac, Linux
   - [ ] Each team member can use their own API key
   - [ ] No hardcoded paths or machine-specific config

### Sample Test Questions

**STEM:**
- "What's the answer to 3x + 5 = 14?" (Should guide, not answer)
- "How do I solve quadratic equations?" (Should break down steps)

**History:**
- "What caused the Civil War?" (Should ask what they already know)
- "Tell me about Reconstruction" (Should use guiding questions)

**English:**
- "What's a thesis statement?" (Should guide discovery)
- "How do I analyze a poem?" (Should teach process, not analyze)

---

## Security & Privacy Considerations

### Data Privacy
- No personal identifying information stored
- StudentId is anonymous/pseudonymous identifier
- Conversation history stored in database (consider retention policy)
- FERPA compliance: No names, addresses, SSNs in system

### API Key Security
- Keys stored in gitignored config files
- Never committed to repository
- Each developer uses their own key
- Production: Use environment variables or Azure Key Vault

### Rate Limiting
- Google Gemini free tier: 15 requests/minute
- Consider implementing client-side rate limiting
- Show friendly message when limit reached

---

## Deployment Notes

### Development Environment
- Each team member needs their own Gemini API key
- Configuration in `appsettings.Development.json` (gitignored)
- Database migrations run manually during setup

### Production Environment (Future)
- Store API key in environment variables or secrets manager
- Consider upgrading to paid Gemini tier for higher rate limits
- Implement request queuing if traffic is high
- Add monitoring/logging for API failures

---

## Success Criteria

This implementation will be considered successful when:

1. ✅ AI responds to student questions with Socratic guidance (not direct answers)
2. ✅ Conversation context is maintained across multiple messages
3. ✅ Responses are grade-appropriate and subject-aware
4. ✅ Error handling provides helpful messages to students
5. ✅ All team members can run the system locally with their own API keys
6. ✅ No machine-specific configurations required
7. ✅ Database structure ready for future personalization features

---

## Future Enhancements (Out of Scope)

These features have placeholder structures but are NOT implemented:

- Student learning profile tracking and analytics
- Mississippi curriculum standard alignment and tagging
- Adaptive difficulty based on student performance
- Progress dashboards for students/teachers
- Personalized learning path recommendations
- Integration with existing school systems

---

## Questions & Decisions Log

| Question | Decision | Rationale |
|----------|----------|-----------|
| Which Gemini model? | gemini-2.5-flash | Fast, cost-effective, sufficient for K-12 |
| API key storage? | appsettings.Development.json | Standard .NET approach, gitignored |
| Personalization level? | Database schema only | Placeholder for future, no logic yet |
| Context strategy? | Send last 10 messages | Simple, works across refreshes |
| Architecture approach? | Direct integration | Simplest MVP, minimal code changes |

---

## Document History

- **2025-10-26:** Initial design document created
- Design validated through brainstorming process
- Ready for implementation phase
