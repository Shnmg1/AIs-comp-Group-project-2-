# Railway Deployment Guide

This guide will help you deploy the Mississippi Quality Education Platform to Railway.

## Prerequisites

1. A Railway account (sign up at https://railway.app)
2. Your Gemini API key

## Deployment Steps

### 1. Connect Your Repository

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `Shnmg1/AIs-comp-Group-project-2-`

### 2. Configure Environment Variables

After the project is created, go to your service settings and add the following environment variable:

- **Key**: `GEMINI_API_KEY`
- **Value**: Your Gemini API key (e.g., `AIzaSyBm0PH83WPXnxq4SosNSQ_OBhJQNAQ54rM`)

### 3. Deploy

Railway will automatically:

- Detect the Dockerfile
- Build the Docker image
- Deploy your application
- Assign a public URL

### 4. Access Your Application

Once deployed, Railway will provide a URL like:
`https://your-app-name.up.railway.app`

Visit this URL to access your deployed application.

## How It Works

### Docker Build Process

The `Dockerfile` in the root directory:

1. Uses multi-stage build for smaller image size
2. Builds the .NET 8 ASP.NET Core API
3. Copies static frontend files (Pages, frontend folders)
4. Configures the app to listen on Railway's dynamic PORT

### Environment Variables

The application supports these environment variables:

- `PORT` - Automatically set by Railway (default: 8080)
- `GEMINI_API_KEY` - Your Gemini AI API key (required for AI Tutor)
- `ASPNETCORE_ENVIRONMENT` - Set to `Production` in deployment

### Database

The application uses SQLite with a local `database.db` file:

- Database is created automatically on first run
- Sample data is seeded during initialization
- Database persists in the container's filesystem

**Note**: For production with persistent data, consider using Railway's PostgreSQL addon or external database service.

## Troubleshooting

### Resources Not Loading

- Check browser console for API errors
- Verify the frontend is calling `/api` (relative URLs)
- Check Railway logs for server errors

### AI Tutor Not Working

- Ensure `GEMINI_API_KEY` environment variable is set in Railway
- Check Railway logs for API errors
- Verify the API key is valid and has quota remaining

### Build Failures

- Check Railway build logs
- Verify all files are committed to GitHub
- Ensure Dockerfile is in the root directory

## Local Testing with Docker

To test the Docker build locally:

```bash
# Build the image
docker build -t quality-education .

# Run the container (without Gemini API)
docker run -p 8080:8080 quality-education

# Run with Gemini API key
docker run -p 8080:8080 -e GEMINI_API_KEY=your_key_here quality-education
```

Visit http://localhost:8080 to test.

## Updates

To update your deployed application:

1. Commit and push changes to GitHub main branch
2. Railway will automatically detect changes and redeploy

Or manually trigger a redeploy in the Railway dashboard.

## Support

For Railway-specific issues, see: https://docs.railway.app
