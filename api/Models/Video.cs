namespace QualityEducationAPI.Models
{
    public class Video
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string Instructor { get; set; } = string.Empty;
        public string? VideoUrl { get; set; }
        public string? ThumbnailUrl { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class CreateVideoRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string Difficulty { get; set; } = string.Empty;
        public string Instructor { get; set; } = string.Empty;
        public string? VideoUrl { get; set; }
        public string? ThumbnailUrl { get; set; }
    }
}
