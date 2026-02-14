// pages/Privacy.jsx
import React from "react";
import LegalLayout from "../../components/LegalLayout";
import { useLanguage } from '../../context/useLanguage.js'; 

export default function Privacy() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Privacy Policy',
      content: [
        'We respect your privacy and are committed to protecting your personal information.',
        'Any information submitted through our website, including pre-approval forms, is used solely to assist you with vehicle financing and inquiries.',
        'We do not sell or share your personal data with third parties, except as required to process financing requests.',
      ],
    },
    es: {
      title: 'Política de Privacidad',
      content: [
        'Respetamos tu privacidad y estamos comprometidos a proteger tu información personal.',
        'Cualquier información enviada a través de nuestro sitio web, incluyendo formularios de pre-aprobación, se utiliza únicamente para ayudarte con el financiamiento de vehículos y consultas.',
        'No vendemos ni compartimos tus datos personales con terceros, excepto según sea necesario para procesar solicitudes de financiamiento.',
      ],
    },
  };

  const currentTexts = texts[language] || texts.en; 

  return (
    <LegalLayout title={currentTexts.title}>
      {currentTexts.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </LegalLayout>
  );
}