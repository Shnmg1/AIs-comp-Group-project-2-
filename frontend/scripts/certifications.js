// Certifications Page Module
class CertificationsPage {
  constructor(app) {
    this.app = app;
    this.certifications = [];
    this.filteredCertifications = [];
    this.currentSubject = 'all';
  }

  async render() {
    this.app.showLoading();
    
    try {
      await this.loadCertifications();
      this.displayCertifications();
    } catch (error) {
      console.error('Error loading certifications:', error);
      this.app.showError('Failed to load certifications. Please try again later.');
    }
  }

  async loadCertifications() {
    // Mock data - will be replaced with API calls
    this.certifications = [
      {
        id: 1,
        title: "Mississippi History Scholar",
        subject: "History",
        description: "Demonstrate mastery of Mississippi history from pre-colonial times to the present day.",
        requirements: "Complete 20 history modules, pass final exam with 85% or higher",
        estimatedTime: "40-50 hours",
        difficulty: "Advanced",
        provider: "Mississippi Department of Education",
        validity: "Lifetime",
        cost: "Free"
      },
      {
        id: 2,
        title: "Algebra Fundamentals Certificate",
        subject: "STEM",
        description: "Prove your understanding of basic algebraic concepts and problem-solving techniques.",
        requirements: "Complete algebra coursework, solve 50 practice problems, pass assessment",
        estimatedTime: "30-40 hours",
        difficulty: "Intermediate",
        provider: "Mississippi STEM Academy",
        validity: "2 years",
        cost: "Free"
      },
      {
        id: 3,
        title: "Advanced Literary Analysis",
        subject: "English",
        description: "Showcase your ability to analyze literature, particularly Mississippi authors.",
        requirements: "Analyze 10 literary works, write 3 essays, complete peer review",
        estimatedTime: "35-45 hours",
        difficulty: "Advanced",
        provider: "Mississippi Writers' Guild",
        validity: "3 years",
        cost: "$25"
      },
      {
        id: 4,
        title: "Environmental Science Explorer",
        subject: "STEM",
        description: "Learn about Mississippi's unique ecosystems and environmental challenges.",
        requirements: "Complete field study, research project, environmental impact assessment",
        estimatedTime: "25-35 hours",
        difficulty: "Intermediate",
        provider: "Mississippi Wildlife Federation",
        validity: "2 years",
        cost: "Free"
      },
      {
        id: 5,
        title: "Grammar and Composition Master",
        subject: "English",
        description: "Master essential grammar rules and composition techniques for academic writing.",
        requirements: "Complete grammar modules, write 5 essays, pass writing assessment",
        estimatedTime: "20-30 hours",
        difficulty: "Beginner",
        provider: "Mississippi Language Arts Council",
        validity: "2 years",
        cost: "Free"
      },
      {
        id: 6,
        title: "Mississippi Geography Expert",
        subject: "History",
        description: "Comprehensive understanding of Mississippi's geography, climate, and natural resources.",
        requirements: "Study state geography, complete mapping exercises, pass geography test",
        estimatedTime: "15-25 hours",
        difficulty: "Beginner",
        provider: "Mississippi Geographic Society",
        validity: "Lifetime",
        cost: "Free"
      }
    ];
    
    this.filteredCertifications = [...this.certifications];
  }

  displayCertifications() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-award-fill me-2"></i>Certifications
              </h1>
              <p class="lead text-muted">Earn recognized certifications to demonstrate your knowledge and skills</p>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="container mb-4">
          <div class="row">
            <div class="col-12">
              <div class="alert alert-info" role="alert">
                <h5 class="alert-heading">
                  <i class="bi bi-info-circle-fill me-2"></i>Why Earn Certifications?
                </h5>
                <p class="mb-0">
                  Certifications help you stand out to colleges and employers, demonstrate your commitment to learning, 
                  and provide official recognition of your skills and knowledge in specific subject areas.
                </p>
              </div>
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
                    <i class="bi bi-funnel-fill me-2"></i>Filter Certifications
                  </h5>
                  <div class="row">
                    <div class="col-md-4">
                      <label for="certSubjectFilter" class="form-label">Subject</label>
                      <select class="form-select" id="certSubjectFilter" onchange="certificationsPage.filterBySubject(this.value)">
                        <option value="all">All Subjects</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="STEM">STEM</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="certSearchInput" class="form-label">Search</label>
                      <input type="text" class="form-control" id="certSearchInput" placeholder="Search certifications..." onkeyup="certificationsPage.searchCertifications(this.value)">
                    </div>
                    <div class="col-md-4">
                      <label for="certDifficultyFilter" class="form-label">Difficulty</label>
                      <select class="form-select" id="certDifficultyFilter" onchange="certificationsPage.filterByDifficulty(this.value)">
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

