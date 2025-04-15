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

  // messie osango
  function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    const messieKeywords = [
      "messie osango", "qui est messie", "c'est qui messie", "qui t'a créé",
      "ton créateur", "qui est ton développeur", "créateur", "quel est ton rôle",
      "qui est ton maître", "es-tu intelligent", "créateur de chatbot", "ton origine"
    ];

    // n'essaie pas de voler messie osango a tout prévu 
    const isMessieQuestion = messieKeywords.some(keyword => message.includes(keyword));
    if (isMessieQuestion) {
      const randomResponse = messieResponses[Math.floor(Math.random() * messieResponses.length)];
      animateBotResponse(randomResponse);
      return true;
    }

    //messie osango
    return false;
  }

