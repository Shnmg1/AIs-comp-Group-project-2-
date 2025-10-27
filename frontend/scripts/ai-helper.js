// AI Helper Page Module
class AIHelperPage {
  constructor(app) {
    this.app = app;
    this.chatHistory = [];
    this.isTyping = false;
  }

  render() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-robot me-2"></i>AI Learning Assistant
              </h1>
              <p class="lead text-muted">Get personalized help with your studies. Ask questions and receive step-by-step guidance.</p>
            </div>
          </div>
        </div>

        <!-- AI Helper Info -->
        <div class="container mb-4">
          <div class="row">
            <div class="col-12">
              <div class="alert alert-info" role="alert">
                <h5 class="alert-heading">
                  <i class="bi bi-lightbulb-fill me-2"></i>How to Use the AI Assistant
                </h5>
                <ul class="mb-0">
                  <li>Ask specific questions about English, History, or STEM subjects</li>
                  <li>Request step-by-step explanations instead of direct answers</li>
                  <li>Upload images of problems or assignments for visual help</li>
                  <li>The AI will guide you through learning, not just give answers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Interface -->
        <div class="container mb-5">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-header bg-ms-light-blue">
                  <h5 class="mb-0 text-ms-navy">
                    <i class="bi bi-chat-dots-fill me-2"></i>Chat with AI Assistant
                  </h5>
                </div>
                <div class="chat-container">
                  <div class="chat-messages" id="chatMessages">
                    <div class="message ai">
                      <strong>AI Assistant:</strong> Hello! I'm here to help you learn. What subject would you like help with today? I can assist with English, History, or STEM topics. Remember, I'll guide you through the learning process rather than just giving you answers!
                    </div>
                  </div>
                  <div class="chat-input">
                    <form id="chatForm" onsubmit="event.preventDefault(); aiHelperPage.sendMessage(); return false;">
                      <div class="input-group">
                        <input type="text" class="form-control" id="messageInput" placeholder="Ask a question or describe a problem...">
                        <button class="btn btn-primary" type="submit">
                          <i class="bi bi-send-fill"></i>
                        </button>
                      </div>
                    </form>
                    <div class="mt-2">
                      <button class="btn btn-outline-secondary btn-sm me-2" onclick="event.preventDefault(); aiHelperPage.sendQuickQuestion('Help me understand algebra'); return false;">
                        <i class="bi bi-calculator me-1"></i>Math Help
                      </button>
                      <button class="btn btn-outline-secondary btn-sm me-2" onclick="event.preventDefault(); aiHelperPage.sendQuickQuestion('Explain this historical event'); return false;">
                        <i class="bi bi-book me-1"></i>History Help
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" onclick="event.preventDefault(); aiHelperPage.sendQuickQuestion('Help me with grammar'); return false;">
                        <i class="bi bi-pencil me-1"></i>English Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sample Questions -->
        <div class="container mb-5">
          <div class="row">
            <div class="col-12">
              <h4 class="text-ms-navy mb-3">
                <i class="bi bi-question-circle-fill me-2"></i>Sample Questions You Can Ask
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title text-ms-red">STEM Questions</h6>
                  <ul class="list-unstyled small">
                    <li>• How do I solve quadratic equations?</li>
                    <li>• What's the difference between mitosis and meiosis?</li>
                    <li>• How do I balance chemical equations?</li>
                    <li>• Can you help me understand photosynthesis?</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title text-ms-red">History Questions</h6>
                  <ul class="list-unstyled small">
                    <li>• What caused the Civil War?</li>
                    <li>• How did the Civil Rights Movement impact Mississippi?</li>
                    <li>• What were the main causes of World War II?</li>
                    <li>• Can you explain the Reconstruction Era?</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title text-ms-red">English Questions</h6>
                  <ul class="list-unstyled small">
                    <li>• How do I write a strong thesis statement?</li>
                    <li>• What's the difference between a simile and metaphor?</li>
                    <li>• How do I analyze a poem?</li>
                    <li>• Can you help me with essay structure?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendQuickQuestion(question) {
    document.getElementById("messageInput").value = question;
    this.sendMessage();
  }

  async sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (!message || this.isTyping) return;

    // Add user message to chat
    this.addMessage(message, "user");
    input.value = "";

    // Show typing indicator
    this.showTypingIndicator();

