namespace QualityEducationAPI.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public bool Newsletter { get; set; }
        public DateTime Timestamp { get; set; }
        public bool IsRead { get; set; } = false;
    }

    public class ContactRequest
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public bool Newsletter { get; set; }
        public string Timestamp { get; set; } = string.Empty;
    }

    public class ContactResponse
    {
        public int Id { get; set; }
        public string Message { get; set; } = string.Empty;
        public bool Success { get; set; }
    }
}
