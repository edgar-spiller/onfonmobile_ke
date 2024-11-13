// components/Chatbot.js
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create the config script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "sI9n9BKynGazaKKF3wWHX",
        domain: "www.chatbase.co"
      };
    `;
    
    // Create the embed script
    const embedScript = document.createElement('script');
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.async = true;
    embedScript.defer = true;
    embedScript.setAttribute("chatbotId", "sI9n9BKynGazaKKF3wWHX");
    embedScript.setAttribute("domain", "www.chatbase.co");

    // Append the scripts to the document
    document.body.appendChild(configScript);
    document.body.appendChild(embedScript);

    // Cleanup function to remove scripts on unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return null; // No need to render anything in the component
};

export default Chatbot;
