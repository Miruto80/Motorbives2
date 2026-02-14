import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Preapproval from "../pages/Preapproval.jsx";
import Inventory from "../pages/Inventory.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ScrollToTop from "../components/ScrollToTop.jsx";
import MoreInfo from "../pages/MoreInfo.jsx";
import Footer from "../components/Footer.jsx";
import ChatBot from "../components/ChatBot.jsx"; 
import FadeWrapper from "../components/Animations/FadeWrapper.jsx";
import Privacy from "../pages/Legal/Privacy.jsx";
import Disclaimer from "../pages/Legal/Disclaimer.jsx";
import Terms from "../pages/Legal/Terms.jsx";
import { useLanguage } from '../context/useLanguage.js'; // Agregar import del hook

function AppRoutes() {
  const location = useLocation();
  const { language } = useLanguage(); // Usar el hook para obtener el idioma

  // Definir textos traducibles para WhatsApp
  const whatsappTexts = {
    en: {
      chatMessage: "Hi, how can we help you?",
      placeholder: "Write a text...",
    },
    es: {
      chatMessage: "Hola, ¿cómo podemos ayudarte?",
      placeholder: "Escribe un mensaje...",
    },
  };

  const currentWhatsappTexts = whatsappTexts[language] || whatsappTexts.en; // Fallback a inglés

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
        <Route path="Preapproval" element={<FadeWrapper><Preapproval /></FadeWrapper>} />
        <Route path="Inventory" element={<FadeWrapper><Inventory /></FadeWrapper>} />
        <Route path="MoreInfo/:id" element={<FadeWrapper><MoreInfo /></FadeWrapper>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <ChatBot />
      <FloatingWhatsApp
        phoneNumber="16822406838"   
        accountName="MotorVibes" 
        chatMessage={currentWhatsappTexts.chatMessage} 
        placeholder={currentWhatsappTexts.placeholder} 
        allowClickAway={true}   
        darkMode={true}              
        avatar="/img/Logo en negro.jpeg"
      />
      <Footer />
    </>
  );
}

export default AppRoutes;