import React from 'react';
import './CustomCard.css';

function CustomCard({ title, description, extra_description }) {
  return (
    <div className="custom-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{extra_description}</p>
    </div>
  );
}

export default CustomCard;