    function saveMessage(text, isUser) {
      const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
      history.push({ text, isUser });
      localStorage.setItem('chatHistory', JSON.stringify(history));
    }

    function addMessage(text, isUser, save = true) {
      const msg = document.createElement('div');
      msg.classList.add('message', isUser ? 'user' : 'bot');
      msg.textContent = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      if (save) saveMessage(text, isUser);
    }

    function animateBotResponse(text) {
      const msg = document.createElement('div');
      msg.classList.add('message', 'bot');
      chatMessages.appendChild(msg);
      let i = 0;
      const interval = setInterval(() => {
        msg.textContent += text.charAt(i);
        i++;
        chatMessages.scrollTop = chatMessages.scrollHeight;
        if (i >= text.length) {
          clearInterval(interval);
          saveMessage(text, false);
          updateHistoryList();
        }
      }, 15);
    }  
    // Fonction pour afficher la réponse du bot
  function animateBotResponse(text) {
    const msg = document.createElement('div');
    msg.classList.add('message', 'bot');
    chatMessages.appendChild(msg);
    let i = 0;
    const interval = setInterval(() => {
      msg.textContent += text.charAt(i);
      i++;
      chatMessages.scrollTop = chatMessages.scrollHeight;
      if (i >= text.length) {
        clearInterval(interval);
        saveMessage(text, false);
        updateHistoryList();
      }
    }, 15);
  }

  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });

// Sauvegarde du message dans l'historique
function saveMessage(text, isUser) {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.push({ text, isUser });

  const MAX_HISTORY = 100; // Limite optionnelle
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }

  localStorage.setItem('chatHistory', JSON.stringify(history));
}

// Ajoute un message à l'interface
function addMessage(text, isUser, save = true) {
  const msg = document.createElement('div');
  msg.classList.add('message', isUser ? 'user' : 'bot');
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (save) saveMessage(text, isUser);
}

// Met à jour l'historique des messages
function updateHistoryList() {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  historyList.innerHTML = "";

  for (let i = 0; i < history.length; i++) {
    const item = history[i];
    if (item.isUser) {
      const questionDiv = document.createElement('div');
      questionDiv.className = "history-item";
      questionDiv.textContent = item.text;

      const responseId = `response-${i}`;
      const response = history[i + 1];
      let responseDiv = null;

      if (response && !response.isUser) {
        responseDiv = document.createElement('div');
        responseDiv.className = "response-preview";
        responseDiv.textContent = response.text;
        responseDiv.id = responseId;
        responseDiv.style.display = "none"; // Cacher par défaut
      }

      questionDiv.onclick = () => {
        const el = document.getElementById(responseId);
        if (el) {
          el.style.display = el.style.display === 'block' ? 'none' : 'block';
        }
      };

      historyList.appendChild(questionDiv);
      if (responseDiv) {
        historyList.appendChild(responseDiv);
      }
    }
  }
}


          
