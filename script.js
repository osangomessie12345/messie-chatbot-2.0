    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const historyList = document.getElementById('historyList');
    const toggleBtn = document.getElementById('jinwoo');
    const sidebar = document.getElementById('satoru');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
//ce script s'appelle satorugojojinmessieosangosung
    const API_KEY = "AIzaSyBN4UIH-n3ZKDqXggccAatrcpi_fBf6XiA";
    const API_URL =
 `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    //ce script s'appelle satorugojojinmessieosangosung
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      //ce script s'appelle satorugojojinmessieosangosung
      toggleBtn.classList.toggle('bx-menu');
      toggleBtn.classList.toggle('bx-x');
    });
    
