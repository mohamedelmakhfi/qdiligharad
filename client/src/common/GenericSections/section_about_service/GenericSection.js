import React from "react";
import "./GenericSection.css";

const GenericSection = ({ backgroundImage, title, text, buttonText, onButtonClick }) => {
  return (
    <div className="generic-section">
      <div
        className="generic-section-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="generic-section-overlay">
          <h1 className="generic-section-title">{title}</h1>
          <p className="generic-section-text">{text}</p>
          <button className="generic-section-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericSection;
