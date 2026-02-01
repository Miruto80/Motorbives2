import React from 'react';
import '../assets/css/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center">

          {/* TEXT */}
          <div className="col-lg-6 text-white">
            <h1 className="hero-title">
              Drive Today <br />
              <span>Bank Financing Made Simple</span>
            </h1>

            <p className="hero-subtitle">
              Quality used vehicles in Texas.  
              Financing available through trusted partner banks.
            </p>

            <div className="hero-buttons">
              <a href="/inventory" className="btn btn-i btn-lg me-3">
                View Inventory
              </a>

              <a href="/preapproval" className="btn btn-outline-light btn-lg">
                Get Pre-Approved
              </a>
            </div>
          </div>

          {/* DEALER INFO CARD */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-end">
            <div className="hero-card dealer-info">
              <h5>Dealer Highlights</h5>

              <ul className="dealer-list">
                <li>
                  <span className="dealer-title">BANK FINANCING</span>
                  <span className="dealer-text">Multiple partner banks available</span>
                </li>

                <li>
                  <span className="dealer-title">ALL CREDIT TYPES</span>
                  <span className="dealer-text">Approval based on bank decision</span>
                </li>

                <li>
                  <span className="dealer-title">NO IN-HOUSE FINANCING</span>
                  <span className="dealer-text">100% transparent bank process</span>
                </li>

                <li>
                  <span className="dealer-title">QUALITY INVENTORY</span>
                  <span className="dealer-text">Cars, trucks & box trucks</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
