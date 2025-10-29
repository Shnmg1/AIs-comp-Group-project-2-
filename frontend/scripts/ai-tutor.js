// AI Tutor Page Module - Pedagogical Approach
class AITutorPage {
  constructor(app) {
    this.app = app;
    this.messages = [
      {
        role: "assistant",
        content: "👋 Hi there! I'm your AI tutor from Mississippi Learns. I'm here to help you learn by guiding you through problems step-by-step.\n\nI won't just give you the answer - I'll help you understand HOW to solve problems on your own. Ask me anything about Math, Science, English, History, or any other subject!",
        timestamp: new Date().toISOString()
      }
    ];
    this.isTyping = false;
    this.currentUser = null;
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Header -->
        <div class="py-5 px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-5">
              <div class="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-pill mb-4">
                <i class="bi bi-brain text-purple-700"></i>
                <span class="text-sm font-semibold text-purple-700">AI-Powered Learning Assistant</span>
              </div>
              <h1 class="display-4 fw-bold text-ms-navy mb-4">
                AI Tutor
              </h1>
              <p class="lead text-muted max-w-2xl mx-auto">
                Your personal learning guide - I'll help you understand HOW to solve problems, not just give you answers
              </p>
            </div>

            <!-- Features Banner -->
            <div class="row g-4 mb-5">
              <div class="col-md-4">
                <div class="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 h-100">
                  <div class="card-body text-center p-4">
                    <i class="bi bi-lightbulb-fill text-ms-navy fs-2 mb-2"></i>
                    <p class="text-sm fw-semibold text-dark mb-0">Step-by-Step Guidance</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 h-100">
                  <div class="card-body text-center p-4">
                    <i class="bi bi-brain text-purple-600 fs-2 mb-2"></i>
                    <p class="text-sm fw-semibold text-dark mb-0">Critical Thinking Skills</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 h-100">
                  <div class="card-body text-center p-4">
                    <i class="bi bi-book-fill text-ms-gold fs-2 mb-2"></i>
                    <p class="text-sm fw-semibold text-dark mb-0">All K-12 Subjects</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Chat Interface -->
            <div class="card shadow-lg border-2">
              <div class="card-header bg-gradient-to-r from-ms-navy to-blue-700 text-white">
                <h5 class="mb-0 d-flex align-items-center gap-2">
                  <i class="bi bi-chat-dots-fill"></i>
                  Chat with Your AI Tutor
                </h5>
              </div>
              <div class="card-body p-0">
                <!-- Messages -->
                <div class="chat-messages-container" id="chatMessages" style="height: 500px; overflow-y: auto; padding: 1.5rem; background: linear-gradient(to bottom, #f8f9fa, white);">
                  ${this.renderMessages()}
                </div>

                <!-- Quick Prompts -->
                ${this.messages.length === 1 ? this.renderQuickPrompts() : ''}

                <!-- Input -->
                <div class="p-4 border-top bg-white">
                  <div class="d-flex gap-2">
                    <input 
                      type="text" 
                      class="form-control flex-fill" 
                      id="messageInput" 
                      placeholder="Ask me anything... I'll help you learn!"
                      onkeypress="aiTutorPage.handleKeyPress(event)"
                      ${this.isTyping ? 'disabled' : ''}
                    >
                    <button 
                      class="btn btn-primary px-4" 
                      onclick="aiTutorPage.sendMessage()"
                      ${this.isTyping ? 'disabled' : ''}
                    >
                      <i class="bi bi-send-fill"></i>
                    </button>
                  </div>
                  <p class="text-muted small mt-2 mb-0">
                    💡 Tip: I'll guide you through the solution rather than just giving you the answer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Scroll to bottom after render
    this.scrollToBottom();
  }

