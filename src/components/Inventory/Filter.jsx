import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Filter.css';
import Collapse from 'bootstrap/js/dist/collapse';
import { useLanguage } from '../../context/useLanguage.js'; 

export default function Filter({ cars = [], onFilterChange = () => {}, currentFilters = {} }) {
  const { language } = useLanguage(); 

  const texts = {
    en: {
      categories: 'Categories',
      allTypesMakes: 'All types / makes',
      all: 'All',
    },
    es: {
      categories: 'Categorías',
      allTypesMakes: 'Todos los tipos / marcas',
      all: 'Todos los',
    },
  };

  const currentTexts = texts[language] || texts.en; 

  const handleLinkClick = () => {
    const collapseEl = document.getElementById('categoryFilterMobile');
    if (!collapseEl) return;

    // Try to use Bootstrap's Collapse API if available
    try {
      const bsCollapse = (Collapse && Collapse.getInstance) ? Collapse.getInstance(collapseEl) : null;
      if (bsCollapse) {
        bsCollapse.hide();
        return;
      }
      // If no instance, attempt to create one and hide
      if (Collapse) {
        const newInst = new Collapse(collapseEl);
        if (newInst && typeof newInst.hide === 'function') {
          newInst.hide();
          return;
        }
      }
    } catch {
      // fallthrough to manual fallback
    }

    // Fallback: remove the Bootstrap 'show' class and update toggler aria
    collapseEl.classList.remove('show');
    collapseEl.classList.add('collapsing');
    // Ensure any inline height is cleared after the transition-ish delay
    setTimeout(() => {
      collapseEl.classList.remove('collapsing');
      collapseEl.style.height = '';
    }, 300);

    const toggler = document.querySelector('[data-bs-target="#categoryFilterMobile"]');
    if (toggler) toggler.setAttribute('aria-expanded', 'false');
  };
  // Build category -> makes map from cars data
  const typeMap = cars.reduce((acc, car) => {
    const t = car.type || 'Other';
    if (!acc[t]) acc[t] = new Set();
    if (car.make) acc[t].add(car.make);
    return acc;
  }, {});

  const categories = Object.keys(typeMap).map((t) => ({
    name: t,
    id: t.toLowerCase().replace(/\s+/g, '-'),
    makes: Array.from(typeMap[t]).sort(),
  }));

  const handleSelect = (type, make) => {
    onFilterChange({ type, make });
    // close mobile panel if open
    handleLinkClick();
  };

  const clearFilters = () => {
    onFilterChange(null);
    handleLinkClick();
  };

  return (
    <>
      <button
        className="btn btn-naranja position-fixed bottom-0 start-0 m-3 d-lg-none z-999"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#categoryFilterMobile"
        aria-expanded="false"
        aria-controls="categoryFilterMobile"
      >
        ☰ {currentTexts.categories}
      </button>

      <div className="collapse d-lg-none" id="categoryFilterMobile">
        <div className="card shadow-lg mobile-filter-panel">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>{currentTexts.categories}</span>
            <button
              className="btn btn-sm btn-outline-secondary z-3"
              type="button"
              onClick={handleLinkClick}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="card-body p-0">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <button className="btn btn-link p-0" onClick={clearFilters}>{currentTexts.allTypesMakes}</button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id} className="list-group-item">
                  <details>
                    <summary className="mb-2">{cat.name}</summary>
                    <div className="mb-2">
                      <button
                        className={`btn btn-link p-0 ${currentFilters.type === cat.name && !currentFilters.make ? 'text-primary fw-bold filter-selected' : ''}`}
                        onClick={() => handleSelect(cat.name, null)}
                      >
                        {currentTexts.all} {cat.name}
                      </button>
                    </div>
                    <ul className="ps-3">
                      {cat.makes.map((mk) => (
                        <li key={mk}>
                          <button className={`btn btn-link p-0 ${currentFilters.type === cat.name && currentFilters.make === mk ? 'text-primary fw-bold filter-selected' : ''}`} onClick={() => handleSelect(cat.name, mk)}>{mk}</button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="d-none d-lg-flex align-items-start position-sticky" style={{ top: '80px', height: 'calc(100vh - 100px)' }}>
        <aside className="w-100">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <button className="btn btn-link p-0" onClick={clearFilters}>{currentTexts.allTypesMakes}</button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id} className="list-group-item">
                    <details>
                      <summary className="mb-2">{cat.name}</summary>
                      <div className="mb-2">
                        <button
                          className={`btn btn-link p-0 ${currentFilters.type === cat.name && !currentFilters.make ? 'text-primary fw-bold filter-selected' : ''}`}
                          onClick={() => handleSelect(cat.name, null)}
                        >
                          {currentTexts.all} {cat.name}
                        </button>
                      </div>
                      <ul className="ps-3 mb-0">
                        {cat.makes.map((mk) => (
                          <li key={mk}>
                            <button
                              className={`btn btn-link p-0 ${currentFilters.type === cat.name && currentFilters.make === mk ? 'text-primary fw-bold filter-selected' : ''}`}
                              onClick={() => handleSelect(cat.name, mk)}
                            >
                              {mk}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}