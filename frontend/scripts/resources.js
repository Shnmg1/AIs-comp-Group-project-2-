// Resources Page Module - Comprehensive Filter Interface
class ResourcesPage {
  constructor(app) {
    this.app = app;
    this.resources = [];
    this.filteredResources = [];
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.currentResourceType = 'all';
    this.currentSort = 'newest';
    this.searchQuery = '';
    this.isDataLoaded = false;
    this.isLoading = false;
  }

  async render() {
    console.log('ResourcesPage render() called');
    
    // Show loading state immediately
    this.showLoadingState();
    
    // Load resources only if not already loaded
    if (!this.isDataLoaded) {
      await this.loadResources();
    } else {
      // Data already loaded, just display it
      this.displayResources();
    }
  }

  showLoadingState() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Header -->
        <div class="hero-section bg-gradient-primary text-white py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h1 class="display-4 fw-bold mb-3">
                  <i class="bi bi-book me-3"></i>Educational Resources
                </h1>
                <p class="lead mb-4">
                  Discover comprehensive educational resources aligned with Mississippi standards. 
                  Filter by school level, grade, subject, and resource type to find exactly what you need.
                </p>
              </div>
              <div class="col-lg-4 text-center">
                <div class="hero-stats">
                  <div class="stat-item">
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mb-0 mt-2">Loading Resources...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading Content -->
        <div class="container my-5">
          <div class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h4 class="text-muted">Loading educational resources...</h4>
            <p class="text-muted">This will only take a moment.</p>
          </div>
        </div>
      </div>
    `;
  }

  async loadResources() {
    if (this.isLoading) return; // Prevent multiple simultaneous loads
    
    this.isLoading = true;
    
    try {
      // Try API with shorter timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
      
      const response = await fetch('http://localhost:5000/api/resources', {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        this.resources = await response.json();
        console.log('API resources loaded:', this.resources.length);
      } else {
        throw new Error('API not available');
      }
    } catch (error) {
      console.log('Using mock resources due to API error:', error.message);
      this.resources = this.getMockResources();
    } finally {
      this.isLoading = false;
      this.isDataLoaded = true;
    }

    this.filteredResources = [...this.resources];
    this.displayResources();
  }

  displayResources() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Header -->
        <div class="hero-section bg-gradient-primary text-white py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h1 class="display-4 fw-bold mb-3">
                  <i class="bi bi-book me-3"></i>Educational Resources
                </h1>
                <p class="lead mb-4">
                  Discover comprehensive educational resources aligned with Mississippi standards. 
                  Filter by school level, grade, subject, and resource type to find exactly what you need.
                </p>
              </div>
              <div class="col-lg-4 text-center">
                <div class="hero-stats">
                  <div class="stat-item">
                    <h3 class="fw-bold">${this.resources.length}</h3>
                    <p class="mb-0">Total Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="container my-5">
          <!-- Filter Interface -->
          <div class="filter-interface mb-5">
            <!-- School Level Tabs -->
            <div class="school-level-tabs mb-4">
              <h4 class="filter-section-title mb-3">
                <i class="bi bi-mortarboard me-2"></i>Select School Level
              </h4>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${this.currentSchoolLevel === 'Elementary' ? 'active' : ''}" 
                          onclick="resourcesPage.selectSchoolLevel('Elementary')">
                    <i class="bi bi-house-fill"></i>
                    <div class="tab-content">
                      <h5>Elementary</h5>
                      <span>K - 5th Grade</span>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${this.currentSchoolLevel === 'Middle School' ? 'active' : ''}" 
                          onclick="resourcesPage.selectSchoolLevel('Middle School')">
                    <i class="bi bi-calculator"></i>
                    <div class="tab-content">
                      <h5>Middle School</h5>
                      <span>6th - 8th Grade</span>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${this.currentSchoolLevel === 'High School' ? 'active' : ''}" 
                          onclick="resourcesPage.selectSchoolLevel('High School')">
                    <i class="bi bi-mortarboard"></i>
                    <div class="tab-content">
                      <h5>High School</h5>
                      <span>9th - 12th Grade</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Grade Filter -->
            <div class="grade-filter mb-4" id="gradeFilter" style="display: ${this.currentSchoolLevel === 'all' ? 'none' : 'block'};">
              <h4 class="filter-section-title mb-3">
                <i class="bi bi-123 me-2"></i>Select Grade
              </h4>
              <div class="grade-buttons">
                ${this.getGradeButtons()}
              </div>
            </div>

            <!-- Filter Controls -->
            <div class="filter-controls mb-4">
              <div class="row">
                <!-- Subject Filter -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-book me-1"></i>Subject
                  </label>
                  <select class="filter-dropdown" id="subjectFilter" onchange="resourcesPage.handleSubjectFilter()">
                    <option value="all">All Subjects</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="STEM">STEM (Science & Math)</option>
                  </select>
                </div>

                <!-- Resource Type Filter -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-collection me-1"></i>Resource Type
                  </label>
                  <select class="filter-dropdown" id="resourceTypeFilter" onchange="resourcesPage.handleResourceTypeFilter()">
                    <option value="all">All Types</option>
                    <option value="Interactive Practice">Interactive Practice</option>
                    <option value="Interactive Game">Interactive Game</option>
                    <option value="Study Guide">Study Guide</option>
                    <option value="Reading Material">Reading Material</option>
                    <option value="Video">Video</option>
                    <option value="Article">Article</option>
                  </select>
                </div>

                <!-- Search Box -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-search me-1"></i>Search
                  </label>
                  <div class="search-box">
                    <input type="text" class="search-input" id="searchInput" 
                           placeholder="Search by keywords, topic, or subject..." 
                           value="${this.searchQuery}"
                           onkeyup="resourcesPage.handleSearch()">
                    <i class="bi bi-search search-icon"></i>
                  </div>
                </div>

                <!-- Sort Dropdown -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-sort-down me-1"></i>Sort By
                  </label>
                  <select class="filter-dropdown" id="sortFilter" onchange="resourcesPage.handleSortFilter()">
                    <option value="newest">Newest</option>
                    <option value="popular">Popular</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="grade">Grade Level</option>
                    <option value="subject">Subject</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Action Bar -->
            <div class="action-bar">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <button class="clear-filters-btn" onclick="resourcesPage.clearAllFilters()">
                    <i class="bi bi-x-circle me-2"></i>Clear All Filters
                  </button>
                </div>
                <div class="col-md-6 text-md-end">
                  <div class="results-count">
                    <i class="bi bi-info-circle me-1"></i>
                    Showing <span class="count-number">${this.filteredResources.length}</span> of <span class="total-number">${this.resources.length}</span> resources
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resources Grid -->
          <div class="resources-grid">
            ${this.getResourcesGrid()}
          </div>
        </div>
      </div>
    `;

