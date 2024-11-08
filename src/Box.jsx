import React from 'react';
import './Box.css';

function Box({ initialColor, hoverColor, width = '100px', height = '100px' }) {
    return (
      <div 
        className="box"
        style={{
          '--initial-color': initialColor,
          '--hover-color': hoverColor,
          '--box-width': width,
          '--box-height': height,
        }}
      >
      </div>
    );
  }

export default Box;