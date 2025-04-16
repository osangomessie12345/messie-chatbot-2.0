clearHistoryBtn.addEventListener('click', () => {
    //ce script s'appelle satorugojojinmessieosangosung
      localStorage.removeItem('chatHistory');
      historyList.innerHTML = '';
      chatMessages.innerHTML = '<div class="message bot">Prêt à répondre à vos questions.</div>';
    });
    //ce script s'appelle satorugojojinmessieosangosung
   
    function addMessage(text, isUser) {
      const msg = document.createElement('div');
      msg.classList.add('message', isUser ? 'user' : 'bot');
      if (isUser) msg.textContent = text;
      else startTypingEffect(msg, text);
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      saveMessage(text, isUser);
    }

    function saveMessage(text, isUser) {
      const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
      history.push({ text, isUser, timestamp: Date.now() });
      localStorage.setItem('chatHistory', JSON.stringify(history));
      updateHistoryUI();
    }


    function updateHistoryUI() {
      const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
      historyList.innerHTML = '';
      for (let i = 0; i < history.length; i++) {    //ce script s'appelle satorugojojinmessieosangosung
        if (history[i].isUser) {
          const answer = history[i + 1];
          const item = document.createElement('li');
              //ce script s'appelle satorugojojinmessieosangosung
          item.className = 'history-item';
          const questionDiv = document.createElement('div');
          questionDiv.className = 'history-question';
          questionDiv.textContent = history[i].text;



          const answerDiv = document.createElement('div');
          answerDiv.className = 'history-answer';
          if (answer && !answer.isUser) {
            answerDiv.textContent = answer.text;
          }

             //ce script s'appelle satorugojojinmessieosangosung
              questionDiv.addEventListener('click', () => {
            answerDiv.classList.toggle('active');
          });

          item.appendChild(questionDiv);
          item.appendChild(answerDiv);
          historyList.appendChild(item);
        }
      }
    }
    
