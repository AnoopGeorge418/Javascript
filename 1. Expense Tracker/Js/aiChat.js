document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const chatForm = document.getElementById("chat-form");
    const messageInput = document.getElementById("message-input");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let chatHistory = JSON.parse(localStorage.getItem("aiChatHistory")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    const renderMessage = (role, text) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", role === "user" ? "user-message" : "ai-message");
        messageElement.textContent = text;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    chatHistory.forEach(message => {
        renderMessage(message.role, message.text);
    });

    if (chatForm) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const message = messageInput.value.trim();
            if (message) {
                renderMessage("user", message);
                chatHistory.push({ role: "user", text: message });
                localStorage.setItem("aiChatHistory", JSON.stringify(chatHistory));
                messageInput.value = "";
                // Mock AI response
                setTimeout(() => {
                    const aiResponse = "I am a mock AI. I cannot answer your question.";
                    renderMessage("ai", aiResponse);
                    chatHistory.push({ role: "ai", text: aiResponse });
                    localStorage.setItem("aiChatHistory", JSON.stringify(chatHistory));
                }, 500);
            }
        });
    }
});

  