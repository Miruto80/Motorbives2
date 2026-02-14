import React from "react";
import LegalLayout from "../../components/LegalLayout";
import { useLanguage } from '../../context/useLanguage.js'; 

export default function Disclaimer() {
  const { language } = useLanguage(); 
  const texts = {
    en: {
      title: 'Disclaimer',
      content: [
        'MotorVibes provides vehicle listings and financing information for informational purposes only.',
        'Approval, pricing, terms, and conditions are determined by lenders and may vary based on credit profile and vehicle selection.',
        'We make no guarantees regarding approval, interest rates, or vehicle availability.',
      ],
    },
    es: {
      title: 'Descargo de Responsabilidad',
      content: [
        'MotorVibes proporciona listados de vehículos e información de financiamiento solo con fines informativos.',
        'La aprobación, precios, términos y condiciones son determinados por los prestamistas y pueden variar según el perfil de crédito y la selección del vehículo.',
        'No garantizamos aprobación, tasas de interés o disponibilidad de vehículos.',
      ],
    },
  };

  // Selecciona el texto basado en el idioma
  const currentTexts = texts[language] || texts.en; 

  return (
    <LegalLayout title={currentTexts.title}>
      {currentTexts.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </LegalLayout>
  );
}