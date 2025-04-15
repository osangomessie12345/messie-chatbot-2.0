    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    //messie
    const historyList = document.getElementById('historyList');
    const toggleBtn = document.getElementById('jinwoo');
  //messie osango
    const sidebar = document.getElementById('satoru');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
//messie osango
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      toggleBtn.classList.toggle('bx-menu');
      toggleBtn.classList.toggle('bx-x');
    });

    clearHistoryBtn.addEventListener('click', () => {
      localStorage.removeItem('chatHistory');
      historyList.innerHTML = "";
      chatMessages.innerHTML = "";
      addMessage("Bonjour ! Comment puis-je t'aider aujourd'hui ?", false);
    });

