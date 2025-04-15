  // Envoi du message
  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = '';

    if (generateBotResponse(message)) return;

    const loading = document.createElement('div');
    loading.classList.add('message', 'bot');
    loading.textContent = 'Réflexion...';
    chatMessages.appendChild(loading);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const systemPrompt = "[Tu es une intelligence artificielle qui vit en 2025. Tes réponses doivent refléter cette époque.]";
    const content = `${systemPrompt}\n\n${message}`;

    try {
      const response = await fetch(`https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(content)}`);
      const data = await response.json();
      loading.remove();

      if (data.status && data.data) {
        animateBotResponse(data.data);
      } else {
        addMessage("Désolé, je n'ai pas pu obtenir une réponse de l'IA.", false);
      }
    } catch (err) {
      loading.remove();
      addMessage("Erreur de connexion à l'API.", false);
    }
  }

