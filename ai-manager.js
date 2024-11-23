const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Mock AI response function
const getAIResponse = (userMessage) => {
    const responses = {
        "budget": "Please tell me your budget range, and I'll recommend destinations!",
        "beach": "If you love beaches, I recommend Maldives, Hawaii, or Bora Bora.",
        "adventure": "For adventure, you can explore the Alps, Patagonia, or Kilimanjaro.",
    };

    // Return a matching response or a generic one
    return responses[userMessage.toLowerCase()] || "Let me look into that for you!";
};

// Handle sending messages
sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Display user message
        const userMsgDiv = document.createElement("div");
        userMsgDiv.className = "message user-message";
        userMsgDiv.textContent = userMessage;
        messagesDiv.appendChild(userMsgDiv);

        // Clear input
        userInput.value = "";

        // Get and display AI response
        const aiResponse = getAIResponse(userMessage);
        const aiMsgDiv = document.createElement("div");
        aiMsgDiv.className = "message ai-message";
        aiMsgDiv.textContent = aiResponse;
        messagesDiv.appendChild(aiMsgDiv);

        // Scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});
