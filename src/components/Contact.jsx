import React, { useState } from 'react';
import '../assets/css/Reservation.css';

export default function ContactSection() {
  const [groupSize, setGroupSize] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();

  const message = `Hola, quiero reservar una mesa para ${groupSize} personas el ${date} a las ${time}.`;
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
      <div className="reservation-form">
        <h2>Reserva una mesa</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tamaño del grupo:
            <select value={groupSize} onChange={(e) => setGroupSize(e.target.value)}>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6+">6 o más</option>
            </select>
          </label>

          <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label>
            Horario:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>

          <button type="submit">Buscar una mesa</button>
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
    </section>
  );
}

