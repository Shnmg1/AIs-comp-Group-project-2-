using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResourcesController : ControllerBase
    {
        private readonly string _connectionString;

        public ResourcesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resource>>> GetResources([FromQuery] string? subject = null, [FromQuery] string? search = null, [FromQuery] string? schoolLevel = null, [FromQuery] string? grade = null)
        {
            var resources = new List<Resource>();
            
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Type, Difficulty, EstimatedTime, ContentUrl, SchoolLevel, Grade, CreatedAt FROM Resources WHERE 1=1";
            var parameters = new List<SqliteParameter>();

            if (!string.IsNullOrEmpty(subject) && subject != "all")
            {
                query += " AND Subject = @subject";
                parameters.Add(new SqliteParameter("@subject", subject));
            }

            if (!string.IsNullOrEmpty(search))
            {
                query += " AND (Title LIKE @search OR Description LIKE @search)";
                parameters.Add(new SqliteParameter("@search", $"%{search}%"));
            }

            if (!string.IsNullOrEmpty(schoolLevel) && schoolLevel != "all")
            {
                query += " AND SchoolLevel = @schoolLevel";
                parameters.Add(new SqliteParameter("@schoolLevel", schoolLevel));
            }

            if (!string.IsNullOrEmpty(grade) && grade != "all")
            {
                query += " AND Grade = @grade";
                parameters.Add(new SqliteParameter("@grade", grade));
            }

            query += " ORDER BY CreatedAt DESC";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddRange(parameters);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                resources.Add(new Resource
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Type = reader.GetString(4),
                    Difficulty = reader.GetString(5),
                    EstimatedTime = reader.GetString(6),
                    ContentUrl = reader.IsDBNull(7) ? null : reader.GetString(7),
                    SchoolLevel = reader.IsDBNull(8) ? "" : reader.GetString(8),
                    Grade = reader.IsDBNull(9) ? "" : reader.GetString(9),
                    CreatedAt = reader.GetDateTime(10)
                });
            }

            return Ok(resources);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Resource>> GetResource(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Type, Difficulty, EstimatedTime, ContentUrl, SchoolLevel, Grade, CreatedAt FROM Resources WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                var resource = new Resource
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Type = reader.GetString(4),
                    Difficulty = reader.GetString(5),
                    EstimatedTime = reader.GetString(6),
                    ContentUrl = reader.IsDBNull(7) ? null : reader.GetString(7),
                    SchoolLevel = reader.IsDBNull(8) ? "" : reader.GetString(8),
                    Grade = reader.IsDBNull(9) ? "" : reader.GetString(9),
                    CreatedAt = reader.GetDateTime(10)
                };

                return Ok(resource);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Resource>> CreateResource(CreateResourceRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                INSERT INTO Resources (Title, Subject, Description, Type, Difficulty, EstimatedTime, ContentUrl, SchoolLevel, Grade, CreatedAt)
                VALUES (@title, @subject, @description, @type, @difficulty, @estimatedTime, @contentUrl, @schoolLevel, @grade, @createdAt);
                SELECT last_insert_rowid();";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@type", request.Type);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@estimatedTime", request.EstimatedTime);
            command.Parameters.AddWithValue("@contentUrl", request.ContentUrl ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@schoolLevel", request.SchoolLevel);
            command.Parameters.AddWithValue("@grade", request.Grade);
            command.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);

            var newId = await command.ExecuteScalarAsync();
            
            return CreatedAtAction(nameof(GetResource), new { id = newId }, new Resource
            {
                Id = Convert.ToInt32(newId),
                Title = request.Title,
                Subject = request.Subject,
                Description = request.Description,
                Type = request.Type,
                Difficulty = request.Difficulty,
                EstimatedTime = request.EstimatedTime,
                ContentUrl = request.ContentUrl,
                SchoolLevel = request.SchoolLevel,
                Grade = request.Grade,
                CreatedAt = DateTime.UtcNow
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResource(int id, CreateResourceRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                UPDATE Resources 
                SET Title = @title, Subject = @subject, Description = @description, 
                    Type = @type, Difficulty = @difficulty, EstimatedTime = @estimatedTime, ContentUrl = @contentUrl,
                    SchoolLevel = @schoolLevel, Grade = @grade
                WHERE Id = @id";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@type", request.Type);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@estimatedTime", request.EstimatedTime);
            command.Parameters.AddWithValue("@contentUrl", request.ContentUrl ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@schoolLevel", request.SchoolLevel);
            command.Parameters.AddWithValue("@grade", request.Grade);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResource(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "DELETE FROM Resources WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }
    }
}
