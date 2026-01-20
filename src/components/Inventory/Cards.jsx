import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Cards.css';

export default function Cards({ cars }) {
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
                  Price: ${car.financingprice.toLocaleString()}
                </p>

                <button className="btn btn-primary w-100">
                  Get Pre-Approval
                </button>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