  renderMessages() {
    return this.messages.map((message, index) => `
      <div class="d-flex gap-3 ${message.role === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-3">
        ${message.role === 'assistant' ? `
          <div class="avatar bg-gradient-to-br from-ms-navy to-purple-600 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width: 40px; height: 40px; border-radius: 50%;">
            AI
          </div>
        ` : ''}
        <div class="message-bubble ${message.role === 'user' ? 'user-message' : 'ai-message'}" style="max-width: 80%; border-radius: 1rem; padding: 1rem;">
          <p class="mb-0" style="white-space: pre-wrap; line-height: 1.6;">${message.content}</p>
        </div>
        ${message.role === 'user' ? `
          <div class="avatar bg-gradient-to-br from-ms-gold to-amber-600 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width: 40px; height: 40px; border-radius: 50%;">
            ${this.currentUser?.full_name?.[0]?.toUpperCase() || 'U'}
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  renderQuickPrompts() {
    const quickPrompts = [
      "How do I solve quadratic equations?",
      "Explain photosynthesis step by step", 
      "Help me understand fractions",
      "How do I write a good essay?"
    ];

    return `
      <div class="px-4 py-3 border-top bg-light">
        <p class="text-sm fw-semibold text-dark mb-3">Try asking:</p>
        <div class="row g-2">
          ${quickPrompts.map((prompt, idx) => `
            <div class="col-sm-6">
              <button 
                class="btn btn-outline-secondary w-100 text-start h-auto py-2 hover-bg-blue-50 hover-border-ms-navy"
                onclick="aiTutorPage.setQuickPrompt('${prompt.replace(/'/g, "\\'")}')"
              >
                <i class="bi bi-lightbulb me-2 flex-shrink-0 text-ms-gold"></i>
                <span class="text-sm">${prompt}</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  setQuickPrompt(prompt) {
    document.getElementById('messageInput').value = prompt;
    this.sendMessage();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  async sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message || this.isTyping) return;

    // 1. Add user's message to the chat history
    this.messages.push({
      role: "user",
      content: message,
      timestamp: new Date().toISOString()
    });
    
    // 2. Set isTyping to true and clear the input
    this.isTyping = true;
    input.value = '';

    // 3. Re-render the UI to show the new message and disable the input field
    this.render();
    
    // 4. Show typing indicator
    this.showTypingIndicator();
    
    try {
      const response = await this.callTutorAPI(message);
      
      // Remove typing indicator before adding AI response
      this.hideTypingIndicator();
      
      this.messages.push({
        role: "assistant", 
        content: response,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Remove typing indicator on error too
      this.hideTypingIndicator();
      this.messages.push({
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date().toISOString()
      });
    } finally {
      // 4. No matter what happens, set isTyping to false and re-render the UI.
      // This will show the AI's response and, most importantly, re-enable the input box.
      this.isTyping = false;
      this.render();
    }
  }

  async callTutorAPI(userMessage) {
    // Build conversation history for context
    const conversationHistory = this.messages.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }));

    const response = await fetch(`${this.app.apiBaseUrl}/AIHelper/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: userMessage,
        subject: this.detectSubject(userMessage),
        studentLevel: 'K-12',
        conversationHistory: conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error('API call failed');
    }

    const data = await response.json();
    return data.response;
  }

  detectSubject(message) {
    const messageLower = message.toLowerCase();
    if (messageLower.includes('math') || messageLower.includes('algebra') || messageLower.includes('equation') || messageLower.includes('fraction')) {
      return 'Mathematics';
    }
    if (messageLower.includes('science') || messageLower.includes('biology') || messageLower.includes('chemistry') || messageLower.includes('physics') || messageLower.includes('photosynthesis')) {
      return 'Science';
    }
    if (messageLower.includes('english') || messageLower.includes('writing') || messageLower.includes('essay') || messageLower.includes('grammar')) {
      return 'English';
    }
    if (messageLower.includes('history') || messageLower.includes('historical') || messageLower.includes('war') || messageLower.includes('civil rights')) {
      return 'History';
    }
    return null;
  }

  showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'd-flex gap-3 justify-content-start mb-3';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="avatar bg-gradient-to-br from-ms-navy to-purple-600 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" style="width: 40px; height: 40px; border-radius: 50%;">
        AI
      </div>
      <div class="ai-message" style="border-radius: 1rem; padding: 1rem; background: white; border: 2px solid #e9ecef;">
        <div class="d-flex gap-1">
          <div class="typing-dot" style="width: 8px; height: 8px; background: #6c757d; border-radius: 50%; animation: typingBounce 1.4s infinite ease-in-out;"></div>
          <div class="typing-dot" style="width: 8px; height: 8px; background: #6c757d; border-radius: 50%; animation: typingBounce 1.4s infinite ease-in-out; animation-delay: 0.2s;"></div>
          <div class="typing-dot" style="width: 8px; height: 8px; background: #6c757d; border-radius: 50%; animation: typingBounce 1.4s infinite ease-in-out; animation-delay: 0.4s;"></div>
        </div>
      </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

// Expose AITutorPage class to window for app.js to use
window.AITutorPage = AITutorPage;
