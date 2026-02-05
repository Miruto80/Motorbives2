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



function AppRoutes() {
   const location = useLocation();
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
      phoneNumber="16822406838"   // Número de tu empresa en formato internacional
      accountName="MotorVibes" // Nombre de tu empresa
      chatMessage="Hola ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."              // Opcional: modo oscuro
      allowClickAway={true}   
      darkMode={true}               // Opcional: modo oscuro
      avatar="/img/Logo en negro.jpeg"
    />
    <Footer />
    </>
  );
}

export default AppRoutes;