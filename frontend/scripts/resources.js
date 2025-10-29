// Resources Page Module
class ResourcesPage {
  constructor(app) {
    this.app = app;
    this.resources = [];
    this.filteredResources = [];
    this.learningPaths = [];
    this.filteredLearningPaths = [];
    this.currentView = 'resources'; // 'resources' or 'learningPaths'
    this.currentSubject = 'all';
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentType = 'all';
    this.searchQuery = '';
    this.currentPathData = null; // Store current learning path data
    this.currentLessonData = null; // Store current lesson data
    this.questionAttempts = {}; // Track attempts per question to stage hints
  }

  async render() {
    this.app.showLoading();
    
    try {
      await this.loadResources();
      if (this.currentView === 'learningPaths' && this.learningPaths.length === 0) {
        await this.loadLearningPaths();
      }
      this.displayResources();
    } catch (error) {
      console.error('Error loading resources:', error);
      this.app.showError('Failed to load educational resources. Please try again later.');
    }
  }

  async loadResources() {
    try {
      const data = await this.app.makeApiCall('/resources');
      
      if (data) {
        // Filter out resources without URLs
        this.resources = data.filter(resource => 
          resource.contentUrl && 
          resource.contentUrl.trim() !== '' && 
          resource.contentUrl !== null
        );
        this.filteredResources = [...this.resources];
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
      this.resources = [];
      this.filteredResources = [];
    }
  }

  loadLearningPaths() {
    try {
      // Access the hardcoded learning paths data
      if (!window.LearningPathData) {
        console.warn('LearningPathData not available, learning paths may not be loaded yet');
        this.learningPaths = [];
        this.filteredLearningPaths = [];
        return;
      }
      
      const pathData = new window.LearningPathData();
      const allPaths = [];
      
      // Map subject names from the data structure to our filter system
      const subjectMap = {
        'Math': 'STEM',
        'Science': 'STEM',
        'STEM': 'STEM',
        'ELA': 'English',
        'English': 'English',
        'Social Studies': 'History',
        'History': 'History'
      };
      
      // Map grade names (normalize common variants)
      const gradeMap = {
        'Pre-K': 'Pre-K', 'PreK': 'Pre-K', 'Pre Kindergarten': 'Pre-K', 'Pre-Kindergarten': 'Pre-K',
        'K': 'K', 'Kindergarten': 'K',
        '1st': '1st', '1st Grade': '1st', 'First Grade': '1st',
        '2nd': '2nd', '2nd Grade': '2nd', 'Second Grade': '2nd',
        '3rd': '3rd', '3rd Grade': '3rd', 'Third Grade': '3rd',
        '4th': '4th', '4th Grade': '4th', 'Fourth Grade': '4th',
        '5th': '5th', '5th Grade': '5th', 'Fifth Grade': '5th',
        '6th': '6th', '6th Grade': '6th', 'Sixth Grade': '6th',
        '7th': '7th', '7th Grade': '7th', 'Seventh Grade': '7th',
        '8th': '8th', '8th Grade': '8th', 'Eighth Grade': '8th',
        '9th': '9th', '9th Grade': '9th', 'Ninth Grade': '9th',
        '10th': '10th', '10th Grade': '10th', 'Tenth Grade': '10th',
        '11th': '11th', '11th Grade': '11th', 'Eleventh Grade': '11th',
        '12th': '12th', '12th Grade': '12th', 'Twelfth Grade': '12th'
      };
      
      // Extract all paths from the hardcoded data structure
      // Structure: paths[grade][subject] = array of paths
      for (const grade in pathData.paths) {
        const gradePaths = pathData.paths[grade];
        for (const subject in gradePaths) {
          const pathsForSubject = gradePaths[subject];
          
          // Map each path to our format
          for (const path of pathsForSubject) {
            const mappedSubject = subjectMap[subject] || subject;
            let mappedGrade = gradeMap[grade] || gradeMap[grade?.trim?.()] || grade;
            // Fallback normalization: extract canonical grade token from strings like "9th Grade (English I)"
            if (!gradeMap[grade]) {
              const g = (grade || '').toString().toLowerCase();
              if (g.includes('pre-k')) mappedGrade = 'Pre-K';
              else if (g.includes('kindergarten') || g === 'k') mappedGrade = 'K';
              else {
                const m = g.match(/(\d{1,2})\s*th|\b(\d{1,2})\b/);
                if (m) {
                  const n = m[1] || m[2];
                  const suffix = n === '1' ? 'st' : n === '2' ? 'nd' : n === '3' ? 'rd' : 'th';
                  mappedGrade = `${n}${suffix}`;
                }
              }
            }
            
            allPaths.push({
              id: path.id,
              title: path.title,
              description: path.description,
              subject: mappedSubject,
              originalSubject: subject, // Keep original for reference
              grade: mappedGrade,
              originalGrade: grade, // Keep original for reference
              lessons: path.lessons || []
            });
          }
        }
      }
      
      this.learningPaths = allPaths;
      this.filteredLearningPaths = [...this.learningPaths];
      
      console.log(`Loaded ${this.learningPaths.length} learning paths from hardcoded data`);
    } catch (error) {
      console.error('Error loading learning paths:', error);
      this.learningPaths = [];
      this.filteredLearningPaths = [];
    }
  }

  toggleView(view) {
    this.currentView = view;
    
    // Always load learning paths if switching to that view and they're empty
    if (view === 'learningPaths' && this.learningPaths.length === 0) {
      this.loadLearningPaths();
    }
    
    // Apply filters and re-display
    this.applyFilters();
    this.displayResources();
  }

  displayResources() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row mb-3">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-book-fill me-2"></i>Educational Resources
              </h1>
              <p class="lead text-muted">Access comprehensive study materials and learning guides</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="btn-group" role="group">
                <input type="radio" class="btn-check" name="viewToggle" id="resourcesToggle" autocomplete="off" 
                       ${this.currentView === 'resources' ? 'checked' : ''} 
                       onchange="app.pageModules.resources.toggleView('resources')">
                <label class="btn btn-outline-primary" for="resourcesToggle">
                  <i class="bi bi-book me-2"></i>Resources
                </label>

                <input type="radio" class="btn-check" name="viewToggle" id="learningPathsToggle" autocomplete="off"
                       ${this.currentView === 'learningPaths' ? 'checked' : ''}
                       onchange="app.pageModules.resources.toggleView('learningPaths')">
                <label class="btn btn-outline-primary" for="learningPathsToggle">
                  <i class="bi bi-diagram-3 me-2"></i>Learning Paths
                </label>
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
                  <!-- School Level Selection -->
                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="school-level-buttons-container">
                        <button class="btn school-level-btn ${this.currentSchoolLevel === 'elementary' ? 'active' : ''}" id="elementaryBtn" onclick="app.pageModules.resources.selectSchoolLevel('elementary')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-house-door"></i>
                            <span class="fw-bold">Elementary School</span>
                            <small>K - 5th Grade</small>
                          </div>
                        </button>
                        <button class="btn school-level-btn ${this.currentSchoolLevel === 'middle' ? 'active' : ''}" id="middleBtn" onclick="app.pageModules.resources.selectSchoolLevel('middle')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-calculator"></i>
                            <span class="fw-bold">Middle School</span>
                            <small>6th - 8th Grade</small>
                          </div>
                        </button>
                        <button class="btn school-level-btn ${this.currentSchoolLevel === 'high' ? 'active' : ''}" id="highBtn" onclick="app.pageModules.resources.selectSchoolLevel('high')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-mortarboard"></i>
                            <span class="fw-bold">High School</span>
                            <small>9th - 12th Grade</small>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Grade Level Filter -->
                  <div class="row mb-4">
                    <div class="col-12">
                      <h6 class="text-ms-navy fw-bold mb-3">Filter by Specific Grade (Optional)</h6>
                      <div class="d-flex flex-wrap gap-2 mb-3" id="gradeButtons">
                        <!-- Grade buttons will be populated by JavaScript -->
                      </div>
                      <div class="d-flex align-items-center">
                        <i class="bi bi-info-circle text-primary me-2"></i>
                        <small class="text-muted">
                          ${this.currentView === 'resources' ? 'Resources are' : 'Learning paths are'} color-coded by grade. 
                          <span class="text-primary" style="cursor: pointer;" onclick="app.pageModules.resources.filterByGrade('all')">Click a grade to filter</span>, or 
                          <span class="text-primary" style="cursor: pointer;" onclick="app.pageModules.resources.filterByGrade('all')">view all grades</span> for your school level.
                        </small>
                      </div>
                    </div>
                  </div>

                  <!-- Additional Filters -->
                  <div class="row">
                    <div class="col-md-3">
                      <label for="resourceSubjectFilter" class="form-label">Subject</label>
                      <select class="form-select" id="resourceSubjectFilter" onchange="app.pageModules.resources.filterBySubject(this.value)">
                        <option value="all">All Subjects</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="STEM">STEM</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <label for="resourceTypeFilter" class="form-label">${this.currentView === 'resources' ? 'Resource Type' : 'Subject Type'}</label>
                      <select class="form-select" id="resourceTypeFilter" onchange="app.pageModules.resources.filterByType(this.value)">
                        <option value="all">All Types</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <label for="resourceSearchInput" class="form-label">Search</label>
                      <input type="text" class="form-control" id="resourceSearchInput" placeholder="Search by subject, topic, or keyword..." onkeyup="app.pageModules.resources.searchResources(this.value)">
                    </div>
                    <div class="col-md-3">
                      <label for="sortFilter" class="form-label">Sort</label>
                      <select class="form-select" id="sortFilter" onchange="app.pageModules.resources.sortItems(this.value)">
                        <option value="new">New</option>
                        <option value="old">Oldest</option>
                        <option value="title">Title</option>
                        ${this.currentView === 'resources' ? '<option value="difficulty">Difficulty</option>' : ''}
                      </select>
                    </div>
                  </div>

                  <!-- Action Buttons and Count -->
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <button class="btn btn-outline-secondary" onclick="app.pageModules.resources.clearAllFilters()">
                        <i class="bi bi-x-circle me-1"></i>Clear All Filters
                      </button>
                    </div>
                    <div class="col-md-6 text-end">
                      <div class="d-flex align-items-center justify-content-end">
                        <i class="bi bi-info-circle text-primary me-2"></i>
                        <small class="text-muted" id="resourceCount">Showing 0 ${this.currentView === 'resources' ? 'resources' : 'learning paths'}</small>
                      </div>
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
            ${this.currentView === 'resources' ? this.renderResourcesGrid() : this.renderLearningPathsGrid()}
          </div>
        </div>
      </div>
    `;
    
    // Populate grade buttons, type filter and update count after rendering
    setTimeout(() => {
      this.populateGradeButtons();
      this.populateTypeFilter();
      this.updateResourceCount();
    }, 100);
  }

  populateTypeFilter() {
    const typeFilter = document.getElementById('resourceTypeFilter');
    if (!typeFilter) return;

    const types = new Set(this.resources.map(r => r.type).filter(t => t));
    const currentValue = typeFilter.value;
    
    // Clear existing options except "All Types"
    typeFilter.innerHTML = '<option value="all">All Types</option>';
    
    // Add unique types
    Array.from(types).sort().forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      typeFilter.appendChild(option);
    });
    
    // Restore previous selection if still valid
    if (currentValue !== 'all' && types.has(currentValue)) {
      typeFilter.value = currentValue;
    }
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
        <div class="card h-100 resource-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-primary">${resource.subject || 'General'}</span>
              ${resource.difficulty ? `<span class="badge bg-secondary">${resource.difficulty}</span>` : ''}
            </div>
            <h5 class="card-title">${resource.title}</h5>
            <p class="card-text text-muted small">${resource.description || 'No description available.'}</p>
            <div class="mb-3">
              <small class="text-muted">
                ${resource.type ? `<i class="bi bi-file-earmark me-1"></i>${resource.type}` : ''}
                ${resource.estimatedTime ? ` • <i class="bi bi-clock me-1"></i>${resource.estimatedTime}` : ''}
              </small>
              ${resource.schoolLevel ? `<br><small class="text-muted"><i class="bi bi-mortarboard me-1"></i>${resource.schoolLevel}${resource.grade ? ` - Grade ${resource.grade}` : ''}</small>` : ''}
            </div>
          </div>
          <div class="card-footer">
            <a href="${resource.contentUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-100">
              <i class="bi bi-box-arrow-up-right me-2"></i>View Resource
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  async filterBySubject(subject) {
    this.currentSubject = subject;
    if (this.currentView === 'learningPaths') {
      await this.loadLearningPaths();
    }
    this.applyFilters();
    this.updateDisplay();
  }

  selectSchoolLevel(level) {
    this.currentSchoolLevel = level;
    this.currentGrade = 'all'; // Reset grade when changing school level
    
    // Update button states
    document.querySelectorAll('.school-level-btn').forEach(btn => btn.classList.remove('active'));
    const btnId = `${level}Btn`;
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.add('active');
    
    // Update grade buttons
    this.populateGradeButtons();
    
    // Apply filters
    this.applyFilters();
    this.updateDisplay();
  }

  getGradesForSchoolLevel(schoolLevel) {
    switch(schoolLevel) {
      case 'elementary':
        return [
          { value: 'pre-k', label: 'Pre-K' },
          { value: 'k', label: 'Kindergarten' },
          { value: '1', label: '1st Grade' },
          { value: '2', label: '2nd Grade' },
          { value: '3', label: '3rd Grade' },
          { value: '4', label: '4th Grade' },
          { value: '5', label: '5th Grade' }
        ];
      case 'middle':
        return [
          { value: '6', label: '6th Grade' },
          { value: '7', label: '7th Grade' },
          { value: '8', label: '8th Grade' }
        ];
      case 'high':
        return [
          { value: '9', label: '9th Grade' },
          { value: '10', label: '10th Grade' },
          { value: '11', label: '11th Grade' },
          { value: '12', label: '12th Grade' }
        ];
      default:
        return [];
    }
  }

  populateGradeButtons() {
    const gradeButtonsContainer = document.getElementById('gradeButtons');
    if (!gradeButtonsContainer) return;
    
    const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
    
    gradeButtonsContainer.innerHTML = grades.map(grade => `
      <button class="btn btn-outline-secondary grade-btn ${this.currentGrade === grade.value ? 'active' : ''}" onclick="app.pageModules.resources.filterByGrade('${grade.value}')" id="grade-${grade.value}">
        ${grade.label}
      </button>
    `).join('');
  }

  filterByGrade(grade) {
    this.currentGrade = grade;
    
    // Update grade button states
    document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
    if (grade !== 'all') {
      const gradeBtn = document.getElementById(`grade-${grade}`);
      if (gradeBtn) {
        gradeBtn.classList.add('active');
      }
    }
    
    // Apply filters
    this.applyFilters();
    this.updateDisplay();
  }

  filterByType(type) {
    this.currentType = type;
    this.applyFilters();
    this.updateDisplay();
  }

  searchResources(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
    this.updateDisplay();
  }

  sortItems(sortBy) {
    this.currentSort = sortBy;
    this.applyFilters();
    this.updateDisplay();
  }

  isSTEMSubject(subject) {
    if (!subject) return false;
    const subjectLower = subject.toLowerCase().trim();
    
    // STEM and its core subjects
    const stemSubjects = [
      'stem', 'science', 'biology', 'math', 'mathematics', 
      'chemistry', 'physics', 'algebra', 'geometry', 'calculus',
      'anatomy', 'zoology', 'botany', 'biochemistry', 'astronomy', 
      'geology', 'environmental science', 'physical science'
    ];
    
    // Check exact match
    if (stemSubjects.includes(subjectLower)) return true;
    
    // Check if subject contains STEM keywords as whole words
    return stemSubjects.some(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return regex.test(subjectLower);
    });
  }

  isHistorySubject(subject) {
    if (!subject) return false;
    const subjectLower = subject.toLowerCase().trim();
    
    // History and its variations
    const historySubjects = [
      'history', 'social studies', 'socialstudies', 'social-studies',
      'civics', 'government', 'geography', 'economics', 'world history',
      'us history', 'american history', 'mississippi history'
    ];
    
    // Check exact match
    if (historySubjects.includes(subjectLower)) return true;
    
    // Check if subject contains History keywords as whole words
    return historySubjects.some(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return regex.test(subjectLower);
    });
  }

  isEnglishSubject(subject) {
    if (!subject) return false;
    const subjectLower = subject.toLowerCase().trim();
    
    // English and its variations
    const englishSubjects = [
      'english', 'ela', 'english language arts', 'english-language-arts',
      'language arts', 'literature', 'reading', 'writing', 'grammar',
      'composition', 'language', 'literacy'
    ];
    
    // Check exact match
    if (englishSubjects.includes(subjectLower)) return true;
    
    // Check if subject contains English keywords as whole words
    return englishSubjects.some(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return regex.test(subjectLower);
    });
  }

  applyFilters() {
    // Apply filters to resources
    this.filteredResources = this.resources.filter(resource => {
      let matchesSubject = true;
      if (this.currentSubject !== 'all') {
        if (this.currentSubject === 'STEM') {
          matchesSubject = this.isSTEMSubject(resource.subject);
        } else if (this.currentSubject === 'History') {
          matchesSubject = this.isHistorySubject(resource.subject);
        } else if (this.currentSubject === 'English') {
          matchesSubject = this.isEnglishSubject(resource.subject);
        } else {
          matchesSubject = resource.subject === this.currentSubject;
        }
      }
      
      // Map school level format
      let matchesSchoolLevel = true;
      if (this.currentSchoolLevel !== 'all') {
        const schoolLevelMap = {
          'elementary': ['Elementary', 'elementary'],
          'middle': ['Middle', 'Middle School', 'middle', 'middle school'],
          'high': ['High', 'High School', 'high', 'high school']
        };
        const validLevels = schoolLevelMap[this.currentSchoolLevel] || [this.currentSchoolLevel];
        matchesSchoolLevel = validLevels.some(level => 
          resource.schoolLevel && resource.schoolLevel.toLowerCase().includes(level.toLowerCase())
        );
      }
      
      // Also filter by grade if specified
      let matchesGrade = true;
      if (this.currentGrade !== 'all' && this.currentGrade) {
        const gradeMap = {
          'pre-k': ['Pre-K', 'Pre-Kindergarten', 'pre-k', 'pre-kindergarten'],
          'k': ['K', 'Kindergarten', 'kindergarten'],
          '1': ['1st', '1st Grade', '1', 'First'],
          '2': ['2nd', '2nd Grade', '2', 'Second'],
          '3': ['3rd', '3rd Grade', '3', 'Third'],
          '4': ['4th', '4th Grade', '4', 'Fourth'],
          '5': ['5th', '5th Grade', '5', 'Fifth'],
          '6': ['6th', '6th Grade', '6', 'Sixth'],
          '7': ['7th', '7th Grade', '7', 'Seventh'],
          '8': ['8th', '8th Grade', '8', 'Eighth'],
          '9': ['9th', '9th Grade', '9', 'Ninth'],
          '10': ['10th', '10th Grade', '10', 'Tenth'],
          '11': ['11th', '11th Grade', '11', 'Eleventh'],
          '12': ['12th', '12th Grade', '12', 'Twelfth']
        };
        const gradeMatches = gradeMap[this.currentGrade] || [this.currentGrade];
        matchesGrade = resource.grade && gradeMatches.some(g => 
          resource.grade.toLowerCase().includes(g.toLowerCase())
        );
      }
      const matchesType = this.currentType === 'all' || resource.type === this.currentType;
      const matchesSearch = !this.searchQuery || 
        resource.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (resource.description && resource.description.toLowerCase().includes(this.searchQuery.toLowerCase()));

      return matchesSubject && matchesSchoolLevel && matchesType && matchesSearch && matchesGrade;
    });

    // Apply filters to learning paths
    this.filteredLearningPaths = this.learningPaths.filter(path => {
      let matchesSubject = true;
      if (this.currentSubject !== 'all') {
        if (this.currentSubject === 'STEM') {
          matchesSubject = this.isSTEMSubject(path.subject);
        } else if (this.currentSubject === 'History') {
          matchesSubject = this.isHistorySubject(path.subject);
        } else if (this.currentSubject === 'English') {
          matchesSubject = this.isEnglishSubject(path.subject);
        } else {
          matchesSubject = path.subject === this.currentSubject;
        }
      }
      
      // Filter by school level for learning paths (based on grade ranges)
      let matchesSchoolLevel = true;
      if (this.currentSchoolLevel !== 'all') {
        const gradeToLevel = {
          'Pre-K': 'elementary', 'pre-k': 'elementary', 'pre-kindergarten': 'elementary',
          'K': 'elementary',
          '1st': 'elementary', '2nd': 'elementary', '3rd': 'elementary',
          '4th': 'elementary', '5th': 'elementary',
          '6th': 'middle', '7th': 'middle', '8th': 'middle',
          '9th': 'high', '10th': 'high', '11th': 'high', '12th': 'high'
        };
        // Use normalized grade computed at load time
        const pathGrade = path.grade || path.originalGrade;
        const pathGradeLevel = gradeToLevel[pathGrade] || '';
        matchesSchoolLevel = pathGradeLevel === this.currentSchoolLevel;
      }
      
      // Convert school level to grade range for learning paths
      let matchesGrade = true;
      if (this.currentGrade !== 'all' && this.currentGrade) {
        // Map grade values to grade strings (e.g., '1' to '1st', '12' to '12th')
        const gradeMap = {
          'pre-k': ['Pre-K', 'pre-k'],
          'k': ['K', 'Pre-K'],
          '1': ['1st'],
          '2': ['2nd'],
          '3': ['3rd'],
          '4': ['4th'],
          '5': ['5th'],
          '6': ['6th'],
          '7': ['7th'],
          '8': ['8th'],
          '9': ['9th'],
          '10': ['10th'],
          '11': ['11th'],
          '12': ['12th']
        };
        const gradeMatches = gradeMap[this.currentGrade] || [this.currentGrade];
        // Match against normalized grade
        const pathGrade = path.grade || path.originalGrade;
        matchesGrade = gradeMatches.some(g => pathGrade === g || pathGrade.toLowerCase().includes(g.toLowerCase()));
      }
      const matchesSearch = !this.searchQuery || 
        path.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (path.description && path.description.toLowerCase().includes(this.searchQuery.toLowerCase()));

      return matchesSubject && matchesSchoolLevel && matchesGrade && matchesSearch;
    });

    // Apply sorting
    if (this.currentSort !== 'new') {
      this.filteredResources.sort((a, b) => {
        switch(this.currentSort) {
          case 'old':
            return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
          case 'title':
            return (a.title || '').localeCompare(b.title || '');
          case 'difficulty':
            const diffOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return (diffOrder[a.difficulty] || 0) - (diffOrder[b.difficulty] || 0);
          default:
            return 0;
        }
      });

      this.filteredLearningPaths.sort((a, b) => {
        switch(this.currentSort) {
          case 'old':
            // Learning paths don't have createdAt, so sort by title
            return (a.title || '').localeCompare(b.title || '');
          case 'title':
            return (a.title || '').localeCompare(b.title || '');
          default:
            return 0;
        }
      });
    } else {
      // New (default) - most recent first
      this.filteredResources.sort((a, b) => {
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      });
    }
  }

  updateDisplay() {
    const grid = document.getElementById('resourcesGrid');
    if (grid) {
      if (this.currentView === 'resources') {
        grid.innerHTML = this.renderResourcesGrid();
      } else {
        grid.innerHTML = this.renderLearningPathsGrid();
      }
    }
    this.updateResourceCount();
  }

  updateResourceCount() {
    const countElement = document.getElementById('resourceCount');
    if (countElement) {
      if (this.currentView === 'resources') {
        countElement.textContent = `Showing ${this.filteredResources.length} of ${this.resources.length} resources`;
      } else {
        countElement.textContent = `Showing ${this.filteredLearningPaths.length} of ${this.learningPaths.length} learning paths`;
      }
    }
  }

  renderLearningPathsGrid() {
    if (this.learningPaths.length === 0 && this.currentView === 'learningPaths') {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <div class="spinner-border mb-3" style="color: #002868;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h4 class="text-muted mt-3">Loading learning paths...</h4>
            <p class="text-muted">Please wait while we fetch available learning paths.</p>
          </div>
        </div>
      `;
    }
    
