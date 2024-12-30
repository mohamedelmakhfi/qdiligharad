import React from 'react';
import './StartButtonComponent.css';

const StartButtonComponent = () => {
  return (
    <div className='StartButton'>
    <div className="button-container">
      <h2>Prêt à commencer?</h2>
      <div className="buttons">
        <button className="primary-button">connexion</button>
        <button className="secondary-button">Contact</button>
      </div>
    </div>
    </div>
  );
}

export default StartButtonComponent;
