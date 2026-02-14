import React, { useState } from "react";
import { useLanguage } from '../context/useLanguage.js'; // Agregar import del hook

const qaPairs = [
  { 
    keywords: ["hours", "hour", "schedule", "time", "horas", "hora", "horario", "tiempo"],
    answer: {
      en: "Our operation hours are Monday to Saturday, 10:30am to 6:30pm, and Sundays by appointment only.",
      es: "Nuestros horarios de operación son de lunes a sábado, de 10:30am a 6:30pm, y domingos solo con cita previa."
    }
  },
  
  { 
    keywords: ["inventory", "stock", "inventario", "existencias"], 
    answer: {
      en: "You can see our full inventory in the 'Inventory' section of the website.",
      es: "Puedes ver nuestro inventario completo en la sección 'Inventario' del sitio web."
    }
  },

  { 
    keywords: ["trade in", "trade", "exchange", "intercambio", "trueque"], 
    answer: {
      en: "Yes, we accept your car as a trade-in towards your purchase.",
      es: "Sí, aceptamos tu auto como parte de pago en tu compra."
    }
  },

  {
    keywords: ["in house financing","bank","finance","buy here pay here","lender","lenders","financing","do you offer financing", "financiamiento interno", "banco", "financiar", "compra aquí paga aquí", "prestamista", "prestamistas", "financiamiento", "¿ofrecen financiamiento"],
    answer: {
      en: "We mainly offer bank financing. In some cases, in-house financing may be available for selected vehicles. We work exclusively in Texas. Please visit our Pre-Approval section for more details.",
      es: "Principalmente ofrecemos financiamiento bancario. En algunos casos, el financiamiento interno puede estar disponible para vehículos seleccionados. Trabajamos exclusivamente en Texas. Por favor, visita nuestra sección de Pre-Aprobación para más detalles."
    }
  },

  {
    keywords: ["requirements", "what do I need", "requirement", "requisitos", "¿qué necesito", "requisito"],
    answer: {
      en: "To get approved, a minimum credit score of 550 is required. You’ll also need ID, DL or passport, Bank Statements. To get started, please complete the Pre-Approval form on our website.",
      es: "Para ser aprobado, se requiere un puntaje de crédito mínimo de 550. También necesitarás ID, licencia de conducir o pasaporte, estados de cuenta bancarios. Para comenzar, por favor completa el formulario de Pre-Aprobación en nuestro sitio web."
    }
  },

  {
    keywords: ["pre approval","pre approved","how I can get approved","can I do online process","online buying","can I get pre approved before go to the dealer", "pre aprobación", "pre aprobado", "¿cómo puedo ser aprobado", "¿puedo hacer el proceso en línea", "compra en línea", "¿puedo obtener pre aprobación antes de ir al concesionario"],
    answer: {
      en: "Yes, you can complete the entire pre-approval process online before visiting the dealership. A minimum credit score of 550 is required. Please fill out the Pre-Approval form on our website.",
      es: "Sí, puedes completar todo el proceso de pre-aprobación en línea antes de visitar el concesionario. Se requiere un puntaje de crédito mínimo de 550. Por favor, llena el formulario de Pre-Aprobación en nuestro sitio web."
    }
  },

  {
    keywords: ["first time buyer","repo","bankruptcy","credit", "comprador por primera vez", "reposición", "quiebra", "crédito"],
    answer: {
      en: "We work with different credit situations, including first-time buyers, past repossessions, or bankruptcies. A minimum credit score of 550 is required for approval.",
      es: "Trabajamos con diferentes situaciones de crédito, incluyendo compradores por primera vez, reposiciones pasadas o quiebras. Se requiere un puntaje de crédito mínimo de 550 para la aprobación."
    }
  },

  {
    keywords: ["down","down payment","money down","starting amount","initial amount", "enganche", "pago inicial", "dinero abajo", "cantidad inicial", "monto inicial"],
    answer: {
      en: "Down payment depends on the vehicle, your credit, and the lender’s requirements. A minimum credit score of 550 is required. You can complete the Pre-Approval form so we can review your options.",
      es: "El pago inicial depende del vehículo, tu crédito y los requisitos del prestamista. Se requiere un puntaje de crédito mínimo de 550. Puedes completar el formulario de Pre-Aprobación para que revisemos tus opciones."
    }
  },

  {
    keywords: ["located", "location", "address", "ubicado", "ubicación", "dirección"],
    answer: {
      en: "We are located at 2104 jacksboro hwy Fort Worth tx 76114. Use 'Contact' for more information or to schedule a visit.",
      es: "Estamos ubicados en 2104 jacksboro hwy Fort Worth tx 76114. Usa 'Contacto' para más información o para programar una visita."
    }
  },

  { 
    keywords: ["buy a car", "purchase", "get a car", "interested in a car", "want a car", "car for sale", "car to buy", "comprar un auto", "compra", "obtener un auto", "interesado en un auto", "quiero un auto", "auto en venta", "auto para comprar"], 
    answer: {
      en: "If you want to buy a car, please browse our inventory, click on the car you like, then click the 'Get approved' button and fill out the form. Our team will contact you soon!",
      es: "Si quieres comprar un auto, por favor navega nuestro inventario, haz clic en el auto que te guste, luego haz clic en el botón 'Obtener Pre-Aprobación' y llena el formulario. ¡Nuestro equipo te contactará pronto!"
    }
  },

  {
    keywords: ["talk with a representative","representative","live person","chat","talk with real person","person","human","chat with a live representative","live","sales person","customer service","customer support","support", "hablar con un representante", "representante", "persona en vivo", "chat", "hablar con una persona real", "persona", "humano", "chatear con un representante en vivo", "en vivo", "vendedor", "servicio al cliente", "soporte al cliente", "soporte"],
    answer: {
      en: "To talk with a live representative, say 'Contact' and follow the steps. Someone will reach out to you shortly.",
      es: "Para hablar con un representante en vivo, di 'Contacto' y sigue los pasos. Alguien se pondrá en contacto contigo pronto."
    }
  },

  {
    keywords: ["what do you offer","how you guys work","who you are","how we are","explain me how it works","works","info","information", "¿qué ofrecen", "¿cómo trabajan ustedes", "¿quiénes son", "¿cómo somos", "explícame cómo funciona", "funciona", "info", "información"],
    answer: {
      en: "We are a car dealership focused on helping customers find the right vehicle with flexible financing options. Our goal is to make the buying process simple, transparent, and stress-free. For more information, use 'Contact' and one of our representatives will reach out shortly.",
      es: "Somos un concesionario de autos enfocado en ayudar a los clientes a encontrar el vehículo adecuado con opciones de financiamiento flexibles. Nuestro objetivo es hacer que el proceso de compra sea simple, transparente y sin estrés. Para más información, usa 'Contacto' y uno de nuestros representantes se pondrá en contacto contigo pronto."
    }
  },
  // Add more Q&A pairs as needed
];