    if (this.filteredLearningPaths.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No learning paths found</h4>
            <p class="text-muted">Try adjusting your search criteria or browse all learning paths.</p>
            ${this.learningPaths.length > 0 ? '<p class="text-info small">Total learning paths available: ' + this.learningPaths.length + '</p>' : ''}
          </div>
        </div>
      `;
    }

    return this.filteredLearningPaths.map(path => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 learning-path-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge" style="background-color: #002868;">${path.subject || 'General'}</span>
              ${path.grade ? `<span class="badge bg-info">${path.grade}</span>` : ''}
            </div>
            <h5 class="card-title">${path.title || 'Untitled Learning Path'}</h5>
            <p class="card-text text-muted small">${path.description || 'No description available.'}</p>
          </div>
          <div class="card-footer">
            <button class="btn w-100" style="background-color: #002868; border-color: #002868; color: white;" onclick="app.pageModules.resources.viewLearningPath('${path.id}')">
              <i class="bi bi-play-circle me-2"></i>Start Learning Path
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  viewLearningPath(pathId) {
    try {
      // Find the learning path from hardcoded data
      const path = this.learningPaths.find(p => p.id === pathId);
      
      if (!path) {
        // Try to load from LearningPathData directly if not found in our list
        if (window.LearningPathData) {
          const pathData = new window.LearningPathData();
          
          // Search through all grades and subjects
          for (const grade in pathData.paths) {
            for (const subject in pathData.paths[grade]) {
              const foundPath = pathData.paths[grade][subject].find(p => p.id === pathId);
              if (foundPath) {
                const pathInfo = {
                  id: foundPath.id,
                  title: foundPath.title,
                  description: foundPath.description,
                  subject: subject,
                  grade: grade,
                  lessons: foundPath.lessons || []
                };
                this.displayLearningPathDetail(pathInfo);
                return;
              }
            }
          }
        }
        
        this.app.showError('Learning path not found.');
        return;
      }
      
      // Use the path we already have, convert to format expected by display function
      const pathInfo = {
        id: path.id,
        title: path.title,
        description: path.description,
        subject: path.originalSubject || path.subject,
        grade: path.originalGrade || path.grade,
        lessons: path.lessons || []
      };
      
      this.displayLearningPathDetail(pathInfo);
    } catch (error) {
      console.error('Error loading learning path:', error);
      this.app.showError('Failed to load learning path. Please try again later.');
    }
  }

  displayLearningPathDetail(pathData) {
    // Store current path data for navigation
    this.currentPathData = pathData;
    
    const app = document.getElementById('app');
    
    if (!pathData.lessons || pathData.lessons.length === 0) {
      app.innerHTML = `
        <div class="fade-in">
          <div class="container mt-4">
            <div class="row mb-3">
              <div class="col-12">
                <button class="btn btn-outline-secondary" onclick="app.pageModules.resources.displayResources(); app.pageModules.resources.toggleView('learningPaths');">
                  <i class="bi bi-arrow-left me-2"></i>Back to Learning Paths
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header text-white" style="background-color: #002868;">
                    <h2 class="mb-0">${pathData.title || 'Learning Path'}</h2>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <span class="badge me-2" style="background-color: #002868;">${pathData.subject || ''}</span>
                      ${pathData.grade ? `<span class="badge bg-info">${pathData.grade}</span>` : ''}
                    </div>
                    <p class="lead">${pathData.description || ''}</p>
                    <hr>
                    <p class="text-muted">No lessons available for this path.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      return;
    }
    
