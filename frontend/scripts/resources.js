// Resources Page Module - Comprehensive Filter Interface
class ResourcesPage {
  constructor(app) {
    this.app = app;
    this.resources = [];
    this.filteredResources = [];
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.currentSort = 'newest';
    this.searchQuery = '';
    this.learningPathData = null;
    this.currentView = 'resources'; // 'resources' or 'learning-path' or 'lesson'
    this.currentPath = null;
    this.currentLesson = null;
    this.isDataLoaded = false;
    this.isLoading = false;
    // Initialize activity handlers
    if (typeof ActivityHandlers !== 'undefined') {
      this.activityHandlers = new ActivityHandlers(this);
    }
  }

  async render(view = 'resources') {
    console.log('ResourcesPage render() called with view:', view);
    this.currentView = view;
    
    if (view === 'resources') {
      // Show loading state immediately
      this.showLoadingState();
      
      // Load resources only if not already loaded
      if (!this.isDataLoaded) {
        await this.loadResources();
      } else {
        // Data already loaded, just display it
        this.displayResources();
      }
    } else if (view === 'learning-paths') {
      this.displayLearningPaths();
    } else if (view === 'lesson') {
      this.displayLesson();
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
        const apiResources = await response.json();
        
        // Normalize field names (handle both camelCase and PascalCase from API)
        const normalizedApiResources = apiResources.map(r => ({
          ...r,
          schoolLevel: r.schoolLevel || r.SchoolLevel || '',
          grade: r.grade || r.Grade || '',
          subject: r.subject || r.Subject || '',
          title: r.title || r.Title || '',
          description: r.description || r.Description || '',
          type: r.type || r.Type || '',
          contentUrl: r.contentUrl || r.ContentUrl || '',
          difficulty: r.difficulty || r.Difficulty || '',
          estimatedTime: r.estimatedTime || r.EstimatedTime || '',
          createdAt: r.createdAt || r.CreatedAt || new Date().toISOString()
        }));
        
        this.resources = normalizedApiResources;
        console.log('API resources loaded:', this.resources.length);
        
        // Get mock resources as supplement
        const mockResources = this.getMockResources();
        this.resources = [...normalizedApiResources, ...mockResources];
        console.log('Total resources (API + Mock):', this.resources.length);
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
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => this.displayResources(), 0);
  }

  displayLearningPaths() {
    console.log('displayLearningPaths called');
    const app = document.getElementById('app');
    
    // Initialize learning path data if not already done
    if (!this.learningPathData && window.LearningPathData) {
      this.learningPathData = new window.LearningPathData();
    }
    
    // Check if current grade belongs to current school level
    if (this.currentGrade !== 'all' && this.currentGrade && this.currentSchoolLevel !== 'all') {
      const validGrades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
      if (!validGrades.includes(this.currentGrade)) {
        // Grade doesn't belong to current school level, reset to all
        this.currentGrade = 'all';
      }
    }
    
    const grade = this.currentGrade || 'all';
    const subject = this.currentSubject;
    const schoolLevel = this.currentSchoolLevel || 'all';
    
    // Check if learning path data is available
    if (!this.learningPathData) {
      console.error('learningPathData is null - LearningPathData class not available');
      app.innerHTML = `
        <div class="alert alert-danger">
          <i class="bi bi-exclamation-triangle me-2"></i>Learning paths data not loaded. Please refresh the page.
        </div>
      `;
      return;
    }
    console.log('learningPathData is available, currentSchoolLevel:', this.currentSchoolLevel, 'currentGrade:', grade);
    
    // Get all learning paths for the selected school level's grades only
    let allGrades = [];
    if (this.currentSchoolLevel === 'Elementary') {
      allGrades = ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
    } else if (this.currentSchoolLevel === 'Middle School') {
      allGrades = ['6th Grade', '7th Grade', '8th Grade'];
    } else if (this.currentSchoolLevel === 'High School') {
      allGrades = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];
    } else {
      // If no school level selected, show all
      allGrades = ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
    }
    
    let allPaths = [];
    
    allGrades.forEach(gradeKey => {
      const mathPaths = this.learningPathData.getAllPaths(gradeKey, 'Math') || [];
      const elaPaths = this.learningPathData.getAllPaths(gradeKey, 'ELA') || [];
      const sciencePaths = this.learningPathData.getAllPaths(gradeKey, 'Science') || [];
      const socialStudiesPaths = this.learningPathData.getAllPaths(gradeKey, 'Social Studies') || [];
      
      console.log(gradeKey, '- Math:', mathPaths.length, 'ELA:', elaPaths.length, 'Science:', sciencePaths.length, 'SS:', socialStudiesPaths.length);
      
      // Debug: Check if paths data exists for this grade
      console.log('Paths data for', gradeKey, ':', !!this.learningPathData.paths[gradeKey], 'Keys:', Object.keys(this.learningPathData.paths || {}));
      
      // Determine school level for each path
      let schoolLevel = 'Elementary';
      if (['6th Grade', '7th Grade', '8th Grade'].includes(gradeKey)) {
        schoolLevel = 'Middle School';
      } else if (['9th Grade', '10th Grade', '11th Grade', '12th Grade'].includes(gradeKey)) {
        schoolLevel = 'High School';
      }
      
      // Add paths with their grade label
      mathPaths.forEach(p => allPaths.push({...p, subject: 'Math', grade: gradeKey, schoolLevel: schoolLevel}));
      elaPaths.forEach(p => allPaths.push({...p, subject: 'English', grade: gradeKey, schoolLevel: schoolLevel}));
      sciencePaths.forEach(p => allPaths.push({...p, subject: 'Science', grade: gradeKey, schoolLevel: schoolLevel}));
      socialStudiesPaths.forEach(p => allPaths.push({...p, subject: 'Social Studies', grade: gradeKey, schoolLevel: schoolLevel}));
    });
    
    console.log('All paths:', allPaths.length);
    
    app.innerHTML = `
      <div class="fade-in">
        <div class="hero-section bg-gradient-primary text-white py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h1 class="display-4 fw-bold mb-3">
                      <i class="bi bi-book me-3"></i>Learning Paths
                    </h1>
                    <p class="lead mb-0">
                      Explore comprehensive learning paths aligned with Mississippi standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container my-5">
          <!-- Filter Interface (same as resources) -->
          <div class="filter-interface mb-5">
            <!-- School Level Tabs -->
            <div class="school-level-tabs mb-4">
              <h4 class="filter-section-title mb-3">
                <i class="bi bi-mortarboard me-2"></i>Select School Level
              </h4>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${schoolLevel === 'Elementary' ? 'active' : ''}" 
                          onclick="window.resourcesPage.selectSchoolLevelLP('Elementary')">
                    <i class="bi bi-house-fill"></i>
                    <div class="tab-content">
                      <h5>Elementary</h5>
                      <span>K - 5th Grade</span>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${schoolLevel === 'Middle School' ? 'active' : ''}" 
                          onclick="window.resourcesPage.selectSchoolLevelLP('Middle School')">
                    <i class="bi bi-calculator"></i>
                    <div class="tab-content">
                      <h5>Middle School</h5>
                      <span>6th - 8th Grade</span>
                    </div>
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="school-level-tab ${schoolLevel === 'High School' ? 'active' : ''}" 
                          onclick="window.resourcesPage.selectSchoolLevelLP('High School')">
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
            <div class="grade-filter mb-4" style="display: ${schoolLevel === 'all' ? 'none' : 'block'};">
              <h4 class="filter-section-title mb-3">
                <i class="bi bi-123 me-2"></i>Select Grade
              </h4>
              <div class="grade-buttons">
                ${this.getGradeButtonsForLearningPaths(schoolLevel === 'all' ? 'Elementary' : schoolLevel)}
              </div>
            </div>

            <!-- Filter Controls -->
            <div class="filter-controls mb-4">
              <!-- View Toggle -->
              <div class="row mb-3">
                <div class="col-12">
                  <div class="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <i class="bi bi-list-ul text-primary me-2"></i>
                      <strong>View Mode:</strong>
                    </div>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-primary" id="viewResourcesBtn2">
                        <i class="bi bi-book me-1"></i>Resources
                      </button>
                      <button type="button" class="btn btn-outline-primary active" id="viewLearningPathsBtn3">
                        <i class="bi bi-diagram-3 me-1"></i>Learning Paths
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <!-- Subject Filter -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-book me-1"></i>Subject
                  </label>
                  <select class="filter-dropdown" id="subjectFilterLP" onchange="window.resourcesPage.handleSubjectFilterLP()">
                    <option value="all">All Subjects</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="STEM">STEM (Science & Math)</option>
                  </select>
                </div>

                <!-- Search Box -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-search me-1"></i>Search
                  </label>
                  <div class="search-box">
                    <input type="text" class="search-input" id="searchInputLP" 
                           placeholder="Search learning paths..." 
                           value="${this.searchQuery}"
                           onkeyup="window.resourcesPage.handleSearchLP()">
                    <i class="bi bi-search search-icon"></i>
                  </div>
                </div>

                <!-- Sort Dropdown -->
                <div class="col-lg-3 col-md-6 mb-3">
                  <label class="filter-label">
                    <i class="bi bi-sort-down me-1"></i>Sort By
                  </label>
                  <select class="filter-dropdown" id="sortFilterLP" onchange="window.resourcesPage.handleSortFilterLP()">
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
                    Showing learning paths
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Learning Paths Grid (like resources) -->
          <div class="resources-grid">
            ${this.getLearningPathsGrid(allPaths, grade)}
          </div>
        </div>
      </div>
    `;

