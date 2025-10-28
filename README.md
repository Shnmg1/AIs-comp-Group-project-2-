# Mississippi Quality Education Platform

A comprehensive educational platform designed to help Mississippi students access quality educational resources in English, History, and STEM subjects.

## 🎯 Project Overview

This platform addresses quality education challenges by providing:
- **Educational Resources**: Comprehensive study materials and practice exercises
- **Educational Videos**: Engaging video lessons from experienced educators  
- **Certifications**: Recognized certifications to demonstrate knowledge and skills
- **AI Learning Assistant**: Personalized help with step-by-step guidance

## 🏗️ Technology Stack

### Frontend
- **HTML/CSS/JavaScript**: Vanilla JavaScript with Bootstrap 5.3.x
- **Styling**: Bootstrap CDN with Mississippi flag colors (red, white, navy, gold)
- **Architecture**: Single-page application with modular JavaScript

### Backend
- **Framework**: .NET 8.0 Web API
- **Language**: C#
- **Database**: SQLite with direct SQL queries
- **Architecture**: RESTful API design

## 🚀 Getting Started

### Prerequisites
- .NET 8.0 SDK
- Modern web browser
- Code editor (VS Code, Visual Studio, etc.)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AIs-comp-Group-project-2-
   ```

2. **Start the Backend API**
   ```bash
   cd api
   dotnet restore
   dotnet run
   ```
   The API will be available at `http://localhost:5000`

3. **Open the Frontend**
   - Open `Pages/index.html` in your web browser
   - Or use a local web server (e.g., Live Server in VS Code)
   - The frontend will automatically connect to the API

### API Endpoints

#### Resources
- `GET /api/resources` - Get all resources (with optional filtering)
- `GET /api/resources/{id}` - Get specific resource
- `POST /api/resources` - Create new resource
- `PUT /api/resources/{id}` - Update resource
- `DELETE /api/resources/{id}` - Delete resource

#### Videos
- `GET /api/videos` - Get all videos (with optional filtering)
- `GET /api/videos/{id}` - Get specific video
- `POST /api/videos` - Create new video
- `PUT /api/videos/{id}` - Update video
- `DELETE /api/videos/{id}` - Delete video

#### Certifications
- `GET /api/certifications` - Get all certifications (with optional filtering)
- `GET /api/certifications/{id}` - Get specific certification
- `POST /api/certifications` - Create new certification
- `PUT /api/certifications/{id}` - Update certification
- `DELETE /api/certifications/{id}` - Delete certification

#### AI Helper
- `POST /api/aihelper/ask` - Ask a question to the AI assistant
- `GET /api/aihelper/questions` - Get recent questions
- `GET /api/aihelper/responses/{questionId}` - Get AI response for a question

## 🎨 Design Features

### Mississippi Flag Colors
- **Red**: #C8102E - Primary accent color
- **White**: #FFFFFF - Background color
- **Navy**: #002868 - Primary text and navigation
- **Gold**: #FFD700 - Secondary accent color

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with Bootstrap components
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Fast loading with minimal dependencies

## 📚 Features

### Learning Paths
- **Question-Focused Learning**: 5-10 practice questions per lesson that guide students to correct answers
- **Mississippi Standards**: All content aligned with MCCRS (Mississippi College- and Career-Readiness Standards)
- **Grade-Appropriate Content**: Age-appropriate language and paragraph-length readings
- **Progressive Learning**: Structured paths with lessons building on each other
- **Step-by-Step Hints**: Each question includes 3-4 progressive hints that walk students through problem-solving
- **Comprehensive Coverage**: Pre-K through 12th grade in Math, Science, ELA, and Social Studies

### Educational Resources
- Filter by school level (Elementary, Middle School, High School)
- Filter by grade and subject
- Learning Paths view with structured lessons
- Search functionality
- Detailed resource information
- Difficulty levels and time estimates

### Educational Videos
- Subject-based filtering
- Instructor information
- Duration and difficulty indicators
- Video player integration (ready for implementation)

### Certifications
- Comprehensive certification listings
- Provider information and validity periods
- Cost and time requirements
- Enrollment tracking (ready for implementation)

### AI Learning Assistant
- Interactive chat interface
- Subject-specific help
- Step-by-step guidance approach
- Question history tracking

## 🔧 Development

### Project Structure
```
├── Pages/
│   └── index.html                    # Main HTML file
├── frontend/
│   ├── styles/
│   │   └── main.css                  # Custom CSS with Mississippi colors
│   └── scripts/
│       ├── app.js                    # Main application controller
│       ├── home.js                   # Home page module
│       ├── resources.js              # Resources page module with Learning Paths
│       ├── learning-paths.js         # Learning paths data (MCCRS-aligned content)
│       ├── activity-handlers.js      # Interactive activity handlers
│       ├── videos.js                 # Videos page module
│       ├── certifications.js         # Certifications page module
│       ├── ai-tutor.js              # AI tutor page module
│       └── help.js                   # Help page module
├── api/
│   ├── Controllers/                  # API controllers
│   │   ├── ResourcesController.cs
│   │   ├── VideosController.cs
│   │   ├── CertificationsController.cs
│   │   ├── AIHelperController.cs
│   │   └── LearningPathsController.cs
│   ├── Models/                       # Data models
│   ├── Program.cs                    # Application entry point
│   ├── database.db                   # SQLite database
│   ├── appsettings.json              # Configuration
│   └── QualityEducationAPI.csproj    # Project file
└── README.md                         # This file
```

### Adding New Features

1. **Frontend**: Add new JavaScript modules in `frontend/scripts/`
2. **Backend**: Create new controllers in `api/Controllers/`
3. **Database**: Add tables in `Program.cs` initialization
4. **Styling**: Use existing Mississippi color variables in CSS

## 🤝 Team Collaboration

This project is designed for team development with:
- Clear separation of concerns
- Modular architecture
- Consistent coding standards
- Comprehensive documentation

### For Team Members
- Use the established file structure
- Follow the Mississippi color scheme
- Test on multiple devices
- Document any new features

## 🌟 Success Metrics

Our definition of success is when this platform:
- ✅ Actively helps learners gain access to educational support
- ✅ Reduces barriers to education in Mississippi communities
- ✅ Provides quality resources for English, History, and STEM subjects
- ✅ Offers personalized learning assistance through AI

## 📄 License

This project is created for educational purposes as part of a competition to address quality education challenges.

---

**Mississippi Quality Education Platform** - Empowering students across Mississippi with quality educational resources and support.