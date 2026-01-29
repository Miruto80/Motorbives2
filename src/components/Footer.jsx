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
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons">
             <a href="https://www.facebook.com" className='social-link' target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" className='social-link' target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.twitter.com" className='social-link' target="_blank"  aria-label="Tiktok">
            <i className="fab fa-tiktok" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/16824804614" className='social-link' target="_blank" aria-label="WhatsApp">
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
