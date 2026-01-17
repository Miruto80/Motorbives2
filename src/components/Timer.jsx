import React, { useEffect, useState } from 'react';

const BusinessStatus = () => {
  const [status, setStatus] = useState('Close');

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
          setStatus('Open');
        } else {
          setStatus('Close');
        }
      } else if (day === 6) {
        // Sábado
        if (currentTime >= saturdayOpen && currentTime <= saturdayClose) {
          setStatus('Open');
        } else {
          setStatus('Close');
        }
      } else {
        // Domingo
        setStatus('Appointments');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const color =
    status === 'Open'
      ? '#00ff00'
      : status === 'Close'
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