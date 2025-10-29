using Microsoft.Data.Sqlite;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

// Serve static files - serve index.html for root
app.MapGet("/", async context =>
{
    var indexPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "index.html");
    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync(indexPath);
});

// Serve frontend folder
app.MapGet("/frontend/{**path}", async context =>
{
    var path = context.Request.RouteValues["path"]?.ToString() ?? "";
    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "..", "frontend", path);

    if (File.Exists(filePath))
    {
        var extension = Path.GetExtension(filePath).ToLower();
        context.Response.ContentType = extension switch
        {
            ".html" => "text/html",
            ".css" => "text/css",
            ".js" => "application/javascript",
            ".json" => "application/json",
            ".png" => "image/png",
            ".jpg" or ".jpeg" => "image/jpeg",
            ".gif" => "image/gif",
            ".svg" => "image/svg+xml",
            _ => "application/octet-stream"
        };
        await context.Response.SendFileAsync(filePath);
    }
    else
    {
        context.Response.StatusCode = 404;
    }
});

// Initialize database
InitializeDatabase();

app.Run();

void InitializeDatabase()
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    using var connection = new SqliteConnection(connectionString);
    connection.Open();

    // Create Resources table
    var createResourcesTable = @"
        CREATE TABLE IF NOT EXISTS Resources (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Title TEXT NOT NULL,
            Subject TEXT NOT NULL,
            Description TEXT NOT NULL,
            Type TEXT NOT NULL,
            Difficulty TEXT NOT NULL,
            EstimatedTime TEXT NOT NULL,
            ContentUrl TEXT,
            SchoolLevel TEXT NOT NULL DEFAULT '',
            Grade TEXT NOT NULL DEFAULT '',
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )";

    // Add SchoolLevel and Grade columns if they don't exist
    var addSchoolLevelColumn = "ALTER TABLE Resources ADD COLUMN SchoolLevel TEXT DEFAULT ''";
    var addGradeColumn = "ALTER TABLE Resources ADD COLUMN Grade TEXT DEFAULT ''";

    try
    {
        using var addSchoolLevelCommand = new SqliteCommand(addSchoolLevelColumn, connection);
        addSchoolLevelCommand.ExecuteNonQuery();
    }
    catch (SqliteException)
    {
        // Column already exists, ignore
    }

    try
    {
        using var addGradeCommand = new SqliteCommand(addGradeColumn, connection);
        addGradeCommand.ExecuteNonQuery();
    }
    catch (SqliteException)
    {
        // Column already exists, ignore
    }

    // Migrate grade "K" to "Kindergarten" for consistency
    var updateKToKindergarten = "UPDATE Resources SET Grade = 'Kindergarten' WHERE Grade = 'K'";
    try
    {
        using var updateGradeCommand = new SqliteCommand(updateKToKindergarten, connection);
        var rowsUpdated = updateGradeCommand.ExecuteNonQuery();
        if (rowsUpdated > 0)
        {
            Console.WriteLine($"Updated {rowsUpdated} resources from grade 'K' to 'Kindergarten'");
        }
    }
    catch (SqliteException ex)
    {
        Console.WriteLine($"Error updating K to Kindergarten: {ex.Message}");
    }

    // Migrate grade "High School Biology" to "10th Grade" for consistency
    var updateBiologyGrade = "UPDATE Resources SET Grade = '10th Grade' WHERE Grade = 'High School Biology'";
    try
    {
        using var updateBioGradeCommand = new SqliteCommand(updateBiologyGrade, connection);
        var rowsUpdated = updateBioGradeCommand.ExecuteNonQuery();
        if (rowsUpdated > 0)
        {
            Console.WriteLine($"Updated {rowsUpdated} resources from grade 'High School Biology' to '10th Grade'");
        }
    }
    catch (SqliteException ex)
    {
        Console.WriteLine($"Error updating High School Biology to 10th Grade: {ex.Message}");
    }

    // Create Videos table
    var createVideosTable = @"
        CREATE TABLE IF NOT EXISTS Videos (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Title TEXT NOT NULL,
            Subject TEXT NOT NULL,
            Description TEXT NOT NULL,
            Duration TEXT NOT NULL,
            Difficulty TEXT NOT NULL,
            Instructor TEXT NOT NULL,
            VideoUrl TEXT,
            ThumbnailUrl TEXT,
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )";

    // Create Certifications table
    var createCertificationsTable = @"
        CREATE TABLE IF NOT EXISTS Certifications (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Title TEXT NOT NULL,
            Subject TEXT NOT NULL,
            Description TEXT NOT NULL,
            Requirements TEXT NOT NULL,
            EstimatedTime TEXT NOT NULL,
            Difficulty TEXT NOT NULL,
            Provider TEXT NOT NULL,
            Validity TEXT NOT NULL,
            Cost TEXT NOT NULL,
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )";

    // Create Questions table (for AI chat)
    var createQuestionsTable = @"
        CREATE TABLE IF NOT EXISTS Questions (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Question TEXT NOT NULL,
            Subject TEXT,
            StudentLevel TEXT,
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )";

    // Create AI Responses table
    var createAIResponsesTable = @"
        CREATE TABLE IF NOT EXISTS AIResponses (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            QuestionId INTEGER NOT NULL,
            Response TEXT NOT NULL,
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (QuestionId) REFERENCES Questions (Id)
        )";

    // Create Contacts table
    var createContactsTable = @"
        CREATE TABLE IF NOT EXISTS Contacts (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            FirstName TEXT NOT NULL,
            LastName TEXT NOT NULL,
            Email TEXT NOT NULL,
            Subject TEXT NOT NULL,
            Message TEXT NOT NULL,
            Newsletter BOOLEAN NOT NULL DEFAULT 0,
            Timestamp DATETIME NOT NULL,
            IsRead BOOLEAN NOT NULL DEFAULT 0,
            CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )";

    var command = connection.CreateCommand();

    command.CommandText = createResourcesTable;
    command.ExecuteNonQuery();

    command.CommandText = createVideosTable;
    command.ExecuteNonQuery();

    command.CommandText = createCertificationsTable;
    command.ExecuteNonQuery();

    command.CommandText = createQuestionsTable;
    command.ExecuteNonQuery();

    command.CommandText = createAIResponsesTable;
    command.ExecuteNonQuery();

    command.CommandText = createContactsTable;
    command.ExecuteNonQuery();

    // Count before any operations
    var countBefore = connection.CreateCommand();
    countBefore.CommandText = "SELECT COUNT(*) FROM Resources";
    var initialCount = Convert.ToInt32(countBefore.ExecuteScalar());
    Console.WriteLine($"Initial resources in database: {initialCount}");

    // Remove duplicates (keep only unique resources)
    RemoveDuplicates(connection);

    // Insert sample data (only adds if not exists)
    InsertSampleData(connection);
    
    // Final count
    var countAfter = connection.CreateCommand();
    countAfter.CommandText = "SELECT COUNT(*) FROM Resources";
    var finalCount = Convert.ToInt32(countAfter.ExecuteScalar());
    Console.WriteLine($"\nFinal total resources in database: {finalCount}");
    
    // Check for specific resources the user mentioned
    CheckSpecificResources(connection);
}

