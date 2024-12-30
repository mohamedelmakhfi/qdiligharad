import React from 'react';
import './HeaderProfile.css';
import profileImage from '../../../asset/images/womanpic.png'; 

const HeaderProfile = () => {
  const date = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="header">
      <div className="greeting">
        <h1>Bonjour, Mohammed</h1>
        <span>{date}</span>
      </div>
      <div className="search-notification">
        <input type="text" placeholder="Search" />
        <div className="notification-icon">
          <span>🔔</span>
        </div>
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
