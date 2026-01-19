import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Filter.css';
import Collapse from 'bootstrap/js/dist/collapse';

const categories = [
  { name: 'Frituras', id: 'frituras' },
  { name: 'Almuerzos', id: 'almuerzos' },
  { name: 'Parrillas', id: 'parrillas' },
  { name: 'Sopas', id: 'sopas' },
  { name: 'Contornos', id: 'contornos' },
  { name: 'Arepas', id: 'arepas' },
  { name: 'Combos', id: 'combos' },
  { name: 'Modernas', id: 'modernas' },
  { name: 'Hamburguesas', id: 'hamburguesas' },
  { name: 'Patacones', id: 'patacones' },
  { name: 'Cachapas', id: 'cachapas' },
];

export default function Filter() {
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

  return (
    <>
      {/* Botón móvil: fijo abajo a la izquierda */}
      <button
        className="btn btn-naranja position-fixed bottom-0 start-0 m-3 d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#categoryFilterMobile"
        aria-expanded="false"
        aria-controls="categoryFilterMobile"
      >
        ☰ Categories
      </button>

      {/* Panel móvil: colapsable y oculto por defecto en móvil; no se muestra en desktop */}
      <div className="collapse d-lg-none" id="categoryFilterMobile">
        <div className="card shadow-lg mobile-filter-panel">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Categories</span>
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
              {categories.map(cat => (
                <li key={cat.id} className="list-group-item">
                  <a href={`#${cat.id}`} className="text-decoration-none d-block py-1" onClick={handleLinkClick}>
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

   <div className="d-none d-lg-flex align-items-center justify-content-center position-sticky" style={{ top: '100px', height: 'calc(100vh - 100px)' }}>
  <aside className="w-100">
    <div className="card">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {categories.map(cat => (
            <li key={cat.id} className="list-group-item">
              <a href={`#${cat.id}`} className="text-decoration-none">
                {cat.name}
              </a>
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