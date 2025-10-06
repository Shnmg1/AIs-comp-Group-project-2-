using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using QualityEducationAPI.Models;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideosController : ControllerBase
    {
        private readonly string _connectionString;

        public VideosController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string not found");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideos([FromQuery] string? subject = null, [FromQuery] string? search = null, [FromQuery] string? difficulty = null)
        {
            var videos = new List<Video>();
            
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Duration, Difficulty, Instructor, VideoUrl, ThumbnailUrl, CreatedAt FROM Videos WHERE 1=1";
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
                query += " AND (Title LIKE @search OR Description LIKE @search OR Instructor LIKE @search)";
                parameters.Add(new SqliteParameter("@search", $"%{search}%"));
            }

            query += " ORDER BY CreatedAt DESC";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddRange(parameters);

            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                videos.Add(new Video
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Duration = reader.GetString(4),
                    Difficulty = reader.GetString(5),
                    Instructor = reader.GetString(6),
                    VideoUrl = reader.IsDBNull(7) ? null : reader.GetString(7),
                    ThumbnailUrl = reader.IsDBNull(8) ? null : reader.GetString(8),
                    CreatedAt = reader.GetDateTime(9)
                });
            }

            return Ok(videos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> GetVideo(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "SELECT Id, Title, Subject, Description, Duration, Difficulty, Instructor, VideoUrl, ThumbnailUrl, CreatedAt FROM Videos WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                var video = new Video
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Subject = reader.GetString(2),
                    Description = reader.GetString(3),
                    Duration = reader.GetString(4),
                    Difficulty = reader.GetString(5),
                    Instructor = reader.GetString(6),
                    VideoUrl = reader.IsDBNull(7) ? null : reader.GetString(7),
                    ThumbnailUrl = reader.IsDBNull(8) ? null : reader.GetString(8),
                    CreatedAt = reader.GetDateTime(9)
                };

                return Ok(video);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Video>> CreateVideo(CreateVideoRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                INSERT INTO Videos (Title, Subject, Description, Duration, Difficulty, Instructor, VideoUrl, ThumbnailUrl, CreatedAt)
                VALUES (@title, @subject, @description, @duration, @difficulty, @instructor, @videoUrl, @thumbnailUrl, @createdAt);
                SELECT last_insert_rowid();";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@duration", request.Duration);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@instructor", request.Instructor);
            command.Parameters.AddWithValue("@videoUrl", request.VideoUrl ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@thumbnailUrl", request.ThumbnailUrl ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);

            var newId = await command.ExecuteScalarAsync();
            
            return CreatedAtAction(nameof(GetVideo), new { id = newId }, new Video
            {
                Id = Convert.ToInt32(newId),
                Title = request.Title,
                Subject = request.Subject,
                Description = request.Description,
                Duration = request.Duration,
                Difficulty = request.Difficulty,
                Instructor = request.Instructor,
                VideoUrl = request.VideoUrl,
                ThumbnailUrl = request.ThumbnailUrl,
                CreatedAt = DateTime.UtcNow
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVideo(int id, CreateVideoRequest request)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                UPDATE Videos 
                SET Title = @title, Subject = @subject, Description = @description, 
                    Duration = @duration, Difficulty = @difficulty, Instructor = @instructor, 
                    VideoUrl = @videoUrl, ThumbnailUrl = @thumbnailUrl
                WHERE Id = @id";

            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@title", request.Title);
            command.Parameters.AddWithValue("@subject", request.Subject);
            command.Parameters.AddWithValue("@description", request.Description);
            command.Parameters.AddWithValue("@duration", request.Duration);
            command.Parameters.AddWithValue("@difficulty", request.Difficulty);
            command.Parameters.AddWithValue("@instructor", request.Instructor);
            command.Parameters.AddWithValue("@videoUrl", request.VideoUrl ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@thumbnailUrl", request.ThumbnailUrl ?? (object)DBNull.Value);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVideo(int id)
        {
            using var connection = new SqliteConnection(_connectionString);
            await connection.OpenAsync();

            var query = "DELETE FROM Videos WHERE Id = @id";
            
            using var command = new SqliteCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);

            var rowsAffected = await command.ExecuteNonQueryAsync();
            
            if (rowsAffected == 0)
                return NotFound();

            return NoContent();
        }
    }
}