    try {
      // Build conversation history from last 10 messages
      const conversationHistory = this.chatHistory.slice(-10).map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      }));

      // Call the real API
      const response = await fetch("http://localhost:5000/api/AIHelper/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: message,
          subject: "General", // TODO: Could detect subject from question
          studentLevel: "K-12", // TODO: Could get from user profile
          conversationHistory: conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Remove typing indicator and add AI response
      this.hideTypingIndicator();
      this.addMessage(data.response, "ai");
    } catch (error) {
      console.error("Error getting AI response:", error);
      this.hideTypingIndicator();
      this.addMessage(
        "I apologize, but I encountered an error. Please try again.",
        "ai"
      );
    }
  }

  addMessage(content, sender) {
    const chatMessages = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    const senderName = sender === "user" ? "You" : "AI Assistant";
    messageDiv.innerHTML = `<strong>${senderName}:</strong> ${content}`;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Store in chat history
    this.chatHistory.push({ content, sender, timestamp: new Date() });
  }

  showTypingIndicator() {
    this.isTyping = true;
    const chatMessages = document.getElementById("chatMessages");
    const typingDiv = document.createElement("div");
    typingDiv.className = "message ai";
    typingDiv.id = "typingIndicator";
    typingDiv.innerHTML =
      '<strong>AI Assistant:</strong> <span class="typing-dots">Typing<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span></span>';

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  hideTypingIndicator() {
    this.isTyping = false;
    const typingIndicator = document.getElementById("typingIndicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  /* DEPRECATED: Replaced with real Gemini API integration
  async simulateAIResponse(userMessage) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simple response simulation based on keywords
    const message = userMessage.toLowerCase();

    if (message.includes('algebra') || message.includes('math') || message.includes('equation')) {
      return `I'd be happy to help you with algebra! Let's break this down step by step.

First, can you tell me what specific algebraic concept you're working with? For example:
- Are you solving linear equations?
- Working with quadratic equations?
- Simplifying expressions?

Once I know the specific problem, I can guide you through the process rather than just giving you the answer. This way, you'll learn the method and be able to solve similar problems on your own!

What's the specific equation or problem you're looking at?`;
    }

    if (message.includes('history') || message.includes('civil war') || message.includes('historical')) {
      return `Great question about history! I love helping students understand historical events and their significance.

To give you the best guidance, could you be more specific about what historical topic you'd like to explore? For example:
- Are you studying a particular war or conflict?
- Looking at social movements like the Civil Rights Movement?
- Analyzing causes and effects of historical events?

I can help you:
- Understand the context and background
- Identify key figures and their roles
- Analyze cause-and-effect relationships
- Develop critical thinking about historical significance

What specific historical topic or question are you working on?`;
    }

    if (message.includes('english') || message.includes('grammar') || message.includes('writing') || message.includes('essay')) {
      return `I'm excited to help you with English! Whether it's grammar, writing, or literature analysis, I'm here to guide your learning.

Could you tell me more about what you need help with? For example:
- Grammar and punctuation rules?
- Essay structure and organization?
- Literary analysis techniques?
- Reading comprehension strategies?

My approach is to help you understand the underlying principles so you can apply them to future work. I'll ask guiding questions and provide step-by-step explanations rather than just correcting your work.

What specific English concept or assignment are you working on?`;
    }

    if (message.includes('help') || message.includes('don\'t understand') || message.includes('confused')) {
      return `I'm here to help you understand! Learning can be challenging, but breaking things down step by step makes it much easier.

To give you the most helpful guidance, could you share:
1. What subject you're working on (English, History, or STEM)
2. The specific concept or problem you're struggling with
3. What you've tried so far (if anything)

Remember, it's completely normal to feel confused when learning something new. The key is to take it one step at a time and ask questions along the way!

What would you like to work on together?`;
    }

    // Default response
    return `That's an interesting question! I'd love to help you work through this step by step.

To provide you with the most helpful guidance, could you give me a bit more detail about:
- What subject this relates to (English, History, or STEM)
- The specific problem or concept you're working with
- What you already understand about the topic

I believe in helping you learn the process and reasoning behind solutions, not just giving you the answers. This way, you'll be able to tackle similar problems independently in the future!

What additional details can you share about your question?`;
  }
  */
}

// Expose AIHelperPage class to window for app.js to use
window.AIHelperPage = AIHelperPage;
