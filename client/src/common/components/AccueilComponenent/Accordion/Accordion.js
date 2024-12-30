import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        <h2>Nos Services !</h2>
        <div className="accordion-item" onClick={() => toggleAccordion(0)}>
          <div className="accordion-title">
            <span>Démarches Administratives</span>
            <span>{activeIndex === 0 ? " " : "+"}</span>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content">
              Nous simplifions vos démarches administratives en prenant en
              charge la demande de documents, la gestion de dossiers et la prise
              de rendez-vous.
            </div>
          )}
        </div>
        <div className="accordion-item" onClick={() => toggleAccordion(1)}>
          <div className="accordion-title">
            <span>Services de Livraison</span>
            <span>{activeIndex === 1 ? " " : "+"}</span>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              Nous simplifions vos démarches administratives en prenant en
              charge la demande de documents, la gestion de dossiers et la prise
              de rendez-vous.
            </div>
          )}
        </div>
        <div className="accordion-item" onClick={() => toggleAccordion(2)}>
          <div className="accordion-title">
            <span>Assistance Personnelle</span>
            <span>{activeIndex === 2 ? " " : "+"}</span>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              Nous simplifions vos démarches administratives en prenant en
              charge la demande de documents, la gestion de dossiers et la prise
              de rendez-vous.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
