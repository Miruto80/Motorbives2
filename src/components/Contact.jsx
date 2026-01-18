import React, { useState } from 'react';
import '../assets/css/Contact.css';
import Title from './Title';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();

  const message = `Hola, soy ${name}. Mi número: ${number}. Mi correo: ${email}. Quiero reservar una mesa el ${date}.`;
  const encodedMessage = encodeURIComponent(message);
  const phone = "16824804614";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Móvil usa wa.me (no usar _blank)
  const mobileURL = `https://wa.me/${phone}?text=${encodedMessage}`;

  // Escritorio usa api.whatsapp.com (sí usar _blank)
  const desktopURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  if (isMobile) {
    // Abre WhatsApp app directamente
    window.location.href = mobileURL;
  } else {
    // Abre WhatsApp Web en pestaña nueva sin sacar al usuario de tu web
    window.open(desktopURL, "_blank");
  }
};




  return (
    <section className="reservation-section">
     <Title text='Schedule a test drive'/>
      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder='Put your name here' value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            Number:
            <input type="tel"  placeholder='Put your number here' value={number} onChange={(e) => setNumber(e.target.value)} required />
          </label>

          <label>
            Email:
            <input type="email"  placeholder='Put your email here' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <button type="submit">Schedule Your Test Drive</button>
        </form>
      </div>

      <div className="reservation-map">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.2871327877124!2d-97.3496619!3d32.7846451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e77270e244259%3A0xf0fef2c095b92789!2sMotorvibes%20llc!5e0!3m2!1ses!2sus!4v1768606554060!5m2!1ses!2sus"          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
 <Title text='Social Media'/>
      <div className="reservation-socials">
        <div className="socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/16824804614" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

