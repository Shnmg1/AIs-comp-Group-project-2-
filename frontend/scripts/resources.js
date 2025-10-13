// Resources Page Module - Fixed with School Level Filters and Correct IXL URLs
class ResourcesPage {
  constructor(app) {
    this.app = app;
    this.resources = [];
    this.filteredResources = [];
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.searchQuery = '';
  }

  async render() {
    console.log('ResourcesPage render() called');
    
    // Load resources from API with fallback to mock data
    try {
      const response = await fetch('http://localhost:5000/api/resources');
      if (response.ok) {
        this.resources = await response.json();
        console.log('API resources loaded:', this.resources.length);
      } else {
        throw new Error('API not available');
      }
    } catch (error) {
      console.log('Using mock resources due to API error:', error.message);
      this.resources = this.getMockResources();
    }
    
    this.filteredResources = [];
    
    // Reset filters
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.searchQuery = '';
    
    this.showResourcesWithAllFilters();
  }

  showResourcesWithAllFilters() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="resources-page">
        <!-- Page Header -->
        <div class="resources-header">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1>
                  <i class="bi bi-book-fill me-2"></i>Educational Resources
                </h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Breadcrumb -->
        <div class="breadcrumb-container">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" onclick="app.showHome()">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Resources</li>
              </ol>
            </nav>
          </div>
        </div>

        <!-- Contextual Intro -->
        <div class="contextual-intro">
          <div class="container">
            <h6>
              <i class="bi bi-lightbulb me-2"></i>
              Explore educational resources aligned with Mississippi standards
            </h6>
          </div>
        </div>

        <!-- Main Content -->
        <div class="container">
          <!-- School Level Selection -->
          <div class="row mb-4">
            <div class="col-12">
              <h3>Select Your School Level:</h3>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <button class="btn school-level-card ${this.currentSchoolLevel === 'Elementary' ? 'active' : ''}" onclick="resourcesPage.selectSchoolLevel('Elementary')">
                    <div class="school-level-content">
                      <i class="bi bi-house-fill school-level-icon"></i>
                      <h6>Elementary School</h6>
                      <small>K - 5th Grade</small>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn school-level-card ${this.currentSchoolLevel === 'Middle School' ? 'active' : ''}" onclick="resourcesPage.selectSchoolLevel('Middle School')">
                    <div class="school-level-content">
                      <i class="bi bi-building school-level-icon"></i>
                      <h6>Middle School</h6>
                      <small>6th - 8th Grade</small>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn school-level-card ${this.currentSchoolLevel === 'High School' ? 'active' : ''}" onclick="resourcesPage.selectSchoolLevel('High School')">
                    <div class="school-level-content">
                      <i class="bi bi-mortarboard school-level-icon"></i>
                      <h6>High School</h6>
                      <small>9th - 12th Grade</small>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filters -->
          <div class="row mb-4" id="filtersSection">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-funnel me-2"></i>Filter and Search Resources
                  </h5>
                  
                  <!-- Search Bar -->
                  <div class="row mb-3">
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-search"></i>
                        </span>
                        <input type="text" class="form-control" id="searchInput" 
                               placeholder="Search for specific exercises (e.g., 'addition', 'reading', 'science')" 
                               value="${this.searchQuery}"
                               onkeyup="resourcesPage.handleSearch()">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <button class="btn btn-outline-secondary w-100" onclick="resourcesPage.clearFilters()">
                        <i class="bi bi-x-circle me-2"></i>Clear Filters
                      </button>
                    </div>
                  </div>

                  <!-- Filters Row -->
                  <div class="row">
                    <!-- Grade Filter -->
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Grade Level:</label>
                      <select class="form-select" id="gradeFilter" onchange="resourcesPage.handleGradeFilter()">
                        <option value="all">All Grades</option>
                        ${this.getAllGradeOptions()}
                      </select>
                    </div>

                    <!-- Subject Filter -->
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Subject:</label>
                      <select class="form-select" id="subjectFilter" onchange="resourcesPage.handleSubjectFilter()">
                        <option value="all">All Subjects</option>
                        <option value="Math">Math</option>
                        <option value="ELA">ELA</option>
                        <option value="Social Studies">Social Studies</option>
                        <option value="Science">Science</option>
                      </select>
                    </div>

                    <!-- Sort Filter -->
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Sort By:</label>
                      <select class="form-select" id="sortFilter" onchange="resourcesPage.handleSortFilter()">
                        <option value="title">Title A-Z</option>
                        <option value="grade">Grade Level</option>
                        <option value="subject">Subject</option>
                        <option value="difficulty">Difficulty</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Results Summary -->
          <div class="row mb-4" id="resultsSummary" style="display: ${this.currentSchoolLevel === 'all' ? 'none' : 'block'};">
            <div class="col-12">
              <div class="alert alert-info">
                <h5><i class="bi bi-info-circle me-2"></i>Found ${this.filteredResources.length} resources</h5>
                <p class="mb-0">
                  ${this.searchQuery ? `Searching for: "${this.searchQuery}"` : ''}
                  ${this.currentSchoolLevel !== 'all' ? ` • School Level: ${this.currentSchoolLevel}` : ''}
                  ${this.currentGrade !== 'all' ? ` • Grade: ${this.currentGrade}` : ''}
                  ${this.currentSubject !== 'all' ? ` • Subject: ${this.currentSubject}` : ''}
                </p>
              </div>
            </div>
          </div>

