import React from 'react';
import './Services.css';

function SecServices({ title, items, images, imagePosition }) {
  return (
    <div className={`section ${imagePosition}`}>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        <ul className="section-items">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="section-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="section-image" />
        ))}
      </div>
    </div>
  );
}

export default SecServices;
