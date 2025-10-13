// Professional Certifications Page Module
class CertificationsPage {
  constructor(app) {
    this.app = app;
    this.certifications = [];
    this.filteredCertifications = [];
    this.categories = [
      { id: 'all', name: 'All Categories', icon: 'bi-grid-3x3-gap', count: 0 },
      { id: 'finance', name: 'Finance', icon: 'bi-cash-coin', count: 0 },
      { id: 'technology', name: 'Technology', icon: 'bi-cpu', count: 0 },
      { id: 'data', name: 'Data Analytics', icon: 'bi-graph-up-arrow', count: 0 },
      { id: 'healthcare', name: 'Healthcare', icon: 'bi-heart-pulse', count: 0 },
      { id: 'marketing', name: 'Marketing', icon: 'bi-megaphone', count: 0 },
      { id: 'management', name: 'Project Management', icon: 'bi-kanban', count: 0 }
    ];

    // Filter state
    this.activeFilters = {
      category: 'all',
      providers: new Set(),
      difficulties: new Set(),
      completionTimes: new Set(),
      searchQuery: ''
    };

    // Sidebar collapsed state
    this.sidebarCollapsed = false;
  }

  async render() {
    this.app.showLoading();

    try {
      await this.loadCertifications();
      this.updateCategoryCounts();
      this.displayPage();
    } catch (error) {
      console.error('Error loading certifications:', error);
      this.app.showError('Failed to load certifications. Please try again later.');
    }
  }

  async loadCertifications() {
    // Professional certification data
    //
    // HOW TO UPDATE CERTIFICATION URLS:
    // Each certification object has a 'certificationUrl' property.
    // Simply replace the placeholder URLs (e.g., "#cfp-certification") with the actual URLs.
    // Example: certificationUrl: "https://www.cfp.net/get-certified"
    //
    // The URLs will open in a new tab with security attributes (rel="noopener noreferrer")
    //
    this.certifications = [
      // Finance Certifications
      {
        id: 1,
        title: "Certified Financial Planner (CFP)",
        category: "finance",
        provider: "CFP Board",
        description: "Comprehensive financial planning certification covering retirement, estate, and investment planning.",
        difficulty: "advanced",
        completionTime: "12-18 months",
        dateRange: "2024",
        icon: "bi-wallet2",
        certificationUrl: "https://www.cfp.net/certification-process"
      },
      {
        id: 2,
        title: "Chartered Financial Analyst (CFA)",
        category: "finance",
        provider: "CFA Institute",
        description: "Gold-standard certification for investment professionals and financial analysts. Three-level exam program.",
        difficulty: "advanced",
        completionTime: "24-36 months",
        dateRange: "2024",
        icon: "bi-graph-up",
        certificationUrl: "https://www.cfainstitute.org/programs/cfa-program/exam"
      },
      {
        id: 3,
        title: "Financial Risk Manager (FRM)",
        category: "finance",
        provider: "GARP",
        description: "Leading certification focused on financial risk management and analysis from the Global Association of Risk Professionals.",
        difficulty: "advanced",
        completionTime: "12-18 months",
        dateRange: "2024",
        icon: "bi-shield-check",
        certificationUrl: "https://www.garp.org/frm/program-exams"
      },

      // Technology Certifications
      {
        id: 4,
        title: "AWS Certified Solutions Architect - Associate",
        category: "technology",
        provider: "Amazon Web Services",
        description: "Design and deploy scalable systems on AWS cloud infrastructure. Associate-level certification.",
        difficulty: "intermediate",
        completionTime: "3-6 months",
        dateRange: "2024",
        icon: "bi-cloud",
        certificationUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      },
      {
        id: 5,
        title: "AWS Certified Cloud Practitioner",
        category: "technology",
        provider: "Amazon Web Services",
        description: "Foundational understanding of AWS Cloud services and core AWS concepts.",
        difficulty: "beginner",
        completionTime: "2-3 months",
        dateRange: "2024",
        icon: "bi-cloud-check",
        certificationUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
      },
      {
        id: 6,
        title: "CompTIA A+",
        category: "technology",
        provider: "CompTIA",
        description: "Industry-standard certification for IT support and technical support professionals.",
        difficulty: "beginner",
        completionTime: "2-3 months",
        dateRange: "2024",
        icon: "bi-pc-display",
        certificationUrl: "https://www.comptia.org/en-us/certifications/a"
      },
      {
        id: 7,
        title: "CompTIA Security+",
        category: "technology",
        provider: "CompTIA",
        description: "Foundation-level cybersecurity skills for IT professionals.",
        difficulty: "beginner",
        completionTime: "2-3 months",
        dateRange: "2024",
        icon: "bi-shield-lock",
        certificationUrl: "https://www.comptia.org/en-us/certifications/security"
      },
      {
        id: 8,
        title: "CompTIA Network+",
        category: "technology",
        provider: "CompTIA",
        description: "Establish a career in networking with foundational networking skills and concepts.",
        difficulty: "intermediate",
        completionTime: "3-4 months",
        dateRange: "2024",
        icon: "bi-diagram-3",
        certificationUrl: "https://www.comptia.org/en-us/certifications/network"
      },

      // Data Analytics Certifications
      {
        id: 9,
        title: "Google Data Analytics Professional Certificate",
        category: "data",
        provider: "Google",
        description: "Master data analytics fundamentals including cleaning, visualization, and analysis. Entry-level program.",
        difficulty: "beginner",
        completionTime: "3-6 months",
        dateRange: "2024",
        icon: "bi-bar-chart",
        certificationUrl: "https://www.coursera.org/professional-certificates/google-data-analytics"
      },
      {
        id: 10,
        title: "IBM Data Science Professional",
        category: "data",
        provider: "IBM (Coursera)",
        description: "Learn Python, SQL, machine learning, and data visualization techniques.",
        difficulty: "intermediate",
        completionTime: "6-9 months",
        dateRange: "2024",
        icon: "bi-laptop",
        certificationUrl: "https://www.coursera.org/professional-certificates/ibm-data-science"
      },
      {
        id: 11,
        title: "Tableau Desktop Specialist",
        category: "data",
        provider: "Tableau",
        description: "Create powerful visualizations and dashboards with Tableau.",
        difficulty: "beginner",
        completionTime: "1-2 months",
        dateRange: "2024",
        icon: "bi-pie-chart",
        certificationUrl: "https://www.tableau.com/learn/certification/desktop-specialist"
      },
      {
        id: 12,
        title: "Microsoft Power BI Data Analyst Associate",
        category: "data",
        provider: "Microsoft",
        description: "Transform data into actionable insights using Power BI. Includes exam PL-300.",
        difficulty: "intermediate",
        completionTime: "2-4 months",
        dateRange: "2024",
        icon: "bi-lightning",
        certificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/"
      },

      // Healthcare Certifications
      {
        id: 13,
        title: "Certified Nursing Assistant (CNA)",
        category: "healthcare",
        provider: "American Red Cross",
        description: "Entry-level healthcare certification for nursing assistants providing patient care.",
        difficulty: "beginner",
        completionTime: "1-3 months",
        dateRange: "2024",
        icon: "bi-hospital",
        certificationUrl: "https://www.redcross.org/take-a-class/lp/certified-nursing-assistant-nat"
      },
      {
        id: 14,
        title: "Certified Professional Coder (CPC)",
        category: "healthcare",
        provider: "AAPC",
        description: "Medical coding certification for healthcare billing and coding professionals.",
        difficulty: "intermediate",
        completionTime: "4-6 months",
        dateRange: "2024",
        icon: "bi-clipboard2-data",
        certificationUrl: "https://www.aapc.com/certifications/cpc"
      },
      {
        id: 15,
        title: "Certified Coding Specialist (CCS)",
        category: "healthcare",
        provider: "AHIMA",
        description: "Advanced medical coding certification for hospital and health system coding.",
        difficulty: "intermediate",
        completionTime: "6-9 months",
        dateRange: "2024",
        icon: "bi-file-medical",
        certificationUrl: "https://www.ahima.org/certification-careers/certifications-overview/ccs/"
      },

      // Marketing Certifications
      {
        id: 16,
        title: "Google Digital Marketing & E-commerce Certificate",
        category: "marketing",
        provider: "Google",
        description: "Master SEO, SEM, social media, email marketing, and e-commerce fundamentals. Entry-level program.",
        difficulty: "beginner",
        completionTime: "3-6 months",
        dateRange: "2024",
        icon: "bi-globe",
        certificationUrl: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce"
      },
      {
        id: 17,
        title: "HubSpot Digital Marketing Certification",
        category: "marketing",
        provider: "HubSpot Academy",
        description: "Learn digital marketing fundamentals and HubSpot tools. Free certification course.",
        difficulty: "beginner",
        completionTime: "1-2 months",
        dateRange: "2024",
        icon: "bi-megaphone",
        certificationUrl: "https://academy.hubspot.com/courses/digital-marketing"
      },
      {
        id: 18,
        title: "HubSpot Social Media Marketing Certification",
        category: "marketing",
        provider: "HubSpot Academy",
        description: "Master social media strategy, content creation, and analytics. Free certification.",
        difficulty: "beginner",
        completionTime: "1-2 months",
        dateRange: "2024",
        icon: "bi-share",
        certificationUrl: "https://academy.hubspot.com/courses/social-media"
      },
      {
        id: 19,
        title: "HubSpot Content Marketing Certification",
        category: "marketing",
        provider: "HubSpot Academy",
        description: "Learn content strategy, creation, and distribution. Free certification course.",
        difficulty: "beginner",
        completionTime: "1-2 months",
        dateRange: "2024",
        icon: "bi-file-text",
        certificationUrl: "https://academy.hubspot.com/courses/content-marketing"
      },

      // Project Management Certifications
      {
        id: 20,
        title: "Project Management Professional (PMP)",
        category: "management",
        provider: "PMI",
        description: "World's leading project management certification for experienced professionals. Requires 36-60 months experience.",
        difficulty: "advanced",
        completionTime: "6-12 months",
        dateRange: "2024",
        icon: "bi-diagram-3",
        certificationUrl: "https://www.pmi.org/certifications/project-management-pmp"
      },
      {
        id: 21,
        title: "Certified ScrumMaster (CSM)",
        category: "management",
        provider: "Scrum Alliance",
        description: "Lead Scrum teams and implement Agile methodologies effectively.",
        difficulty: "intermediate",
        completionTime: "2-3 months",
        dateRange: "2024",
        icon: "bi-people",
        certificationUrl: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster"
      },
      {
        id: 22,
        title: "Certified Associate in Project Management (CAPM)",
        category: "management",
        provider: "PMI",
        description: "Entry-level project management certification for aspiring PMs and career changers.",
        difficulty: "beginner",
        completionTime: "3-6 months",
        dateRange: "2024",
        icon: "bi-clipboard-check",
        certificationUrl: "https://www.pmi.org/certifications"
      },
      {
        id: 23,
        title: "Agile Certified Practitioner (PMI-ACP)",
        category: "management",
        provider: "PMI",
        description: "Demonstrate knowledge of agile principles and practices across multiple methodologies.",
        difficulty: "intermediate",
        completionTime: "3-6 months",
        dateRange: "2024",
        icon: "bi-arrows-move",
        certificationUrl: "https://www.pmi.org/certifications/agile-acp"
      }
    ];

    this.filteredCertifications = [...this.certifications];
  }

