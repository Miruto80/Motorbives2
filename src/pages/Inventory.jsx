import React, { useState, useMemo } from 'react';
import Cards from '../components/Inventory/Cards.jsx';
import Filter from '../components/Inventory/Filter.jsx';
import cars from '../assets/data/cars.js';

export default function Inventory() {
  const [filters, setFilters] = useState({ type: null, make: null });

  const filteredCars = useMemo(() => {
    return cars.filter((c) => {
      if (filters.type && c.type !== filters.type) return false;
      if (filters.make && c.make !== filters.make) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    if (!newFilters) return setFilters({ type: null, make: null });
    setFilters(newFilters);
  };

  return (
    <div className="row g-4">
      {/* Sidebar */}
      <div className="col-lg-3 d-none d-lg-block">
        <Filter cars={cars} onFilterChange={handleFilterChange} currentFilters={filters} />
      </div>

      {/* Cards */}
      <div className="col-lg-9">
        <Cards cars={filteredCars} />
      </div>
    </div>
  );
}
