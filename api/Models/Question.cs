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

    public class AskQuestionRequest
    {
        public string Question { get; set; } = string.Empty;
        public string? Subject { get; set; }
        public string? StudentLevel { get; set; }
    }

    public class AIResponseRequest
    {
        public int QuestionId { get; set; }
        public string Response { get; set; } = string.Empty;
    }
}
