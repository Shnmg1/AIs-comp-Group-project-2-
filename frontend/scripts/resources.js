// Resources Page Module
class ResourcesPage {
  constructor(app) {
    this.app = app;
    this.resources = [];
    this.filteredResources = [];
    this.currentSubject = 'all';
  }

  async render() {
    this.app.showLoading();
    
    try {
      await this.loadResources();
      this.displayResources();
    } catch (error) {
      console.error('Error loading resources:', error);
      this.app.showError('Failed to load educational resources. Please try again later.');
    }
  }

  async loadResources() {
    // For now, we'll use mock data. Later this will be replaced with API calls
    this.resources = [
      {
        id: 1,
        title: "Mississippi History: The Civil Rights Movement",
        subject: "History",
        description: "Comprehensive study guide covering key events, figures, and impacts of the Civil Rights Movement in Mississippi.",
        type: "Study Guide",
        difficulty: "Intermediate",
        estimatedTime: "2-3 hours"
      },
      {
        id: 2,
        title: "Algebra Fundamentals",
        subject: "STEM",
        description: "Step-by-step guide to algebraic concepts including variables, equations, and problem-solving strategies.",
        type: "Practice Exercises",
        difficulty: "Beginner",
        estimatedTime: "3-4 hours"
      },
      {
        id: 3,
        title: "Mississippi Literature Analysis",
        subject: "English",
        description: "Analysis of prominent Mississippi authors including William Faulkner, Eudora Welty, and Richard Wright.",
        type: "Reading Material",
        difficulty: "Advanced",
        estimatedTime: "4-5 hours"
      },
      {
        id: 4,
        title: "Biology: Mississippi Ecosystems",
        subject: "STEM",
        description: "Explore the unique ecosystems of Mississippi including the Gulf Coast, Delta, and Piney Woods regions.",
        type: "Interactive Guide",
        difficulty: "Intermediate",
        estimatedTime: "2-3 hours"
      },
      {
        id: 5,
        title: "Grammar and Writing Skills",
        subject: "English",
        description: "Essential grammar rules, punctuation, and essay writing techniques for academic success.",
        type: "Practice Exercises",
        difficulty: "Beginner",
        estimatedTime: "3-4 hours"
      },
      {
        id: 6,
        title: "Mississippi Geography",
        subject: "History",
        description: "Comprehensive overview of Mississippi's geography, climate, and natural resources.",
        type: "Study Guide",
        difficulty: "Beginner",
        estimatedTime: "1-2 hours"
      }
    ];
    
    this.filteredResources = [...this.resources];
  }

  displayResources() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-book-fill me-2"></i>Educational Resources
              </h1>
              <p class="lead text-muted">Explore comprehensive learning materials for English, History, and STEM subjects</p>
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
                    <i class="bi bi-funnel-fill me-2"></i>Filter Resources
                  </h5>
                  <div class="row">
                    <div class="col-md-6">
                      <label for="subjectFilter" class="form-label">Subject</label>
                      <select class="form-select" id="subjectFilter" onchange="resourcesPage.filterBySubject(this.value)">
                        <option value="all">All Subjects</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="STEM">STEM</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="searchInput" class="form-label">Search</label>
                      <input type="text" class="form-control" id="searchInput" placeholder="Search resources..." onkeyup="resourcesPage.searchResources(this.value)">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources Grid -->
        <div class="container mb-5">
          <div class="row" id="resourcesGrid">
            ${this.renderResourcesGrid()}
          </div>
        </div>
      </div>
    `;
  }

  renderResourcesGrid() {
    if (this.filteredResources.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No resources found</h4>
            <p class="text-muted">Try adjusting your search criteria or browse all resources.</p>
          </div>
        </div>
      `;
    }

    return this.filteredResources.map(resource => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span class="badge bg-primary">${resource.subject}</span>
            <span class="badge bg-secondary">${resource.type}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${resource.title}</h5>
            <p class="card-text">${resource.description}</p>
            <div class="mb-3">
              <small class="text-muted">
                <i class="bi bi-clock me-1"></i>${resource.estimatedTime} • 
                <i class="bi bi-bar-chart me-1"></i>${resource.difficulty}
              </small>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" onclick="resourcesPage.openResource(${resource.id})">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>Access Resource
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

  searchResources(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredResources = this.resources.filter(resource => {
      const matchesSubject = this.currentSubject === 'all' || resource.subject === this.currentSubject;
      const matchesSearch = !this.searchQuery || 
        resource.title.toLowerCase().includes(this.searchQuery) ||
        resource.description.toLowerCase().includes(this.searchQuery);
      
      return matchesSubject && matchesSearch;
    });

    // Update the resources grid
    const grid = document.getElementById('resourcesGrid');
    if (grid) {
      grid.innerHTML = this.renderResourcesGrid();
    }
  }

  openResource(resourceId) {
    const resource = this.resources.find(r => r.id === resourceId);
    if (resource) {
      // For now, show an alert. Later this will open the actual resource
      alert(`Opening resource: ${resource.title}\n\nThis feature will be implemented with the backend integration.`);
    }
  }
}

// Expose ResourcesPage class to window for app.js to use
window.ResourcesPage = ResourcesPage;
