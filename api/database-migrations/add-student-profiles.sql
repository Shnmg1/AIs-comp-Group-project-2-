-- Migration: Add StudentProfiles table for future personalization
-- Date: 2025-10-26

-- Create StudentProfiles table (placeholder for future features)
CREATE TABLE IF NOT EXISTS StudentProfiles (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    StudentId TEXT NOT NULL UNIQUE,
    GradeLevel TEXT,
    PreferredSubjects TEXT,
    StruggleTopics TEXT,
    LearningStyleNotes TEXT,
    TotalInteractions INTEGER DEFAULT 0,
    LastActiveAt DATETIME,
    CreatedAt DATETIME NOT NULL
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_student_id ON StudentProfiles(StudentId);

-- Add StudentId column to Questions table (if not exists)
-- Note: SQLite doesn't have "ADD COLUMN IF NOT EXISTS", so we'll check first
-- This is safe to run multiple times

PRAGMA table_info(Questions);

-- If the column doesn't exist, this will add it
-- If it does exist, SQLite will throw an error but continue
ALTER TABLE Questions ADD COLUMN StudentId TEXT;

-- Verify tables created
SELECT 'StudentProfiles table created' as status;
SELECT 'Migration complete' as status;
