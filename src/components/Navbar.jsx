import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import Timer from './Timer';

export default function Navbar() {
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
                <Link className="nav-link" to="/" data-bs-dismiss="offcanvas">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Preapproval" data-bs-dismiss="offcanvas">
                  Pre-approval
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Inventory" data-bs-dismiss="offcanvas">
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
