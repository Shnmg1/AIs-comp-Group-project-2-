// Help Page Module
class HelpPage {
  constructor(app) {
    this.app = app;
    this.faqs = [];
    this.loadFAQs();
  }

  loadFAQs() {
    this.faqs = [
      {
        id: 1,
        question: "How do I access educational resources?",
        answer: "Navigate to the 'Resources' page using the top navigation menu. You can filter resources by subject (English, History, STEM) and search for specific topics. Each resource includes difficulty level and estimated time to complete."
      },
      {
        id: 2,
        question: "Are the educational videos free to watch?",
        answer: "Yes! All educational videos on our platform are completely free. Simply go to the 'Videos' page and click on any video to start watching. Videos are organized by subject and difficulty level."
      },
      {
        id: 3,
        question: "How do I earn certifications?",
        answer: "Visit the 'Certifications' page to browse available certifications. Most certifications are free, though some advanced ones may have a small fee. Click on any certification to learn about requirements and start your journey."
      },
      {
        id: 4,
        question: "How does the AI Learning Assistant work?",
        answer: "The AI Assistant helps you learn by guiding you through problems step-by-step rather than just giving answers. Go to the 'AI Helper' page and ask questions about English, History, or STEM subjects. The AI will ask clarifying questions to better understand your needs."
      },
      {
        id: 5,
        question: "What subjects are covered on the platform?",
        answer: "Our platform focuses on three main subject areas: English (grammar, literature, writing), History (Mississippi history, world history), and STEM (mathematics, science, technology). All content is designed specifically for Mississippi students."
      },
      {
        id: 6,
        question: "Is there a mobile version of the platform?",
        answer: "Yes! Our platform is fully responsive and works great on mobile devices, tablets, and desktop computers. Simply open the website in your mobile browser for the best experience."
      },
      {
        id: 7,
        question: "How do I contact the development team?",
        answer: "Use the contact form on this help page to send us questions, suggestions, or report any issues. We typically respond within 24-48 hours during business days."
      },
      {
        id: 8,
        question: "Are there any system requirements?",
        answer: "Our platform works on any modern web browser (Chrome, Firefox, Safari, Edge). No special software or plugins are required. A stable internet connection is recommended for the best experience."
      },
      {
        id: 9,
        question: "How do I reset my password?",
        answer: "Currently, our platform doesn't require user accounts, so there's no password to reset. All features are available without registration. If you're having trouble accessing the platform, try clearing your browser cache or using a different browser."
      },
      {
        id: 10,
        question: "Can I download videos for offline viewing?",
        answer: "At this time, videos are only available for online streaming. This ensures we can provide the most up-to-date content and maintain quality standards. We recommend using a stable internet connection for the best viewing experience."
      },
      {
        id: 11,
        question: "How often is new content added?",
        answer: "We regularly update our platform with new educational resources, videos, and certifications. New content is typically added monthly, and we announce major updates through our newsletter. You can subscribe to updates using the contact form."
      },
      {
        id: 12,
        question: "Is the platform accessible for students with disabilities?",
        answer: "Yes! We're committed to making our platform accessible to all students. Our videos include captions, our text is optimized for screen readers, and we use high contrast colors. If you encounter any accessibility issues, please contact us through the help form."
      }
    ];
  }


