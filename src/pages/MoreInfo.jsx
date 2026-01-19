import React from 'react'

export default function MoreInfo({id, name, year, downpayment, financingprice, cashprice, mileage, description, images}) {
  return (
    <div>
      <h1>More Info Page</h1>
      <h1>{id}</h1>
      <p>{name} - {year}</p>
      <p>{description}</p>
      <p>Downpayment: ${downpayment.toLocaleString()}</p>
      <p>Financing Price: ${financingprice.toLocaleString()}</p>
      <p>Cash Price: ${cashprice.toLocaleString()}</p>
      <p>Mileage: {mileage.toLocaleString()} miles</p>
      <div>
        {images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`${name} image ${index + 1}`} style={{maxWidth: '300px', margin: '10px'}} />
        ))}
      </div>
    </div>
  )
}