          <!-- Resources Grid - Only show below filters -->
          <div class="row" id="resourcesGrid">
            ${this.renderResourcesGrid()}
          </div>
        </div>
      </div>
    `;
    
    // Set the current filter values after the DOM is updated
    this.setFilterValues();
  }

  handleSearch() {
    const searchInput = document.getElementById('searchInput');
    this.searchQuery = searchInput.value.toLowerCase().trim();
    this.applyFilters();
  }

  selectSchoolLevel(level) {
    console.log('Selecting school level:', level);
    this.currentSchoolLevel = level;
    this.currentGrade = 'all'; // Reset grade when school level changes
    
    // Apply filters to show resources for the selected school level
    this.applyFilters();
    
    // Update the school level button states
    this.updateSchoolLevelButtons();
  }

  handleSchoolLevelFilter() {
    const schoolLevelFilter = document.getElementById('schoolLevelFilter');
    this.currentSchoolLevel = schoolLevelFilter.value;
    this.applyFilters();
  }

  handleGradeFilter() {
    const gradeFilter = document.getElementById('gradeFilter');
    this.currentGrade = gradeFilter.value;
    this.applyFilters();
  }

  handleSubjectFilter() {
    const subjectFilter = document.getElementById('subjectFilter');
    this.currentSubject = subjectFilter.value;
    this.applyFilters();
  }

  handleSortFilter() {
    const sortFilter = document.getElementById('sortFilter');
    this.sortResources(sortFilter.value);
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
      filtered = filtered.filter(resource => resource.subject === this.currentSubject);
    }

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(this.searchQuery) ||
        resource.description.toLowerCase().includes(this.searchQuery) ||
        resource.subject.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredResources = filtered;
    
    // Update only the results display instead of recreating the entire UI
    this.updateResultsDisplay();
  }

  sortResources(sortBy) {
    this.filteredResources.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'grade':
          return this.getGradeOrder(a.grade) - this.getGradeOrder(b.grade);
        case 'subject':
          return a.subject.localeCompare(b.subject);
        case 'difficulty':
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return 0;
      }
    });
    
    // Update only the results display to show sorted results
    this.updateResultsDisplay();
  }

  updateResultsDisplay() {
    // Ensure filters section is always visible
    const filtersSection = document.getElementById('filtersSection');
    if (filtersSection) {
      filtersSection.style.display = 'block';
    }
    
    // Show/hide results summary based on school level selection
    const resultsSummaryContainer = document.getElementById('resultsSummary');
    if (resultsSummaryContainer) {
      resultsSummaryContainer.style.display = this.currentSchoolLevel === 'all' ? 'none' : 'block';
    }
    
    // Update results summary
    const resultsSummary = document.querySelector('.alert-info h5');
    const resultsDetails = document.querySelector('.alert-info p');
    
    if (resultsSummary) {
      resultsSummary.innerHTML = `<i class="bi bi-info-circle me-2"></i>Found ${this.filteredResources.length} resources`;
    }
    
    if (resultsDetails) {
      let details = '';
      if (this.searchQuery) details += `Searching for: "${this.searchQuery}"`;
      if (this.currentSchoolLevel !== 'all') details += (details ? ' • ' : '') + `School Level: ${this.currentSchoolLevel}`;
      if (this.currentGrade !== 'all') details += (details ? ' • ' : '') + `Grade: ${this.currentGrade}`;
      if (this.currentSubject !== 'all') details += (details ? ' • ' : '') + `Subject: ${this.currentSubject}`;
      resultsDetails.textContent = details || 'Showing all resources';
    }

    // Update resources grid
    const resourcesGrid = document.getElementById('resourcesGrid');
    if (resourcesGrid) {
      resourcesGrid.innerHTML = this.renderResourcesGrid();
    }
  }

  setFilterValues() {
    // Set the current filter values in the form elements
    const searchInput = document.getElementById('searchInput');
    const gradeFilter = document.getElementById('gradeFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    
    if (searchInput) searchInput.value = this.searchQuery;
    if (gradeFilter) gradeFilter.value = this.currentGrade;
    if (subjectFilter) subjectFilter.value = this.currentSubject;
  }

  updateSchoolLevelButtons() {
    // Update the visual state of school level buttons
    const buttons = document.querySelectorAll('.school-level-card');
    buttons.forEach(button => {
      button.classList.remove('active');
      const buttonText = button.querySelector('h6').textContent;
      if ((buttonText === 'Elementary School' && this.currentSchoolLevel === 'Elementary') ||
          (buttonText === 'Middle School' && this.currentSchoolLevel === 'Middle School') ||
          (buttonText === 'High School' && this.currentSchoolLevel === 'High School')) {
        button.classList.add('active');
      }
    });
  }

  clearFilters() {
    this.searchQuery = '';
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    
    // Refresh the entire UI
    this.showResourcesWithAllFilters();
  }

  renderResourcesGrid() {
    // If no school level is selected, show instruction to select one
    if (this.currentSchoolLevel === 'all') {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-mortarboard display-1 text-primary"></i>
            <h3 class="mt-3">Select a School Level</h3>
            <p class="text-muted">Choose your school level above to view available educational resources</p>
          </div>
        </div>
      `;
    }
    
    if (this.filteredResources.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search display-1 text-muted"></i>
            <h3 class="mt-3">No resources found</h3>
            <p class="text-muted">Try adjusting your search or filters</p>
            <button class="btn btn-primary" onclick="resourcesPage.clearFilters()">
              Clear All Filters
            </button>
          </div>
        </div>
      `;
    }

    return this.filteredResources.map(resource => {
      // Fix IXL URLs to use the correct format
      const fixedUrl = this.fixIXLUrl(resource.contentUrl);
      
      return `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card resource-card h-100">
            <div class="card-body">
              <!-- Clean Header with Grade and Subject -->
              <div class="d-flex justify-content-between align-items-start mb-3">
                <span class="badge grade-badge" style="background-color: ${this.getGradeBadgeColor(resource.grade)}; color: white;">
                  ${resource.grade}
                </span>
                <span class="badge bg-primary">${resource.subject}</span>
              </div>
              
              <!-- Title -->
              <h5 class="card-title">${resource.title}</h5>
              
              <!-- Description -->
              <p class="card-text text-muted small">${resource.description}</p>
              
              <!-- Difficulty and Time (Compact) -->
              <div class="d-flex gap-2 mb-3">
                <span class="badge bg-warning text-dark">${resource.difficulty}</span>
                <span class="badge bg-info text-white">${resource.estimatedTime}</span>
              </div>
            </div>
            
            <!-- Clean Footer -->
            <div class="card-footer bg-transparent">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" onclick="window.open('${fixedUrl}', '_blank')">
                  <i class="bi bi-play-circle me-2"></i>Start Exercise
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  fixIXLUrl(originalUrl) {
    // Fix IXL URLs to use the correct format that works
    if (!originalUrl || originalUrl.includes('prek://')) {
      return 'https://www.ixl.com/';
    }
    
    // For IXL URLs, we need to use the skill format
    // Original: https://www.ixl.com/math/kindergarten/count-up-to-5
    // Fixed: https://www.ixl.com/math/kindergarten/count-up-to-5 (this should work)
    
    // If it's already a proper IXL URL, return it
    if (originalUrl.startsWith('https://www.ixl.com/')) {
      return originalUrl;
    }
    
    // Otherwise, return the IXL homepage
    return 'https://www.ixl.com/';
  }

  getAllGradeOptions() {
    const allGrades = [
      'Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade',
      '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'
    ];
    
    return allGrades.map(grade => 
      `<option value="${grade}">${grade}</option>`
    ).join('');
  }

  getGradeOrder(grade) {
    const gradeOrder = {
      'Pre-K': -1, 'Kindergarten': 0, '1st Grade': 1, '2nd Grade': 2, '3rd Grade': 3,
      '4th Grade': 4, '5th Grade': 5, '6th Grade': 6, '7th Grade': 7,
      '8th Grade': 8, '9th Grade': 9, '10th Grade': 10, '11th Grade': 11, '12th Grade': 12
    };
    return gradeOrder[grade] || 999;
  }

  getGradeBadgeColor(grade) {
    const colors = {
      'Pre-K': '#FF6B6B', 'Kindergarten': '#4ECDC4', '1st Grade': '#45B7D1',
      '2nd Grade': '#96CEB4', '3rd Grade': '#FFEAA7', '4th Grade': '#DDA0DD',
      '5th Grade': '#98D8C8', '6th Grade': '#F7DC6F', '7th Grade': '#BB8FCE',
      '8th Grade': '#85C1E9', '9th Grade': '#F8C471', '10th Grade': '#82E0AA',
      '11th Grade': '#F1948A', '12th Grade': '#6C757D'
    };
    return colors[grade] || '#6C757D';
  }

  getMockResources() {
    // This would be replaced with actual API data
    return [
      {
        id: 1,
        title: "K: Count to 5",
        subject: "STEM",
        description: "Count objects up to 5",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/count-up-to-5",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString()
      }
      // ... more mock resources
    ];
  }
}

// Export ResourcesPage to window for global access
window.ResourcesPage = ResourcesPage;
