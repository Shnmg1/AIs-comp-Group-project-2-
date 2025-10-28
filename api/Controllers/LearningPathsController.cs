using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using System.Collections.Generic;
using System.Linq;

namespace QualityEducationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LearningPathsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public LearningPathsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult GetPaths([FromQuery] string grade = "5th", [FromQuery] string subject = "")
        {
            var paths = new List<object>();
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var connection = new SqliteConnection(connectionString))
                {
                    connection.Open();

                    var query = @"
                        SELECT id, grade, subject, title, description
                        FROM learning_paths
                        WHERE grade = @grade";

                    if (!string.IsNullOrEmpty(subject))
                    {
                        query += " AND subject = @subject";
                    }

                    query += " ORDER BY subject, id";

                    using (var command = new SqliteCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@grade", grade);
                    if (!string.IsNullOrEmpty(subject))
                    {
                        command.Parameters.AddWithValue("@subject", subject);
                    }

                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            paths.Add(new
                            {
                                id = reader["id"].ToString(),
                                grade = reader["grade"].ToString(),
                                subject = reader["subject"].ToString(),
                                title = reader["title"].ToString(),
                                description = reader["description"].ToString()
                            });
                        }
                    }
                }
            }

            return Ok(paths);
        }

        [HttpGet("{pathId}")]
        public IActionResult GetPath(string pathId)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var connection = new SqliteConnection(connectionString))
                {
                    connection.Open();

                    // Get path info
                    var pathInfo = new Dictionary<string, object>();
                    var pathQuery = @"
                        SELECT id, grade, subject, title, description
                        FROM learning_paths
                        WHERE id = @pathId";

                    using (var command = new SqliteCommand(pathQuery, connection))
                {
                    command.Parameters.AddWithValue("@pathId", pathId);
                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            pathInfo["id"] = reader["id"].ToString();
                            pathInfo["grade"] = reader["grade"].ToString();
                            pathInfo["subject"] = reader["subject"].ToString();
                            pathInfo["title"] = reader["title"].ToString();
                            pathInfo["description"] = reader["description"].ToString();
                        }
                        else
                        {
                            return NotFound();
                        }
                    }
                }

                // Get lessons
                var lessons = new List<object>();
                var lessonQuery = @"
                    SELECT id, lesson_number, objective, content
                    FROM lessons
                    WHERE path_id = @pathId
                    ORDER BY lesson_number";

                using (var command = new SqliteCommand(lessonQuery, connection))
                {
                    command.Parameters.AddWithValue("@pathId", pathId);
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            lessons.Add(new
                            {
                                id = reader["id"].ToString(),
                                lessonNumber = (int)reader["lesson_number"],
                                objective = reader["objective"].ToString(),
                                content = reader["content"].ToString()
                            });
                        }
                    }
                }

                pathInfo["lessons"] = lessons;
                return Ok(pathInfo);
            }
        }

        [HttpGet("{pathId}/lessons/{lessonId}")]
        public IActionResult GetLesson(string pathId, string lessonId)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

            using (var connection = new SqliteConnection(connectionString))
            {
                connection.Open();

                // Get lesson
                var lessonQuery = @"
                    SELECT id, path_id, lesson_number, objective, content
                    FROM lessons
                    WHERE id = @lessonId AND path_id = @pathId";

                using (var command = new SqliteCommand(lessonQuery, connection))
                {
                    command.Parameters.AddWithValue("@lessonId", lessonId);
                    command.Parameters.AddWithValue("@pathId", pathId);

                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var lesson = new Dictionary<string, object>
                            {
                                ["id"] = reader["id"].ToString(),
                                ["pathId"] = reader["path_id"].ToString(),
                                ["lessonNumber"] = (int)reader["lesson_number"],
                                ["objective"] = reader["objective"].ToString(),
                                ["content"] = reader["content"].ToString()
                            };

                            // Get practice questions and activities from the original JS file structure
                            // For now, return lesson info
                            return Ok(lesson);
                        }
                        else
                        {
                            return NotFound();
                        }
                    }
                }
            }
        }
    }
}

