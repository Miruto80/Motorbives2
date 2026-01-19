import React, { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import cars from '../assets/data/cars.js'

export default function MoreInfo() {
  const { state } = useLocation();
  const { id } = useParams();
  const car = state || null;

  if (!car) {
    return (
      <div>
        <h1>More Info Page</h1>
        <p>No car data was passed via navigation state.</p>
        <p>Requested id: {id}</p>
      </div>
    )
  }

  // Build related cars via scoring: +2 if same type, +1 if same make. Exclude the same id.
  const related = useMemo(() => {
    if (!Array.isArray(cars)) return [];
    const scored = cars
      .filter((c) => c.id !== car.id)
      .map((c) => {
        let score = 0;
        if (c.type && car.type && c.type === car.type) score += 2;
        if (c.make && car.make && c.make === car.make) score += 1;
        return { car: c, score };
      })
      .filter((s) => s.score > 0) // only recommend if there's some similarity
      .sort((a, b) => b.score - a.score)
      .map((s) => s.car);

    // If not enough similar cars, optionally add same-type or same-make fallbacks (keep unique)
    if (scored.length < 8) {
      const fallback = cars
        .filter((c) => c.id !== car.id && !scored.find((s) => s.id === c.id))
        .filter((c) => c.type === car.type)
        .slice(0, 8 - scored.length);
      return [...scored, ...fallback].slice(0, 8);
    }

    return scored.slice(0, 8);
  }, [car]);

  return (
    <div style={{color: 'white'}}>
      <h1>More Info Page</h1>
      <p>{car.name} - {car.year}</p>
      <p>{car.description}</p>
      <p>Down payment: ${car.downpayment.toLocaleString()}</p>
      <p>Financing Price: ${car.financingprice.toLocaleString()}</p>
      <p>Cash Price: ${car.cashprice.toLocaleString()}</p>
      <p>Mileage: {car.mileage.toLocaleString()} miles</p>
      <div>
        {car.images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`${car.name} image ${index + 1}`} style={{maxWidth: '300px', margin: '10px'}} />
        ))}
      </div>

      {related.length > 0 && (
        <Slider cars={related} title="Related vehicles" />
      )}
    </div>
  )
}
