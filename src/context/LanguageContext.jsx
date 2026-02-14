// src/contexts/LanguageContext.jsx
import React, { useState } from 'react';
import { LanguageContext } from './useLanguage'; // Importa como nombrado
import translations from './languageUtils'; 

export const LanguageProvider = ({ children }) => {
  // Inicializa el estado con el valor de localStorage (o 'en' por defecto)
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang && translations[savedLang] ? savedLang : 'en';
  });

  // Función para traducir textos
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    keys.forEach((k) => {
      value = value?.[k];
    });
    return value || key;
  };

  // Cambiar idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
