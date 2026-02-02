import React, { useState, useMemo } from 'react';
import Cards from '../components/Inventory/Cards.jsx';
import Filter from '../components/Inventory/Filter.jsx';
import Pagination from '../components/Inventory/Pagination.jsx';
import cars from '../assets/data/cars.js';
import SEO from '../components/SEO.jsx';

const ITEMS_PER_PAGE = 12;

export default function Inventory() {
  const [filters, setFilters] = useState({ type: null, make: null });
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrado
  const filteredCars = useMemo(() => {
    return cars.filter((c) => {
      if (filters.type && c.type !== filters.type) return false;
      if (filters.make && c.make !== filters.make) return false;
      return true;
    });
  }, [filters]);

  // Reset página cuando cambia el filtro
  const handleFilterChange = (newFilters) => {
    setCurrentPage(1);
    if (!newFilters) return setFilters({ type: null, make: null });
    setFilters(newFilters);
  };

  // Paginación
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  const paginatedCars = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredCars.slice(start, end);
  }, [filteredCars, currentPage]);

  return (
    <div className="row g-4">
      <SEO 
        title="Inventory" 
        description="Browse our extensive inventory of new and used cars at Motorvibes. Find your perfect vehicle with easy filters and financing options." 
        url="https://www.motorvibesllc.com/inventory"
        image="/img/logo.webp"
      />
      {/* Sidebar */}
      <div className="col-lg-3 d-lg-block">
        <Filter
          cars={cars}
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />
      </div>

      {/* Cards + Pagination */}
     <div className="col-lg-9">

  {totalPages > 1 && (
    <div className="d-flex justify-content-end mb-2 me-3">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  )}

  <Cards cars={paginatedCars} />

  {totalPages > 1 && (
    <div className="d-flex justify-content-end mt-2 me-3">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  )}

</div>

    </div>
  );
}
