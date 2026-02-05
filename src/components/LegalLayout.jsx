// components/LegalLayout.jsx
import React from "react";
import '../assets/css/Legal.css'

export default function LegalLayout({ title, children }) {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </section>
  );
}