void CheckSpecificResources(SqliteConnection connection)
{
    var titles = new[] { 
        "Authority Figures", "Good Citizenship", "Identify Functions of Plant Cell Parts",
        "Count Pictures Up to 3", "Mississippi History: The Civil Rights Movement"
    };
    
    Console.WriteLine("\nChecking presence of key resources:");
    var command = connection.CreateCommand();
    foreach (var title in titles)
    {
        command.CommandText = "SELECT COUNT(*) FROM Resources WHERE Title = @title";
        command.Parameters.Clear();
        command.Parameters.AddWithValue("@title", title);
        var count = Convert.ToInt32(command.ExecuteScalar());
        Console.WriteLine($"  {title}: {(count > 0 ? "✓ Found" : "✗ Not found")}");
    }
}

void InsertSampleData(SqliteConnection connection)
{
    var command = connection.CreateCommand();

    // Insert sample resources
    var insertResource = @"
        INSERT OR IGNORE INTO Resources (Title, Subject, Description, Type, Difficulty, EstimatedTime, SchoolLevel, Grade)
        VALUES (@title, @subject, @description, @type, @difficulty, @estimatedTime, @schoolLevel, @grade)";

    var resources = new[]
    {
        new { title = "Mississippi History: The Civil Rights Movement", subject = "History", description = "Comprehensive study guide covering key events, figures, and impacts of the Civil Rights Movement in Mississippi.", type = "Study Guide", difficulty = "Intermediate", estimatedTime = "2-3 hours", schoolLevel = "High School", grade = "11th Grade" },
        new { title = "Algebra Fundamentals", subject = "STEM", description = "Step-by-step guide to algebraic concepts including variables, equations, and problem-solving strategies.", type = "Practice Exercises", difficulty = "Beginner", estimatedTime = "3-4 hours", schoolLevel = "Middle School", grade = "8th Grade" },
        new { title = "Mississippi Literature Analysis", subject = "English", description = "Analysis of prominent Mississippi authors including William Faulkner, Eudora Welty, and Richard Wright.", type = "Reading Material", difficulty = "Advanced", estimatedTime = "4-5 hours", schoolLevel = "High School", grade = "12th Grade" },
        new { title = "Biology: Mississippi Ecosystems", subject = "STEM", description = "Explore the unique ecosystems of Mississippi including the Gulf Coast, Delta, and Piney Woods regions.", type = "Interactive Guide", difficulty = "Intermediate", estimatedTime = "2-3 hours", schoolLevel = "High School", grade = "10th Grade" },
        new { title = "Grammar and Writing Skills", subject = "English", description = "Essential grammar rules, punctuation, and essay writing techniques for academic success.", type = "Practice Exercises", difficulty = "Beginner", estimatedTime = "3-4 hours", schoolLevel = "Elementary", grade = "4th Grade" },
        new { title = "Mississippi Geography", subject = "History", description = "Comprehensive overview of Mississippi's geography, climate, and natural resources.", type = "Study Guide", difficulty = "Beginner", estimatedTime = "1-2 hours", schoolLevel = "Elementary", grade = "3rd Grade" }
    };

    foreach (var resource in resources)
    {
        command.CommandText = insertResource;
        command.Parameters.Clear();
        command.Parameters.AddWithValue("@title", resource.title);
        command.Parameters.AddWithValue("@subject", resource.subject);
        command.Parameters.AddWithValue("@description", resource.description);
        command.Parameters.AddWithValue("@type", resource.type);
        command.Parameters.AddWithValue("@difficulty", resource.difficulty);
        command.Parameters.AddWithValue("@estimatedTime", resource.estimatedTime);
        command.Parameters.AddWithValue("@schoolLevel", resource.schoolLevel);
        command.Parameters.AddWithValue("@grade", resource.grade);
        command.ExecuteNonQuery();
    }

    // Insert sample videos
    var insertVideo = @"
        INSERT OR IGNORE INTO Videos (Title, Subject, Description, Duration, Difficulty, Instructor)
        VALUES (@title, @subject, @description, @duration, @difficulty, @instructor)";

    var videos = new[]
    {
        new { title = "Mississippi Civil Rights Movement: A Historical Overview", subject = "History", description = "Comprehensive overview of the Civil Rights Movement in Mississippi, featuring key events and figures.", duration = "45:30", difficulty = "Intermediate", instructor = "Dr. Sarah Johnson" },
        new { title = "Algebra Basics: Solving Linear Equations", subject = "STEM", description = "Learn the fundamentals of solving linear equations with step-by-step examples and practice problems.", duration = "32:15", difficulty = "Beginner", instructor = "Prof. Michael Chen" },
        new { title = "Literary Analysis: William Faulkner's 'The Sound and the Fury'", subject = "English", description = "Deep dive into Faulkner's masterpiece, exploring themes, narrative techniques, and literary significance.", duration = "58:45", difficulty = "Advanced", instructor = "Dr. Emily Williams" },
        new { title = "Mississippi River Delta: Ecology and Conservation", subject = "STEM", description = "Explore the unique ecosystem of the Mississippi Delta and learn about conservation efforts.", duration = "38:20", difficulty = "Intermediate", instructor = "Dr. Robert Martinez" },
        new { title = "Grammar Essentials: Subject-Verb Agreement", subject = "English", description = "Master subject-verb agreement rules with clear explanations and interactive exercises.", duration = "25:10", difficulty = "Beginner", instructor = "Ms. Lisa Thompson" },
        new { title = "Mississippi Geography and Climate", subject = "History", description = "Comprehensive study of Mississippi's geography, climate patterns, and natural resources.", duration = "41:35", difficulty = "Beginner", instructor = "Dr. James Anderson" }
    };

    foreach (var video in videos)
    {
        command.CommandText = insertVideo;
        command.Parameters.Clear();
        command.Parameters.AddWithValue("@title", video.title);
        command.Parameters.AddWithValue("@subject", video.subject);
        command.Parameters.AddWithValue("@description", video.description);
        command.Parameters.AddWithValue("@duration", video.duration);
        command.Parameters.AddWithValue("@difficulty", video.difficulty);
        command.Parameters.AddWithValue("@instructor", video.instructor);
        command.ExecuteNonQuery();
    }

    // Insert sample certifications
    var insertCertification = @"
        INSERT OR IGNORE INTO Certifications (Title, Subject, Description, Requirements, EstimatedTime, Difficulty, Provider, Validity, Cost)
        VALUES (@title, @subject, @description, @requirements, @estimatedTime, @difficulty, @provider, @validity, @cost)";

    var certifications = new[]
    {
        new { title = "Mississippi History Scholar", subject = "History", description = "Demonstrate mastery of Mississippi history from pre-colonial times to the present day.", requirements = "Complete 20 history modules, pass final exam with 85% or higher", estimatedTime = "40-50 hours", difficulty = "Advanced", provider = "Mississippi Department of Education", validity = "Lifetime", cost = "Free" },
        new { title = "Algebra Fundamentals Certificate", subject = "STEM", description = "Prove your understanding of basic algebraic concepts and problem-solving techniques.", requirements = "Complete algebra coursework, solve 50 practice problems, pass assessment", estimatedTime = "30-40 hours", difficulty = "Intermediate", provider = "Mississippi STEM Academy", validity = "2 years", cost = "Free" },
        new { title = "Advanced Literary Analysis", subject = "English", description = "Showcase your ability to analyze literature, particularly Mississippi authors.", requirements = "Analyze 10 literary works, write 3 essays, complete peer review", estimatedTime = "35-45 hours", difficulty = "Advanced", provider = "Mississippi Writers' Guild", validity = "3 years", cost = "$25" },
        new { title = "Environmental Science Explorer", subject = "STEM", description = "Learn about Mississippi's unique ecosystems and environmental challenges.", requirements = "Complete field study, research project, environmental impact assessment", estimatedTime = "25-35 hours", difficulty = "Intermediate", provider = "Mississippi Wildlife Federation", validity = "2 years", cost = "Free" },
        new { title = "Grammar and Composition Master", subject = "English", description = "Master essential grammar rules and composition techniques for academic writing.", requirements = "Complete grammar modules, write 5 essays, pass writing assessment", estimatedTime = "20-30 hours", difficulty = "Beginner", provider = "Mississippi Language Arts Council", validity = "2 years", cost = "Free" },
        new { title = "Mississippi Geography Expert", subject = "History", description = "Comprehensive understanding of Mississippi's geography, climate, and natural resources.", requirements = "Study state geography, complete mapping exercises, pass geography test", estimatedTime = "15-25 hours", difficulty = "Beginner", provider = "Mississippi Geographic Society", validity = "Lifetime", cost = "Free" }
    };

    foreach (var cert in certifications)
    {
        command.CommandText = insertCertification;
        command.Parameters.Clear();
        command.Parameters.AddWithValue("@title", cert.title);
        command.Parameters.AddWithValue("@subject", cert.subject);
        command.Parameters.AddWithValue("@description", cert.description);
        command.Parameters.AddWithValue("@requirements", cert.requirements);
        command.Parameters.AddWithValue("@estimatedTime", cert.estimatedTime);
        command.Parameters.AddWithValue("@difficulty", cert.difficulty);
        command.Parameters.AddWithValue("@provider", cert.provider);
        command.Parameters.AddWithValue("@validity", cert.validity);
        command.Parameters.AddWithValue("@cost", cert.cost);
        command.ExecuteNonQuery();
    }
}

