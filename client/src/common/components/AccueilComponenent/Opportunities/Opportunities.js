import React from 'react';
import './Opportunities.css'; 
import womanOpp from '../../../../asset/images/womanOpp.png'; 
import mansOpp from '../../../../asset/images/mansOpp.png'; 

const Opportunities = () => {
  return (
    <div className='Opportunities'>
        <div className="title-container">
        <span className="titlee">Opportunités</span>
      </div>
    <div className="opportunities-container">
      <div className="cards-container">
        <div className="card partenaire">
          <img src={mansOpp} alt="Devenir Partenaire" className="card-image" />
          <div className="card-content">
            <h3>Devenir Partenaire</h3>
            <p>Rejoignez notre réseau, augmentez votre visibilité, et accédez à une clientèle variée pour développer votre activité.</p>
            <button className="btn">Inscription</button>
          </div>
        </div>
        <div className="card agent">
          <img src={womanOpp} alt="Devenir Agent" className="card-image" />
          <div className="card-content">
            <h3>Devenir Agent</h3>
            <p>Offrez vos services à des clients, choisissez vos tâches selon vos compétences, et gagnez un revenu supplémentaire.</p>
            <button className="btn">Inscription</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Opportunities;
