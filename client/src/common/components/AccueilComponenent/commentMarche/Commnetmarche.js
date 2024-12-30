import React from 'react'
import './Commnetmarche.css';


const Commnetmarche = () => {
  return (
    <div className="how-it-works-container">
      <span className='title'>Comment ça marche ?</span>
      <div className="steps-container">
        <div className="steps-column">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-text">
              <h3>Étape 1</h3>
              <p>Créez un compte</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-text">
              <h3>Étape 3</h3>
              <p>Choisissez un prestataire</p>
            </div>
          </div>
        </div>

        <div className="steps-divider"></div>
        
        <div className="steps-column">
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-text">
              <h3>Étape 2</h3>
              <p>Postez votre demande</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-text">
              <h3>Étape 4</h3>
              <p>Suivez l'avancement et validez</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commnetmarche