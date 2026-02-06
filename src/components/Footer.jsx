import React from 'react'
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="footer-logo">MotorVibes</h5>
            <p className="mb-0 footer-tagline">Find your next vehicle with style.</p>

            <a href="tel:+16822406838" className="footer-phone">
    <i className="fas fa-phone-alt"></i>
    (682) 240-6838
  </a>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons">
             <a href="https://www.facebook.com/profile.php?id=61572580624185" className='social-link' target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/motorvibesllc/" className='social-link' target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.tiktok.com/@motorvibesllc?_r=1&_t=ZS-93fv0rHk8xU" className='social-link' target="_blank"  aria-label="Tiktok">
            <i className="fab fa-tiktok" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/16822406838" className='social-link' target="_blank" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
            </div>
            <small className="d-block mt-3 text-white">© {new Date().getFullYear()} MotorVibes LLC</small>
          </div>
        </div>
      </div>
      {/* LEGAL BAR */}
      <div className="footer-legal">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <small>
            MotorVibes LLC — All rights reserved.
          </small>

          <div className="legal-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