  renderFAQs() {
    return this.faqs.map((faq, index) => `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${faq.id}">
          <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#collapse${faq.id}" 
                  aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${faq.id}">
            <strong>${faq.question}</strong>
          </button>
        </h2>
        <div id="collapse${faq.id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
             aria-labelledby="heading${faq.id}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('');
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-question-circle-fill me-2"></i>Help & Support
              </h1>
              <p class="lead text-muted">Find answers to common questions and get in touch with our development team</p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="container mb-5">
          <div class="row">
            <div class="col-12">
              <h2 class="h3 text-ms-navy mb-4">
                <i class="bi bi-chat-quote-fill me-2"></i>Frequently Asked Questions
              </h2>
            </div>
          </div>
          
          <!-- FAQ Search -->
          <div class="row mb-4">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-search"></i>
                        </span>
                        <input type="text" class="form-control" id="faqSearchInput" 
                               placeholder="Search FAQs..." 
                               onkeyup="helpPage.searchFAQs(this.value)"
                               oninput="helpPage.searchFAQs(this.value)">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="d-flex justify-content-end">
                        <button class="btn btn-outline-secondary" onclick="helpPage.clearFAQSearch()" id="clearSearchBtn" style="display: none;">
                          <i class="bi bi-x-circle me-1"></i>Clear
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <small class="text-muted">
                      <i class="bi bi-info-circle me-1"></i>
                      Search through ${this.faqs.length} frequently asked questions
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Results -->
          <div class="row">
            <div class="col-12">
              <div id="faqResults">
                <div class="accordion" id="faqAccordion">
                  ${this.renderFAQs()}
                </div>
              </div>
              <div id="noResultsMessage" class="text-center py-5" style="display: none;">
                <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
                <h4 class="text-muted mt-3">No FAQs found</h4>
                <p class="text-muted">Try adjusting your search terms or browse all FAQs.</p>
                <button class="btn btn-outline-primary" onclick="helpPage.clearFAQSearch()">
                  <i class="bi bi-arrow-clockwise me-1"></i>Show All FAQs
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="container mb-5">
          <div class="row">
            <div class="col-12">
              <h2 class="h3 text-ms-navy mb-4">
                <i class="bi bi-envelope-fill me-2"></i>Contact Our Development Team
              </h2>
              <p class="text-muted mb-4">
                Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body p-4">
                  <form id="contactForm" onsubmit="helpPage.submitContactForm(event)">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">First Name *</label>
                        <input type="text" class="form-control" id="firstName" name="firstName" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName" class="form-label">Last Name *</label>
                        <input type="text" class="form-control" id="lastName" name="lastName" required>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="email" class="form-label">Email Address *</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="subject" class="form-label">Subject *</label>
                        <select class="form-select" id="subject" name="subject" required>
                          <option value="">Select a subject</option>
                          <option value="general">General Question</option>
                          <option value="technical">Technical Issue</option>
                          <option value="feature">Feature Request</option>
                          <option value="bug">Bug Report</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">Message *</label>
                      <textarea class="form-control" id="message" name="message" rows="5" 
                                placeholder="Please describe your question or issue in detail..." required></textarea>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="newsletter" name="newsletter">
                        <label class="form-check-label" for="newsletter">
                          I would like to receive updates about new features and educational content
                        </label>
                      </div>
                    </div>
                    <div class="d-grid">
                      <button type="submit" class="btn btn-primary btn-lg" id="submitBtn">
                        <i class="bi bi-send-fill me-2"></i>Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Initialize accordion after rendering
    setTimeout(() => {
      this.initializeAccordion();
    }, 100);
  }

  async submitContactForm(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(event.target);
      const contactData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on',
        timestamp: new Date().toISOString()
      };

      // Send to API
      const response = await this.app.makeApiCall('/contact', 'POST', contactData);
      
      if (response) {
        // Show success message
        this.showAlert('success', 'Message sent successfully! We\'ll get back to you within 24-48 hours.');
        event.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Error sending contact form:', error);
      this.showAlert('danger', 'Failed to send message. Please try again or contact us directly.');
    } finally {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  showAlert(type, message) {
    const alertHtml = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    
    // Insert alert at the top of the contact form section
    const contactSection = document.querySelector('.container.mb-5:last-of-type');
    contactSection.insertAdjacentHTML('afterbegin', alertHtml);
    
    // Auto-dismiss success alerts after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        const alert = contactSection.querySelector('.alert');
        if (alert) {
          const bsAlert = new bootstrap.Alert(alert);
          bsAlert.close();
        }
      }, 5000);
    }
  }

  downloadUserGuide() {
    // In a real implementation, this would download a PDF
    alert('User guide download will be implemented when the PDF is ready. For now, please use the FAQ section above or contact us with specific questions.');
  }

  showCommunityInfo() {
    alert('Community features are coming soon! We\'re working on creating a space where Mississippi students can connect, share resources, and help each other learn. Stay tuned for updates!');
  }

  searchFAQs(query) {
    const searchTerm = query.toLowerCase().trim();
    const clearBtn = document.getElementById('clearSearchBtn');
    const noResultsMsg = document.getElementById('noResultsMessage');
    const faqResults = document.getElementById('faqResults');

    // Show/hide clear button based on search input
    if (searchTerm.length > 0) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
    }

    if (searchTerm === '') {
      // Show all FAQs
      this.displayAllFAQs();
      noResultsMsg.style.display = 'none';
      faqResults.style.display = 'block';
      return;
    }

    // Filter FAQs based on search term
    const filteredFAQs = this.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    );

    if (filteredFAQs.length === 0) {
      // Show no results message
      noResultsMsg.style.display = 'block';
      faqResults.style.display = 'none';
    } else {
      // Show filtered results
      this.displayFilteredFAQs(filteredFAQs, searchTerm);
      noResultsMsg.style.display = 'none';
      faqResults.style.display = 'block';
    }
  }

  displayAllFAQs() {
    const accordion = document.getElementById('faqAccordion');
    accordion.innerHTML = this.renderFAQs();
    
    // Initialize Bootstrap accordion for all items
    this.initializeAccordion();
  }

  displayFilteredFAQs(filteredFAQs, searchTerm) {
    const accordion = document.getElementById('faqAccordion');
    
    // Render filtered FAQs with search highlighting
    accordion.innerHTML = filteredFAQs.map((faq, index) => {
      const highlightedQuestion = this.highlightSearchTerm(faq.question, searchTerm);
      const highlightedAnswer = this.highlightSearchTerm(faq.answer, searchTerm);
      
      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${faq.id}">
            <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapse${faq.id}" 
                    aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${faq.id}">
              ${highlightedQuestion}
            </button>
          </h2>
          <div id="collapse${faq.id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
               aria-labelledby="heading${faq.id}" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              ${highlightedAnswer}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Initialize Bootstrap accordion for filtered items
    this.initializeAccordion();
  }

  highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-warning">$1</mark>');
  }

  initializeAccordion() {
    // Re-initialize Bootstrap accordion functionality
    const accordionElements = document.querySelectorAll('#faqAccordion .accordion-button');
    accordionElements.forEach(element => {
      element.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-bs-target'));
        const parent = document.querySelector(this.getAttribute('data-bs-parent'));
        
        // Close other accordion items
        const otherItems = parent.querySelectorAll('.accordion-collapse.show');
        otherItems.forEach(item => {
          if (item !== target) {
            const bsCollapse = new bootstrap.Collapse(item, { toggle: false });
            bsCollapse.hide();
          }
        });
      });
    });
  }

  clearFAQSearch() {
    const searchInput = document.getElementById('faqSearchInput');
    searchInput.value = '';
    this.searchFAQs('');
  }
}

// Expose HelpPage class to window for app.js to use
window.HelpPage = HelpPage;
