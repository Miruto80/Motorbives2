import React from 'react';
import ClientCard from './ClientCard';
import '../assets/css/Clients.css';
import Title from './Title';
import { useLanguage } from '../context/useLanguage.js'; 

export default function Clients() {
  const { language } = useLanguage();
  const clients = [
    { image: '/Clients/Client (1).webp', car: 'International' },
    { image: '/Clients/Client (2).webp', car: 'Honda Accord' },
    { image: '/Clients/Client (3).webp', car: 'Ford Transit' },
    { image: '/Clients/Client (5).webp', car: 'Ford F-150' },
    { image: '/Clients/Client (4).webp', car: 'Ram Promaster' },
    { image: '/Clients/Client (6).webp',  car: 'Cadillac Escalade' },
  ];

  const texts = {
    en: {
      ourHappyClients: 'Our Happy Clients',
      subtitle: 'Real people. Real bank financing. Real results.',
    },
    es: {
      ourHappyClients: 'Nuestros Clientes Satisfechos',
      subtitle: 'Personas reales. Financiamiento bancario real. Resultados reales.',
    },
  };
 
  const currentTexts = texts[language] || texts.en;


  return (
    <section className="clients-section">
      <div className="container">
        <div className="text-center mb-5">
          <Title text={currentTexts.ourHappyClients} />
          <p className="clients-subtitle">
            {currentTexts.subtitle}
          </p>
        </div>

        <div className="row g-4">
          {clients.map((client, index) => (
            <div className="col-md-4" key={index}>
              <ClientCard {...client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
