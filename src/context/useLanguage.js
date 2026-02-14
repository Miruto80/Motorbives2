// src/contexts/useLanguage.js
import { useContext, createContext } from 'react'; // Importa createContext aquí

// Define el contexto
export const LanguageContext = createContext(); // Exporta como nombrado

// Hook para usar el contexto
export const useLanguage = () => useContext(LanguageContext); // Exporta como nombrado