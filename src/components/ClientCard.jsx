import React from 'react';

export default function ClientCard({ image, car }) {
  return (
    <div className="client-card">
      <img src={image} alt={car || 'Happy customer vehicle'} />

      {car && (
        <div className="client-info">
          <span className="client-car">{car}</span>
        </div>
      )}
    </div>
  );
}
