namespace QualityEducationAPI.Models
{
    public class Resource
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string EstimatedTime { get; set; } = string.Empty;
        public string? ContentUrl { get; set; }
        public string SchoolLevel { get; set; } = string.Empty;
        public string Grade { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    public class CreateResourceRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string EstimatedTime { get; set; } = string.Empty;
        public string? ContentUrl { get; set; }
        public string SchoolLevel { get; set; } = string.Empty;
        public string Grade { get; set; } = string.Empty;
    }
}
