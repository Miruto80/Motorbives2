import React from 'react';
import Cards from '../components/Inventory/Cards.jsx';
import Filter from '../components/Inventory/Filter.jsx';
import cars from '../assets/data/cars.js';

export default function Inventory() {
  return (
    <div className="row g-4">
      {/* Sidebar */}
      <div className="col-lg-3 d-none d-lg-block">
        <Filter />
      </div>

      {/* Cards */}
      <div className="col-lg-9">
        <Cards cars={cars} />
      </div>
    </div>
  );
}
