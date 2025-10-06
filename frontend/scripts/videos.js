// Videos Page Module
class VideosPage {
  constructor(app) {
    this.app = app;
    this.videos = [];
    this.filteredVideos = [];
    this.currentSubject = 'all';
  }

  async render() {
    this.app.showLoading();
    
    try {
      await this.loadVideos();
      this.displayVideos();
    } catch (error) {
      console.error('Error loading videos:', error);
      this.app.showError('Failed to load educational videos. Please try again later.');
    }
  }

  async loadVideos() {
    // Mock data - will be replaced with API calls
    this.videos = [
      {
        id: 1,
        title: "Mississippi Civil Rights Movement: A Historical Overview",
        subject: "History",
        description: "Comprehensive overview of the Civil Rights Movement in Mississippi, featuring key events and figures.",
        duration: "45:30",
        difficulty: "Intermediate",
        thumbnail: "history",
        instructor: "Dr. Sarah Johnson"
      },
      {
        id: 2,
        title: "Algebra Basics: Solving Linear Equations",
        subject: "STEM",
        description: "Learn the fundamentals of solving linear equations with step-by-step examples and practice problems.",
        duration: "32:15",
        difficulty: "Beginner",
        thumbnail: "math",
        instructor: "Prof. Michael Chen"
      },
      {
        id: 3,
        title: "Literary Analysis: William Faulkner's 'The Sound and the Fury'",
        subject: "English",
        description: "Deep dive into Faulkner's masterpiece, exploring themes, narrative techniques, and literary significance.",
        duration: "58:45",
        difficulty: "Advanced",
        thumbnail: "english",
        instructor: "Dr. Emily Williams"
      },
      {
        id: 4,
        title: "Mississippi River Delta: Ecology and Conservation",
        subject: "STEM",
        description: "Explore the unique ecosystem of the Mississippi Delta and learn about conservation efforts.",
        duration: "38:20",
        difficulty: "Intermediate",
        thumbnail: "science",
        instructor: "Dr. Robert Martinez"
      },
      {
        id: 5,
        title: "Grammar Essentials: Subject-Verb Agreement",
        subject: "English",
        description: "Master subject-verb agreement rules with clear explanations and interactive exercises.",
        duration: "25:10",
        difficulty: "Beginner",
        thumbnail: "grammar",
        instructor: "Ms. Lisa Thompson"
      },
      {
        id: 6,
        title: "Mississippi Geography and Climate",
        subject: "History",
        description: "Comprehensive study of Mississippi's geography, climate patterns, and natural resources.",
        duration: "41:35",
        difficulty: "Beginner",
        thumbnail: "geography",
        instructor: "Dr. James Anderson"
      }
    ];
    
    this.filteredVideos = [...this.videos];
  }

  displayVideos() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-play-circle-fill me-2"></i>Educational Videos
              </h1>
              <p class="lead text-muted">Watch engaging video lessons from experienced educators</p>
            </div>
          </div>
        </div>

        <!-- Filter Section -->
        <div class="container mb-4">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-funnel-fill me-2"></i>Filter Videos
                  </h5>
                  <div class="row">
                    <div class="col-md-4">
                      <label for="videoSubjectFilter" class="form-label">Subject</label>
                      <select class="form-select" id="videoSubjectFilter" onchange="videosPage.filterBySubject(this.value)">
                        <option value="all">All Subjects</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="STEM">STEM</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="videoSearchInput" class="form-label">Search</label>
                      <input type="text" class="form-control" id="videoSearchInput" placeholder="Search videos..." onkeyup="videosPage.searchVideos(this.value)">
                    </div>
                    <div class="col-md-4">
                      <label for="difficultyFilter" class="form-label">Difficulty</label>
                      <select class="form-select" id="difficultyFilter" onchange="videosPage.filterByDifficulty(this.value)">
                        <option value="all">All Levels</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Videos Grid -->
        <div class="container mb-5">
          <div class="row" id="videosGrid">
            ${this.renderVideosGrid()}
          </div>
        </div>
      </div>
    `;
  }

  renderVideosGrid() {
    if (this.filteredVideos.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No videos found</h4>
            <p class="text-muted">Try adjusting your search criteria or browse all videos.</p>
          </div>
        </div>
      `;
    }

    return this.filteredVideos.map(video => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 video-card">
          <div class="video-thumbnail">
            <i class="bi bi-play-circle-fill" style="font-size: 4rem;"></i>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-primary">${video.subject}</span>
              <span class="badge bg-secondary">${video.difficulty}</span>
            </div>
            <h5 class="card-title">${video.title}</h5>
            <p class="card-text text-muted small">${video.description}</p>
            <div class="mb-3">
              <small class="text-muted">
                <i class="bi bi-clock me-1"></i>${video.duration} • 
                <i class="bi bi-person me-1"></i>${video.instructor}
              </small>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" onclick="videosPage.playVideo(${video.id})">
              <i class="bi bi-play-fill me-2"></i>Watch Video
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterBySubject(subject) {
    this.currentSubject = subject;
    this.applyFilters();
  }

  filterByDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    this.applyFilters();
  }

  searchVideos(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredVideos = this.videos.filter(video => {
      const matchesSubject = this.currentSubject === 'all' || video.subject === this.currentSubject;
      const matchesDifficulty = this.currentDifficulty === 'all' || video.difficulty === this.currentDifficulty;
      const matchesSearch = !this.searchQuery || 
        video.title.toLowerCase().includes(this.searchQuery) ||
        video.description.toLowerCase().includes(this.searchQuery) ||
        video.instructor.toLowerCase().includes(this.searchQuery);
      
      return matchesSubject && matchesDifficulty && matchesSearch;
    });

    // Update the videos grid
    const grid = document.getElementById('videosGrid');
    if (grid) {
      grid.innerHTML = this.renderVideosGrid();
    }
  }

  playVideo(videoId) {
    const video = this.videos.find(v => v.id === videoId);
    if (video) {
      // For now, show a modal with video information. Later this will integrate with a video player
      const modalHtml = `
        <div class="modal fade" id="videoModal" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${video.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div class="text-center mb-4">
                  <div class="video-thumbnail" style="height: 300px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, var(--ms-light-blue), var(--ms-light-red)); border-radius: 10px;">
                    <i class="bi bi-play-circle-fill text-ms-navy" style="font-size: 5rem;"></i>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p><strong>Subject:</strong> ${video.subject}</p>
                    <p><strong>Duration:</strong> ${video.duration}</p>
                    <p><strong>Difficulty:</strong> ${video.difficulty}</p>
                  </div>
                  <div class="col-md-6">
                    <p><strong>Instructor:</strong> ${video.instructor}</p>
                    <p><strong>Description:</strong></p>
                    <p class="text-muted">${video.description}</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="videosPage.startVideo(${video.id})">
                  <i class="bi bi-play-fill me-2"></i>Start Watching
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Remove existing modal if any
      const existingModal = document.getElementById('videoModal');
      if (existingModal) {
        existingModal.remove();
      }
      
      // Add modal to body
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      
      // Show modal
      const modal = new bootstrap.Modal(document.getElementById('videoModal'));
      modal.show();
    }
  }

  startVideo(videoId) {
    // This will be implemented with actual video integration
    alert(`Starting video ${videoId}. This feature will be implemented with video streaming integration.`);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('videoModal'));
    if (modal) {
      modal.hide();
    }
  }
}

// Expose VideosPage class to window for app.js to use
window.VideosPage = VideosPage;