void RemoveDuplicates(SqliteConnection connection)
{
    var command = connection.CreateCommand();
    
    // Count before
    command.CommandText = "SELECT COUNT(*) FROM Resources";
    var beforeCount = Convert.ToInt32(command.ExecuteScalar());
    Console.WriteLine($"Current resources before cleanup: {beforeCount}");
    
    // Remove duplicates (keep the row with the lowest Id for each Title+Subject+Description combination)
    command.CommandText = @"
        DELETE FROM Resources 
        WHERE Id NOT IN (
            SELECT MIN(Id) 
            FROM Resources 
            GROUP BY Title, Subject, Description
        )
    ";
    var deleted = command.ExecuteNonQuery();
    
    // Count after
    command.CommandText = "SELECT COUNT(*) FROM Resources";
    var afterCount = Convert.ToInt32(command.ExecuteScalar());
    
    // Show detail: count by subject
    command.CommandText = "SELECT Subject, COUNT(*) FROM Resources GROUP BY Subject";
    using var reader = command.ExecuteReader();
    Console.WriteLine("\nResources by subject:");
    while (reader.Read())
    {
        Console.WriteLine($"  {reader.GetString(0)}: {reader.GetInt32(1)}");
    }
    
    if (deleted > 0)
    {
        Console.WriteLine($"\nRemoved {deleted} duplicate rows");
        Console.WriteLine($"Unique resources after cleanup: {afterCount}");
    }
    else
    {
        Console.WriteLine($"\nNo duplicates found. Total unique resources: {afterCount}");
    }
}
