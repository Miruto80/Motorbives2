// src/components/Hero.jsx
import React from 'react';
import '../assets/css/Hero.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage.js';

export default function Hero() {
  const { language } = useLanguage(); 

  // Objeto con traducciones locales
  const texts = {
    en: {
      title: 'Drive Today',
      titleSpan: 'Bank Financing Made Simple',
      subtitle: 'Quality used vehicles in Texas. Financing available through trusted partner banks.',
      viewInventory: 'View Inventory',
      getPreApproved: 'Get Pre-Approved',
      dealerHighlights: 'Dealer Highlights',
      bankFinancing: 'BANK FINANCING',
      bankFinancingText: 'Multiple partner banks available',
      allCreditTypes: 'ALL CREDIT TYPES',
      allCreditTypesText: 'Approval based on bank decision',
      noInHouseFinancing: 'NO IN-HOUSE FINANCING',
      noInHouseFinancingText: '100% transparent bank process',
      qualityInventory: 'QUALITY INVENTORY',
      qualityInventoryText: 'Cars, trucks & box trucks',
    },
    es: {
      title: 'Conduce Hoy',
      titleSpan: 'Financiamiento Bancario Hecho Simple',
      subtitle: 'Vehículos usados de calidad en Texas. Financiamiento disponible a través de bancos socios confiables.',
      viewInventory: 'Ver Inventario',
      getPreApproved: 'Obtener Pre-Aprobación',
      dealerHighlights: 'Destacados del Distribuidor',
      bankFinancing: 'FINANCIAMIENTO BANCARIO',
      bankFinancingText: 'Múltiples bancos socios disponibles',
      allCreditTypes: 'TODOS LOS TIPOS DE CRÉDITO',
      allCreditTypesText: 'Aprobación basada en decisión bancaria',
      noInHouseFinancing: 'SIN FINANCIAMIENTO INTERNO',
      noInHouseFinancingText: 'Proceso bancario 100% transparente',
      qualityInventory: 'INVENTARIO DE CALIDAD',
      qualityInventoryText: 'Autos, camionetas y camiones de caja',
    },
  };

  
  const currentTexts = texts[language] || texts.en; // Fallback a inglés si no hay idioma

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center">

          {/* TEXT */}
          <div className="col-lg-6 text-white">
            <h1 className="hero-title">
              {currentTexts.title} <br />
              <span>{currentTexts.titleSpan}</span>
            </h1>

            <p className="hero-subtitle">
              {currentTexts.subtitle}
            </p>

            <div className="hero-buttons">
              <Link to="/inventory" className="btn btn-i btn-lg me-3">
                {currentTexts.viewInventory}
              </Link>

              <Link to="/preapproval" className="btn btn-outline-light btn-lg">
                {currentTexts.getPreApproved}
              </Link>
            </div>
          </div>

          {/* DEALER INFO CARD */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-end">
            <div className="hero-card dealer-info">
              <h5>{currentTexts.dealerHighlights}</h5>

              <ul className="dealer-list">
                <li>
                  <span className="dealer-title">{currentTexts.bankFinancing}</span>
                  <span className="dealer-text">{currentTexts.bankFinancingText}</span>
                </li>

                <li>
                  <span className="dealer-title">{currentTexts.allCreditTypes}</span>
                  <span className="dealer-text">{currentTexts.allCreditTypesText}</span>
                </li>

                <li>
                  <span className="dealer-title">{currentTexts.noInHouseFinancing}</span>
                  <span className="dealer-text">{currentTexts.noInHouseFinancingText}</span>
                </li>

                <li>
                  <span className="dealer-title">{currentTexts.qualityInventory}</span>
                  <span className="dealer-text">{currentTexts.qualityInventoryText}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}