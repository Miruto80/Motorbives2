// src/components/BusinessStatus.jsx
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/useLanguage.js';

const BusinessStatus = () => {
  const { language } = useLanguage(); 


  const texts = {
    en: {
      open: 'Open',
      close: 'Close',
      appointments: 'Appointments',
    },
    es: {
      open: 'Abierto',
      close: 'Cerrado',
      appointments: 'Solo con Cita',
    },
  };

  // Selecciona el texto basado en el idioma
  const currentTexts = texts[language] || texts.en; 

  const [status, setStatus] = useState(currentTexts.close); 

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hour = now.getHours();
      const minutes = now.getMinutes();

      const currentTime = hour * 60 + minutes;

      // Horarios
      const weekdayOpen = 9 * 60 + 30;   // 9:30
      const weekdayClose = 18 * 60 + 30; // 18:30

      const saturdayOpen = 10 * 60 + 30; // 10:30
      const saturdayClose = 18 * 60 + 30;

      if (day >= 1 && day <= 5) {
        // Lunes a viernes
        if (currentTime >= weekdayOpen && currentTime <= weekdayClose) {
          setStatus(currentTexts.open);
        } else {
          setStatus(currentTexts.close);
        }
      } else if (day === 6) {
        // Sábado
        if (currentTime >= saturdayOpen && currentTime <= saturdayClose) {
          setStatus(currentTexts.open);
        } else {
          setStatus(currentTexts.close);
        }
      } else {
        // Domingo
        setStatus(currentTexts.appointments);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, [currentTexts]); // Agrega currentTexts como dependencia para actualizar al cambiar idioma

  const color =
    status === currentTexts.open
      ? '#00ff00'
      : status === currentTexts.close
      ? '#888'
      : '#ffcc00'; // Amarillo para "Solo con cita"

  return (
    <div style={{
      backgroundColor: '#1c1c1c',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '20px',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '16px'
    }}>
      <span style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
        marginRight: '10px'
      }} />
      {status}
    </div>
  );
};

export default BusinessStatus;