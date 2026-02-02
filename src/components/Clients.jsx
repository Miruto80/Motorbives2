import React from 'react';
import ClientCard from './ClientCard';
import '../assets/css/Clients.css';
import Title from './Title';

export default function Clients() {
  const clients = [
    { image: '/Clients/Client1.jpeg', name: 'Carlos M.', car: '2022 international' },
    { image: '/Clients/Client2.jpeg', name: 'Maria L.', car: 'Honda Accord' },
    { image: '/Clients/Client3.jpeg', name: 'Jose R.', car: 'Ford F-150' },
    { image: '/Clients/Client4.jpeg', name: 'Ana P.', car: 'Nissan Altima' },
    { image: '/Clients/Client5.jpeg', name: 'Luis G.', car: 'Chevy Silverado' },
    { image: '/Clients/Client6.jpeg', name: 'Emily T.', car: 'Hyundai Elantra' },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="text-center mb-5">
          <Title text="Our Happy Clients" />
          <p className="clients-subtitle">
            Real people. Real bank financing. Real results.
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
