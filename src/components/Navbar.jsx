import React from 'react';
import '../assets/css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Timer from './Timer';

export default function Navbar() {
  const navigate = useNavigate();

  function handleMobileLink(e, path) {
    if (e && e.preventDefault) e.preventDefault();
    const offcanvasEl = document.getElementById('mobileMenu');
    // Primary: use Bootstrap Offcanvas API when available
    if (window.bootstrap && offcanvasEl) {
      try {
        const bsOff =
          window.bootstrap.Offcanvas.getInstance(offcanvasEl) ||
          new window.bootstrap.Offcanvas(offcanvasEl);
        bsOff.hide();
        setTimeout(() => navigate(path), 220);
        return;
      } catch (err) {
        // fallthrough to other methods
      }
    }

    // Fallback 1: trigger an element with data-bs-dismiss inside the offcanvas
    if (offcanvasEl) {
      const dismissBtn = offcanvasEl.querySelector('[data-bs-dismiss="offcanvas"]');
      if (dismissBtn) {
        dismissBtn.click();
        setTimeout(() => navigate(path), 220);
        return;
      }

      // Fallback 2: remove classes/backdrop manually (best effort)
      offcanvasEl.classList.remove('show');
      document.querySelectorAll('.offcanvas-backdrop').forEach((n) => n.remove());
      document.body.classList.remove('offcanvas-open');
      document.body.style.removeProperty('overflow');
      setTimeout(() => navigate(path), 60);
      return;
    }

    // Last resort: just navigate
    navigate(path);
  }

  return (
    <header>
    <nav className="navbar navbar-dark custom-navbar">
      <div className="container-fluid">

        {/* Timer */}
        <div className="nav-timer">
          <Timer />
        </div>

        {/* Logo centrado */}
        <div className="logo-center">
          <Link className="navbar-brand" to="/">
            <img src="/img/Logo.png" alt="Logo" height="130" />
          </Link>
        </div>

        {/* LINKS DESKTOP */}
        <ul className="navbar-nav flex-row align-items-center gap-3 d-none d-lg-flex ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Preapproval">Pre-approval</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Inventory">Inventory</Link>
          </li>

          <li className="nav-item">
            <select className="language-select">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </li>
        </ul>

        {/* HAMBURGUESA MOBILE */}
        <button
          className="navbar-toggler d-lg-none ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* OFFCANVAS SOLO MOBILE */}
        <div
          className="offcanvas offcanvas-end text-bg-dark d-lg-none offcanvas-custom"
          id="mobileMenu"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => handleMobileLink(e, '/')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Preapproval"
                  onClick={(e) => handleMobileLink(e, '/Preapproval')}
                >
                  Pre-approval
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Inventory"
                  onClick={(e) => handleMobileLink(e, '/Inventory')}
                >
                  Inventory
                </Link>
              </li>

              <li className="nav-item mt-3">
                <select className="language-select w-100">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    </header>
  );
}