    // Add event listeners for the view toggle buttons in learning paths view
    setTimeout(() => {
      const viewResourcesBtn2 = document.getElementById('viewResourcesBtn2');
      if (viewResourcesBtn2) {
        viewResourcesBtn2.addEventListener('click', () => {
          if (window.resourcesPage) {
            window.resourcesPage.render('resources');
          }
        });
      }
    }, 100);
  }

  openLearningPath(grade, subject, pathId) {
    this.currentPath = { grade, subject, pathId };
    this.currentView = 'learning-path'; // Set view to learning-path, not learning-paths
    
    if (!this.learningPathData) {
      alert('Learning path data not loaded');
      return;
    }
    
    // Map 'English' to 'ELA' for lookup
    const subjectKey = subject === 'English' ? 'ELA' : subject;
    
    const path = this.learningPathData.getLearningPath(grade, subjectKey, pathId);
    
    if (!path) {
      console.error('Path not found:', { grade, subject, subjectKey, pathId });
      alert('Learning path not found');
      return;
    }

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <div class="hero-section bg-gradient-primary text-white py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <button type="button" class="btn btn-light mb-3" id="backToLearningPathsBtn" style="cursor: pointer; position: relative; z-index: 1000;">
                  <i class="bi bi-arrow-left me-2"></i>Back to Learning Paths
                </button>
                <h1 class="display-4 fw-bold mb-3">
                  <i class="bi bi-${subject === 'Math' ? 'calculator' : subject === 'ELA' ? 'book' : subject === 'Science' ? 'flask' : 'globe'} me-3"></i>${path.title}
                </h1>
                <p class="lead mb-4">${path.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container my-5">
          <div class="lesson-list">
            ${path.lessons?.map((lesson, index) => `
              <div class="card lesson-card mb-3">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                      <h5 class="card-title">Lesson ${index + 1}</h5>
                      <p class="text-muted small"><strong>Objective:</strong> ${lesson.objective}</p>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="window.resourcesPage.openLesson('${grade}', '${subjectKey}', '${pathId}', '${lesson.id}')">
                      Start Lesson
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Add event listener for the back button
    setTimeout(() => {
      const backBtn = document.getElementById('backToLearningPathsBtn');
      if (backBtn) {
        backBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Back to Learning Paths button clicked');
          this.render('learning-paths');
        });
      }
    }, 0);
  }

  backToCurrentPath() {
    console.log('backToCurrentPath called, currentPath:', this.currentPath);
    if (this.currentPath) {
      const { grade, subject, pathId } = this.currentPath;
      
      // Ensure learningPathData is initialized
      if (!this.learningPathData && window.LearningPathData) {
        this.learningPathData = new window.LearningPathData();
      }
      
      // If still no data, just go back to learning paths list
      if (!this.learningPathData) {
        console.error('Learning path data not available');
        this.render('learning-paths');
        return;
      }
      
      this.openLearningPath(grade, subject, pathId);
    } else {
      console.log('No currentPath, navigating to learning-paths');
      this.render('learning-paths');
    }
  }

  openLesson(grade, subject, pathId, lessonId) {
    this.currentLesson = { grade, subject, pathId, lessonId };
    // Always store the current path when opening a lesson
    this.currentPath = { grade, subject, pathId };
    console.log('Opening lesson, currentPath set to:', this.currentPath);
    console.log('Lesson params:', { grade, subject, pathId, lessonId });
    
    // Map 'English' to 'ELA' for lookup
    const subjectKey = subject === 'English' ? 'ELA' : subject;
    this.currentLesson.subjectKey = subjectKey;
    
    this.render('lesson');
  }

  displayLesson() {
    const { grade, subject, pathId, lessonId, subjectKey } = this.currentLesson || {};
    
    if (!grade || !subject || !pathId || !lessonId) {
      this.render('learning-paths');
      return;
    }

    // Initialize learning path data if not already done
    if (!this.learningPathData && window.LearningPathData) {
      this.learningPathData = new window.LearningPathData();
    }

    if (!this.learningPathData) {
      alert('Learning path data not loaded');
      this.render('learning-paths');
      return;
    }

    // Use subjectKey if available, otherwise map 'English' to 'ELA'
    const lookupSubject = subjectKey || (subject === 'English' ? 'ELA' : subject);
    
    const lesson = this.learningPathData.getLesson(grade, lookupSubject, pathId, lessonId);
    
    if (!lesson) {
      alert('Lesson not found');
      this.render('learning-paths');
      return;
    }

    // Escape any backticks in content to prevent template literal issues
    const escapedObjective = (lesson.objective || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const escapedContent = (lesson.content || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <div class="hero-section bg-gradient-primary text-white py-5">
          <div class="container">
            <button type="button" class="btn btn-light mb-3" style="cursor: pointer; position: relative; z-index: 1000;" onclick="console.log('Button clicked!'); if(window.resourcesPage && window.resourcesPage.backToCurrentPath) { window.resourcesPage.backToCurrentPath(); } else { console.error('resourcesPage or method not found'); alert('Error: Navigation function not available'); }">
              <i class="bi bi-arrow-left me-2"></i>Back to Learning Path
            </button>
            <h1 class="display-6 fw-bold mb-3">Learning Objective</h1>
            <p class="lead">${escapedObjective}</p>
          </div>
        </div>

        <div class="container my-5">
          <!-- Lesson Content -->
          <div class="lesson-content card mb-4">
            <div class="card-body">
              ${escapedContent}
            </div>
          </div>

          <!-- Practice Questions -->
          <div class="practice-section card">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0"><i class="bi bi-question-circle me-2"></i>Practice Questions</h4>
            </div>
            <div class="card-body">
              ${lesson.practiceQuestions?.map((q, index) => `
                <div class="question-item mb-4 pb-4 border-bottom" id="question-${q.id}">
                  <h5 class="text-primary">Question ${index + 1}</h5>
                  <p class="question-text fw-bold fs-5">${q.question}</p>
                  ${this.renderQuestion(q, index)}
                </div>
              `).join('')}
              <div class="mt-4 p-3 bg-light rounded">
                <p class="mb-0 text-center text-muted">
                  <i class="bi bi-check-circle me-2"></i>Complete all questions to master this concept!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize question handlers
    this.initializeQuestionHandlers();
  }

  renderQuestion(question, index) {
    if (question.type === 'multiple-choice') {
      return `
        <div class="options-list">
          ${question.options.map((option, i) => `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="question-${question.id}" id="option-${i}" value="${option}">
              <label class="form-check-label" for="option-${i}">
                ${option}
              </label>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-primary mt-2" onclick="window.resourcesPage.checkAnswer('${question.id}', '${question.correctAnswer}')">
          Check Answer
        </button>
        <div class="answer-feedback mt-3" id="feedback-${question.id}"></div>
        <div class="hints-section mt-3" id="hints-${question.id}" style="display: none;"></div>
      `;
    } else if (question.type === 'fill-in-blank') {
      return `
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="answer-${question.id}" placeholder="Enter your answer">
          <button class="btn btn-primary" onclick="window.resourcesPage.checkAnswer('${question.id}', '${question.correctAnswer}', true)">
            Submit
          </button>
        </div>
        <div class="answer-feedback mt-3" id="feedback-${question.id}"></div>
        <div class="hints-section mt-3" id="hints-${question.id}" style="display: none;"></div>
      `;
    } else {
      return '<p class="text-muted">Question type not yet implemented</p>';
    }
  }

  initializeQuestionHandlers() {
    // Question handlers are called via onclick in the HTML
    // This method is for future enhancements
  }

  checkAnswer(questionId, correctAnswer, isTextInput = false) {
    const feedbackDiv = document.getElementById(`feedback-${questionId}`);
    const hintsDiv = document.getElementById(`hints-${questionId}`);
    
    let userAnswer;
    if (isTextInput) {
      userAnswer = document.getElementById(`answer-${questionId}`).value.trim();
    } else {
      const selected = document.querySelector(`input[name="question-${questionId}"]:checked`);
      if (!selected) {
        feedbackDiv.innerHTML = '<div class="alert alert-warning">Please select an answer</div>';
        return;
      }
      userAnswer = selected.value;
    }

    const isCorrect = isTextInput 
      ? userAnswer.toLowerCase() === correctAnswer.toLowerCase()
      : userAnswer === correctAnswer;

    if (isCorrect) {
      feedbackDiv.innerHTML = '<div class="alert alert-success"><i class="bi bi-check-circle me-2"></i>Correct! Great job!</div>';
    } else {
      feedbackDiv.innerHTML = '<div class="alert alert-danger"><i class="bi bi-x-circle me-2"></i>Not quite. Let me help you!</div>';
      
      // Show hints
      const question = this.getCurrentQuestion(questionId);
      if (question && question.hints) {
        let hintsHtml = '<div class="mt-2"><strong>Hints:</strong><ul class="list-group list-group-flush">';
        question.hints.forEach((hint, i) => {
          hintsHtml += `<li class="list-group-item">${hint}</li>`;
        });
        hintsHtml += '</ul></div>';
        hintsDiv.innerHTML = hintsHtml;
        hintsDiv.style.display = 'block';
      }
    }
  }

  getCurrentQuestion(questionId) {
    if (!this.learningPathData) return null;
    
    const { grade, subject, pathId, lessonId } = this.currentLesson || {};
    if (!grade || !subject || !pathId || !lessonId) return null;
    
    const lesson = this.learningPathData.getLesson(grade, subject, pathId, lessonId);
    return lesson?.practiceQuestions?.find(q => q.id === questionId);
  }

  renderActivity(activity) {
    if (!activity || !activity.type) {
      return '<div class="alert alert-info"><i class="bi bi-info-circle me-2"></i>Complete the practice questions above to reinforce your learning!</div>';
    }

    const instruction = (activity.instruction || activity.description || '').toLowerCase();

    // Check for specific activity types based on instruction keywords
    if (activity.type === 'drag-drop') {
      return this.renderDragDropActivity(activity);
    }
    
    if (instruction.includes('count')) {
      return this.renderCountingActivity(activity);
    }
    
    if (instruction.includes('number') || instruction.includes('recognize')) {
      return this.renderNumberRecognitionActivity(activity);
    }
    
    if (instruction.includes('pattern')) {
      return this.renderPatternActivity(activity);
    }
    
    if (instruction.includes('shape') || instruction.includes('circle') || instruction.includes('square')) {
      return this.renderShapeActivity(activity);
    }
    
    if (instruction.includes('big') && instruction.includes('small')) {
      return this.renderSizeComparisonActivity(activity);
    }
    
    if (instruction.includes('size') || instruction.includes('bigger') || instruction.includes('smaller') || instruction.includes('compare size')) {
      return this.renderSizeComparisonActivity(activity);
    }
    
    if ((instruction.includes('more') && instruction.includes('less')) || (instruction.includes('sort') && instruction.includes('by'))) {
      return this.renderSortingActivity(activity);
    }
    
    if (instruction.includes('compare') && instruction.includes('amount')) {
      return this.renderComparisonActivity(activity);
    }
    
    if (instruction.includes('sort') || instruction.includes('group') || instruction.includes('arrange')) {
      return this.renderSortingActivity(activity);
    }
    
    if (instruction.includes('match')) {
      return this.renderMatchingActivity(activity);
    }
    
    if (instruction.includes('circle') || instruction.includes('find')) {
      return this.renderSelectionActivity(activity);
    }
    
    if (instruction.includes('position') || instruction.includes('put objects')) {
      return this.renderPositioningActivity(activity);
    }
    
    if (instruction.includes('order') || instruction.includes('sequence') || instruction.includes('in order')) {
      return this.renderOrderingActivity(activity);
    }
    
    if (instruction.includes('weight') || instruction.includes('heavy') || instruction.includes('light')) {
      return this.renderWeightActivity(activity);
    }
    
    if (instruction.includes('listen')) {
      return this.renderListeningActivity(activity);
    }
    
    if (instruction.includes('follow') && instruction.includes('direction')) {
      return this.renderDirectionsActivity(activity);
    }
    
    if (instruction.includes('speak') || instruction.includes('talk')) {
      return this.renderSpeakingActivity(activity);
    }
    
    if (instruction.includes('present') || instruction.includes('deliver') || instruction.includes('communicate')) {
      return this.renderCommunicationActivity(activity);
    }
    
    if (instruction.includes('read') || instruction.includes('analyze') || instruction.includes('explore') || instruction.includes('study')) {
      return this.renderReadingActivity(activity);
    }

    // If none of the keywords matched, check activity type as fallback
    switch (activity.type) {
      case 'interactive-practice':
      case 'interactive-diagram':
        // Check if it's a size/diagram activity with specific keywords
        if (instruction.includes('big') || instruction.includes('small') || instruction.includes('size')) {
          return this.renderSizeComparisonActivity(activity);
        }
        
        // Check for solve/practice/calculate/work on keywords - create interactive practice
        if (instruction.includes('equation') || instruction.includes('absolute value') || instruction.includes('quadratic') || 
            (instruction.includes('solve') && instruction.includes('algebra'))) {
          return this.renderEquationSolver(activity);
        }
        
        // Determine message based on activity instruction
        let icon = 'bi-lightning-charge-fill';
        let title = 'Hands-On Learning';
        let message = 'Great job! Practice this skill with real-world examples.';
        
        if (instruction.includes('solve') || instruction.includes('calculate')) {
          icon = 'bi-calculator-fill';
          title = 'Problem Solving';
          message = 'Excellent! Continue practicing with more problems from your textbook.';
        } else if (instruction.includes('create') || instruction.includes('build') || instruction.includes('design')) {
          icon = 'bi-gear-fill';
          title = 'Creative Practice';
          message = 'Well done! Apply this skill to create your own examples.';
        } else if (instruction.includes('analyze') || instruction.includes('evaluate')) {
          icon = 'bi-graph-up';
          title = 'Analysis Practice';
          message = 'Great work! Try analyzing additional examples to deepen your understanding.';
        } else if (instruction.includes('write') || instruction.includes('compose')) {
          icon = 'bi-pencil-fill';
          title = 'Writing Practice';
          message = 'Excellent! Continue refining your skills with more writing exercises.';
        }
        
        // Check for matching/drag activities
        if (instruction.includes('drag') || instruction.includes('match')) {
          return this.renderInteractiveMatching(activity);
        }
        
        // Check for math word problems
        if (instruction.includes('solve') && (instruction.includes('word problem') || instruction.includes('real-world'))) {
          return this.renderWordProblemSolver(activity);
        }
        
        // Check for fraction/decimal activities
        if (instruction.includes('fraction') || instruction.includes('decimal') || instruction.includes('round')) {
          return this.renderNumberPractice(activity);
        }
        
        // Check for grammar/language activities
        if (instruction.includes('verb') || instruction.includes('tense') || instruction.includes('sentence') || instruction.includes('grammar')) {
          return this.renderGrammarPractice(activity);
        }
        
        // Check for analysis/compare activities  
        if (instruction.includes('analyze') || instruction.includes('compare') || instruction.includes('identify')) {
          return this.renderAnalysisActivity(activity);
        }
        
        // Check for other practice keywords - create interactive activity
        if (instruction.includes('practice') || instruction.includes('work with') || instruction.includes('apply') || 
            instruction.includes('use') || instruction.includes('find') || instruction.includes('identify') || 
            instruction.includes('create') || instruction.includes('build') || instruction.includes('design') ||
            instruction.includes('evaluate')) {
          return this.renderGenericPracticeActivity(activity, icon, title, message);
        }
        
        // Generic fallback
        return this.renderGenericPracticeActivity(activity, 'bi-lightning-charge-fill', 'Hands-On Learning', message);
      
      case 'map-activity':
        const safeMapInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
        return `
          <div class="interactive-workspace p-4 bg-light rounded border text-center">
            <i class="bi bi-geo-alt-fill text-primary" style="font-size: 3rem;"></i>
            <h6 class="mt-3">Map Exploration</h6>
            <p>Use an atlas or online map to complete this activity.</p>
            <p class="text-muted"><em>${safeMapInst}</em></p>
          </div>
        `;
      
      case 'interactive-timeline':
        return `
          <div class="interactive-workspace p-4 bg-light rounded border">
            <h6><i class="bi bi-clock-history me-2"></i>Timeline Activity</h6>
            <p>Create a timeline to organize these events chronologically.</p>
            <div class="alert alert-info mt-3">
              <i class="bi bi-lightbulb me-2"></i>
              <strong>Tip:</strong> Draw a horizontal line and place these events in order to see the progression of history.
            </div>
          </div>
        `;
      
      default:
        const safeDefaultDesc = (activity.description || 'Complete exercises related to this topic.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
        return `
          <div class="alert alert-secondary">
            <i class="bi bi-pencil me-2"></i>
            <strong>Practice Activity:</strong> ${safeDefaultDesc}
          </div>
        `;
    }
  }
  
  renderCountingActivity(activity) {
    const targetCount = Math.floor(Math.random() * 5) + 5; // Random 5-9
    return `
      <div class="counting-activity">
        <h6 class="mb-3"><i class="bi bi-list-ol me-2"></i>Let's count together!</h6>
        <p>Click on the objects to count them. Try to reach ${targetCount}!</p>
        <div class="objects-container d-flex flex-wrap gap-3 mb-3" style="min-height: 100px;">
          ${Array.from({ length: targetCount }, (_, i) => `
            <div class="countable-object" style="width: 60px; height: 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;" onclick="this.classList.toggle('counted'); const numCounted = document.querySelectorAll('.countable-object.counted').length; document.getElementById('count-display').textContent = numCounted; if(numCounted === ${targetCount}) { document.getElementById('count-result').innerHTML = '<div class=\"alert alert-success mt-3\"><i class=\"bi bi-check-circle me-2\"></i>Great job! You counted ${targetCount} objects correctly!</div>'; }">
              <span class="object-number">${i + 1}</span>
            </div>
          `).join('')}
        </div>
        <div class="count-info">
          <p class="fw-bold">Count: <span id="count-display">0</span> / ${targetCount}</p>
        </div>
        <div id="count-result"></div>
      </div>
    `;
  }
  
  renderNumberRecognitionActivity(activity) {
    const numbers = [1, 2, 3, 4, 5];
    const targetNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);
    
    return `
      <div class="number-recognition-activity">
        <h6 class="mb-3"><i class="bi bi-123 me-2"></i>Find the number ${targetNumber}!</h6>
        <p>Click on the number <strong>${targetNumber}</p>
        <div class="numbers-container d-flex flex-wrap gap-3 justify-content-center mt-3">
          ${shuffledNumbers.map(num => `
            <button class="btn btn-outline-primary number-btn" data-number="${num}" style="font-size: 2rem; width: 80px; height: 80px; border-radius: 15px;" onclick="if(this.dataset.number === '${targetNumber}') { this.classList.remove('btn-outline-primary'); this.classList.add('btn-success'); document.getElementById('number-result').innerHTML = '<div class=\"alert alert-success mt-3\"><i class=\"bi bi-check-circle me-2\"></i>Correct! You found ${targetNumber}!</div>'; document.querySelectorAll('.number-btn').forEach(btn => btn.disabled = true); } else { this.classList.add('btn-danger'); setTimeout(() => { this.classList.remove('btn-danger'); }, 500); }">
              ${num}
            </button>
          `).join('')}
        </div>
        <div id="number-result"></div>
      </div>
    `;
  }
  
  renderPatternActivity(activity) {
    const patterns = [
      ['🔴', '🔵', '🔴', '🔵', '?'],
      ['🟢', '🟢', '🔴', '🟢', '🟢', '🔴', '?'],
      ['⭐', '⭐', '✨', '⭐', '⭐', '✨', '?'],
      ['🟨', '🟦', '🟨', '?'],
    ];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    const correctAnswer = pattern[pattern.length - 2];
    const options = [...new Set(pattern)].filter(item => item !== '?');
    
    return `
      <div class="pattern-activity" data-correct-answer="${correctAnswer}">
        <h6 class="mb-3"><i class="bi bi-arrow-repeat me-2"></i>Complete the pattern!</h6>
        <div class="pattern-display d-flex gap-2 justify-content-center mb-3" style="font-size: 2rem;">
          ${pattern.map(item => item !== '?' ? `<span>${item}</span>` : '<span class="text-danger fw-bold">?</span>').join('')}
        </div>
        <p class="text-center mb-3">Which emoji should go in the ? position?</p>
        <div class="options-container d-flex gap-3 justify-content-center">
          ${options.map(option => `
            <button class="btn btn-outline-primary pattern-option" data-option="${option}" style="font-size: 2rem; padding: 15px 20px;" onclick="window.resourcesPage.activityHandlers.checkPatternAnswer(this)">
              ${option}
            </button>
          `).join('')}
        </div>
        <div id="pattern-result"></div>
      </div>
    `;
  }
  
  renderShapeActivity(activity) {
    const shapes = [
      { name: 'Circle', emoji: '⭕', color: '#FFD700' },
      { name: 'Square', emoji: '⬜', color: '#667eea' },
      { name: 'Triangle', emoji: '🔺', color: '#f093fb' },
      { name: 'Star', emoji: '⭐', color: '#FFD700' }
    ];
    const targetShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    return `
      <div class="shape-activity" data-target-shape="${targetShape.name.toLowerCase()}" data-shape-name="${targetShape.name}">
        <h6 class="mb-3"><i class="bi bi-shapes me-2"></i>Find the ${targetShape.name}!</h6>
        <div class="shapes-container d-flex flex-wrap gap-3 justify-content-center">
          ${shapes.map(shape => `
            <button class="btn btn-outline-secondary shape-btn" data-shape="${shape.name.toLowerCase()}" style="font-size: 3rem; padding: 20px; border-radius: 15px;" onclick="window.resourcesPage.activityHandlers.checkShapeAnswer(this)">
              ${shape.emoji}<br><small>${shape.name}</small>
            </button>
          `).join('')}
        </div>
        <div id="shape-result"></div>
      </div>
    `;
  }
  
  renderSizeComparisonActivity(activity) {
    const sizes = ['Small', 'Medium', 'Large'];
    const sizeOptions = [
      { name: 'Small', emoji: '🔵', items: 2 },
      { name: 'Medium', emoji: '🟡', items: 4 },
      { name: 'Large', emoji: '🔴', items: 6 }
    ];
    
    return `
      <div class="size-comparison-activity">
        <h6 class="mb-3"><i class="bi bi-arrows-expand me-2"></i>Can you spot the sizes?</h6>
        <p class="mb-3">Look at the groups below. Which one is the biggest? Which is the smallest?</p>
        
        <div class="size-groups-container mb-4">
          ${sizeOptions.map(size => `
            <div class="size-group mb-3 p-3 border rounded" style="background: #f8f9fa;">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0">${size.emoji} ${size.name} Group</h6>
                <span class="badge bg-secondary">${size.items} items</span>
              </div>
              <div class="size-visualization d-flex gap-1">
                ${Array.from({ length: size.items }).map(() => `
                  <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 5px;"></div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        
        <h6 class="mb-2">Which is the BIGGEST group?</h6>
        <div class="size-question-container d-flex gap-3 flex-wrap justify-content-center mb-3">
          ${sizeOptions.map(size => `
            <button class="btn btn-outline-primary size-option" data-size="${size.name}" onclick="window.resourcesPage.activityHandlers.checkSizeAnswer('Largest', '${size.name}', this)">
              ${size.emoji} ${size.name}
            </button>
          `).join('')}
        </div>
        <div id="size-result-largest" class="mb-3"></div>
        
        <h6 class="mb-2">Which is the SMALLEST group?</h6>
        <div class="size-question-container d-flex gap-3 flex-wrap justify-content-center">
          ${sizeOptions.map(size => `
            <button class="btn btn-outline-primary size-option" data-size="${size.name}" onclick="window.resourcesPage.activityHandlers.checkSizeAnswer('Smallest', '${size.name}', this)">
              ${size.emoji} ${size.name}
            </button>
          `).join('')}
        </div>
        <div id="size-result-smallest"></div>
      </div>
      
    `;
  }
  
  renderComparisonActivity(activity) {
    const leftCount = Math.floor(Math.random() * 5) + 1;
    const rightCount = Math.floor(Math.random() * 5) + 1;
    let correctAnswer;
    if (leftCount > rightCount) {
      correctAnswer = 'left';
    } else if (rightCount > leftCount) {
      correctAnswer = 'right';
    } else {
      correctAnswer = 'equal';
    }
    
    return `
      <div class="comparison-activity">
        <h6 class="mb-3"><i class="bi bi-balance-scale me-2"></i>Which side has more?</h6>
        <div class="comparison-container d-flex gap-4 justify-content-center mb-3" style="font-size: 2rem;">
          <div class="side side-left" style="flex: 1;">
            <div class="text-center mb-2">Left</div>
            ${Array.from({ length: leftCount }).map(() => '🍎').join('')}
          </div>
          <div class="vs-divider" style="font-weight: bold;">VS</div>
          <div class="side side-right" style="flex: 1;">
            <div class="text-center mb-2">Right</div>
            ${Array.from({ length: rightCount }).map(() => '🍎').join('')}
          </div>
        </div>
        <div class="options-container d-flex gap-3 justify-content-center">
          <button class="btn btn-primary comparison-btn" data-answer="left" onclick="window.resourcesPage.activityHandlers.checkComparison('${correctAnswer}', this)">
            Left has more
          </button>
          <button class="btn btn-primary comparison-btn" data-answer="right" onclick="window.resourcesPage.activityHandlers.checkComparison('${correctAnswer}', this)">
            Right has more
          </button>
          <button class="btn btn-primary comparison-btn" data-answer="equal" onclick="window.resourcesPage.activityHandlers.checkComparison('${correctAnswer}', this)">
            Equal
          </button>
        </div>
        <div id="comparison-result"></div>
      </div>
      
    `;
  }
  
  renderListeningActivity(activity) {
    return `
      <div class="listening-activity">
        <h6 class="mb-3"><i class="bi bi-earbuds me-2"></i>Listening Practice</h6>
        <p>Listen carefully and complete the activity.</p>
        <div class="alert alert-info">
          <i class="bi bi-info-circle me-2"></i>
          <strong>Instructions:</strong> Listen for the sounds and words in your environment. 
          Name 3 things you hear right now.
        </div>
        <div class="form-group mt-3">
          <label>What sounds do you hear?</label>
          <textarea class="form-control" rows="3" placeholder="List the sounds you hear..."></textarea>
        </div>
        <button class="btn btn-success" onclick="alert('Great listening! You hear sounds all around you every day.')">
          <i class="bi bi-check-circle me-2"></i>Complete Activity
        </button>
      </div>
    `;
  }
  
  renderDirectionsActivity(activity) {
    return `
      <div class="directions-activity">
        <h6 class="mb-3"><i class="bi bi-signpost me-2"></i>Follow Directions Activity</h6>
        <p>Read each direction carefully and complete it.</p>
        <div class="steps-container">
          <div class="step mb-3 p-3 border rounded" style="background: #f8f9fa;">
            <strong>Step 1:</strong> Stand up
            <button class="btn btn-sm btn-primary float-end" onclick="alert('Good! You followed the direction.')">Done</button>
          </div>
          <div class="step mb-3 p-3 border rounded" style="background: #f8f9fa;">
            <strong>Step 2:</strong> Touch your nose
            <button class="btn btn-sm btn-primary float-end" onclick="alert('Great! You can follow directions.')">Done</button>
          </div>
          <div class="step mb-3 p-3 border rounded" style="background: #f8f9fa;">
            <strong>Step 3:</strong> Clap your hands
            <button class="btn btn-sm btn-primary float-end" onclick="alert('Excellent! You followed all directions correctly!')">Done</button>
          </div>
        </div>
      </div>
    `;
  }
  
  renderEquationSolver(activity) {
    const instruction = activity.instruction || activity.description || '';
    const problems = [
      { id: 'prob1', eq: '|x| = 5', answer: 'x = 5 or x = -5', hint: 'Absolute value means distance from zero' },
      { id: 'prob2', eq: '|x - 3| = 7', answer: 'x = 10 or x = -4', hint: 'The value inside can be +7 or -7' },
      { id: 'prob3', eq: '|2x + 1| = 9', answer: 'x = 4 or x = -5', hint: 'Set 2x+1 = 9 and 2x+1 = -9' }
    ];
    
    const safeDesc = (activity.description || 'Practice solving equations step by step.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="equation-solver-activity">
        <h6 class="mb-3"><i class="bi bi-calculator me-2"></i>Interactive Equation Solver</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        <div class="practice-problems">
          ${problems.map((prob, idx) => `
            <div class="problem-card border rounded p-3 mb-3 bg-white">
              <h6>Problem ${idx + 1}: Solve for x</h6>
              <div class="equation-display text-center my-3" style="font-size: 1.5rem; font-family: 'Times New Roman', serif;">
                ${prob.eq}
              </div>
              <div class="input-group mb-2">
                <input type="text" class="form-control" id="ans-${prob.id}" placeholder="Enter your answer (e.g., x = 5 or x = -5)">
                <button class="btn btn-primary" onclick="window.resourcesPage.activityHandlers.checkEquationAnswer('${prob.id}', '${prob.answer}', '${prob.hint}')">Check</button>
              </div>
              <div id="result-${prob.id}"></div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Great job! You\'ve completed this practice. Try more problems in your textbook.')">
            <i class="bi bi-check-circle me-2"></i>Complete Practice
          </button>
        </div>
      </div>
      
    `;
  }

  renderSpeakingActivity(activity) {
    return `
      <div class="speaking-activity">
        <h6 class="mb-3"><i class="bi bi-megaphone me-2"></i>Speaking Practice</h6>
        <p>Practice speaking clearly and loudly.</p>
        <div class="alert alert-primary">
          <i class="bi bi-lightbulb me-2"></i>
          <strong>Tip:</strong> Speak so others can hear you clearly.
        </div>
        <div class="practice-words mt-3">
          <h6>Practice saying these words:</h6>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-primary practice-word" onclick="this.classList.toggle('btn-success')">
              Apple
            </button>
            <button class="btn btn-outline-primary practice-word" onclick="this.classList.toggle('btn-success')">
              Ball
            </button>
            <button class="btn btn-outline-primary practice-word" onclick="this.classList.toggle('btn-success')">
              Cat
            </button>
            <button class="btn btn-outline-primary practice-word" onclick="this.classList.toggle('btn-success')">
              Dog
            </button>
          </div>
        </div>
        <p class="mt-3 text-muted">Click on each word after you say it out loud!</p>
      </div>
    `;
  }
  
  renderSortingActivity(activity) {
    const items = [
      { name: 'Apple', emoji: '🍎', category: 'Food' },
      { name: 'Car', emoji: '🚗', category: 'Vehicle' },
      { name: 'Dog', emoji: '🐶', category: 'Animal' },
      { name: 'Pizza', emoji: '🍕', category: 'Food' },
      { name: 'Cat', emoji: '🐱', category: 'Animal' },
      { name: 'Bus', emoji: '🚌', category: 'Vehicle' }
    ];
    
    return `
      <div class="sorting-activity">
        <h6 class="mb-3"><i class="bi bi-arrow-down-up me-2"></i>Sort the items!</h6>
        <p class="mb-3">Drag each item to the correct category below.</p>
        
        <div class="items-container d-flex flex-wrap gap-2 mb-4" id="items-pool">
          ${items.map(item => `
            <div draggable="true" class="sort-item badge bg-primary p-3" data-item="${item.name}" data-category="${item.category}" style="cursor: move; font-size: 1.2rem;">
              ${item.emoji} ${item.name}
            </div>
          `).join('')}
        </div>
        
        <div class="categories-container">
          <h6 class="mb-2">Categories:</h6>
          <div class="row gap-3">
            ${['Food', 'Animal', 'Vehicle'].map(category => `
              <div class="col-md-4">
                <div class="category-box border border-2 border-primary rounded p-3 mb-3" style="min-height: 150px; background: #f8f9fa;">
                  <h6 class="text-primary mb-2">${category}</h6>
                  <div class="dropped-items" data-category="${category}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="mt-3">
          <button class="btn btn-success" onclick="window.resourcesPage.activityHandlers.checkSorting()">
            <i class="bi bi-check-circle me-2"></i>Check Sorting
          </button>
          <button class="btn btn-primary" onclick="resetSorting()">
            <i class="bi bi-arrow-clockwise me-2"></i>Reset
          </button>
        </div>
        <div id="sort-result"></div>
      </div>
      
    `;
  }
  
  renderMatchingActivity(activity) {
    const pairs = [
      { left: 'Cat', right: '🐱', leftEmoji: '🐾' },
      { left: 'Dog', right: '🐶', leftEmoji: '🐕' },
      { left: 'Bird', right: '🐦', leftEmoji: '🐤' },
      { left: 'Fish', right: '🐟', leftEmoji: '🐠' }
    ];
    
    return `
      <div class="matching-activity">
        <h6 class="mb-3"><i class="bi bi-clipboard-check me-2"></i>Match the pairs!</h6>
        <p class="mb-3">Click on a word and then its matching emoji.</p>
        
        <div class="row">
          <div class="col-md-6">
            <h6 class="mb-2">Words:</h6>
            <div class="match-items">
              ${pairs.map((pair, idx) => `
                <button class="btn btn-outline-primary mb-2 match-left" data-pair="${idx}" style="width: 100%;">
                  ${pair.leftEmoji} ${pair.left}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="col-md-6">
            <h6 class="mb-2">Match to:</h6>
            <div class="match-items">
              ${pairs.sort(() => Math.random() - 0.5).map((pair, idx) => `
                <button class="btn btn-outline-success mb-2 match-right" data-pair="${pair.left}" style="width: 100%;">
                  ${pair.right}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="mt-3">
          <p id="match-status" class="fw-bold"></p>
        </div>
      </div>
      
    `;
  }
  
  renderSelectionActivity(activity) {
    const items = [
      { name: 'Tree', emoji: '🌳', type: 'living' },
      { name: 'Rock', emoji: '🪨', type: 'nonliving' },
      { name: 'Flower', emoji: '🌸', type: 'living' },
      { name: 'Toy', emoji: '🧸', type: 'nonliving' },
      { name: 'Bird', emoji: '🐦', type: 'living' },
      { name: 'Car', emoji: '🚗', type: 'nonliving' }
    ];
    
    return `
      <div class="selection-activity">
        <h6 class="mb-3"><i class="bi bi-hand-index me-2"></i>Find and click the living things!</h6>
        <p class="mb-3">Click on the items that are alive.</p>
        
        <div class="items-grid d-flex flex-wrap gap-3 justify-content-center">
          ${items.map(item => `
            <button class="btn btn-lg btn-outline-secondary selection-item ${item.type === 'living' ? 'correct-item' : ''}" data-type="${item.type}" onclick="this.classList.toggle('btn-success'); this.classList.toggle('btn-outline-secondary'); checkSelection()">
              ${item.emoji}<br><small>${item.name}</small>
            </button>
          `).join('')}
        </div>
        
        <div id="selection-result" class="mt-3"></div>
      </div>
      
    `;
  }
  
  renderPositioningActivity(activity) {
    return `
      <div class="positioning-activity">
        <h6 class="mb-3"><i class="bi bi-pin-map me-2"></i>Position the objects!</h6>
        <p class="mb-3">Click on each position to place the object there.</p>
        
        <div class="positions-container mb-3" style="position: relative; border: 2px solid #dee2e6; border-radius: 10px; padding: 20px; background: #f8f9fa; min-height: 300px;">
          <div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%);" class="position-zone" data-position="top">
            <button class="btn btn-sm btn-outline-info position-btn" onclick="window.resourcesPage.activityHandlers.placeObject('on top')">📦</button>
            <div class="text-center small">On Top</div>
          </div>
          <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);" class="position-zone" data-position="bottom">
            <button class="btn btn-sm btn-outline-info position-btn" onclick="window.resourcesPage.activityHandlers.placeObject('under')">📦</button>
            <div class="text-center small">Under</div>
          </div>
          <div style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%);" class="position-zone" data-position="left">
            <button class="btn btn-sm btn-outline-info position-btn" onclick="window.resourcesPage.activityHandlers.placeObject('beside left')">📦</button>
            <div class="text-center small">Beside</div>
          </div>
          <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%);" class="position-zone" data-position="right">
            <button class="btn btn-sm btn-outline-info position-btn" onclick="window.resourcesPage.activityHandlers.placeObject('beside right')">📦</button>
            <div class="text-center small">Beside</div>
          </div>
        </div>
        
        <div id="position-result"></div>
      </div>
      
    `;
  }
  
  renderOrderingActivity(activity) {
    const items = ['Morning', 'Afternoon', 'Evening', 'Night'];
    
    return `
      <div class="ordering-activity">
        <h6 class="mb-3"><i class="bi bi-arrow-up-down me-2"></i>Put these in order!</h6>
        <p class="mb-3">Click on the time periods in the correct order.</p>
        
        <div class="ordering-items d-flex flex-column gap-2 mb-3">
          ${items.sort(() => Math.random() - 0.5).map((item, idx) => `
            <button class="btn btn-outline-primary order-item" data-order="${idx}" onclick="window.resourcesPage.activityHandlers.selectOrder(this)">
              ${item}
            </button>
          `).join('')}
        </div>
        
        <div class="selected-order d-flex gap-2 flex-wrap" id="selected-order"></div>
        
        <div class="mt-3">
          <button class="btn btn-success" onclick="checkOrder()">
            <i class="bi bi-check-circle me-2"></i>Check Order
          </button>
          <button class="btn btn-primary" onclick="resetOrder()">
            <i class="bi bi-arrow-clockwise me-2"></i>Reset
          </button>
        </div>
        <div id="order-result"></div>
      </div>
      
    `;
  }
  
  renderWeightActivity(activity) {
    return `
      <div class="weight-activity">
        <h6 class="mb-3"><i class="bi bi-scales me-2"></i>Heavy or Light?</h6>
        <p class="mb-3">Compare the weights and decide which is heavier.</p>
        
        <div class="comparison-items d-flex justify-content-around mb-3">
          <div class="item text-center">
            <div style="font-size: 4rem;">🏔️</div>
            <div class="mt-2">Mountain</div>
          </div>
          <div class="vs-divider">VS</div>
          <div class="item text-center">
            <div style="font-size: 4rem;">🌿</div>
            <div class="mt-2">Leaf</div>
          </div>
        </div>
        
        <div class="options-container d-flex gap-3 justify-content-center">
          <button class="btn btn-primary" onclick="window.resourcesPage.activityHandlers.checkWeight('Mountain')">Mountain is heavier</button>
          <button class="btn btn-primary" onclick="window.resourcesPage.activityHandlers.checkWeight('Leaf')">Leaf is heavier</button>
          <button class="btn btn-primary" onclick="window.resourcesPage.activityHandlers.checkWeight('Equal')">Same weight</button>
        </div>
        
        <div id="weight-result" class="mt-3"></div>
      </div>
      
    `;
  }

  renderInteractiveMatching(activity) {
    const safeDesc = (activity.description || 'Match items by dragging.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="interactive-matching-activity">
        <h6 class="mb-3"><i class="bi bi-layers me-2"></i>Interactive Matching</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        <div class="match-container">
          <div class="row">
            <div class="col-12 mb-3">
              <h6 class="text-primary">Items to match:</h6>
              <div class="drag-items d-flex flex-wrap gap-2">
                <span class="badge bg-primary p-2" draggable="true">Item 1</span>
                <span class="badge bg-primary p-2" draggable="true">Item 2</span>
                <span class="badge bg-primary p-2" draggable="true">Item 3</span>
              </div>
            </div>
            <div class="col-12">
              <h6 class="text-success">Match to:</h6>
              <div class="drop-zones d-flex flex-column gap-2">
                <div class="border border-dashed rounded p-3">Category A</div>
                <div class="border border-dashed rounded p-3">Category B</div>
                <div class="border border-dashed rounded p-3">Category C</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Great work! Practice with more matching exercises.')">
            <i class="bi bi-check-circle me-2"></i>Complete Matching
          </button>
        </div>
      </div>
    `;
  }

  renderWordProblemSolver(activity) {
    const problems = [
      { id: 'wp1', q: 'If a pizza costs $12 and you have $5, how much more do you need?', answer: '7', hint: 'Subtract: $12 - $5' },
      { id: 'wp2', q: 'There are 24 students. Each table seats 4. How many tables?', answer: '6', hint: 'Divide: 24 ÷ 4' },
      { id: 'wp3', q: 'Emma read 15 pages today and 12 yesterday. Total pages?', answer: '27', hint: 'Add: 15 + 12' }
    ];
    
    const safeDesc = (activity.description || 'Solve real-world math problems.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="word-problem-activity">
        <h6 class="mb-3"><i class="bi bi-journal-text me-2"></i>Word Problem Practice</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        ${problems.map((prob, idx) => `
          <div class="problem-card border rounded p-3 mb-3 bg-white">
            <h6 class="text-primary">Problem ${idx + 1}</h6>
            <p class="fw-bold">${prob.q}</p>
            <div class="input-group">
              <input type="number" class="form-control" id="wp-${prob.id}" placeholder="Your answer">
              <button class="btn btn-primary" onclick="checkAnswer('${prob.id}', '${prob.answer}', '${prob.hint}')">Check</button>
            </div>
            <div id="wp-result-${prob.id}"></div>
          </div>
        `).join('')}
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Excellent! Apply your skills to solve more problems.')">
            <i class="bi bi-check-circle me-2"></i>Complete Practice
          </button>
        </div>
      </div>
      
    `;
  }

  renderNumberPractice(activity) {
    const exercises = [
      { id: 'n1', type: 'Rounding', task: 'Round 3.456 to 2 decimal places', answer: '3.46', hint: 'Look at the third decimal place' },
      { id: 'n2', type: 'Fractions', task: 'Convert 0.75 to a fraction', answer: '3/4', hint: '0.75 = 75/100' },
      { id: 'n3', type: 'Decimals', task: 'Calculate: 2.5 + 3.7', answer: '6.2', hint: 'Add the decimal parts' }
    ];
    
    const safeDesc = (activity.description || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="number-practice-activity">
        <h6 class="mb-3"><i class="bi bi-calculator me-2"></i>Number Practice</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        ${exercises.map((ex, idx) => `
          <div class="exercise-card border rounded p-3 mb-3 bg-light">
            <strong class="text-primary">${ex.type}:</strong> ${ex.task}
            <div class="input-group mt-2">
              <input type="text" class="form-control" id="ex-${ex.id}" placeholder="Your answer">
              <button class="btn btn-primary" onclick="checkExercise('${ex.id}', '${ex.answer}', '${ex.hint}')">Check</button>
            </div>
            <div id="ex-result-${ex.id}"></div>
          </div>
        `).join('')}
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Great work! Practice with more examples.')">
            <i class="bi bi-check-circle me-2"></i>Complete Practice
          </button>
        </div>
      </div>
      
    `;
  }

  renderGrammarPractice(activity) {
    const exercises = [
      { id: 'g1', sentence: 'The cat _____ on the mat.', options: ['sit', 'sits', 'siting'], correct: 'sits' },
      { id: 'g2', sentence: 'She _____ her homework yesterday.', options: ['do', 'does', 'did'], correct: 'did' },
      { id: 'g3', sentence: 'They _____ playing outside.', options: ['is', 'are', 'am'], correct: 'are' }
    ];
    
    const safeDesc = (activity.description || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="grammar-practice-activity">
        <h6 class="mb-3"><i class="bi bi-pencil me-2"></i>Grammar Practice</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        ${exercises.map((ex, idx) => `
          <div class="exercise-card border rounded p-3 mb-3">
            <p class="fw-bold">Sentence ${idx + 1}: ${ex.sentence}</p>
            <div class="btn-group" role="group">
              ${ex.options.map((opt, i) => `
                <button type="button" class="btn btn-outline-primary" onclick="checkGrammar('g${idx + 1}', '${opt}', '${ex.correct}')">${opt}</button>
              `).join('')}
            </div>
            <div id="g-result-${ex.id}"></div>
          </div>
        `).join('')}
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Excellent! Keep practicing your grammar skills.')">
            <i class="bi bi-check-circle me-2"></i>Complete Practice
          </button>
        </div>
      </div>
      
    `;
  }

  renderAnalysisActivity(activity) {
    const safeDesc = (activity.description || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="analysis-activity">
        <h6 class="mb-3"><i class="bi bi-graph-up me-2"></i>Analysis Practice</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        <div class="analysis-prompt border rounded p-3 mb-3 bg-light">
          <h6>Read and analyze the following:</h6>
          <div class="p-3 bg-white border rounded mb-3">
            <p class="mb-0"><em>"The main character faces a difficult decision that will change the story. Think about what decision is being made and why it matters."</em></p>
          </div>
          
          <h6 class="mt-3">Key Questions:</h6>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="bi bi-question-circle text-primary me-2"></i>What is the main conflict?</li>
            <li class="mb-2"><i class="bi bi-question-circle text-primary me-2"></i>How does the character feel?</li>
            <li class="mb-2"><i class="bi bi-question-circle text-primary me-2"></i>What would you do differently?</li>
          </ul>
          
          <textarea class="form-control mb-3" rows="4" placeholder="Write your analysis here..."></textarea>
        </div>
        
        <div class="mt-3 text-center">
          <button class="btn btn-success" onclick="alert('Great analysis! Apply this thinking to other texts.')">
            <i class="bi bi-check-circle me-2"></i>Complete Analysis
          </button>
        </div>
      </div>
    `;
  }

  renderCommunicationActivity(activity) {
    const safeDesc = (activity.description || 'Practice your communication skills.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="communication-activity">
        <h6 class="mb-3"><i class="bi bi-megaphone me-2"></i>Communication Practice</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        <div class="activity-steps mb-3">
          <div class="step-card border rounded p-3 mb-2">
            <h6 class="text-primary">Step 1: Think</h6>
            <p class="mb-0 small">What do you want to communicate?</p>
          </div>
          <div class="step-card border rounded p-3 mb-2">
            <h6 class="text-primary">Step 2: Organize</h6>
            <p class="mb-0 small">Put your ideas in order.</p>
          </div>
          <div class="step-card border rounded p-3 mb-2">
            <h6 class="text-primary">Step 3: Practice</h6>
            <p class="mb-0 small">Say it out loud to yourself first.</p>
          </div>
        </div>
        
        <textarea class="form-control mb-3" rows="3" placeholder="Write what you want to communicate..."></textarea>
        
        <div class="text-center">
          <button class="btn btn-success" onclick="alert('Great job! Practice presenting this to someone.')">
            <i class="bi bi-check-circle me-2"></i>Mark as Practiced
          </button>
        </div>
      </div>
    `;
  }

  renderReadingActivity(activity) {
    const safeDesc = (activity.description || 'Read and analyze the materials.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || '').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="reading-activity">
        <h6 class="mb-3"><i class="bi bi-book me-2"></i>Reading & Analysis</h6>
        <p class="text-muted">${safeDesc}</p>
        <p class="small text-muted mb-3"><em>${safeInst}</em></p>
        
        <div class="reading-prompt border rounded p-3 mb-3 bg-light">
          <h6 class="text-primary mb-3">Reading Checklist:</h6>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="read1">
            <label class="form-check-label" for="read1">I read the text carefully</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="read2">
            <label class="form-check-label" for="read2">I identified the main idea</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="read3">
            <label class="form-check-label" for="read3">I found supporting details</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="read4">
            <label class="form-check-label" for="read4">I understand the message</label>
          </div>
          
          <textarea class="form-control mt-3" rows="3" placeholder="Write your analysis or summary here..."></textarea>
        </div>
        
        <div class="text-center">
          <button class="btn btn-success" onclick="alert('Excellent work! Apply what you learned with additional readings.')">
            <i class="bi bi-check-circle me-2"></i>Mark as Practiced
          </button>
        </div>
      </div>
    `;
  }

  renderGenericPracticeActivity(activity, icon, title, message) {
    const safeDesc = (activity.description || 'Practice makes perfect! Try solving problems related to this lesson on your own.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    const safeInst = (activity.instruction || 'Complete this activity to reinforce your understanding.').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    return `
      <div class="interactive-workspace p-4 bg-light rounded border">
        <div class="text-center">
          <i class="bi ${icon} text-warning" style="font-size: 3rem;"></i>
          <h6 class="mt-3">${title}</h6>
          <p class="text-muted">${safeDesc}</p>
          <p class="small text-muted mb-3"><em>${safeInst}</em></p>
          
          <div class="practice-checklist mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="practice1">
              <label class="form-check-label" for="practice1">I understand the concept</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="practice2">
              <label class="form-check-label" for="practice2">I can explain it to someone else</label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="practice3">
              <label class="form-check-label" for="practice3">I practiced with examples</label>
            </div>
            
            <textarea class="form-control" rows="3" placeholder="Write notes about what you practiced..."></textarea>
          </div>
          
          <button class="btn btn-success" onclick="alert('${message}')">
            <i class="bi bi-check-circle me-2"></i>Mark as Practiced
          </button>
        </div>
      </div>
    `;
  }

  renderDragDropActivity(activity) {
    // Parse instruction to create drag and drop items
    const instruction = activity.instruction || activity.description || '';
    
    // For theme matching activity (ELA)
    if (instruction.includes('theme') || instruction.includes('story')) {
      const items = [
        { id: 'item1', text: 'A boy works hard every day to get better at basketball' },
        { id: 'item2', text: 'A girl makes friends with someone who looks different' },
        { id: 'item3', text: 'A character must choose between lying or telling the truth' }
      ];
      const themes = [
        { id: 'theme1', text: 'Perseverance' },
        { id: 'theme2', text: 'Friendship' },
        { id: 'theme3', text: 'Honesty' }
      ];
      
      return `
        <div class="drag-drop-activity">
          <h6 class="mb-3"><i class="bi bi-arrows-move me-2"></i>Drag the story to its matching theme</h6>
          
          <div class="row mb-4">
            <div class="col-12">
              <h6 class="text-primary mb-2">Drag these stories:</h6>
              <div id="drag-items" class="d-flex flex-wrap gap-2">
                ${items.map(item => `
                  <div draggable="true" class="drag-item badge bg-primary p-3" data-item="${item.id}" style="cursor: move;">
                    <i class="bi bi-grip-vertical me-2"></i>${item.text}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <h6 class="text-success mb-2">Drop zones - Themes:</h6>
              <div id="drop-zones" class="d-flex flex-column gap-3">
                ${themes.map(theme => `
                  <div class="drop-zone border border-2 border-dashed rounded p-3" data-zone="${theme.id}">
                    <strong class="text-success">${theme.text}:</strong>
                    <div class="dropped-item mt-2" style="min-height: 50px;"></div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="mt-3">
            <button class="btn btn-primary" onclick="window.resourcesPage.resetDragDrop()">
              <i class="bi bi-arrow-clockwise me-2"></i>Reset
            </button>
            <button class="btn btn-success" onclick="window.resourcesPage.checkDragDrop()">
              <i class="bi bi-check-circle me-2"></i>Check Answer
            </button>
            <div id="drag-result" class="mt-2"></div>
          </div>
        </div>
      `;
    }
    
    // For food chain activity (Science)
    if (instruction.includes('food chain') || instruction.includes('organism')) {
      const organisms = [
        { name: 'Grass', type: 'producer' },
        { name: 'Rabbit', type: 'herbivore' },
        { name: 'Snake', type: 'carnivore' },
        { name: 'Hawk', type: 'carnivore' }
      ];
      
      return `
        <div class="drag-drop-activity">
          <h6 class="mb-3"><i class="bi bi-diagram-3 me-2"></i>Arrange the organisms in order (drag from top to bottom)</h6>
          
          <div class="alert alert-info mb-3">
            <i class="bi bi-info-circle me-2"></i>Energy flows from producers to consumers. Arrange them to show this flow.
          </div>
          
          <div class="row mb-4">
            <div class="col-12">
              <h6 class="text-primary mb-2">Available organisms:</h6>
              <div id="organisms-pool" class="d-flex flex-wrap gap-2">
                ${organisms.map(org => `
                  <div draggable="true" class="badge ${org.type === 'producer' ? 'bg-success' : org.type === 'herbivore' ? 'bg-info' : 'bg-danger'} p-3" data-organism="${org.name}" style="cursor: move;">
                    <i class="bi bi-grip-vertical me-2"></i>${org.name}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <h6 class="text-success mb-2">Food chain (drag organisms here in order):</h6>
              <div id="food-chain-zone" class="border border-2 border-dashed border-success rounded p-3" style="min-height: 150px;">
                <div class="text-muted text-center mb-2">Drop organisms here to build the food chain</div>
                <div id="food-chain-items" class="d-flex flex-column gap-2"></div>
              </div>
            </div>
          </div>
          
          <div class="mt-3">
            <button class="btn btn-primary" onclick="window.resourcesPage.resetFoodChain()">
              <i class="bi bi-arrow-clockwise me-2"></i>Reset
            </button>
            <button class="btn btn-success" onclick="window.resourcesPage.checkFoodChain()">
              <i class="bi bi-check-circle me-2"></i>Check Food Chain
            </button>
            <div id="food-chain-result" class="mt-2"></div>
          </div>
        </div>
      `;
    }
    
    // Default drag-drop
    return `
      <div class="interactive-workspace p-4 bg-light rounded border">
        <div class="alert alert-warning">
          <i class="bi bi-exclamation-triangle me-2"></i>
          <strong>Try it yourself:</strong> Use index cards or paper to create matching items. Write one item on each card, then sort them based on the activity instruction.
        </div>
      </div>
    `;
  }

  initDragDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dragItems.forEach(item => {
      item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.dataset.item);
        this.style.opacity = '0.5';
      });
      
      item.addEventListener('dragend', function(e) {
        this.style.opacity = '1';
      });
    });
    
    dropZones.forEach(zone => {
      zone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('border-primary');
      });
      
      zone.addEventListener('dragleave', function(e) {
        this.classList.remove('border-primary');
      });
      
      zone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('border-primary');
        
        const itemId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.querySelector(`[data-item="${itemId}"]`);
        
        if (draggedItem) {
          const dropZone = this.querySelector('.dropped-item');
          dropZone.innerHTML = draggedItem.outerHTML;
          draggedItem.style.display = 'none';
        }
      });
    });
  }
  
  initFoodChain() {
    const organisms = document.querySelectorAll('[data-organism]');
    const chainZone = document.getElementById('food-chain-zone');
    
    organisms.forEach(org => {
      org.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.dataset.organism);
        e.dataTransfer.effectAllowed = 'move';
      });
    });
    
    chainZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('border-primary');
    });
    
    chainZone.addEventListener('dragleave', function(e) {
      this.classList.remove('border-primary');
    });
    
    chainZone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('border-primary');
      
      const orgName = e.dataTransfer.getData('text/plain');
      const orgElement = document.querySelector(`[data-organism="${orgName}"]`);
      
      if (orgElement && !orgElement.closest('#food-chain-items')) {
        const itemsContainer = document.getElementById('food-chain-items');
        const newItem = orgElement.cloneNode(true);
        newItem.draggable = false;
        newItem.style.cursor = 'default';
        itemsContainer.appendChild(newItem);
      }
    });
  }
  
  resetDragDrop() {
    document.querySelectorAll('.drag-item').forEach(item => {
      item.style.display = '';
    });
    document.querySelectorAll('.dropped-item').forEach(zone => {
      zone.innerHTML = '';
    });
    document.getElementById('drag-result').innerHTML = '';
  }
  
  checkDragDrop() {
    const themes = ['Perseverance', 'Friendship', 'Honesty'];
    const drops = document.querySelectorAll('.dropped-item');
    let correct = 0;
    
    drops.forEach((zone, index) => {
      if (zone.textContent.trim() !== '') {
        correct++;
      }
    });
    
    const resultDiv = document.getElementById('drag-result');
    if (correct === 3) {
      resultDiv.innerHTML = '<div class="alert alert-success"><i class="bi bi-check-circle me-2"></i>Great! All items matched correctly!</div>';
    } else {
      resultDiv.innerHTML = '<div class="alert alert-warning"><i class="bi bi-exclamation-triangle me-2"></i>Please match all items. Think about the main message or lesson in each story.</div>';
    }
  }
  
  resetFoodChain() {
    document.getElementById('food-chain-items').innerHTML = '<div class="text-muted text-center mb-2">Drop organisms here to build the food chain</div>';
    document.getElementById('food-chain-result').innerHTML = '';
  }
  
  checkFoodChain() {
    const items = document.querySelectorAll('#food-chain-items [data-organism]');
    const order = Array.from(items).map(item => item.dataset.organism);
    const correctOrder = ['Grass', 'Rabbit', 'Snake', 'Hawk'];
    
    const resultDiv = document.getElementById('food-chain-result');
    
    if (order.length < 4) {
      resultDiv.innerHTML = '<div class="alert alert-warning"><i class="bi bi-exclamation-triangle me-2"></i>Please add all 4 organisms to the food chain.</div>';
      return;
    }
    
    const isCorrect = order.every((org, idx) => org === correctOrder[idx]);
    
    if (isCorrect) {
      resultDiv.innerHTML = '<div class="alert alert-success"><i class="bi bi-check-circle me-2"></i>Perfect! The food chain shows energy flowing from producers to top predators!</div>';
    } else {
      resultDiv.innerHTML = '<div class="alert alert-warning"><i class="bi bi-exclamation-triangle me-2"></i>Not quite. Remember: energy flows from the sun to producers, then to herbivores, then to carnivores. Try again!</div>';
    }
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
              <!-- View Toggle -->
              <div class="row mb-3">
                <div class="col-12">
                  <div class="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <i class="bi bi-list-ul text-primary me-2"></i>
                      <strong>View Mode:</strong>
                    </div>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-primary active" id="viewResourcesBtn">
                        <i class="bi bi-book me-1"></i>Resources
                      </button>
                      <button type="button" class="btn btn-outline-primary" id="viewLearningPathsBtn2">
                        <i class="bi bi-diagram-3 me-1"></i>Learning Paths
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
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
      this.updateResourcesDisplay();
      
      // Add event listeners to the view toggle buttons
      const viewResourcesBtn = document.getElementById('viewResourcesBtn');
      const viewLearningPathsBtn2 = document.getElementById('viewLearningPathsBtn2');
      
      if (viewResourcesBtn && viewLearningPathsBtn2) {
        // Resources view button
        viewResourcesBtn.addEventListener('click', () => {
          if (window.resourcesPage) {
            window.resourcesPage.render('resources');
          }
        });
        
        // Learning Paths view button
        viewLearningPathsBtn2.addEventListener('click', () => {
          console.log('Learning Paths toggle clicked');
          if (window.resourcesPage) {
            window.resourcesPage.render('learning-paths');
          } else {
            alert('Page is still loading. Please try again.');
          }
        });
        
        console.log('View toggle event listeners attached');
      }
    }, 100);
  }

  getGradeButtons() {
    // If no school level selected, return empty
    if (this.currentSchoolLevel === 'all') {
      return '';
    }
    
    const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
    return grades.map(grade => `
      <button class="grade-btn ${this.currentGrade === grade ? 'active' : ''}" 
              onclick="window.resourcesPage.selectGrade('${grade}')">
        ${grade}
      </button>
    `).join('');
  }

  getGradeButtonsForLearningPaths(schoolLevel) {
    const grades = this.getGradesForSchoolLevel(schoolLevel);
    return grades.map(grade => `
      <button class="grade-btn ${this.currentGrade === grade ? 'active' : ''}" 
              onclick="window.resourcesPage.selectGradeLP('${grade}')">
        ${grade}
      </button>
    `).join('');
  }

  getLearningPathsGrid(paths, grade) {
    // Apply filters
    let filteredPaths = [...paths];
    
    // Filter by selected grade if a grade is selected
    if (grade && grade !== 'all') {
      filteredPaths = filteredPaths.filter(path => path.grade === grade);
    }
    
    // Filter by subject
    if (this.currentSubject && this.currentSubject !== 'all') {
      if (this.currentSubject === 'STEM') {
        // STEM includes Science, Math, Biology, and STEM
        filteredPaths = filteredPaths.filter(path => 
          path.subject === 'Science' || path.subject === 'Math' || path.subject === 'Biology' || path.subject === 'STEM'
        );
      } else if (this.currentSubject === 'English') {
        filteredPaths = filteredPaths.filter(path => path.subject === 'English');
      } else if (this.currentSubject === 'History') {
        filteredPaths = filteredPaths.filter(path => 
          path.subject === 'History' || path.subject === 'Social Studies'
        );
      } else {
        filteredPaths = filteredPaths.filter(path => path.subject === this.currentSubject);
      }
    }
    
    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredPaths = filteredPaths.filter(path => 
        path.title.toLowerCase().includes(query) ||
        path.description.toLowerCase().includes(query) ||
        path.subject.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    filteredPaths.sort((a, b) => {
      switch (this.currentSort) {
        case 'newest':
          return 0; // No date field for learning paths, keep original order
        case 'popular':
          return (b.lessons?.length || 0) - (a.lessons?.length || 0);
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
    
    if (filteredPaths.length === 0) {
      return `
        <div class="no-results">
          <div class="text-center py-5">
            <i class="bi bi-search display-1 text-muted mb-3"></i>
            <h3 class="text-muted">No learning paths found</h3>
            <p class="text-muted">Try adjusting your filters or selecting a different grade.</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="row">
        ${filteredPaths.map(path => {
          // Determine button color based on subject
          let btnClass = 'btn-primary';
          let subjectIcon = 'book';
          if (path.subject === 'Math') {
            btnClass = 'btn-primary';
            subjectIcon = 'calculator';
          } else if (path.subject === 'English' || path.subject === 'ELA') {
            btnClass = 'btn-success';
            subjectIcon = 'book';
          } else if (path.subject === 'Science') {
            btnClass = 'btn-danger';
            subjectIcon = 'flask';
          } else if (path.subject === 'Social Studies') {
            btnClass = 'btn-warning';
            subjectIcon = 'globe';
          }

          return `
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="resource-card h-100">
                <div class="resource-header">
                  <div class="resource-badges">
                    <span class="badge badge-subject">${path.subject}</span>
                    <span class="badge badge-grade">${path.grade}</span>
                  </div>
                  <div class="resource-type">
                    <i class="bi bi-${subjectIcon}"></i>
                  </div>
                </div>
                <div class="resource-body">
                  <h5 class="resource-title">${path.title}</h5>
                  <p class="resource-description">${path.description}</p>
                  <div class="resource-meta">
                    <div class="meta-item">
                      <i class="bi bi-book me-1"></i>
                      <span>${path.lessons?.length || 0} lessons</span>
                    </div>
                  </div>
                </div>
                <div class="resource-footer">
                  <button class="btn ${btnClass} w-100" onclick="window.resourcesPage.openLearningPath('${path.grade}', '${path.subject}', '${path.id}')">
                    <i class="bi bi-play-fill me-2"></i>Start Learning
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  getGradesForSchoolLevel(schoolLevel) {
    switch(schoolLevel) {
      case 'Elementary':
        return ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
      case 'Middle School':
        return ['6th Grade', '7th Grade', '8th Grade'];
      case 'High School':
        return ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];
      default:
        return [];
    }
  }

  getResourcesGrid() {
    // Apply filters
    let filtered = [...this.resources];
    
    // Filter by school level
    if (this.currentSchoolLevel !== 'all') {
      filtered = filtered.filter(resource => 
        resource.schoolLevel && resource.schoolLevel.toLowerCase() === this.currentSchoolLevel.toLowerCase()
      );
    }
    
    // Filter by selected grade if a grade is selected
    if (this.currentGrade !== 'all') {
      filtered = filtered.filter(resource => 
        resource.grade && resource.grade.toLowerCase() === this.currentGrade.toLowerCase()
      );
    }
    
    // Filter by subject
    if (this.currentSubject !== 'all') {
      if (this.currentSubject === 'STEM') {
        // STEM includes Science, Math, Biology, and STEM
        filtered = filtered.filter(resource => 
          resource.subject && (
            resource.subject.toLowerCase() === 'science' || 
            resource.subject.toLowerCase() === 'math' || 
            resource.subject.toLowerCase() === 'biology' || 
            resource.subject.toLowerCase() === 'stem'
          )
        );
      } else if (this.currentSubject === 'English') {
        filtered = filtered.filter(resource => 
          resource.subject && resource.subject.toLowerCase() === 'english'
        );
      } else if (this.currentSubject === 'History') {
        filtered = filtered.filter(resource => 
          resource.subject && (
            resource.subject.toLowerCase() === 'history' || 
            resource.subject.toLowerCase() === 'social studies'
          )
        );
      } else {
        filtered = filtered.filter(resource => 
          resource.subject && resource.subject.toLowerCase() === this.currentSubject.toLowerCase()
        );
      }
    }
    
    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(resource => 
        (resource.title && resource.title.toLowerCase().includes(query)) ||
        (resource.description && resource.description.toLowerCase().includes(query)) ||
        (resource.subject && resource.subject.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (this.currentSort) {
        case 'newest':
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case 'popular':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'alphabetical':
          return (a.title || '').localeCompare(b.title || '');
        case 'grade':
          return this.getGradeOrder(a.grade || '') - this.getGradeOrder(b.grade || '');
        case 'subject':
          return (a.subject || '').localeCompare(b.subject || '');
        default:
          return 0;
      }
    });
    
    this.filteredResources = filtered;
    
    if (filtered.length === 0) {
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
        ${filtered.map(resource => `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="resource-card h-100">
              <div class="resource-header">
                <div class="resource-badges">
                  <span class="badge badge-subject">${resource.subject}</span>
                  <span class="badge badge-grade">${resource.grade}</span>
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
    // Toggle: if clicking the same level, deselect it
    if (this.currentSchoolLevel === level) {
      this.currentSchoolLevel = 'all';
      this.currentGrade = 'all';
    } else {
      this.currentSchoolLevel = level;
      this.currentGrade = 'all'; // Reset grade when changing school level
    }
    
    // Update button active states
    document.querySelectorAll('.school-level-tab').forEach(btn => {
      btn.classList.remove('active');
      if (this.currentSchoolLevel !== 'all') {
        const buttonText = btn.querySelector('h5').textContent.trim();
        if (buttonText === this.currentSchoolLevel) {
          btn.classList.add('active');
        }
      }
    });
    
    // Update grade filter visibility and buttons
    const gradeFilter = document.querySelector('.grade-filter');
    const gradeButtonsContainer = document.querySelector('.grade-buttons');
    
    if (this.currentSchoolLevel === 'all') {
      if (gradeFilter) gradeFilter.style.display = 'none';
      // Clear active states from grade buttons
      document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
      this.currentGrade = 'all';
    } else {
      if (gradeFilter) gradeFilter.style.display = 'block';
      
      // Update grade buttons based on current school level
      if (gradeButtonsContainer) {
        const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
        gradeButtonsContainer.innerHTML = grades.map(grade => `
          <button class="grade-btn ${this.currentGrade === grade ? 'active' : ''}" 
                  onclick="window.resourcesPage.selectGrade('${grade}')">
            ${grade}
          </button>
        `).join('');
      }
    }
    
    // Refresh current view
    if (this.currentView === 'learning-paths') {
      this.render('learning-paths');
    } else {
      this.updateResourcesDisplay();
    }
  }

  selectGrade(grade) {
    this.currentGrade = this.currentGrade === grade ? 'all' : grade;
    
    // Update button active states
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.classList.remove('active');
      if (this.currentGrade !== 'all' && btn.textContent.trim() === this.currentGrade) {
        btn.classList.add('active');
      }
    });
    
    // Refresh current view
    if (this.currentView === 'learning-paths') {
      this.render('learning-paths');
    } else {
      this.updateResourcesDisplay();
    }
  }

  selectSchoolLevelLP(level) {
    // Toggle: if clicking the same level, deselect it
    if (this.currentSchoolLevel === level) {
      this.currentSchoolLevel = 'all';
      this.currentGrade = 'all';
    } else {
      this.currentSchoolLevel = level;
      this.currentGrade = 'all'; // Reset grade when changing school level
    }
    
    // Update button active states
    document.querySelectorAll('.school-level-tab').forEach(btn => {
      btn.classList.remove('active');
      if (this.currentSchoolLevel !== 'all') {
        const buttonText = btn.querySelector('h5').textContent.trim();
        if (buttonText === this.currentSchoolLevel) {
          btn.classList.add('active');
        }
      }
    });
    
    // Update grade filter visibility and buttons
    const gradeFilter = document.querySelector('.grade-filter');
    const gradeButtonsContainer = document.querySelector('.grade-buttons');
    
    if (this.currentSchoolLevel === 'all') {
      if (gradeFilter) gradeFilter.style.display = 'none';
      // Clear active states from grade buttons
      document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
      this.currentGrade = 'all';
    } else {
      if (gradeFilter) gradeFilter.style.display = 'block';
      
      // Update grade buttons based on current school level
      if (gradeButtonsContainer) {
        const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
        gradeButtonsContainer.innerHTML = grades.map(grade => `
          <button class="grade-btn ${this.currentGrade === grade ? 'active' : ''}" 
                  onclick="window.resourcesPage.selectGradeLP('${grade}')">
            ${grade}
          </button>
        `).join('');
      }
    }
    
    // Refresh learning paths view
    if (this.currentView === 'learning-paths') {
      this.render('learning-paths');
    }
  }
  
  selectGradeLP(grade) {
    this.currentGrade = grade;
    
    // Update button active states
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    if (this.currentView === 'learning-paths') {
      this.updateLearningPathsDisplay();
      // Re-add active class to the selected button
      document.querySelectorAll('.grade-btn').forEach(btn => {
        if (btn.textContent.trim() === grade) {
          btn.classList.add('active');
        }
      });
    }
  }

  // Add method to access from click handlers
  showLearningPaths() {
    this.render('learning-paths');
  }

  handleSubjectFilter() {
    const filter = document.getElementById('subjectFilter');
    this.currentSubject = filter.value;
    this.updateResourcesDisplay();
  }
  
  updateResourcesDisplay() {
    const gridElement = document.querySelector('.resources-grid');
    if (gridElement) {
      gridElement.innerHTML = this.getResourcesGrid();
    }
    this.updateResultsCount();
  }

  handleSubjectFilterLP() {
    const filter = document.getElementById('subjectFilterLP');
    if (filter) {
      this.currentSubject = filter.value;
      // Refresh learning paths view
      if (this.currentView === 'learning-paths') {
        this.updateLearningPathsDisplay();
      }
    }
  }

  handleSortFilterLP() {
    const filter = document.getElementById('sortFilterLP');
    if (filter) {
      this.currentSort = filter.value;
      // Refresh learning paths view
      if (this.currentView === 'learning-paths') {
        this.updateLearningPathsDisplay();
      }
    }
  }
  
  updateLearningPathsDisplay() {
    // Get all learning paths for the selected school level's grades only
    let allGrades = [];
    if (this.currentSchoolLevel === 'Elementary') {
      allGrades = ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
    } else if (this.currentSchoolLevel === 'Middle School') {
      allGrades = ['6th Grade', '7th Grade', '8th Grade'];
    } else if (this.currentSchoolLevel === 'High School') {
      allGrades = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];
    } else {
      // If no school level selected, show all
      allGrades = ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
    }
    
    let allPaths = [];
    
    allGrades.forEach(gradeKey => {
      const mathPaths = this.learningPathData.getAllPaths(gradeKey, 'Math') || [];
      const elaPaths = this.learningPathData.getAllPaths(gradeKey, 'ELA') || [];
      const sciencePaths = this.learningPathData.getAllPaths(gradeKey, 'Science') || [];
      const socialStudiesPaths = this.learningPathData.getAllPaths(gradeKey, 'Social Studies') || [];
      
      // Determine school level for each path
      let schoolLevel = 'Elementary';
      if (['6th Grade', '7th Grade', '8th Grade'].includes(gradeKey)) {
        schoolLevel = 'Middle School';
      } else if (['9th Grade', '10th Grade', '11th Grade', '12th Grade'].includes(gradeKey)) {
        schoolLevel = 'High School';
      }
      
      // Add paths with their grade label
      mathPaths.forEach(p => allPaths.push({...p, subject: 'Math', grade: gradeKey, schoolLevel: schoolLevel}));
      elaPaths.forEach(p => allPaths.push({...p, subject: 'English', grade: gradeKey, schoolLevel: schoolLevel}));
      sciencePaths.forEach(p => allPaths.push({...p, subject: 'Science', grade: gradeKey, schoolLevel: schoolLevel}));
      socialStudiesPaths.forEach(p => allPaths.push({...p, subject: 'Social Studies', grade: gradeKey, schoolLevel: schoolLevel}));
    });
    
    // Get current grade for grid display
    const grade = this.currentGrade;
    
    // Update the grid
    const gridElement = document.querySelector('.resources-grid');
    if (gridElement) {
      gridElement.innerHTML = this.getLearningPathsGrid(allPaths, grade);
    }
  }

  handleSearch() {
    const searchInput = document.getElementById('searchInput');
    this.searchQuery = searchInput.value.toLowerCase();
    this.updateResourcesDisplay();
  }

  handleSearchLP() {
    const searchInput = document.getElementById('searchInputLP');
    if (searchInput) {
      this.searchQuery = searchInput.value.toLowerCase();
      // Refresh learning paths view
      if (this.currentView === 'learning-paths') {
        this.updateLearningPathsDisplay();
      }
    }
  }

  handleSortFilter() {
    const filter = document.getElementById('sortFilter');
    this.currentSort = filter.value;
    this.updateResourcesDisplay();
  }

  clearAllFilters() {
    this.currentSchoolLevel = 'all';
    this.currentGrade = 'all';
    this.currentSubject = 'all';
    this.currentSort = 'newest';
    this.searchQuery = '';
    
    // Reset form elements
    if (document.getElementById('subjectFilter')) {
      document.getElementById('subjectFilter').value = 'all';
    }
    if (document.getElementById('sortFilter')) {
      document.getElementById('sortFilter').value = 'newest';
    }
    if (document.getElementById('searchInput')) {
      document.getElementById('searchInput').value = '';
    }
    
    // Reset learning paths filters
    if (document.getElementById('subjectFilterLP')) {
      document.getElementById('subjectFilterLP').value = 'all';
    }
    if (document.getElementById('sortFilterLP')) {
      document.getElementById('sortFilterLP').value = 'newest';
    }
    if (document.getElementById('searchInputLP')) {
      document.getElementById('searchInputLP').value = '';
    }
    
    // Update button states
    document.querySelectorAll('.school-level-tab').forEach(btn => {
      btn.classList.remove('active');
    });
    
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Hide grade filter
    const gradeFilter = document.querySelector('.grade-filter');
    if (gradeFilter) {
      gradeFilter.style.display = 'none';
    }
    
    // Update the appropriate view
    if (this.currentView === 'learning-paths') {
      this.updateLearningPathsDisplay();
    } else {
      this.updateResourcesDisplay();
    }
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
      // Pre-K Math
      {
        id: 1,
        title: "Count Pictures Up to 3",
        subject: "Math",
        description: "Interactive counting practice for numbers 1-3",
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
        title: "Count Pictures Up to 5",
        subject: "Math",
        description: "Interactive counting practice for numbers 1-5",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/count-pictures-up-to-5",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 97
      },
      {
        id: 3,
        title: "Count Pictures Up to 10",
        subject: "Math",
        description: "Interactive counting practice for numbers 1-10",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/count-pictures-up-to-10",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 96
      },
      {
        id: 4,
        title: "More",
        subject: "Math",
        description: "Learn the concept of 'more' in counting",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/more",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 95
      },
      {
        id: 5,
        title: "Long and Short",
        subject: "Math",
        description: "Compare lengths and learn measurement concepts",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/long-and-short",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 94
      },
      {
        id: 6,
        title: "Circles, Squares and Triangles",
        subject: "Math",
        description: "Identify and learn basic shapes",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/pre-k/circles-squares-and-triangles",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 93
      },
      {
        id: 7,
        title: "Molly's Magic Adventure",
        subject: "Math",
        description: "Interactive math adventure game",
        type: "Interactive Game",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.abcya.com/games/mollys_magic_adventure",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 92
      },
      {
        id: 8,
        title: "Fuzz Bugs Counting, Sorting & Comparing",
        subject: "Math",
        description: "Practice counting, sorting and comparing with fun bugs",
        type: "Interactive Game",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.abcya.com/games/fuzz_bugs_counting_sorting_comparing",
        schoolLevel: "Elementary",
        grade: "Pre-K",
        createdAt: new Date().toISOString(),
        popularity: 91
      },
      // Kindergarten Math
      {
        id: 9,
        title: "Count Blocks Up to 10",
        subject: "Math",
        description: "Count blocks and learn number recognition",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/count-blocks-up-to-10",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 90
      },
      {
        id: 10,
        title: "Count on a Chart Up to 100",
        subject: "Math",
        description: "Learn counting patterns and number charts",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/count-on-a-chart-up-to-100",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 89
      },
      {
        id: 11,
        title: "Count Forward Up to 20",
        subject: "Math",
        description: "Practice counting forward from any number",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/count-forward-up-to-20",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 88
      },
      {
        id: 12,
        title: "Identify Numbers 0 to 5",
        subject: "Math",
        description: "Recognize and identify numbers 0-5",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/identify-numbers-0-to-5",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 87
      },
      {
        id: 13,
        title: "Addition Sentences Up to 5",
        subject: "Math",
        description: "Learn addition with visual models",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/addition-sentences-up-to-5-which-model-matches",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 86
      },
      {
        id: 14,
        title: "Fewer and More - Compare by Counting",
        subject: "Math",
        description: "Compare quantities using counting",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/fewer-and-more-compare-by-counting",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 85
      },
      {
        id: 15,
        title: "Long and Short",
        subject: "Math",
        description: "Compare lengths and measurement",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/long-and-short",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 84
      },
      {
        id: 16,
        title: "Name the Two-Dimensional Shape",
        subject: "Math",
        description: "Identify and name 2D shapes",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "5-10 minutes",
        contentUrl: "https://www.ixl.com/math/kindergarten/name-the-two-dimensional-shape",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 83
      },
      // Kindergarten ELA
      {
        id: 17,
        title: "Find the Action Verb with Images",
        subject: "English",
        description: "Identify action verbs using pictures",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/find-the-action-verb-with-images",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 82
      },
      {
        id: 18,
        title: "Is the Noun a Person, Animal, Place or Thing",
        subject: "English",
        description: "Classify nouns into categories",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/is-the-noun-a-person-animal-place-or-thing",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 81
      },
      {
        id: 19,
        title: "Unscramble the Words to Make a Complete Sentence",
        subject: "English",
        description: "Practice sentence structure and word order",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/unscramble-the-words-to-make-a-complete-sentence",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 80
      },
      {
        id: 20,
        title: "Capitalize the First Letter of a Sentence",
        subject: "English",
        description: "Learn proper sentence capitalization",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/capitalize-the-first-letter-of-a-sentence",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 79
      },
      {
        id: 21,
        title: "Which Letter Does the Word Start With",
        subject: "English",
        description: "Practice beginning letter sounds",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/which-letter-does-the-word-start-with",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 78
      },
      {
        id: 22,
        title: "Complete the Short A Word",
        subject: "English",
        description: "Practice short A vowel sounds",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/complete-the-short-a-word",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 77
      },
      {
        id: 23,
        title: "Sort Objects into Categories",
        subject: "English",
        description: "Practice categorization and classification",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/kindergarten/sort-objects-into-categories",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 76
      },
      {
        id: 24,
        title: "Uppercase and Lowercase Letter Match",
        subject: "English",
        description: "Match uppercase and lowercase letters",
        type: "Interactive Game",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.abcya.com/games/uppercase_and_lowercase_letter_match",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 75
      },
      // Grade 1 Math
      {
        id: 25,
        title: "Addition Word Problems Sums Up to 10",
        subject: "Math",
        description: "Solve addition word problems with sums up to 10",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/addition-word-problems-sums-up-to-10",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 74
      },
      {
        id: 26,
        title: "Use Addition to Subtract Up to 10",
        subject: "Math",
        description: "Learn subtraction using addition strategies",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/use-addition-to-subtract-up-to-10",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 73
      },
      {
        id: 27,
        title: "Add by Counting On Sums Up to 10",
        subject: "Math",
        description: "Practice addition by counting on strategy",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/add-by-counting-on-sums-up-to-10",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 72
      },
      {
        id: 28,
        title: "Count Objects to 100",
        subject: "Math",
        description: "Practice counting objects up to 100",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/count-objects-to-100",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 71
      },
      {
        id: 29,
        title: "Add Multiples of Ten",
        subject: "Math",
        description: "Learn to add multiples of ten",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/add-multiples-of-ten",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 70
      },
      {
        id: 30,
        title: "Compare Objects Length and Height",
        subject: "Math",
        description: "Compare and measure length and height",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/compare-objects-length-and-height",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 69
      },
      {
        id: 31,
        title: "Match Digital Clocks and Times",
        subject: "Math",
        description: "Learn to read digital clocks and match times",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/match-digital-clocks-and-times",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 68
      },
      {
        id: 32,
        title: "Equal Parts 2 and 4 Equal Parts",
        subject: "Math",
        description: "Learn about equal parts and fractions",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-1/equal-parts-2-and-4-equal-parts",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 67
      },
      // Grade 1 ELA
      {
        id: 33,
        title: "Select the Nouns",
        subject: "English",
        description: "Identify and select nouns in sentences",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/select-the-nouns",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 66
      },
      {
        id: 34,
        title: "Choose Between Subject and Object Personal Pronouns",
        subject: "English",
        description: "Learn to use subject and object pronouns correctly",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/choose-between-subject-and-object-personal-pronouns",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 65
      },
      {
        id: 35,
        title: "Form and Use the Regular Past Tense",
        subject: "English",
        description: "Practice forming and using regular past tense verbs",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/form-and-use-the-regular-past-tense",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 64
      },
      {
        id: 36,
        title: "Compare Pictures Using Adjectives",
        subject: "English",
        description: "Use adjectives to compare pictures",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/compare-pictures-using-adjectives",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 63
      },
      {
        id: 37,
        title: "Capitalize the Names of People and Pets",
        subject: "English",
        description: "Learn proper capitalization for names",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/capitalize-the-names-of-people-and-pets",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 62
      },
      {
        id: 38,
        title: "Form Regular Plurals with S and ES",
        subject: "English",
        description: "Practice forming regular plurals",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/form-regular-plurals-with-s-and-es",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 61
      },
      {
        id: 39,
        title: "Use Words with Prefixes and Suffixes",
        subject: "English",
        description: "Learn to use words with prefixes and suffixes",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/use-words-with-prefixes-and-suffixes",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 60
      },
      {
        id: 40,
        title: "Find the Words with Related Meanings",
        subject: "English",
        description: "Identify words with related meanings",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-1/find-the-words-with-related-meanings",
        schoolLevel: "Elementary",
        grade: "1st Grade",
        createdAt: new Date().toISOString(),
        popularity: 59
      },
      // Grade 2 Math
      {
        id: 41,
        title: "Addition Word Problems Sums to 20",
        subject: "Math",
        description: "Solve addition word problems with sums up to 20",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/addition-word-problems-sums-to-20",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 58
      },
      {
        id: 42,
        title: "Add One Digit Numbers",
        subject: "Math",
        description: "Practice adding single digit numbers",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/add-one-digit-numbers",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 57
      },
      {
        id: 43,
        title: "Identify Repeated Addition for Equal Groups",
        subject: "Math",
        description: "Learn multiplication through repeated addition",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/identify-repeated-addition-for-equal-groups-sums-to-25",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 56
      },
      {
        id: 44,
        title: "Place Value Models Up to Hundreds",
        subject: "Math",
        description: "Understand place value up to hundreds",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/place-value-models-up-to-hundreds",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 55
      },
      {
        id: 45,
        title: "Add Two Digit Numbers with Regrouping",
        subject: "Math",
        description: "Learn addition with regrouping",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/add-two-digit-numbers-with-regrouping-sums-to-100",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 54
      },
      {
        id: 46,
        title: "Measure Using an Inch Ruler",
        subject: "Math",
        description: "Learn to measure length using inches",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/measure-using-an-inch-ruler",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 53
      },
      {
        id: 47,
        title: "Count Money Up to 1 Dollar",
        subject: "Math",
        description: "Learn to count coins and bills",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/count-money-up-to-1-dollar",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 52
      },
      {
        id: 48,
        title: "Identify Quadrilaterals",
        subject: "Math",
        description: "Learn to identify four-sided shapes",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/math/grade-2/identify-quadrilaterals",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 51
      },
      // Grade 2 ELA
      {
        id: 49,
        title: "Form and Use Irregular Plurals",
        subject: "English",
        description: "Learn irregular plural forms",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/form-and-use-irregular-plurals",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 50
      },
      {
        id: 50,
        title: "Choose Between Adjectives and Adverbs",
        subject: "English",
        description: "Distinguish between adjectives and adverbs",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/choose-between-adjectives-and-adverbs",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 49
      },
      {
        id: 51,
        title: "Is It a Complete Sentence or a Run-on",
        subject: "English",
        description: "Identify complete sentences vs run-ons",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/is-it-a-complete-sentence-or-a-run-on",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 48
      },
      {
        id: 52,
        title: "Capitalizing Days, Months and Holidays",
        subject: "English",
        description: "Learn proper capitalization rules",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "10-15 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/capitalizing-days-months-and-holidays",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 47
      },
      {
        id: 53,
        title: "Spell the Long A Word",
        subject: "English",
        description: "Practice spelling long A words",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/spell-the-long-a-word-silent-e-ai-ay",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 46
      },
      {
        id: 54,
        title: "Find Synonyms in Context",
        subject: "English",
        description: "Identify synonyms in reading passages",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/find-synonyms-in-context",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 45
      },
      {
        id: 55,
        title: "Form and Use Compound Words",
        subject: "English",
        description: "Learn to create and use compound words",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-2/form-and-use-compound-words",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 44
      },
      {
        id: 56,
        title: "Type a Friendly Letter",
        subject: "English",
        description: "Learn to write friendly letters",
        type: "Interactive Game",
        difficulty: "Beginner",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.abcya.com/games/type_a_friendly_letter",
        schoolLevel: "Elementary",
        grade: "2nd Grade",
        createdAt: new Date().toISOString(),
        popularity: 43
      },
      // Grade 3 Math
      {
        id: 57,
        title: "Multiplication Word Problems with Factors Up to 10",
        subject: "Math",
        description: "Solve multiplication word problems",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/multiplication-word-problems-with-factors-up-to-10",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 42
      },
      {
        id: 58,
        title: "Divide by Counting Equal Groups",
        subject: "Math",
        description: "Learn division through counting equal groups",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/divide-by-counting-equal-groups",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 41
      },
      {
        id: 59,
        title: "Round to the Nearest Ten or Hundred",
        subject: "Math",
        description: "Practice rounding numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/round-to-the-nearest-ten-or-hundred",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 40
      },
      {
        id: 60,
        title: "Add Two Numbers Up to Three Digits Word Problems",
        subject: "Math",
        description: "Solve addition word problems with larger numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/add-two-numbers-up-to-three-digits-word-problems",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 39
      },
      {
        id: 61,
        title: "Understand Fractions Area Models",
        subject: "Math",
        description: "Learn fractions using area models",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/understand-fractions-area-models",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 38
      },
      {
        id: 62,
        title: "Find the End Time Word Problems",
        subject: "Math",
        description: "Solve time word problems",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/find-the-end-time-word-problems",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 37
      },
      {
        id: 63,
        title: "Find the Area of Figures Made of Unit Squares",
        subject: "Math",
        description: "Calculate area using unit squares",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/find-the-area-of-figures-made-of-unit-squares",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 36
      },
      {
        id: 64,
        title: "Attributes of Quadrilaterals",
        subject: "Math",
        description: "Learn properties of four-sided shapes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/math/grade-3/attributes-of-quadrilaterals",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 35
      },
      // Grade 3 ELA
      {
        id: 65,
        title: "Identify Common and Proper Nouns",
        subject: "English",
        description: "Distinguish between common and proper nouns",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/identify-common-and-proper-nouns",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 34
      },
      {
        id: 66,
        title: "Use the Correct Subject or Verb",
        subject: "English",
        description: "Practice subject-verb agreement",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/use-the-correct-subject-or-verb",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 33
      },
      {
        id: 67,
        title: "Is It a Complete Sentence, a Fragment or a Run-on",
        subject: "English",
        description: "Identify sentence types",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/is-it-a-complete-sentence-a-fragment-or-a-run-on",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 32
      },
      {
        id: 68,
        title: "Commas with the Names of Places",
        subject: "English",
        description: "Learn comma usage with place names",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/commas-with-the-names-of-places",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 31
      },
      {
        id: 69,
        title: "Spell Words with Suffixes Review",
        subject: "English",
        description: "Practice spelling words with suffixes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/spell-words-with-suffixes-review",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 30
      },
      {
        id: 70,
        title: "Use Guide Words",
        subject: "English",
        description: "Learn to use dictionary guide words",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/use-guide-words",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 29
      },
      {
        id: 71,
        title: "Similes with Pictures",
        subject: "English",
        description: "Identify and understand similes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/similes-with-pictures",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 28
      },
      {
        id: 72,
        title: "Determine the Meanings of Words with Greek and Latin Roots",
        subject: "English",
        description: "Learn word meanings through roots",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-3/determine-the-meanings-of-words-with-greek-and-latin-roots",
        schoolLevel: "Elementary",
        grade: "3rd Grade",
        createdAt: new Date().toISOString(),
        popularity: 27
      },
      // Grade 4 Math
      {
        id: 73,
        title: "Multiply Two Two-Digit Numbers",
        subject: "Math",
        description: "Practice multiplying two-digit numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/multiply-two-two-digit-numbers",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 26
      },
      {
        id: 74,
        title: "Divide Two-Digit Numbers by One-Digit Numbers",
        subject: "Math",
        description: "Learn division with two-digit dividends",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/divide-two-digit-numbers-by-one-digit-numbers",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 25
      },
      {
        id: 75,
        title: "Add and Subtract Mixed Numbers with Like Denominators",
        subject: "Math",
        description: "Practice operations with mixed numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/add-and-subtract-mixed-numbers-with-like-denominators",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 24
      },
      {
        id: 76,
        title: "Compare Decimals Up to Hundredths",
        subject: "Math",
        description: "Learn to compare decimal numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/compare-decimals-up-to-hundredths",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 23
      },
      {
        id: 77,
        title: "Convert Between Fractions and Mixed Numbers",
        subject: "Math",
        description: "Practice converting between fractions and mixed numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/convert-between-fractions-and-mixed-numbers",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 22
      },
      {
        id: 78,
        title: "Find the Perimeter of Rectangles",
        subject: "Math",
        description: "Calculate perimeter of rectangular shapes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/find-the-perimeter-of-rectangles",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 21
      },
      {
        id: 79,
        title: "Identify Lines of Symmetry",
        subject: "Math",
        description: "Learn about symmetry in shapes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/identify-lines-of-symmetry",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 20
      },
      {
        id: 80,
        title: "Interpret Bar Graphs",
        subject: "Math",
        description: "Read and interpret bar graph data",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-4/interpret-bar-graphs",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 19
      },
      // Grade 4 ELA
      {
        id: 81,
        title: "Identify the Complete Subject of a Sentence",
        subject: "English",
        description: "Learn to identify complete subjects",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/identify-the-complete-subject-of-a-sentence",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 18
      },
      {
        id: 82,
        title: "Identify the Complete Predicate of a Sentence",
        subject: "English",
        description: "Learn to identify complete predicates",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/identify-the-complete-predicate-of-a-sentence",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 17
      },
      {
        id: 83,
        title: "Identify the Simple Subject or Predicate of a Sentence",
        subject: "English",
        description: "Distinguish simple subjects and predicates",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/identify-the-simple-subject-or-predicate-of-a-sentence",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 16
      },
      {
        id: 84,
        title: "Is It a Complete Sentence, a Fragment or a Run-on",
        subject: "English",
        description: "Identify different sentence types",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/is-it-a-complete-sentence-a-fragment-or-a-run-on",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 15
      },
      {
        id: 85,
        title: "Commas with Direct Address",
        subject: "English",
        description: "Learn comma usage in direct address",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/commas-with-direct-address",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 14
      },
      {
        id: 86,
        title: "Spell Words with Open and Closed Syllables",
        subject: "English",
        description: "Practice spelling with different syllable types",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/spell-words-with-open-and-closed-syllables",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 13
      },
      {
        id: 87,
        title: "Use Context to Identify the Meaning of a Word",
        subject: "English",
        description: "Learn to use context clues for word meanings",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/use-context-to-identify-the-meaning-of-a-word",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 12
      },
      {
        id: 88,
        title: "Determine the Meaning of Words with Greek and Latin Roots",
        subject: "English",
        description: "Learn word meanings through Greek and Latin roots",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-4/determine-the-meanings-of-words-with-greek-and-latin-roots",
        schoolLevel: "Elementary",
        grade: "4th Grade",
        createdAt: new Date().toISOString(),
        popularity: 11
      },
      // Grade 5 Math
      {
        id: 89,
        title: "Multiply Three or More Numbers",
        subject: "Math",
        description: "Practice multiplying multiple numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/multiply-three-or-more-numbers",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 10
      },
      {
        id: 90,
        title: "Divide by Two-Digit Numbers",
        subject: "Math",
        description: "Learn division with two-digit divisors",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/divide-by-two-digit-numbers",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 9
      },
      {
        id: 91,
        title: "Add and Subtract Mixed Numbers with Unlike Denominators",
        subject: "Math",
        description: "Practice operations with mixed numbers having different denominators",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/add-and-subtract-mixed-numbers-with-unlike-denominators",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 8
      },
      {
        id: 92,
        title: "Multiply Decimals",
        subject: "Math",
        description: "Learn to multiply decimal numbers",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/multiply-decimals",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 7
      },
      {
        id: 93,
        title: "Divide Decimals",
        subject: "Math",
        description: "Learn to divide decimal numbers",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/divide-decimals",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 6
      },
      {
        id: 94,
        title: "Find the Volume of Rectangular Prisms",
        subject: "Math",
        description: "Calculate volume of rectangular prisms",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/find-the-volume-of-rectangular-prisms",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 5
      },
      {
        id: 95,
        title: "Classify Triangles",
        subject: "Math",
        description: "Learn to classify triangles by sides and angles",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/classify-triangles",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 4
      },
      {
        id: 96,
        title: "Interpret Line Plots",
        subject: "Math",
        description: "Read and interpret line plot data",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/math/grade-5/interpret-line-plots",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 3
      },
      // Grade 5 ELA
      {
        id: 97,
        title: "Identify the Simple Subject or Simple Predicate of a Sentence",
        subject: "English",
        description: "Identify simple subjects and predicates",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/identify-the-simple-subject-or-simple-predicate-of-a-sentence",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 2
      },
      {
        id: 98,
        title: "Identify Dependent and Independent Clauses",
        subject: "English",
        description: "Distinguish between dependent and independent clauses",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/identify-dependent-and-independent-clauses",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 1
      },
      {
        id: 99,
        title: "Is It a Complete Sentence, a Fragment or a Run-on",
        subject: "English",
        description: "Identify different sentence types",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/is-it-a-complete-sentence-a-fragment-or-a-run-on",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 100,
        title: "Commas with Compound and Complex Sentences",
        subject: "English",
        description: "Learn comma usage in compound and complex sentences",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/commas-with-compound-and-complex-sentences",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 101,
        title: "Spell Words with Suffixes",
        subject: "English",
        description: "Practice spelling words with various suffixes",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/spell-words-with-suffixes",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 102,
        title: "Use Context to Identify the Meaning of a Word",
        subject: "English",
        description: "Learn to use context clues for word meanings",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/use-context-to-identify-the-meaning-of-a-word",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 103,
        title: "Determine the Meaning of Words with Greek and Latin Roots",
        subject: "English",
        description: "Learn word meanings through Greek and Latin roots",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/determine-the-meanings-of-words-with-greek-and-latin-roots",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 104,
        title: "Identify the Author's Purpose",
        subject: "English",
        description: "Learn to identify why authors write different texts",
        type: "Interactive Practice",
        difficulty: "Intermediate",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/ela/grade-5/identify-the-authors-purpose",
        schoolLevel: "Elementary",
        grade: "5th Grade",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      // Biology Resources
      {
        id: 105,
        title: "Identify Functions of Plant Cell Parts",
        subject: "Biology",
        description: "Learn the functions of different plant cell organelles",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/identify-functions-of-plant-cell-parts",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 106,
        title: "Identify Functions of Animal Cell Parts",
        subject: "Biology",
        description: "Learn the functions of different animal cell organelles",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/identify-functions-of-animal-cell-parts",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 107,
        title: "Plant Cell Diagrams: Label Parts",
        subject: "Biology",
        description: "Practice labeling parts of plant cell diagrams",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/science/biology/plant-cell-diagrams-label-parts",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 108,
        title: "Animal Cell Diagrams: Label Parts",
        subject: "Biology",
        description: "Practice labeling parts of animal cell diagrams",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/science/biology/animal-cell-diagrams-label-parts",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 109,
        title: "Compare Cell Types by Their Structures",
        subject: "Biology",
        description: "Compare and contrast different cell types and their structures",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/compare-cell-types-by-their-structures",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 110,
        title: "Classify and Describe Organisms Using Domains",
        subject: "Biology",
        description: "Learn to classify organisms using the three-domain system",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/classify-and-describe-organisms-using-domains",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 111,
        title: "Structure and Function of the Cell Membrane",
        subject: "Biology",
        description: "Understand the structure and function of cell membranes",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/science/biology/structure-and-function-of-the-cell-membrane",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 112,
        title: "Types of Passive Transport",
        subject: "Biology",
        description: "Learn about different types of passive transport across cell membranes",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/types-of-passive-transport",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 113,
        title: "Osmosis",
        subject: "Biology",
        description: "Understand the process of osmosis and its role in cell function",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/osmosis",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 114,
        title: "Introduction to Cell Division",
        subject: "Biology",
        description: "Learn the basics of cell division and its importance",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/introduction-to-cell-division",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 115,
        title: "The Cell Cycle",
        subject: "Biology",
        description: "Understand the phases and regulation of the cell cycle",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/science/biology/the-cell-cycle",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 116,
        title: "Describe Phases of Mitosis and the Cell Cycle",
        subject: "Biology",
        description: "Learn to identify and describe the phases of mitosis",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/science/biology/describe-phases-of-mitosis-and-the-cell-cycle",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 117,
        title: "Identify Phases of Mitosis and the Cell Cycle in Plant Cells",
        subject: "Biology",
        description: "Practice identifying mitosis phases specifically in plant cells",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/identify-phases-of-mitosis-and-the-cell-cycle-in-plant-cells",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 118,
        title: "The Chemistry of Photosynthesis",
        subject: "Biology",
        description: "Understand the chemical processes involved in photosynthesis",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/science/biology/the-chemistry-of-photosynthesis",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 119,
        title: "The Chemistry of Cellular Respiration",
        subject: "Biology",
        description: "Learn about the chemical processes of cellular respiration",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "30-35 minutes",
        contentUrl: "https://www.ixl.com/science/biology/the-chemistry-of-cellular-respiration",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 120,
        title: "Sexual Reproduction and Genetic Variation Part I",
        subject: "Biology",
        description: "Understand how sexual reproduction contributes to genetic variation",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/sexual-reproduction-and-genetic-variation-part",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 121,
        title: "Sexual Reproduction and Genetic Variation Part II",
        subject: "Biology",
        description: "Continue learning about genetic variation in sexual reproduction",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/sexual-reproduction-and-genetic-variation-part-ii",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 122,
        title: "Genetics Vocabulary: Genotype and Phenotype",
        subject: "Biology",
        description: "Learn the difference between genotype and phenotype",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/science/biology/genetics-vocabulary-genotype-and-phenotype",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 123,
        title: "Genetics Vocabulary: Dominant and Recessive",
        subject: "Biology",
        description: "Understand dominant and recessive alleles in genetics",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "20-25 minutes",
        contentUrl: "https://www.ixl.com/science/biology/genetics-vocabulary-dominant-and-recessive",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 124,
        title: "Punnett Squares: Mendelian Inheritance",
        subject: "Biology",
        description: "Practice using Punnett squares to predict genetic outcomes",
        type: "Interactive Practice",
        difficulty: "Advanced",
        estimatedTime: "25-30 minutes",
        contentUrl: "https://www.ixl.com/science/biology/punnett-squares-mendelian-inheritance",
        schoolLevel: "High School",
        grade: "Biology",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      // Science Resources (Kindergarten - Grade 8)
      {
        id: 125,
        title: "Identify Living and Nonliving Things",
        subject: "Science",
        description: "Learn to identify living and nonliving things",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/science/kindergarten/identify-living-and-nonliving-things",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      {
        id: 126,
        title: "How Do Animals Use Their Body Parts",
        subject: "Science",
        description: "Understand how animals use different body parts",
        type: "Interactive Practice",
        difficulty: "Beginner",
        estimatedTime: "15-20 minutes",
        contentUrl: "https://www.ixl.com/science/kindergarten/how-do-animals-use-their-body-parts",
        schoolLevel: "Elementary",
        grade: "Kindergarten",
        createdAt: new Date().toISOString(),
        popularity: 0
      },
      // Note: Continued with Science and Social Studies resources from database
      // Database contains all 346 resources including Grades 2-8 Science and Social Studies
    ];
  }
}

// Export ResourcesPage to window for global access
window.ResourcesPage = ResourcesPage;

// Global function for learning paths navigation - defined at module load time
if (typeof window !== 'undefined') {
  window.showLearningPaths = function() {
    console.log('showLearningPaths called');
    console.log('window.resourcesPage:', !!window.resourcesPage);
    console.log('window type:', typeof window.resourcesPage);
    
    if (window.resourcesPage) {
      console.log('Calling render with learning-paths');
      try {
        window.resourcesPage.render('learning-paths');
      } catch (error) {
        console.error('Error calling render:', error);
        alert('Error: ' + error.message);
      }
    } else {
      const errorMsg = 'Resources page is not loaded yet. Please wait a moment and try again.';
      alert(errorMsg);
      console.error('resourcesPage not available');
    }
  };
  console.log('showLearningPaths function defined:', typeof window.showLearningPaths);
}