function getAnswer(userQuestion, language) {
  const lower = userQuestion.toLowerCase();
  // Encuentra todas las respuestas cuyas palabras clave estén presentes
  const matches = qaPairs.filter(qap => qap.keywords.some(kw => lower.includes(kw)));
  if (matches.length === 0) {
    return language === 'es' 
      ? ["Lo siento, no tengo una respuesta para eso. Por favor, intenta con otra pregunta."]
      : ["Sorry, I don't have an answer for that. Please try another question."];
  }
  // Devuelve cada respuesta como un mensaje separado en el idioma correcto
  return matches.map(m => m.answer[language] || m.answer.en); // Fallback a inglés si no hay traducción
}

const welcomeText = {
  en: `Hi! How can I help you? Use 'Contact' if you want to talk to us directly.`,
  es: `¡Hola! ¿Cómo puedo ayudarte? Usa 'Contacto' si quieres hablar con nosotros directamente.`
};

const FORM_ENDPOINT = "https://formspree.io/f/mgolwpyw";

const ChatBot = () => {
  const { language } = useLanguage();

  const [messages, setMessages] = useState([
    { from: "bot", text: welcomeText[language] || welcomeText.en }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [awaitingContact, setAwaitingContact] = useState(false);
  const [contactStep, setContactStep] = useState(0); // 0: none, 1: name, 2: phone
  const [contactData, setContactData] = useState({ name: '', phone: '' });
  const [sending, setSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    let botMsgs = [];

    // Permitir cancelar el flujo de contacto
    if (awaitingContact && input.toLowerCase() === "cancel") {
      setAwaitingContact(false);
      setContactStep(0);
      setContactData({ name: '', phone: '' });
      const cancelText = language === 'es' ? "Proceso de contacto cancelado." : "Contact process cancelled.";
      setMessages([...messages, userMsg, { from: "bot", text: cancelText }]);
      setInput("");
      return;
    }

    // Contact flow
    if (awaitingContact) {
      if (contactStep === 1) {
        setContactData({ ...contactData, name: input });
        setContactStep(2);
        const phonePrompt = language === 'es' ? "Por favor ingresa tu número de teléfono (o escribe 'cancel' para detener):" : "Please enter your phone number (or type 'cancel' to stop):";
        setMessages([...messages, userMsg, { from: "bot", text: phonePrompt }]);
        setInput("");
        return;
      } else if (contactStep === 2) {
        setContactData({ ...contactData, phone: input });
        setSending(true);
        // Send to Formspree
        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: contactData.name,
              phone: input,
              message: "Contact request from chatbot"
            })
          });
          if (res.ok) {
            const successText = language === 'es' ? "¡Gracias! Nos pondremos en contacto contigo pronto." : "Thank you! We will contact you soon.";
            botMsgs = [{ from: "bot", text: successText }];
          } else {
            const errorText = language === 'es' ? "Hubo un error enviando tu información. Por favor, intenta de nuevo más tarde." : "There was an error sending your info. Please try again later.";
            botMsgs = [{ from: "bot", text: errorText }];
          }
        } catch {
          const errorText = language === 'es' ? "Hubo un error enviando tu información. Por favor, intenta de nuevo más tarde." : "There was an error sending your info. Please try again later.";
          botMsgs = [{ from: "bot", text: errorText }];
        }
        setSending(false);
        setAwaitingContact(false);
        setContactStep(0);
        setContactData({ name: '', phone: '' });
        setMessages([...messages, userMsg, ...botMsgs]);
        setInput("");
        return;
      }
    }

    // Detect contact intent
    if (input.toLowerCase().includes("contact") || input.toLowerCase().includes("contacto")) {
      setAwaitingContact(true);
      setContactStep(1);
      const namePrompt = language === 'es' ? "Por favor ingresa tu nombre (o escribe 'cancel' para detener):" : "Please enter your name (or type 'cancel' to stop):";
      setMessages([...messages, userMsg, { from: "bot", text: namePrompt }]);
      setInput("");
      return;
    }

    // Obtener respuestas (pueden ser varias)
    const answers = getAnswer(input, language);
    if (Array.isArray(answers)) {
      botMsgs = answers.map(ans => ({ from: "bot", text: ans }));
    } else {
      botMsgs = [{ from: "bot", text: answers }];
    }
    setMessages([...messages, userMsg, ...botMsgs]);
    setInput("");
  };

  return (
   <div
  className={`chatbot-wrapper ${open ? "open" : ""}`}
  style={{
    position: "fixed",
    bottom: 100,
    right: 15,
    zIndex: 9000,
    width: open ? 320 : 60,
    height: open ? 420 : 60,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    transition: "all 0.3s",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  }}
>

      {open ? (
        <>
          <div style={{ background: "#000", color: "#fff", padding: 12, width: "100%", cursor: "pointer" }} onClick={() => setOpen(false)}>
            ChatBot
            <span style={{ float: "right", fontWeight: "bold" }}>×</span>
          </div>
          <div style={{ flex: 1, padding: 12, overflowY: "auto", width: "100%" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.from === "bot" ? "left" : "right",
                margin: "8px 0"
              }}>
                <span style={{
                  display: "inline-block",
                  background: msg.from === "bot" ? "#f1f1f1" : "#000",
                  color: msg.from === "bot" ? "#333" : "#fff",
                  borderRadius: 12,
                  padding: "8px 12px",
                  maxWidth: "80%"
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", width: "100%", borderTop: "1px solid #eee" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={language === 'es' ? "Escribe tu pregunta..." : "Type your question..."}
              style={{ flex: 1, border: "none", padding: 10, outline: "none" }}
            />
            <button type="submit" style={{ background: "#000", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer" }}>
              {language === 'es' ? "Enviar" : "Send"}
            </button>
          </form>
        </>
      ) : (
        <button onClick={() => setOpen(true)} style={{ width: 60, height: 60, background: "#000", color: "#fff", border: "none", fontSize: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
          <i className="fa-solid fa-robot"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;