import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

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

  return (
    <div style={{color: 'white'}}>
      <h1>More Info Page</h1>
      <h1>{car.id}</h1>
      <p>{car.name} - {car.year}</p>
      <p>{car.description}</p>
      <p>Downpayment: ${car.downpayment.toLocaleString()}</p>
      <p>Financing Price: ${car.financingprice.toLocaleString()}</p>
      <p>Cash Price: ${car.cashprice.toLocaleString()}</p>
      <p>Mileage: {car.mileage.toLocaleString()} miles</p>
      <div>
        {car.images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`${car.name} image ${index + 1}`} style={{maxWidth: '300px', margin: '10px'}} />
        ))}
      </div>
    </div>
  )
}
