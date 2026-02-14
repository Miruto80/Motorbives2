import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Cards.css';
import { useLanguage } from '../../context/useLanguage.js'; 

export default function Cards({ cars }) {
  const navigate = useNavigate();
  const { language } = useLanguage(); 

 
  const texts = {
    en: {
      priceLabel: 'Price:',
      getPreApproval: 'Get Pre-Approval',
    },
    es: {
      priceLabel: 'Precio:',
      getPreApproval: 'Obtener Pre-Aprobación',
    },
  };

  const currentTexts = texts[language] || texts.en; 

  return (
    <div className="row g-4">
      {cars.map((car) => (
        <div className="col-md-6 col-lg-4" key={car.id}>
          <Link
            to={`/Moreinfo/${car.id}`}
            state={car}
            className="text-decoration-none"
          >
            <div className="card car-card h-100">

              {/* Imagen */}
              <img
                src={car.images[0]}
                className="card-img-top"
                alt={car.name}
              />

              {/* Body */}
              <div className="card-body">
                <h6 className="car-title">
                  {car.year} {car.make} {car.name}
                </h6>

                <p className="car-prices">
                  {currentTexts.priceLabel} ${car.financingprice.toLocaleString()}
                </p>

                <button
                  type="button"
                  className="btn btn-primary w-100 btn-preapproval"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate('/Preapproval', { state: car });
                  }}
                >
                  {currentTexts.getPreApproval}
                </button>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}