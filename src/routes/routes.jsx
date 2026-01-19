import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Preapproval from "../pages/Preapproval.jsx";
import Inventory from "../pages/Inventory.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ScrollToTop from "../components/ScrollToTop.jsx";
import MoreInfo from "../pages/MoreInfo.jsx";



function AppRoutes() {
   const location = useLocation();
  return (
    <>
        <Navbar />
         <ScrollToTop />
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="Preapproval" element={<Preapproval />} />
        <Route path="Inventory" element={<Inventory />} />
        <Route path="MoreInfo/:id" element={<MoreInfo />} />
        </Routes>
     <FloatingWhatsApp
      phoneNumber="16822406838"   // Número de tu empresa en formato internacional
      accountName="MotorVibes" // Nombre de tu empresa
      chatMessage="Hola ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."              // Opcional: modo oscuro
      allowClickAway={true}   
      darkMode={true}               // Opcional: modo oscuro
      avatar="/img/Logo en negro.jpeg"
    />

    </>
  );
}

export default AppRoutes;