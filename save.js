//messie osango
window.onload = function () {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  for (const item of history) {
    addMessage(item.text, item.isUser, false); // sauvegarde fait par jin osango
  }
  updateHistoryList();
};

// messie osango 
document.getElementById('clearHistoryBtn').onclick = () => {
  localStorage.removeItem('chatHistory');
  chatMessages.innerHTML = "";
  historyList.innerHTML = "";
};
