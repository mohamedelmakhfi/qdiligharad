import React from 'react';
import './AdSection.css';
import logo1 from "../../../../asset/images/logo1.png"
import logo2 from "../../../../asset/images/logo2.png"
import logo3 from "../../../../asset/images/logo3.png"
import logo4 from "../../../../asset/images/logo4.png"
import logo5 from "../../../../asset/images/logo5.png"
import logo6 from "../../../../asset/images/logo6.png"
import logo7 from "../../../../asset/images/logo7.png"
import logo8 from "../../../../asset/images/logo8.png"
import logo9 from "../../../../asset/images/logo9.png"
import logo10 from "../../../../asset/images/logo10.png"

const AdSection = () => {
  return (
    <div className="ad-section">
      <h2 className="ad-title">Adsence!</h2>
      <div className="slider">
        <div className="slider-track">
          <div className="slide"><img src={logo1} alt="EuroPak" /></div>
          <div className="slide"><img src={logo2} alt="Go2Group" /></div>
          <div className="slide"><img src={logo3} alt="Cisco" /></div>
          <div className="slide"><img src={logo4} alt="Future Surgeons" /></div>
          <div className="slide"><img src={logo5} alt="Heptagon" /></div>
          <div className="slide"><img src={logo6} alt="Build It Green" /></div>
          <div className="slide"><img src={logo7} alt="IDT" /></div>
          <div className="slide"><img src={logo8} alt="PAN CAL" /></div>
          <div className="slide"><img src={logo9} alt="The Mentoring Club" /></div>
          <div className="slide"><img src={logo10} alt="Round Fusion" /></div>
          {/* Repeat the images for a seamless loop effect */}
          <div className="slide"><img src={logo1} alt="EuroPak" /></div>
          <div className="slide"><img src={logo2} alt="Go2Group" /></div>
          <div className="slide"><img src={logo3} alt="Cisco" /></div>
          <div className="slide"><img src={logo4} alt="Future Surgeons" /></div>
          <div className="slide"><img src={logo5} alt="Heptagon" /></div>
          <div className="slide"><img src={logo6} alt="Build It Green" /></div>
          <div className="slide"><img src={logo7} alt="IDT" /></div>
          <div className="slide"><img src={logo8} alt="PAN CAL" /></div>
          <div className="slide"><img src={logo9} alt="The Mentoring Club" /></div>
          <div className="slide"><img src={logo10} alt="Round Fusion" /></div>
        </div>
      </div>
    </div>
  )
}


export default AdSection;
