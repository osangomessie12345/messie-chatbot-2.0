//messie osango
window.onload = function () {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  for (const item of history) {
    addMessage(item.text, item.isUser, false); // Ne pas sauvegarder à nouveau
  }
  updateHistoryList();
};

// messie osango 
document.getElementById('clearHistoryBtn').onclick = () => {
  localStorage.removeItem('chatHistory');
  chatMessages.innerHTML = "";
  historyList.innerHTML = "";
};
