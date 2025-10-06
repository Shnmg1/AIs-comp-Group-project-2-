using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly string _connectionString;

        public ContactController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpPost]
        public async Task<ActionResult<ContactResponse>> SubmitContact(ContactRequest request)
        {
            try
            {
                using var connection = new SqliteConnection(_connectionString);
                await connection.OpenAsync();

                var query = @"
                    INSERT INTO Contacts (FirstName, LastName, Email, Subject, Message, Newsletter, Timestamp, IsRead)
                    VALUES (@firstName, @lastName, @email, @subject, @message, @newsletter, @timestamp, @isRead);
                    SELECT last_insert_rowid();";

                using var command = new SqliteCommand(query, connection);
                command.Parameters.AddWithValue("@firstName", request.FirstName);
                command.Parameters.AddWithValue("@lastName", request.LastName);
                command.Parameters.AddWithValue("@email", request.Email);
                command.Parameters.AddWithValue("@subject", request.Subject);
                command.Parameters.AddWithValue("@message", request.Message);
                command.Parameters.AddWithValue("@newsletter", request.Newsletter);
                command.Parameters.AddWithValue("@timestamp", DateTime.Parse(request.Timestamp));
                command.Parameters.AddWithValue("@isRead", false);

                var newId = await command.ExecuteScalarAsync();

                // In a real application, you would send an email here
                // For now, we'll just log the contact submission
                Console.WriteLine($"New contact form submission from {request.Email}: {request.Subject}");

                return Ok(new ContactResponse
                {
                    Id = Convert.ToInt32(newId),
                    Message = "Thank you for your message! We'll get back to you within 24-48 hours.",
                    Success = true
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error processing contact form: {ex.Message}");
                return StatusCode(500, new ContactResponse
                {
                    Message = "Sorry, there was an error processing your message. Please try again later.",
                    Success = false
                });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts([FromQuery] bool? unreadOnly = null)
        {
            var contacts = new List<Contact>();
            
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, FirstName, LastName, Email, Subject, Message, Newsletter, Timestamp, IsRead FROM Contacts";
            var parameters = new List<SqliteParameter>();

            if (unreadOnly == true)
            {
                query += " WHERE IsRead = 0";
            }

            query += " ORDER BY Timestamp DESC";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddRange(parameters);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                contacts.Add(new Contact
                {
                    Id = reader.GetInt32(0),
                    FirstName = reader.GetString(1),
                    LastName = reader.GetString(2),
                    Email = reader.GetString(3),
                    Subject = reader.GetString(4),
                    Message = reader.GetString(5),
                    Newsletter = reader.GetBoolean(6),
                    Timestamp = reader.GetDateTime(7),
                    IsRead = reader.GetBoolean(8)
                });
            }

            return Ok(contacts);
        }

        [HttpPut("{id}/mark-read")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "UPDATE Contacts SET IsRead = 1 WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "DELETE FROM Contacts WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }
    }
}
