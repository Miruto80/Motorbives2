import React, { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import cars from '../assets/data/cars.js'
import { useNavigate } from 'react-router-dom';
import CarSplide from '../components/Moreinfo/CarSplide.jsx'
import '../assets/css/Moreinfo.css'

export default function MoreInfo() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const car = state || null;
  
  const handleRequestInfo = (carObj) => {
    console.log('Request info for', carObj?.id);
  };

  const related = useMemo(() => {
    if (!car || !Array.isArray(cars)) return [];
    const scored = cars
      .filter((c) => c.id !== car.id)
      .map((c) => {
        let score = 0;
        if (c.type && car.type && c.type === car.type) score += 2;
        if (c.make && car.make && c.make === car.make) score += 1;
        return { car: c, score };
      })
      .filter((s) => s.score > 0) 
      .sort((a, b) => b.score - a.score)
      .map((s) => s.car);

   
    if (scored.length < 8) {
      const fallback = cars
        .filter((c) => c.id !== car.id && !scored.find((s) => s.id === c.id))
        .filter((c) => c.type === car.type)
        .slice(0, 8 - scored.length);
      return [...scored, ...fallback].slice(0, 8);
    }

    return scored.slice(0, 8);
  }, [car]);

  if (!car) {
    return (
      <div>
        <h1>More Info Page</h1>
        <p>No car data was passed via navigation state.</p>
        <p>Requested id: {id}</p>
      </div>
    )
  }

  return (
    <div className="container my-5 text-white">
      <div className="row g-4 align-items-start">

        {/* COLUMNA IZQUIERDA: SLIDER */}
        <div className="col-lg-7">
          <CarSplide
            car={car}
            initialIndex={0}
            onRequestInfo={handleRequestInfo}
            hideButton
          />
        </div>

        {/* COLUMNA DERECHA: INFO */}
        <div className="col-lg-5">
          <div className="car-info-box">
            <h3 className="car-title">
              {car.year} {car.make} {car.name}
            </h3>

            <p className="car-price">
              ${car.financingprice.toLocaleString()} <span>Financing</span>
            </p>

            <ul className="car-specs">
              <li><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</li>
              <li><strong>Down Payment:</strong> ${car.downpayment.toLocaleString()}</li>
              <li><strong>Cash Price:</strong> ${car.cashprice.toLocaleString()}</li>
            </ul>

            <p className="car-description">
              {car.description}
            </p>
              <div className="row mt-4">
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-lg px-5 py-3 fw-bold request-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/Preapproval', { state: car });
                    }}
                  >
                    Get Pre-Approved
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className="mt-5">
          <Slider cars={related} title="Related vehicles" />
        </div>
      )}
    </div>
  )
}