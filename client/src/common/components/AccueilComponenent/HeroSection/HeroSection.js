import React from "react";
import "../HeroSection/HeroSection.css";
import mountainImage from "../../../../asset/images/montain.png";
import womanpic from "../../../../asset/images/womanpic.png";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="containerr">
        <div className="sections">
          <div className="left-section">
            <img
              src={mountainImage}
              alt="Mountain"
              className="mountain-image"
            />
            <h1>{t("Simplify your remote procedures and services.")}</h1>
            <p>{t("Que ce soit pour des :")}</p>
            <div className="button-group">
              <button>{t("Administrative procedures")}</button>
              <button>{t("Delivery services")}</button>
              <button>{t("Personal assistance")}</button>
              <button className="learn-more">{t("Learn more")}</button>
            </div>
          </div>
          <div className="right-section">
            <img
              src={womanpic}
              alt="Business Woman"
              className="businesswoman-image"
            />
          </div>
        </div>
        <div className="back-ground-blue-hero"></div>
      </div>
    </>
  );
}

export default HeroSection;
