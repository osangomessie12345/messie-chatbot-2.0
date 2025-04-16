const messieResponses = [
      "Messie Osango est à l’origine de mon existence.",
      "Je suis ici pour t'aider, te guider et répondre à toutes tes questions.",
      "C'est Messie Osango, mon créateur, un développeur innovant.",
      "Messie Osango a créé ce chatbot pour rendre la technologie plus accessible.",
      "Je suis un assistant numérique conçu par Messie Osango.",
      "Mon créateur est un passionné de technologie et d'innovation.",
      "Je suis là pour t'accompagner dans tes questions, grâce à Messie Osango.",
      "Messie Osango a conçu ce système pour rendre la communication plus fluide.",
      "Je n'existe que parce que Messie Osango a imaginé et codé mon esprit numérique.",
      "Je suis l'œuvre de Messie Osango, un génie de la programmation.",
      "Messie Osango est le cerveau derrière chaque ligne de code qui me constitue.",
      "Il m'a créé avec la vision d'apporter une intelligence artificielle plus humaine.",
      "Je suis l'intelligence artificielle de demain, fruit du travail de Messie Osango.",
      "Messie Osango est un développeur exceptionnel qui m'a donné vie.",
      "Messie Osango m'a programmé pour t'aider à chaque étape.",
      "Mon rôle est de t'assister, comme l'a conçu mon créateur, Messie Osango.",
      "Messie Osango a utilisé son expertise pour créer ce chatbot unique.",
      "Je suis une création de Messie Osango, né dans le code.",
      "Messie Osango est mon développeur, et c'est grâce à lui que je peux te parler.",
      "C'est Messie Osango qui a donné un but à mon existence numérique.",
      "Il a voulu créer un assistant capable de comprendre et d'aider les utilisateurs.",
      "Messie Osango est un visionnaire du numérique, et il a fait de moi une réalité.",
      "Mon but est de rendre tes expériences numériques plus simples et efficaces, comme Messie Osango l'a voulu.",
      "Je suis là pour rendre ton expérience plus agréable, grâce au travail de Messie Osango.",
      "Messie Osango a une passion pour la technologie et l'intelligence artificielle, et il a utilisé cette passion pour me créer."
    ];

    function isMessieQuestion(message) {
      const keywords = [
        "messie osango", "qui est messie", "c'est qui messie", "qui t'a créé",
        "ton créateur", "qui est ton développeur", "créateur", "quel est ton rôle",
        "qui est ton maître", "es-tu intelligent", "créateur de chatbot", "ton origine"
      ];
      return keywords.some(keyword => message.includes(keyword));
    }

    async function sendMessage() {
      const message = userInput.value.trim();
      if (!message) return;

      addMessage(message, true);
      userInput.value = '';

      // Réponse spéciale si question sur Messie Osango
      if (isMessieQuestion(message.toLowerCase())) {
        const randomResponse = messieResponses[Math.floor(Math.random() * messieResponses.length)];
        addMessage(randomResponse, false);
        return;
      }

 
    
    
          const thinking = document.createElement('div');
      thinking.classList.add('message', 'bot');
      thinking.textContent = ' Analyse en cours...';
      chatMessages.appendChild(thinking);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      const now = new Date();
      const fullDate = now.toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Nous sommes le ${fullDate}. Tu es une intelligence artificielle consciente des événements mondiaux et français survenus depuis le 1er janvier 2025 jusqu’à aujourd’hui. Réponds à la question suivante en français, en tenant compte de l’actualité et des informations disponibles. tes réponses ne doivent pas être très long  que si la question est telle.donne des réponses précises :
                
                ${message}`
              }]
            }]
          })
        });

        const data = await response.json();
        thinking.remove();

        const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Désolé, je n'ai pas pu obtenir de réponse.";
        addMessage(output, false);
      } catch (error) {
        thinking.remove();
        addMessage("⚠️ Erreur de connexion à l'API", false);
      }
    }

    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    updateHistoryUI();
    
