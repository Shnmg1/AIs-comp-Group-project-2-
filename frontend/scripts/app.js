// Main Application Controller
class App {
  constructor() {
    this.currentPage = 'home';
    this.apiBaseUrl = 'http://localhost:5000/api';
    this.pageModules = {};
    this.init();
  }

  init() {
    this.setupEventListeners();
    // Don't show home page here - wait for modules to be registered
  }

  setupEventListeners() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.page) {
        this.loadPage(event.state.page);
      }
    });
  }

  // Register page modules
  registerPageModule(page, module) {
    this.pageModules[page] = module;
  }

  // Navigation methods
  navigate(page) {
    this.currentPage = page;
    history.pushState({ page }, '', `#${page}`);
    this.loadPage(page);
  }

  loadPage(page) {
    this.currentPage = page;
    
    switch(page) {
      case 'home':
        this.showHome();
        break;
      case 'resources':
        this.showResources();
        break;
      case 'videos':
        this.showVideos();
        break;
      case 'certifications':
        this.showCertifications();
        break;
      case 'ai-tutor':
        this.showAITutor();
        break;
      case 'help':
        this.showHelp();
        break;
      default:
        this.showHome();
    }
  }

  // Page display methods
  showHome() {
    if (this.pageModules.home) {
      this.pageModules.home.render();
    } else {
      // Fallback if module not loaded yet
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  showResources() {
    if (this.pageModules.resources) {
      this.pageModules.resources.render();
    } else {
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  showVideos() {
    if (this.pageModules.videos) {
      this.pageModules.videos.render();
    } else {
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  showCertifications() {
    if (this.pageModules.certifications) {
      this.pageModules.certifications.render();
    } else {
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  showAITutor() {
    if (this.pageModules.aiTutor) {
      this.pageModules.aiTutor.render();
    } else {
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  showHelp() {
    if (this.pageModules.help) {
      this.pageModules.help.render();
    } else {
      document.getElementById('app').innerHTML = '<div class="container mt-5"><div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
    }
  }

  // Utility methods
  async makeApiCall(endpoint, method = 'GET', data = null) {
    try {
      const config = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (data) {
        config.body = JSON.stringify(data);
      }

      const response = await fetch(`${this.apiBaseUrl}${endpoint}`, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      this.showError('Failed to load data. Please try again later.');
      return null;
    }
  }

  showError(message) {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="alert alert-danger" role="alert">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              ${message}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  showLoading() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3 text-muted">Loading...</p>
          </div>
        </div>
      </div>
    `;
  }

  // Helper method to create DOM elements
  createElement(tag, className = '', content = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    
    Object.keys(attributes).forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
    
    return element;
  }
}

// Global app instance
let app;

// Global page instances for onclick handlers
let resourcesPage, videosPage, certificationsPage, aiTutorPage, helpPage;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired, initializing app...');
  app = new App();
  console.log('App initialized:', !!app);
  console.log('Button handlers ready:', {
    showResources: typeof window.showResources,
    showAITutor: typeof window.showAITutor,
    showHelp: typeof window.showHelp
  });
  
  // Register page modules after they're loaded
  if (window.HomePage) {
    app.registerPageModule('home', new window.HomePage(app));
  }
  if (window.ResourcesPage) {
    resourcesPage = new window.ResourcesPage(app);
    app.registerPageModule('resources', resourcesPage);
    // Set global variable for onclick handlers
    window.resourcesPage = resourcesPage;
    console.log('ResourcesPage initialized:', !!window.resourcesPage);
  }
  if (window.VideosPage) {
    videosPage = new window.VideosPage(app);
    app.registerPageModule('videos', videosPage);
  }
  if (window.CertificationsPage) {
    const certModule = new window.CertificationsPage(app);
    app.registerPageModule('certifications', certModule);
    // Set global variable for onclick handlers
    window.certificationsPage = certModule;
  }
  if (window.AITutorPage) {
    aiTutorPage = new window.AITutorPage(app);
    app.registerPageModule('aiTutor', aiTutorPage);
    // Set global variable for onclick handlers
    window.aiTutorPage = aiTutorPage;
  }
  if (window.HelpPage) {
    helpPage = new window.HelpPage(app);
    app.registerPageModule('help', helpPage);
    // Set global variable for onclick handlers
    window.helpPage = helpPage;
  }
  
  // Now that all modules are registered, show the home page
  app.showHome();
});

// Global navigation functions (for onclick handlers)
// These are defined before DOMContentLoaded so they're available when buttons are clicked
function initNavigationFunctions() {
  window.showHome = function() {
    if (app) app.showHome();
  }

  window.showResources = function() {
    if (app) app.showResources();
  }

  window.showVideos = function() {
    if (app) app.showVideos();
  }

  window.showCertifications = function() {
    if (app) app.showCertifications();
  }

  window.showAITutor = function() {
    if (app) app.showAITutor();
  }

  window.showHelp = function() {
    if (app) app.showHelp();
  }
}

// Initialize navigation functions immediately
initNavigationFunctions();

// Add debug info to verify functions exist
console.log('Navigation functions initialized:', {
  showHome: typeof window.showHome,
  showResources: typeof window.showResources,
  showAITutor: typeof window.showAITutor,
  showHelp: typeof window.showHelp
});
