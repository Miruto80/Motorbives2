import React from 'react'
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="footer-logo">MotorVibes</h5>
            <p className="mb-0 footer-tagline">Encuentra tu próximo vehículo con estilo.</p>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <ul className="footer-links list-unstyled mb-0">
              <li><Link className="footer-link" to="/">Inicio</Link></li>
              <li><Link className="footer-link" to="/inventory">Inventario</Link></li>
              <li><Link className="footer-link" to="/moreinfo">Más info</Link></li>
              <li><Link className="footer-link" to="/preapproval">Preaprobación</Link></li>
              <li><Link className="footer-link" to="/contact">Contacto</Link></li>
              <li><Link className="footer-link" to="/terms">Términos</Link></li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-link" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.84 8 9.8v-6.93H7.9V12H10V9.8c0-2.08 1.24-3.22 3.14-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.87H13.6V21.8c4.56-.96 8-4.96 8-9.8z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.5-2.7a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link" title="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.92c-.64.28-1.32.48-2.04.56a3.54 3.54 0 0 0 1.56-1.96 7.08 7.08 0 0 1-2.24.86 3.52 3.52 0 0 0-6 3.2A10 10 0 0 1 3.16 4.6a3.52 3.52 0 0 0 1.09 4.7 3.48 3.48 0 0 1-1.6-.44v.04a3.52 3.52 0 0 0 2.82 3.45 3.6 3.6 0 0 1-1.59.06 3.53 3.53 0 0 0 3.29 2.45A7.06 7.06 0 0 1 2 19.54a9.96 9.96 0 0 0 5.4 1.58c6.48 0 10.02-5.36 10.02-10.01v-.46A7.2 7.2 0 0 0 22 5.92z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <small className="d-block mt-3 text-muted">© {new Date().getFullYear()} MotorVibes LLC</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
