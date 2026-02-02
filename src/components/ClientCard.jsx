import React from 'react';

export default function ClientCard({ image, name, car }) {
  return (
    <div className="client-card">
      <img src={image} alt={name || 'Happy client'} />

      {(name || car) && (
        <div className="client-info">
          {name && <h6>{name}</h6>}
          {car && <span>{car}</span>}
        </div>
      )}
    </div>
  );
}
