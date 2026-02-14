import React from "react";
import LegalLayout from "../../components/LegalLayout";
import { useLanguage } from '../../context/useLanguage.js'; // Agregar import

export default function Terms() {
  const { language } = useLanguage(); // Usar el hook

  const texts = {
    en: {
      title: 'Terms & Conditions',
      content: [
        'By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.',
        'All vehicle information, pricing, and availability are subject to change without notice. Financing approval is subject to lender requirements.',
        'MotorVibes is not responsible for typographical errors or inaccuracies.',
      ],
    },
    es: {
      title: 'Términos y Condiciones',
      content: [
        'Al acceder y usar este sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones.',
        'Toda la información del vehículo, precios y disponibilidad están sujetos a cambios sin previo aviso. La aprobación de financiamiento está sujeta a los requisitos del prestamista.',
        'MotorVibes no es responsable de errores tipográficos o inexactitudes.',
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