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
              <span>No Credit? No Problem.</span>
            </h1>

            <p className="hero-subtitle">
              Quality used cars in Texas.  
              In-house financing available. Get approved in minutes.
            </p>

            <div className="hero-buttons">
              <a href="/inventory" className="btn btn-primary btn-lg me-3">
                View Inventory
              </a>

              <a href="/preapproval" className="btn btn-outline-light btn-lg">
                Get Pre-Approved
              </a>
            </div>
          </div>

          {/* IMAGE / CARD */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-end">
            <div className="hero-card">
              <h5>🔥 Special Offers</h5>
              <ul>
                <li>✔ No SSN required</li>
                <li>✔ Low down payments</li>
                <li>✔ Bad credit accepted</li>
                <li>✔ Same-day approval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
