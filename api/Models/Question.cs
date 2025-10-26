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
