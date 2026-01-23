import React from 'react';

export default function Pagination({ currentPage, totalPages, onChange }) {
  return (
    <nav className="mt-4 d-flex justify-content-center">
      <ul className="pagination">

        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onChange(currentPage - 1)}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="visually-hidden">Anterior</span>
          </button>
        </li>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => onChange(page)}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onChange(currentPage + 1)}
          >
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
}