    // Apply initial filters after HTML is rendered
    setTimeout(() => {
      this.applyFilters();
    }, 100);
  }

  getGradeButtons() {
    const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
    return grades.map(grade => `
      <button class="grade-btn ${this.currentGrade === grade ? 'active' : ''}" 
              onclick="resourcesPage.selectGrade('${grade}')">
        ${grade}
      </button>
    `).join('');
  }

  getGradesForSchoolLevel(schoolLevel) {
    switch(schoolLevel) {
      case 'Elementary':
        return ['Pre-K', 'K', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
      case 'Middle School':
        return ['6th Grade', '7th Grade', '8th Grade'];
      case 'High School':
        return ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];
      default:
        return [];
    }
  }

  getResourcesGrid() {
    if (this.filteredResources.length === 0) {
      return `
        <div class="no-results">
          <div class="text-center py-5">
            <i class="bi bi-search display-1 text-muted mb-3"></i>
            <h3 class="text-muted">No resources found</h3>
            <p class="text-muted">Try adjusting your filters or search terms to find what you're looking for.</p>
            <button class="btn btn-primary" onclick="resourcesPage.clearAllFilters()">
              <i class="bi bi-arrow-clockwise me-2"></i>Clear All Filters
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div class="row">
        ${this.filteredResources.map(resource => `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="resource-card h-100">
              <div class="resource-header">
                <div class="resource-badges">
                  <span class="badge badge-subject">${resource.subject}</span>
                  <span class="badge badge-grade">Grade ${resource.grade}</span>
                </div>
                <div class="resource-type">
                  <i class="bi bi-${this.getResourceTypeIcon(resource.type)}"></i>
                </div>
              </div>
              <div class="resource-body">
                <h5 class="resource-title">${resource.title}</h5>
                <p class="resource-description">${resource.description}</p>
                <div class="resource-meta">
                  <div class="meta-item">
                    <i class="bi bi-clock me-1"></i>
                    <span>${resource.estimatedTime}</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-star me-1"></i>
                    <span>${resource.difficulty}</span>
                  </div>
                </div>
              </div>
              <div class="resource-footer">
                <button class="btn btn-primary w-100" onclick="resourcesPage.openResource(${resource.id})">
                  <i class="bi bi-play-fill me-2"></i>Start Learning
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  getResourceTypeIcon(type) {
    const icons = {
      'Interactive Practice': 'pencil-square',
      'Interactive Game': 'controller',
      'Study Guide': 'book',
      'Reading Material': 'file-text',
      'Video': 'play-circle',
      'Article': 'newspaper',
      'Worksheet': 'file-earmark-text',
      'Assessment': 'clipboard-check'
    };
    return icons[type] || 'file';
  }

  // Filter Methods
  selectSchoolLevel(level) {
    this.currentSchoolLevel = this.currentSchoolLevel === level ? 'all' : level;
    this.currentGrade = 'all'; // Reset grade when changing school level
    this.applyFilters();
    this.displayResources();
  }

  selectGrade(grade) {
    this.currentGrade = this.currentGrade === grade ? 'all' : grade;
    this.applyFilters();
    this.displayResources();
  }

  handleSubjectFilter() {
    const filter = document.getElementById('subjectFilter');
    this.currentSubject = filter.value;
    this.applyFilters();
  }

  handleResourceTypeFilter() {
    const filter = document.getElementById('resourceTypeFilter');
    this.currentResourceType = filter.value;
    this.applyFilters();
  }

  handleSearch() {
    const searchInput = document.getElementById('searchInput');
    this.searchQuery = searchInput.value.toLowerCase();
    this.applyFilters();
  }

  handleSortFilter() {
    const filter = document.getElementById('sortFilter');
    this.currentSort = filter.value;
    this.sortResources();
  }

  clearAllFilters() {
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.currentResourceType = 'all';
    this.currentSort = 'newest';
    this.searchQuery = '';
    
    // Reset form elements
    if (document.getElementById('subjectFilter')) {
      document.getElementById('subjectFilter').value = 'all';
    }
    if (document.getElementById('resourceTypeFilter')) {
      document.getElementById('resourceTypeFilter').value = 'all';
    }
    if (document.getElementById('sortFilter')) {
      document.getElementById('sortFilter').value = 'newest';
    }
    if (document.getElementById('searchInput')) {
      document.getElementById('searchInput').value = '';
    }
    
    this.applyFilters();
    this.displayResources();
  }

  applyFilters() {
    let filtered = [...this.resources];

    // Apply school level filter
    if (this.currentSchoolLevel !== 'all') {
      filtered = filtered.filter(resource => resource.schoolLevel === this.currentSchoolLevel);
    }

    // Apply grade filter
    if (this.currentGrade !== 'all') {
      filtered = filtered.filter(resource => resource.grade === this.currentGrade);
    }

    // Apply subject filter
    if (this.currentSubject !== 'all') {
      if (this.currentSubject === 'STEM') {
        filtered = filtered.filter(resource => 
          resource.subject === 'STEM' || 
          resource.subject === 'Science' || 
          resource.subject === 'Math'
        );
      } else {
        filtered = filtered.filter(resource => resource.subject === this.currentSubject);
      }
    }

    // Apply resource type filter
    if (this.currentResourceType !== 'all') {
      filtered = filtered.filter(resource => resource.type === this.currentResourceType);
    }

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(this.searchQuery) ||
        resource.description.toLowerCase().includes(this.searchQuery) ||
        resource.subject.toLowerCase().includes(this.searchQuery) ||
        (this.searchQuery.includes('math') && resource.subject === 'STEM') ||
        (this.searchQuery.includes('science') && resource.subject === 'STEM')
      );
    }

    this.filteredResources = filtered;
    this.sortResources();
    this.updateResultsCount();
  }

  sortResources() {
    this.filteredResources.sort((a, b) => {
      switch (this.currentSort) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'popular':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'grade':
          return this.getGradeOrder(a.grade) - this.getGradeOrder(b.grade);
        case 'subject':
          return a.subject.localeCompare(b.subject);
        default:
          return 0;
      }
    });
  }

  getGradeOrder(grade) {
    const order = {
      'Pre-K': -1, 'K': 0, '1st Grade': 1, '2nd Grade': 2, '3rd Grade': 3, '4th Grade': 4, '5th Grade': 5,
      '6th Grade': 6, '7th Grade': 7, '8th Grade': 8, '9th Grade': 9, '10th Grade': 10,
      '11th Grade': 11, '12th Grade': 12
    };
    return order[grade] || 999;
  }

  updateResultsCount() {
    const countElement = document.querySelector('.count-number');
    const totalElement = document.querySelector('.total-number');
    if (countElement) countElement.textContent = this.filteredResources.length;
    if (totalElement) totalElement.textContent = this.resources.length;
  }

  openResource(resourceId) {
    const resource = this.resources.find(r => r.id === resourceId);
    if (resource && resource.contentUrl) {
      window.open(resource.contentUrl, '_blank');
    }
  }

  getMockResources() {
    return [
      {
        id: 1,
        title: "Pre-K: Count Pictures Up to 3",
        subject: "STEM",
        description: "Count pictures up to 3",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/count-pictures-up-to-3",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 98
      },
      {
        id: 2,
        title: "K: Count Blocks Up to 10",
        subject: "STEM",
        description: "Count blocks up to 10",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/count-blocks-up-to-10",
        schoolLevel: "Elementary",
        grade: "K",
        createdAt: new Date().toISOString(),
        popularity: 95
      },
      {
        id: 3,
        title: "1st Grade: Addition Facts",
        subject: "STEM",
        description: "Practice addition facts up to 20",
        type: "Interactive Game",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/addition-facts",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 88
      },
      {
        id: 4,
        title: "2nd Grade: Reading Comprehension",
        subject: "English",
        description: "Improve reading comprehension skills",
        type: "Reading Material",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/reading-comprehension",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 92
      },
      {
        id: 5,
        title: "3rd Grade: Multiplication Tables",
        subject: "STEM",
        description: "Master multiplication tables 1-12",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/multiplication-tables",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 90
      },
      {
        id: 6,
        title: "4th Grade: Fractions",
        subject: "STEM",
        description: "Understand fractions and decimals",
        type: "Study Guide",
        difficulty: "Intermediate",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/fractions",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 85
      },
      {
        id: 7,
        title: "5th Grade: Science - Ecosystems",
        subject: "STEM",
        description: "Learn about different ecosystems",
        type: "Video",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.youtube.com/watch?v=example",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 87
      },
      {
        id: 8,
        title: "6th Grade: Ancient Civilizations",
        subject: "History",
        description: "Explore ancient civilizations",
        type: "Article",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://example.com/ancient-civilizations",
        schoolLevel: "Middle School",
        grade: "6th Grade",
        createdAt: new Date().toISOString(),
        popularity: 82
      },
      {
        id: 9,
        title: "7th Grade: Algebra Basics",
        subject: "STEM",
        description: "Introduction to algebraic concepts",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "35-40 minutes",
        contentUrl: "https://www.ixl.com/math/grade-7/algebra",
        schoolLevel: "Middle School",
        grade: "7th Grade",
        createdAt: new Date().toISOString(),
        popularity: 89
      },
      {
        id: 10,
        title: "8th Grade: Chemistry Fundamentals",
        subject: "STEM",
        description: "Basic chemistry concepts and reactions",
        type: "Study Guide",
        difficulty: "Advanced",
        estimatedTime: "40-45 minutes",
        contentUrl: "https://example.com/chemistry-fundamentals",
        schoolLevel: "Middle School",
        grade: "8th Grade",
        createdAt: new Date().toISOString(),
        popularity: 84
      },
      {
        id: 11,
        title: "9th Grade: World History",
        subject: "History",
        description: "Comprehensive world history overview",
        type: "Video",
        difficulty: "Advanced",
        estimatedTime: "45-50 minutes",
        contentUrl: "https://www.youtube.com/watch?v=example",
        schoolLevel: "High School",
        grade: "9th Grade",
        createdAt: new Date().toISOString(),
        popularity: 91
      },
      {
        id: 12,
        title: "10th Grade: Advanced Algebra",
        subject: "STEM",
        description: "Advanced algebraic concepts and functions",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "50-55 minutes",
        contentUrl: "https://www.ixl.com/math/grade-10/algebra",
        schoolLevel: "High School",
        grade: "10th Grade",
        createdAt: new Date().toISOString(),
        popularity: 86
      },
      {
        id: 13,
        title: "11th Grade: American Literature",
        subject: "English",
        description: "Study of American literary works",
        type: "Reading Material",
        difficulty: "Advanced",
        estimatedTime: "60-65 minutes",
        contentUrl: "https://example.com/american-literature",
        schoolLevel: "High School",
        grade: "11th Grade",
        createdAt: new Date().toISOString(),
        popularity: 88
      },
      {
        id: 14,
        title: "12th Grade: Calculus",
        subject: "STEM",
        description: "Introduction to calculus concepts",
        type: "Study Guide",
        difficulty: "Advanced",
        estimatedTime: "70-75 minutes",
        contentUrl: "https://www.ixl.com/math/grade-12/calculus",
        schoolLevel: "High School",
        grade: "12th Grade",
        createdAt: new Date().toISOString(),
        popularity: 93
      }
    ];
  }
}

// Export ResourcesPage to window for global access
window.ResourcesPage = ResourcesPage;