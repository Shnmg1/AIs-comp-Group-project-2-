using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CertificationsController : ControllerBase
    {
        private readonly string _connectionString;

        public CertificationsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Certification>>> GetCertifications([FromQuery] string? subject = null, [FromQuery] string? search = null, [FromQuery] string? difficulty = null)
        {
            var certifications = new List<Certification>();
            
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Requirements, EstimatedTime, Difficulty, Provider, Validity, Cost, CreatedAt FROM Certifications WHERE 1=1";
            var parameters = new List<SqliteParameter>();

            if (!string.IsNullOrEmpty(subject) && subject != "all")
            {
                query += " AND Subject = @subject";
                parameters.Add(new SqliteParameter("@subject", subject));
            }

            if (!string.IsNullOrEmpty(difficulty) && difficulty != "all")
            {
                query += " AND Difficulty = @difficulty";
                parameters.Add(new SqliteParameter("@difficulty", difficulty));
            }

            if (!string.IsNullOrEmpty(search))
            {
                query += " AND (Title LIKE @search OR Description LIKE @search OR Provider LIKE @search)";
                parameters.Add(new SqliteParameter("@search", $"%{search}%"));
            }

            query += " ORDER BY CreatedAt DESC";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddRange(parameters);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                certifications.Add(new Certification
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Requirements = reader.GetString(4),
                    EstimatedTime = reader.GetString(5),
                    Difficulty = reader.GetString(6),
                    Provider = reader.GetString(7),
                    Validity = reader.GetString(8),
                    Cost = reader.GetString(9),
                    CreatedAt = reader.GetDateTime(10)
                });
            }

            return Ok(certifications);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Certification>> GetCertification(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Requirements, EstimatedTime, Difficulty, Provider, Validity, Cost, CreatedAt FROM Certifications WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                var certification = new Certification
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Requirements = reader.GetString(4),
                    EstimatedTime = reader.GetString(5),
                    Difficulty = reader.GetString(6),
                    Provider = reader.GetString(7),
                    Validity = reader.GetString(8),
                    Cost = reader.GetString(9),
                    CreatedAt = reader.GetDateTime(10)
                };

                return Ok(certification);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Certification>> CreateCertification(CreateCertificationRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                INSERT INTO Certifications (Title, Subject, Description, Requirements, EstimatedTime, Difficulty, Provider, Validity, Cost, CreatedAt)
                VALUES (@title, @subject, @description, @requirements, @estimatedTime, @difficulty, @provider, @validity, @cost, @createdAt);
                SELECT last_insert_rowid();";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@requirements", request.Requirements);
            command.Parameters.AddWithValue("@estimatedTime", request.EstimatedTime);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@provider", request.Provider);
            command.Parameters.AddWithValue("@validity", request.Validity);
            command.Parameters.AddWithValue("@cost", request.Cost);
            command.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);

            var newId = await command.ExecuteScalarAsync();
            
            return CreatedAtAction(nameof(GetCertification), new { id = newId }, new Certification
            {
                Id = Convert.ToInt32(newId),
                Title = request.Title,
                Subject = request.Subject,
                Description = request.Description,
                Requirements = request.Requirements,
                EstimatedTime = request.EstimatedTime,
                Difficulty = request.Difficulty,
                Provider = request.Provider,
                Validity = request.Validity,
                Cost = request.Cost,
                CreatedAt = DateTime.UtcNow
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCertification(int id, CreateCertificationRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                UPDATE Certifications 
                SET Title = @title, Subject = @subject, Description = @description, 
                    Requirements = @requirements, EstimatedTime = @estimatedTime, Difficulty = @difficulty, 
                    Provider = @provider, Validity = @validity, Cost = @cost
                WHERE Id = @id";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@requirements", request.Requirements);
            command.Parameters.AddWithValue("@estimatedTime", request.EstimatedTime);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@provider", request.Provider);
            command.Parameters.AddWithValue("@validity", request.Validity);
            command.Parameters.AddWithValue("@cost", request.Cost);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCertification(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "DELETE FROM Certifications WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }
    }
}
