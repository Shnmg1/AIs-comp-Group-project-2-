namespace QualityEducationAPI.Models
{
    public class Certification
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Requirements { get; set; } = string.Empty;
        public string EstimatedTime { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string Provider { get; set; } = string.Empty;
        public string Validity { get; set; } = string.Empty;
        public string Cost { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    public class CreateCertificationRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Requirements { get; set; } = string.Empty;
        public string EstimatedTime { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string Provider { get; set; } = string.Empty;
        public string Validity { get; set; } = string.Empty;
        public string Cost { get; set; } = string.Empty;
    }
}
