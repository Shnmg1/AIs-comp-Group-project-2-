// Home Page Module
class HomePage {
  constructor(app) {
    this.app = app;
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Hero Section -->
        <div class="hero-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h1 class="hero-title">
                  <img src="../frontend/Resources/Mississippi Flower.png" alt="MS Quality Education" class="me-3" style="height: 64px; width: auto; opacity: 0.9;">
                  Mississippi Quality Education Platform
                </h1>
                <p class="hero-subtitle">
                  Empowering Mississippi students with quality educational resources in English, History, and STEM subjects.
                  Access videos, certifications, and AI-powered learning assistance.
                </p>
                <div class="mt-4">
                  <button class="btn btn-warning btn-lg me-3" onclick="showResources()">
                    <i class="bi bi-book-fill me-2"></i>Explore Resources
                  </button>
                  <button class="btn btn-outline-light btn-lg me-3" onclick="showAITutor()">
                    <i class="bi bi-robot me-2"></i>Get Help Now
                  </button>
                  <button class="btn btn-outline-light btn-lg" onclick="showHelp()">
                    <i class="bi bi-question-circle me-2"></i>FAQ & Support
                  </button>
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <img src="../frontend/Resources/Mississippi Flower.png" alt="MS Quality Education" style="max-width: 100%; height: 200px; width: auto; opacity: 0.8;">
              </div>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="container my-5">
          <div class="row text-center mb-5">
            <div class="col-12">
              <h2 class="display-5 fw-bold text-ms-navy mb-3">How We Help Students Succeed</h2>
              <p class="lead text-muted">Comprehensive educational support designed for Mississippi students</p>
            </div>
          </div>

          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100 subject-card">
                <div class="card-body text-center">
                  <i class="bi bi-book-fill text-ms-red" style="font-size: 3rem;"></i>
                  <h5 class="card-title mt-3">Educational Resources</h5>
                  <p class="card-text">
                    Access comprehensive study materials, practice exercises, and learning guides for English, History, and STEM subjects.
                  </p>
                  <button class="btn btn-primary" onclick="showResources()">
                    View Resources
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card h-100 subject-card">
                <div class="card-body text-center">
                  <i class="bi bi-play-circle-fill text-ms-red" style="font-size: 3rem;"></i>
                  <h5 class="card-title mt-3">Educational Videos</h5>
                  <p class="card-text">
                    Watch engaging video lessons created by experienced educators to enhance your understanding of complex topics.
                  </p>
                  <button class="btn btn-primary" onclick="showVideos()">
                    Watch Videos
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card h-100 subject-card">
                <div class="card-body text-center">
                  <i class="bi bi-award-fill text-ms-red" style="font-size: 3rem;"></i>
                  <h5 class="card-title mt-3">Certifications</h5>
                  <p class="card-text">
                    Earn recognized certifications in various subjects to demonstrate your knowledge and skills to colleges and employers.
                  </p>
                  <button class="btn btn-primary" onclick="showCertifications()">
                    View Certifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Helper Section -->
        <div class="container my-5">
          <div class="row">
            <div class="col-12">
              <div class="card bg-ms-light-blue">
                <div class="card-body text-center p-5">
                  <i class="bi bi-robot text-ms-navy" style="font-size: 4rem;"></i>
                  <h3 class="card-title mt-3 text-ms-navy">AI Learning Assistant</h3>
                  <p class="card-text lead">
                    Stuck on a problem? Our AI assistant will guide you through step-by-step solutions 
                    to help you learn, not just get answers.
                  </p>
                  <button class="btn btn-warning btn-lg" onclick="showAITutor()">
                    <i class="bi bi-chat-dots-fill me-2"></i>Start Learning with AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="container my-5">
          <div class="row text-center">
            <div class="col-md-3 mb-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="display-6 text-ms-red fw-bold">500+</h3>
                  <p class="text-muted">Educational Resources</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="display-6 text-ms-red fw-bold">200+</h3>
                  <p class="text-muted">Video Lessons</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="display-6 text-ms-red fw-bold">50+</h3>
                  <p class="text-muted">Certifications Available</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="display-6 text-ms-red fw-bold">24/7</h3>
                  <p class="text-muted">AI Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h5 class="text-ms-gold">Mississippi Quality Education Platform</h5>
                <p class="mb-0">Empowering students across Mississippi with quality educational resources and support.</p>
              </div>
              <div class="col-md-6 text-md-end">
                <p class="mb-0">
                  <i class="bi bi-geo-alt-fill me-1"></i>
                  Supporting Mississippi Students Statewide
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `;
  }
}

// Expose HomePage class to window for app.js to use
window.HomePage = HomePage;
