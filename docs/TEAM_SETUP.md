# Team Setup Instructions - Google Gemini AI Integration

## Step 1: Get Your Google Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key (starts with "AIza...")

## Step 2: Create Local Configuration File

1. Navigate to the `api/` folder in the project
2. Copy `appsettings.Development.json.template` to `appsettings.Development.json`
3. Open `appsettings.Development.json`
4. Replace `YOUR_API_KEY_HERE` with your actual API key
5. Save the file

**Example:**
```json
{
  "GeminiAPI": {
    "ApiKey": "AIzaSyABC123...your-actual-key",
    "Model": "gemini-2.5-flash",
    "Endpoint": "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
  }
}
```

**IMPORTANT:** Never commit `appsettings.Development.json` to git! It's in .gitignore to protect your API key.

## Step 3: Run Database Migration

From the project root directory, run:

```bash
sqlite3 api/database.db < api/database-migrations/add-student-profiles.sql
```

## Step 4: Test the Integration

1. Start the API:
   ```bash
   cd api
   dotnet run
   ```

2. Open `index.html` in your browser

3. Navigate to "AI Helper" page

4. Ask a test question: "How do I solve 2x + 5 = 15?"

5. Verify you get a Socratic-style response (guiding questions, not direct answer)

## Troubleshooting

**Error: "AI assistant is not configured properly"**
- Check your API key is correctly pasted in `appsettings.Development.json`
- Verify the file is in the `api/` folder
- Make sure there are no extra spaces in the API key

**Error: "Unable to reach AI service"**
- Check your internet connection
- Verify the Gemini API endpoint is not blocked by firewall

**Error: Database migration fails**
- Make sure `api/database.db` exists
- Check you're running the command from the project root directory
