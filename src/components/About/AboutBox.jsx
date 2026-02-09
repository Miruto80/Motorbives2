import React from 'react';

export default function AboutBox({
  title,
  content,
  bgColor = '#111',
  textColor
}) {
  return (
    <div
      className="about-box h-100 p-4 rounded-4"
      style={{
        background: bgColor,
        color: textColor,
        boxShadow: '0 0 10px rgba(255, 221, 0, 0.8), 0 0 30px rgba(255, 221, 0, 0.6)',
      }}
    >
      <div
  style={{
    width: '50px',
    height: '4px',
    backgroundColor: textColor,
    marginBottom: '12px',
    borderRadius: '10px',
    opacity: 0.8,
  }}
/>
      <h3 className="fw-bold mb-3">{title}</h3>

      <p style={{ lineHeight: '1.7', whiteSpace: 'pre-line' }}>
        {content}
      </p>
    </div>
  );
}
