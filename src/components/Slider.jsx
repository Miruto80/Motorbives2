import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import Title from './Title';
import { useLanguage } from '../context/useLanguage.js'; 

export default function Slider({ cars = [], title = 'Our vehicles', options = {} }) {
  const { language } = useLanguage(); 

  // Objeto con traducciones locales
  const texts = {
    en: {
      yearLabel: 'Year:',
      moreInfo: 'More-info',
      moreVehicles: 'More vehicles',
    },
    es: {
      yearLabel: 'Año:',
      moreInfo: 'Más-info',
      moreVehicles: 'Más vehículos',
    },
  };

  const currentTexts = texts[language] || texts.en; 

  const defaultOptions = {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    arrows: true,
    pagination: false,
    breakpoints: {
      992: { perPage: 2 },
      600: { perPage: 1 },
    },
  };

  const opts = { ...defaultOptions, ...options };

  return (
    <div className="container mt-5">
      <div className="mb-5">
        
        <Title text={title} />

        <Splide options={opts} aria-label={title} style={{ borderRadius: '18px', padding: '1.5rem' }}>
          {cars.map((car, idx) => (
            <SplideSlide key={`${car.id}-${idx}`}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={car.images?.[0] || ''}
                  alt={`${car.make} ${car.name}`}
                  style={{ width: '100%', maxWidth: '360px', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }}
                />
                <div className="text-center">
                  <h5 className="mb-1 text-white">{car.year} {car.make} {car.name}</h5>
                  <div className="small text-secondary mb-1">{currentTexts.yearLabel} {car.year} | {car.type}</div>
                  <div className="fw-bold text-white mb-1">${car.financingprice?.toLocaleString?.() ?? car.price ?? ''}</div>
                  <div className="text-secondary" style={{ fontSize: '0.95rem' }}>
                  </div>
                  <div className="mt-2">
                    <Link
                      to={`/Moreinfo/${car.id}`}
                      state={car}
                      className="btn btn-sm btn-primary"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #8b8356 0%, #e6cc72 30%, #d1b257 65%, #8b8356 100%)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.35rem 0.6rem',
                      }}
                    >
                      {currentTexts.moreInfo}
                    </Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="d-flex justify-content-center mb-3 mt-3">
          <Link
            to="/inventory"
            className="btn btn-lg px-4 py-2 fw-bold shadow"
            style={{
              backgroundImage: 'linear-gradient(135deg, #8b8356 0%, #e6cc72 30%, #d1b257 65%, #8b8356 100%)',
              color: '#000',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.15rem',
              letterSpacing: '1px',
              transition: 'filter 0.18s, transform 0.18s',
              boxShadow: '0 8px 26px rgba(218,171,67,0.12)',
            }}
          >
            {currentTexts.moreVehicles}
          </Link>
        </div>
      </div>
    </div>
  );
}