    const lessonsHtml = pathData.lessons.map((lesson, index) => {
      const lessonNumber = lesson.lessonNumber || index + 1;
      
      return `
        <div class="lesson-item mb-3">
          <div class="card border shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="flex-grow-1">
                  <h5 class="card-title mb-2 fw-bold">Lesson ${lessonNumber}</h5>
                  ${lesson.objective ? `<p class="text-muted mb-0">Objective: ${lesson.objective}</p>` : ''}
                </div>
                <button class="btn ms-3" style="background-color: #002868; border-color: #002868; color: white;" onclick="app.pageModules.resources.viewLesson('${pathData.id}', '${lesson.id}')">
                  Start Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    app.innerHTML = `
      <div class="fade-in">
        <!-- Back Button -->
        <div class="container mt-4 mb-3">
          <div class="row">
            <div class="col-12">
              <button class="btn btn-outline-secondary" onclick="app.pageModules.resources.displayResources(); app.pageModules.resources.toggleView('learningPaths');">
                <i class="bi bi-arrow-left me-2"></i>Back to Learning Paths
              </button>
            </div>
          </div>
        </div>
        
        <!-- Learning Path Header (Mississippi Blue) -->
        <div class="bg-navy text-white" style="padding: 2rem 0; background-color: #002868 !important;">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-globe text-white" style="font-size: 3rem;"></i>
                  <div class="flex-grow-1">
                    <h1 class="display-5 fw-bold text-white mb-3">${pathData.title || 'Learning Path'}</h1>
                    <p class="lead text-white mb-0" style="opacity: 0.95;">${pathData.description || ''}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Lessons List (White Background) -->
        <div class="container mt-4 mb-5">
          <div class="row">
            <div class="col-12">
              ${lessonsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  viewLesson(pathId, lessonId) {
    if (!this.currentPathData || this.currentPathData.id !== pathId) {
      // Try to find the path again
      const path = this.learningPaths.find(p => p.id === pathId);
      if (!path && window.LearningPathData) {
        const pathData = new window.LearningPathData();
        for (const grade in pathData.paths) {
          for (const subject in pathData.paths[grade]) {
            const foundPath = pathData.paths[grade][subject].find(p => p.id === pathId);
            if (foundPath) {
              this.currentPathData = {
                id: foundPath.id,
                title: foundPath.title,
                description: foundPath.description,
                subject: subject,
                grade: grade,
                lessons: foundPath.lessons || []
              };
              break;
            }
          }
        }
      } else if (path) {
        this.currentPathData = {
          id: path.id,
          title: path.title,
          description: path.description,
          subject: path.originalSubject || path.subject,
          grade: path.originalGrade || path.grade,
          lessons: path.lessons || []
        };
      }
    }
    
    if (!this.currentPathData) {
      this.app.showError('Learning path not found.');
      return;
    }
    
    const lesson = this.currentPathData.lessons.find(l => l.id === lessonId);
    if (!lesson) {
      this.app.showError('Lesson not found.');
      return;
    }
    
    const lessonNumber = lesson.lessonNumber || this.currentPathData.lessons.findIndex(l => l.id === lessonId) + 1;
    const hasPracticeQuestions = lesson.practiceQuestions && lesson.practiceQuestions.length > 0;
    
    // Extract title from content (first h3 tag) or use a default
    let contentTitle = '';
    let contentBody = lesson.content || '';
    
    if (lesson.content) {
      const h3Match = lesson.content.match(/<h3[^>]*>(.*?)<\/h3>/i);
      if (h3Match) {
        contentTitle = h3Match[1].replace(/<[^>]*>/g, '');
        contentBody = lesson.content.replace(/<h3[^>]*>.*?<\/h3>/i, '');
      }
    }
    
    // Generate practice questions HTML
    let practiceQuestionsHtml = '';
    if (hasPracticeQuestions) {
      practiceQuestionsHtml = lesson.practiceQuestions.map((q, qIndex) => {
        const questionNum = qIndex + 1;
        let questionInput = '';
        
        if (q.type === 'fill-in-blank') {
          questionInput = `
            <div class="d-flex gap-2 mt-3">
              <input type="text" class="form-control" id="answer-${pathId}-${lessonId}-${q.id}" placeholder="Enter your answer">
              <button class="btn" style="background-color: #002868; border-color: #002868; color: white;" onclick="app.pageModules.resources.submitAnswer('${pathId}', '${lessonId}', '${q.id}', document.getElementById('answer-${pathId}-${lessonId}-${q.id}').value)">
                Check Answer
              </button>
            </div>
            <div id="result-${pathId}-${lessonId}-${q.id}" class="mt-2"></div>
          `;
        } else if (q.type === 'multiple-choice') {
          const optionsHtml = q.options.map((opt, optIndex) => `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="question-${pathId}-${lessonId}-${q.id}" id="option-${pathId}-${lessonId}-${q.id}-${optIndex}" value="${opt}">
              <label class="form-check-label" for="option-${pathId}-${lessonId}-${q.id}-${optIndex}">
                ${opt}
              </label>
            </div>
          `).join('');
          
          questionInput = `
            <div class="mt-3">
              ${optionsHtml}
              <button class="btn mt-3" style="background-color: #002868; border-color: #002868; color: white;" onclick="const checked = document.querySelector('input[name=\\'question-${pathId}-${lessonId}-${q.id}\\']:checked'); app.pageModules.resources.submitAnswer('${pathId}', '${lessonId}', '${q.id}', checked ? checked.value : '')">
                Check Answer
              </button>
            </div>
            <div id="result-${pathId}-${lessonId}-${q.id}" class="mt-2"></div>
          `;
        }
        
        return `
          <div class="mb-4">
            <h5 class="fw-bold mb-2" style="color: #002868;">Question ${questionNum}</h5>
            <p class="fw-bold mb-0">${q.question}</p>
            ${questionInput}
          </div>
        `;
      }).join('');
    }
    
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <div class="container mt-4 mb-5">
          <!-- Back Button -->
          <div class="row mb-3">
            <div class="col-12">
              <button class="btn btn-outline-secondary" onclick="app.pageModules.resources.backToLessons('${pathId}')">
                <i class="bi bi-arrow-left me-2"></i>Back to Lessons
              </button>
            </div>
          </div>
          
          <!-- Reading Content -->
          <div class="row mb-4">
            <div class="col-12">
              <div class="card border shadow-sm">
                <div class="card-body p-4">
                  ${contentTitle ? `<h2 class="fw-bold mb-3" style="color: #002868;">${contentTitle}</h2>` : ''}
                  <div class="lesson-content" style="line-height: 1.8; font-size: 1.05rem;">
                    ${contentBody || '<p class="text-muted">No content available for this lesson.</p>'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Practice Questions Section -->
          ${hasPracticeQuestions ? `
            <div class="row">
              <div class="col-12">
                <div class="text-white p-3 mb-4" style="background-color: #002868;">
                  <div class="d-flex align-items-center">
                    <div class="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style="width: 40px; height: 40px; flex-shrink: 0;">
                      <i class="bi bi-question-circle text-white"></i>
                    </div>
                    <h4 class="mb-0 text-white fw-bold">Practice Questions</h4>
                  </div>
                </div>
                
                <div class="card border shadow-sm">
                  <div class="card-body p-4">
                    ${practiceQuestionsHtml}
                  </div>
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
      
      <style>
        .lesson-content h1, .lesson-content h2, .lesson-content h3 {
          color: #1a365d;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        .lesson-content p {
          margin-bottom: 1rem;
          color: #212529;
        }
        .lesson-content ul, .lesson-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }
        .lesson-content li {
          margin-bottom: 0.5rem;
        }
      </style>
    `;
    
    // Store lesson data for answer checking
    this.currentLessonData = { pathId, lessonId, lesson };
    // Reset attempts state for this lesson
    Object.keys(this.questionAttempts).forEach(k => { if (k.startsWith(`${pathId}:${lessonId}:`)) delete this.questionAttempts[k]; });
  }

  backToLessons(pathId) {
    if (this.currentPathData && this.currentPathData.id === pathId) {
      this.displayLearningPathDetail(this.currentPathData);
      return;
    }
    
    // Need to find the path data
    const path = this.learningPaths.find(p => p.id === pathId);
    if (path) {
      this.currentPathData = {
        id: path.id,
        title: path.title,
        description: path.description,
        subject: path.originalSubject || path.subject,
        grade: path.originalGrade || path.grade,
        lessons: path.lessons || []
      };
      this.displayLearningPathDetail(this.currentPathData);
      return;
    }
    
    // Try loading from LearningPathData
    if (window.LearningPathData) {
      const pathData = new window.LearningPathData();
      for (const grade in pathData.paths) {
        for (const subject in pathData.paths[grade]) {
          const foundPath = pathData.paths[grade][subject].find(p => p.id === pathId);
          if (foundPath) {
            this.currentPathData = {
              id: foundPath.id,
              title: foundPath.title,
              description: foundPath.description,
              subject: subject,
              grade: grade,
              lessons: foundPath.lessons || []
            };
            this.displayLearningPathDetail(this.currentPathData);
            return;
          }
        }
      }
    }
    
    this.app.showError('Learning path not found.');
  }

  submitAnswer(pathId, lessonId, questionId, answer) {
    if (!this.currentLessonData || this.currentLessonData.pathId !== pathId || this.currentLessonData.lessonId !== lessonId) {
      return;
    }
    const questionKey = `${pathId}:${lessonId}:${questionId}`;
    this.questionAttempts[questionKey] = (this.questionAttempts[questionKey] || 0) + 1;
    const attempts = this.questionAttempts[questionKey];

    const question = this.currentLessonData.lesson.practiceQuestions.find(q => q.id === questionId);
    if (!question) return;

    const resultDiv = document.getElementById(`result-${pathId}-${lessonId}-${questionId}`);
    if (!resultDiv) return;

    const norm = (v) => (v || '').toString().trim().toLowerCase();
    const isCorrect = norm(answer) === norm(question.correctAnswer);

    if (isCorrect) {
      resultDiv.innerHTML = `
        <div class="alert alert-success mb-2">
          <i class="bi bi-check-circle me-2"></i>Correct! Well done.
        </div>
      `;
      return;
    }

    // Wrong answer: show staged hints first
    const hints = Array.isArray(question.hints) ? question.hints : [];
    const hintsToShow = hints.slice(0, Math.min(attempts, hints.length));
    const allHintsUsed = attempts > hints.length;

    const hintsHtml = hintsToShow.length
      ? `
        <div class="mt-3">
          <div class="fw-bold mb-2">Hints:</div>
          ${hintsToShow.map(h => `<div class=\"alert alert-warning py-2 mb-2\">${h}</div>`).join('')}
        </div>
      `
      : '';

    const headerHtml = `
      <div class="alert ${allHintsUsed ? 'alert-danger' : 'alert-danger'} mb-0">
        <i class="bi bi-x-circle me-2"></i>${allHintsUsed ? 'Not quite. The correct answer is shown below.' : 'Not quite. Let me help you!'}
      </div>
    `;

    const correctHtml = allHintsUsed
      ? `<div class="mt-3"><span class="badge bg-danger">Correct Answer</span> <strong class="ms-2">${question.correctAnswer}</strong></div>`
      : '';

    resultDiv.innerHTML = headerHtml + hintsHtml + correctHtml;
  }

  clearAllFilters() {
    this.currentSubject = 'all';
    this.currentSchoolLevel = 'elementary';
    this.currentGrade = 'all';
    this.currentType = 'all';
    this.currentSort = 'new';
    this.searchQuery = '';
    
    // Reset form elements
    document.getElementById('resourceSubjectFilter').value = 'all';
    document.getElementById('resourceTypeFilter').value = 'all';
    document.getElementById('resourceSearchInput').value = '';
    document.getElementById('sortFilter').value = 'new';
    
    // Reset school level buttons
    document.querySelectorAll('.school-level-btn').forEach(btn => btn.classList.remove('active'));
    const elementaryBtn = document.getElementById('elementaryBtn');
    if (elementaryBtn) elementaryBtn.classList.add('active');
    
    // Reset grade buttons
    document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
    
    // Update grade buttons for elementary school
    this.populateGradeButtons();
    
    this.applyFilters();
    this.updateDisplay();
  }
}

// Expose ResourcesPage class to window for app.js to use
window.ResourcesPage = ResourcesPage;