  updateCategoryCounts() {
    // Reset counts
    this.categories.forEach(cat => cat.count = 0);

    // Count certifications per category
    this.certifications.forEach(cert => {
      const category = this.categories.find(c => c.id === cert.category);
      if (category) category.count++;
    });

    // Set "All" count
    this.categories[0].count = this.certifications.length;
  }

  displayPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container-fluid py-4" style="background: linear-gradient(135deg, var(--ms-navy) 0%, #003d82 100%);">
          <div class="container">
            <h1 class="display-5 fw-bold text-white mb-2">
              <i class="bi bi-award-fill me-3"></i>Professional Certifications
            </h1>
            <p class="lead text-white opacity-75 mb-0">
              Advance your career with industry-recognized certifications
            </p>
          </div>
        </div>

        <!-- Category Cards -->
        <div class="container mt-4">
          <div class="row g-3" id="categoryCards">
            ${this.renderCategoryCards()}
          </div>
        </div>

        <!-- Main Content -->
        <div class="container mt-4 mb-5">
          <div class="row">
            <!-- Sidebar Filters -->
            <div class="col-lg-3 sidebar-column ${this.sidebarCollapsed ? 'collapsed' : ''}" id="sidebarColumn">
              <!-- Toggle Button -->
              <button
                class="sidebar-toggle-btn ${this.sidebarCollapsed ? 'collapsed' : ''}"
                onclick="certificationsPage.toggleSidebar()"
                aria-label="${this.sidebarCollapsed ? 'Show filters' : 'Hide filters'}"
                title="${this.sidebarCollapsed ? 'Show filters' : 'Hide filters'}"
                id="sidebarToggleBtn"
              >
                <i class="bi ${this.sidebarCollapsed ? 'bi-chevron-right' : 'bi-chevron-left'}"></i>
              </button>

              <div class="filter-sidebar">
                <div class="card mb-3">
                  <div class="card-body">
                    <h6 class="fw-bold text-ms-navy mb-3">
                      <i class="bi bi-funnel-fill me-2"></i>Filter By
                    </h6>

                    <!-- Provider Filter -->
                    <div class="filter-section">
                      <div class="filter-section-title" onclick="certificationsPage.toggleFilterSection(this)">
                        <i class="bi bi-chevron-down"></i>
                        <span>Provider</span>
                      </div>
                      <div class="filter-options" id="providerFilters">
                        ${this.renderProviderFilters()}
                      </div>
                    </div>

                    <!-- Difficulty Filter -->
                    <div class="filter-section">
                      <div class="filter-section-title" onclick="certificationsPage.toggleFilterSection(this)">
                        <i class="bi bi-chevron-down"></i>
                        <span>Difficulty Level</span>
                      </div>
                      <div class="filter-options" id="difficultyFilters">
                        ${this.renderDifficultyFilters()}
                      </div>
                    </div>

                    <!-- Completion Time Filter -->
                    <div class="filter-section">
                      <div class="filter-section-title" onclick="certificationsPage.toggleFilterSection(this)">
                        <i class="bi bi-chevron-down"></i>
                        <span>Completion Time</span>
                      </div>
                      <div class="filter-options" id="timeFilters">
                        ${this.renderTimeFilters()}
                      </div>
                    </div>

                    <!-- Clear Filters Button -->
                    <button class="clear-filters-btn" onclick="certificationsPage.clearAllFilters()">
                      <i class="bi bi-x-circle me-2"></i>Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Content Area -->
            <div class="col-lg-9 main-content-column ${this.sidebarCollapsed ? 'expanded' : ''}" id="mainContentColumn">
              <!-- Active Filters & Search -->
              <div class="mb-3">
                <!-- Search and Sort Controls -->
                <div class="search-sort-controls">
                  <div class="search-box">
                    <i class="bi bi-search"></i>
                    <input
                      type="text"
                      placeholder="Search certifications..."
                      id="certSearch"
                      oninput="certificationsPage.handleSearch(this.value)"
                    >
                  </div>
                  <div class="sort-dropdown">
                    <select id="sortSelect" onchange="certificationsPage.handleSort(this.value)">
                      <option value="relevant">Most Relevant</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="difficulty">Difficulty</option>
                      <option value="time">Completion Time</option>
                    </select>
                  </div>
                </div>

                <!-- Active Filter Chips -->
                <div id="activeFiltersContainer">
                  ${this.renderActiveFilters()}
                </div>
              </div>

              <!-- Certifications Grid -->
              <div class="row g-4" id="certificationsGrid">
                ${this.renderCertificationsGrid()}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCategoryCards() {
    return this.categories.map(category => `
      <div class="col-6 col-md-4 col-lg-2">
        <div
          class="category-card ${this.activeFilters.category === category.id ? 'active' : ''}"
          onclick="certificationsPage.selectCategory('${category.id}')"
        >
          <i class="category-icon ${category.icon}"></i>
          <div class="category-name">${category.name}</div>
          <div class="category-count">${category.count} ${category.count === 1 ? 'cert' : 'certs'}</div>
        </div>
      </div>
    `).join('');
  }

  renderProviderFilters() {
    const providers = [...new Set(this.certifications.map(c => c.provider))].sort();
    return providers.map(provider => {
      const count = this.certifications.filter(c => c.provider === provider).length;
      const isChecked = this.activeFilters.providers.has(provider);
      return `
        <div class="filter-option">
          <input
            type="checkbox"
            id="provider-${provider.replace(/\s+/g, '-')}"
            ${isChecked ? 'checked' : ''}
            onchange="certificationsPage.toggleProviderFilter('${provider}')"
          >
          <label for="provider-${provider.replace(/\s+/g, '-')}">${provider}</label>
          <span class="count">${count}</span>
        </div>
      `;
    }).join('');
  }

  renderDifficultyFilters() {
    const difficulties = ['beginner', 'intermediate', 'advanced'];
    return difficulties.map(diff => {
      const count = this.certifications.filter(c => c.difficulty === diff).length;
      const isChecked = this.activeFilters.difficulties.has(diff);
      const label = diff.charAt(0).toUpperCase() + diff.slice(1);
      return `
        <div class="filter-option">
          <input
            type="checkbox"
            id="difficulty-${diff}"
            ${isChecked ? 'checked' : ''}
            onchange="certificationsPage.toggleDifficultyFilter('${diff}')"
          >
          <label for="difficulty-${diff}">${label}</label>
          <span class="count">${count}</span>
        </div>
      `;
    }).join('');
  }

  renderTimeFilters() {
    const times = ['1-2 months', '2-3 months', '3-6 months', '6-9 months', '6-12 months', '12-18 months', '24-36 months'];
    const availableTimes = times.filter(time =>
      this.certifications.some(c => c.completionTime === time)
    );

    return availableTimes.map(time => {
      const count = this.certifications.filter(c => c.completionTime === time).length;
      const isChecked = this.activeFilters.completionTimes.has(time);
      return `
        <div class="filter-option">
          <input
            type="checkbox"
            id="time-${time.replace(/\s+/g, '-')}"
            ${isChecked ? 'checked' : ''}
            onchange="certificationsPage.toggleTimeFilter('${time}')"
          >
          <label for="time-${time.replace(/\s+/g, '-')}">${time}</label>
          <span class="count">${count}</span>
        </div>
      `;
    }).join('');
  }

  renderActiveFilters() {
    const chips = [];

    // Category chip (if not 'all')
    if (this.activeFilters.category !== 'all') {
      const category = this.categories.find(c => c.id === this.activeFilters.category);
      chips.push(`
        <div class="filter-chip">
          <span>${category.name}</span>
          <button class="remove-btn" onclick="certificationsPage.selectCategory('all')">×</button>
        </div>
      `);
    }

    // Provider chips
    this.activeFilters.providers.forEach(provider => {
      chips.push(`
        <div class="filter-chip">
          <span>${provider}</span>
          <button class="remove-btn" onclick="certificationsPage.toggleProviderFilter('${provider}')">×</button>
        </div>
      `);
    });

    // Difficulty chips
    this.activeFilters.difficulties.forEach(diff => {
      const label = diff.charAt(0).toUpperCase() + diff.slice(1);
      chips.push(`
        <div class="filter-chip">
          <span>${label}</span>
          <button class="remove-btn" onclick="certificationsPage.toggleDifficultyFilter('${diff}')">×</button>
        </div>
      `);
    });

    // Time chips
    this.activeFilters.completionTimes.forEach(time => {
      chips.push(`
        <div class="filter-chip">
          <span>${time}</span>
          <button class="remove-btn" onclick="certificationsPage.toggleTimeFilter('${time}')">×</button>
        </div>
      `);
    });

    // Search chip
    if (this.activeFilters.searchQuery) {
      chips.push(`
        <div class="filter-chip">
          <span>Search: "${this.activeFilters.searchQuery}"</span>
          <button class="remove-btn" onclick="certificationsPage.handleSearch('')">×</button>
        </div>
      `);
    }

    if (chips.length === 0) {
      return '';
    }

    return `
      <div class="filter-chips-container">
        ${chips.join('')}
        <span class="results-count">
          Showing ${this.filteredCertifications.length} of ${this.certifications.length} certifications
        </span>
      </div>
    `;
  }

  renderCertificationsGrid() {
    if (this.filteredCertifications.length === 0) {
      return `
        <div class="col-12">
          <div class="empty-state">
            <i class="bi bi-search"></i>
            <h4>No certifications found</h4>
            <p>Try adjusting your filters or search criteria</p>
          </div>
        </div>
      `;
    }

    return this.filteredCertifications.map(cert => `
      <div class="col-md-6 col-xl-4">
        <div class="cert-card">
          <div class="cert-card-header">
            <span class="cert-badge">
              <i class="${this.getCategoryIcon(cert.category)}"></i>
              ${this.getCategoryName(cert.category)}
            </span>
            <span class="cert-difficulty ${cert.difficulty}">${cert.difficulty}</span>
          </div>

          <div class="cert-card-body">
            <div class="cert-logo">
              <i class="${cert.icon}"></i>
            </div>
            <h5 class="cert-title">${cert.title}</h5>
            <div class="cert-provider">
              <i class="bi bi-building me-1"></i>${cert.provider}
            </div>
            <p class="cert-description">${cert.description}</p>

            <div class="cert-meta">
              <div class="cert-meta-item">
                <i class="bi bi-clock"></i>
                <span>${cert.completionTime}</span>
              </div>
              <div class="cert-meta-item">
                <i class="bi bi-calendar"></i>
                <span>${cert.dateRange}</span>
              </div>
            </div>
          </div>

          <div class="cert-card-footer">
            <a
              href="${cert.certificationUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="cert-action-btn primary cert-link"
              aria-label="Get certified in ${cert.title.replace(/"/g, '&quot;')} - Opens in new tab"
            >
              <i class="bi bi-award-fill"></i>
              Get Certified
            </a>
            <button
              class="cert-action-btn secondary"
              onclick="certificationsPage.viewDetails(${cert.id})"
            >
              <i class="bi bi-eye"></i>
              Details
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  getCategoryIcon(categoryId) {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.icon : 'bi-award';
  }

  getCategoryName(categoryId) {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  }

  // Filter Methods
  selectCategory(categoryId) {
    this.activeFilters.category = categoryId;
    this.applyFilters();
    this.updateUI();
  }

  toggleProviderFilter(provider) {
    if (this.activeFilters.providers.has(provider)) {
      this.activeFilters.providers.delete(provider);
    } else {
      this.activeFilters.providers.add(provider);
    }
    this.applyFilters();
    this.updateUI();
  }

  toggleDifficultyFilter(difficulty) {
    if (this.activeFilters.difficulties.has(difficulty)) {
      this.activeFilters.difficulties.delete(difficulty);
    } else {
      this.activeFilters.difficulties.add(difficulty);
    }
    this.applyFilters();
    this.updateUI();
  }

  toggleTimeFilter(time) {
    if (this.activeFilters.completionTimes.has(time)) {
      this.activeFilters.completionTimes.delete(time);
    } else {
      this.activeFilters.completionTimes.add(time);
    }
    this.applyFilters();
    this.updateUI();
  }

  handleSearch(query) {
    this.activeFilters.searchQuery = query.toLowerCase();
    const searchInput = document.getElementById('certSearch');
    if (searchInput && searchInput.value !== query) {
      searchInput.value = query;
    }
    this.applyFilters();
    this.updateUI();
  }

  handleSort(sortBy) {
    let sorted = [...this.filteredCertifications];

    switch(sortBy) {
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'difficulty':
        const diffOrder = { beginner: 1, intermediate: 2, advanced: 3 };
        sorted.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
        break;
      case 'time':
        sorted.sort((a, b) => {
          const timeA = parseInt(a.completionTime.split('-')[0]);
          const timeB = parseInt(b.completionTime.split('-')[0]);
          return timeA - timeB;
        });
        break;
      default:
        // Keep current order (most relevant)
        break;
    }

    this.filteredCertifications = sorted;
    this.updateCertificationsGrid();
  }

  toggleFilterSection(element) {
    element.classList.toggle('collapsed');
    const options = element.nextElementSibling;
    if (options) {
      options.style.display = element.classList.contains('collapsed') ? 'none' : 'flex';
    }
  }

  clearAllFilters() {
    this.activeFilters = {
      category: 'all',
      providers: new Set(),
      difficulties: new Set(),
      completionTimes: new Set(),
      searchQuery: ''
    };

    // Clear search input
    const searchInput = document.getElementById('certSearch');
    if (searchInput) searchInput.value = '';

    this.applyFilters();
    this.displayPage();
  }

  applyFilters() {
    this.filteredCertifications = this.certifications.filter(cert => {
      // Category filter
      if (this.activeFilters.category !== 'all' && cert.category !== this.activeFilters.category) {
        return false;
      }

      // Provider filter
      if (this.activeFilters.providers.size > 0 && !this.activeFilters.providers.has(cert.provider)) {
        return false;
      }

      // Difficulty filter
      if (this.activeFilters.difficulties.size > 0 && !this.activeFilters.difficulties.has(cert.difficulty)) {
        return false;
      }

      // Completion time filter
      if (this.activeFilters.completionTimes.size > 0 && !this.activeFilters.completionTimes.has(cert.completionTime)) {
        return false;
      }

      // Search filter
      if (this.activeFilters.searchQuery) {
        const query = this.activeFilters.searchQuery;
        return (
          cert.title.toLowerCase().includes(query) ||
          cert.description.toLowerCase().includes(query) ||
          cert.provider.toLowerCase().includes(query) ||
          cert.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }

  updateUI() {
    // Update category cards
    const categoryCardsContainer = document.getElementById('categoryCards');
    if (categoryCardsContainer) {
      categoryCardsContainer.innerHTML = this.renderCategoryCards();
    }

    // Update active filters
    const filtersContainer = document.getElementById('activeFiltersContainer');
    if (filtersContainer) {
      filtersContainer.innerHTML = this.renderActiveFilters();
    }

    // Update certifications grid
    this.updateCertificationsGrid();
  }

  updateCertificationsGrid() {
    const grid = document.getElementById('certificationsGrid');
    if (grid) {
      grid.innerHTML = this.renderCertificationsGrid();
    }
  }

  // View certification details
  viewDetails(certId) {
    const cert = this.certifications.find(c => c.id === certId);
    if (!cert) return;

    const modalHtml = `
      <div class="modal fade" id="certDetailsModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content" style="border-radius: 12px; border: none;">
            <div class="modal-header" style="background: linear-gradient(135deg, var(--ms-navy) 0%, #003d82 100%); color: white; border-radius: 12px 12px 0 0;">
              <h5 class="modal-title fw-bold">
                <i class="${cert.icon} me-2"></i>${cert.title}
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4">
              <div class="mb-3">
                <span class="cert-badge me-2">
                  <i class="${this.getCategoryIcon(cert.category)}"></i>
                  ${this.getCategoryName(cert.category)}
                </span>
                <span class="cert-difficulty ${cert.difficulty}">${cert.difficulty}</span>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-ms-navy mb-2">Provider</h6>
                <p class="text-muted mb-0">
                  <i class="bi bi-building me-2"></i>${cert.provider}
                </p>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-ms-navy mb-2">Description</h6>
                <p class="text-muted mb-0">${cert.description}</p>
              </div>

              <div class="row mb-4">
                <div class="col-md-6">
                  <h6 class="fw-bold text-ms-navy mb-2">Completion Time</h6>
                  <p class="text-muted mb-0">
                    <i class="bi bi-clock me-2"></i>${cert.completionTime}
                  </p>
                </div>
                <div class="col-md-6">
                  <h6 class="fw-bold text-ms-navy mb-2">Difficulty Level</h6>
                  <p class="text-muted mb-0">
                    <i class="bi bi-bar-chart me-2"></i>${cert.difficulty.charAt(0).toUpperCase() + cert.difficulty.slice(1)}
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer" style="background: #f8f9fa;">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="certificationsPage.shareCertification(${cert.id})" data-bs-dismiss="modal">
                <i class="bi bi-share me-2"></i>Share
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing modal
    const existing = document.getElementById('certDetailsModal');
    if (existing) existing.remove();

    // Add and show modal
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('certDetailsModal'));
    modal.show();
  }

  // Share certification
  shareCertification(certId) {
    const cert = this.certifications.find(c => c.id === certId);
    if (!cert) return;

    const shareUrl = `${window.location.origin}${window.location.pathname}#cert-${cert.id}`;
    const shareText = `Check out this professional certification: ${cert.title} by ${cert.provider}`;

    const modalHtml = `
      <div class="modal fade share-modal" id="shareModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <i class="bi bi-share me-2"></i>Share Certification
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="share-options">
              <div class="share-option linkedin" onclick="certificationsPage.shareToLinkedIn('${shareUrl}', '${shareText}')">
                <i class="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </div>
              <div class="share-option twitter" onclick="certificationsPage.shareToTwitter('${shareUrl}', '${shareText}')">
                <i class="bi bi-twitter"></i>
                <span>Twitter</span>
              </div>
              <div class="share-option facebook" onclick="certificationsPage.shareToFacebook('${shareUrl}')">
                <i class="bi bi-facebook"></i>
                <span>Facebook</span>
              </div>
              <div class="share-option link" onclick="certificationsPage.copyLink('${shareUrl}')">
                <i class="bi bi-link-45deg"></i>
                <span>Copy Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing modal
    const existing = document.getElementById('shareModal');
    if (existing) existing.remove();

    // Add and show modal
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('shareModal'));
    modal.show();
  }

  shareToLinkedIn(url, text) {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    this.closeShareModal();
  }

  shareToTwitter(url, text) {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    this.closeShareModal();
  }

  shareToFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    this.closeShareModal();
  }

  copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
      this.showToast('Link copied to clipboard!');
      this.closeShareModal();
    }).catch(err => {
      console.error('Failed to copy:', err);
      alert('Failed to copy link. Please try again.');
    });
  }

  closeShareModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('shareModal'));
    if (modal) modal.hide();
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <i class="bi bi-check-circle-fill"></i>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Toggle sidebar collapse/expand
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;

    // Update DOM elements
    const sidebarColumn = document.getElementById('sidebarColumn');
    const mainContentColumn = document.getElementById('mainContentColumn');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const toggleIcon = toggleBtn.querySelector('i');

    if (this.sidebarCollapsed) {
      sidebarColumn.classList.add('collapsed');
      mainContentColumn.classList.add('expanded');
      toggleBtn.classList.add('collapsed');
      toggleIcon.className = 'bi bi-chevron-right';
      toggleBtn.setAttribute('aria-label', 'Show filters');
      toggleBtn.setAttribute('title', 'Show filters');
    } else {
      sidebarColumn.classList.remove('collapsed');
      mainContentColumn.classList.remove('expanded');
      toggleBtn.classList.remove('collapsed');
      toggleIcon.className = 'bi bi-chevron-left';
      toggleBtn.setAttribute('aria-label', 'Hide filters');
      toggleBtn.setAttribute('title', 'Hide filters');
    }
  }
}

// Expose class to window
window.CertificationsPage = CertificationsPage;