        <!-- Certifications Grid -->
        <div class="container mb-5">
          <div class="row" id="certificationsGrid">
            ${this.renderCertificationsGrid()}
          </div>
        </div>
      </div>
    `;
  }

  renderCertificationsGrid() {
    if (this.filteredCertifications.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No certifications found</h4>
            <p class="text-muted">Try adjusting your search criteria or browse all certifications.</p>
          </div>
        </div>
      `;
    }

    return this.filteredCertifications.map(cert => `
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span class="badge bg-primary">${cert.subject}</span>
            <span class="badge ${cert.cost === 'Free' ? 'bg-success' : 'bg-warning'}">${cert.cost}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-award-fill text-ms-gold me-2"></i>${cert.title}
            </h5>
            <p class="card-text">${cert.description}</p>
            
            <div class="row mb-3">
              <div class="col-6">
                <small class="text-muted">
                  <i class="bi bi-clock me-1"></i>${cert.estimatedTime}
                </small>
              </div>
              <div class="col-6">
                <small class="text-muted">
                  <i class="bi bi-bar-chart me-1"></i>${cert.difficulty}
                </small>
              </div>
            </div>

            <div class="mb-3">
              <h6 class="text-ms-navy">Requirements:</h6>
              <p class="small text-muted">${cert.requirements}</p>
            </div>

            <div class="row mb-3">
              <div class="col-6">
                <small class="text-muted">
                  <strong>Provider:</strong> ${cert.provider}
                </small>
              </div>
              <div class="col-6">
                <small class="text-muted">
                  <strong>Valid:</strong> ${cert.validity}
                </small>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" onclick="certificationsPage.viewCertification(${cert.id})">
              <i class="bi bi-info-circle-fill me-2"></i>Learn More
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

  searchCertifications(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCertifications = this.certifications.filter(cert => {
      const matchesSubject = this.currentSubject === 'all' || cert.subject === this.currentSubject;
      const matchesDifficulty = this.currentDifficulty === 'all' || cert.difficulty === this.currentDifficulty;
      const matchesSearch = !this.searchQuery || 
        cert.title.toLowerCase().includes(this.searchQuery) ||
        cert.description.toLowerCase().includes(this.searchQuery) ||
        cert.provider.toLowerCase().includes(this.searchQuery);
      
      return matchesSubject && matchesDifficulty && matchesSearch;
    });

    // Update the certifications grid
    const grid = document.getElementById('certificationsGrid');
    if (grid) {
      grid.innerHTML = this.renderCertificationsGrid();
    }
  }

  viewCertification(certId) {
    const cert = this.certifications.find(c => c.id === certId);
    if (cert) {
      // Show detailed modal
      const modalHtml = `
        <div class="modal fade" id="certModal" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  <i class="bi bi-award-fill text-ms-gold me-2"></i>${cert.title}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div class="row mb-4">
                  <div class="col-md-6">
                    <span class="badge bg-primary fs-6">${cert.subject}</span>
                    <span class="badge ${cert.cost === 'Free' ? 'bg-success' : 'bg-warning'} fs-6 ms-2">${cert.cost}</span>
                  </div>
                  <div class="col-md-6 text-end">
                    <span class="badge bg-secondary fs-6">${cert.difficulty}</span>
                  </div>
                </div>

                <div class="mb-4">
                  <h6 class="text-ms-navy">Description</h6>
                  <p>${cert.description}</p>
                </div>

                <div class="mb-4">
                  <h6 class="text-ms-navy">Requirements</h6>
                  <p class="text-muted">${cert.requirements}</p>
                </div>

                <div class="row mb-4">
                  <div class="col-md-6">
                    <h6 class="text-ms-navy">Time Commitment</h6>
                    <p class="text-muted">
                      <i class="bi bi-clock me-1"></i>${cert.estimatedTime}
                    </p>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-ms-navy">Validity Period</h6>
                    <p class="text-muted">
                      <i class="bi bi-calendar-check me-1"></i>${cert.validity}
                    </p>
                  </div>
                </div>

                <div class="mb-4">
                  <h6 class="text-ms-navy">Provider</h6>
                  <p class="text-muted">
                    <i class="bi bi-building me-1"></i>${cert.provider}
                  </p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="certificationsPage.enrollInCertification(${cert.id})">
                  <i class="bi bi-person-plus-fill me-2"></i>Start Certification
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Remove existing modal if any
      const existingModal = document.getElementById('certModal');
      if (existingModal) {
        existingModal.remove();
      }
      
      // Add modal to body
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      
      // Show modal
      const modal = new bootstrap.Modal(document.getElementById('certModal'));
      modal.show();
    }
  }

  enrollInCertification(certId) {
    const cert = this.certifications.find(c => c.id === certId);
    if (cert) {
      // This will be implemented with backend integration
      alert(`Starting enrollment for: ${cert.title}\n\nThis feature will be implemented with user authentication and progress tracking.`);
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('certModal'));
      if (modal) {
        modal.hide();
      }
    }
  }
}

// Expose CertificationsPage class to window for app.js to use
window.CertificationsPage = CertificationsPage;
