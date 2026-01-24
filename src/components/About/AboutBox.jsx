import React from 'react';

export default function AboutBox({
  title,
  content,
  bgColor = '#111',
  textColor = '#fff',
}) {
  return (
    <div
      className="about-box h-100 p-4 rounded-4"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
      }}
    >
      <h3 className="fw-bold mb-3">{title}</h3>

      <p style={{ lineHeight: '1.7', whiteSpace: 'pre-line' }}>
        {content}
      </p>
    </div>
  );
}
