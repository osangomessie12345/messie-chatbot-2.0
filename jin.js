
    function startTypingEffect(element, text) {
      let index = 0;
      element.textContent = '';
      
      const interval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text[index++];
          chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }

