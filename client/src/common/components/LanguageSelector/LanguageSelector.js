import React, { useState } from "react";
import "./LanguageSelector.css";
import i18n from "../../../i18n";

const LanguageSelector = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem("lang", lang);
    setShowLanguageOptions(false);
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="translation-container">
      <button className="translation_btn" onClick={toggleLanguageOptions}>
        <i className="fa-solid fa-globe globe-icon"></i>
      </button>
      {showLanguageOptions && (
        <div className="language-options">
          <div className="language-option" onClick={() => chooseLanguage('en')}>
            En
          </div>
          <div className="language-option" onClick={() => chooseLanguage('fr')}>
            Fr
          </div>
          <div className="language-option" onClick={() => chooseLanguage('ar')}>
            Ar
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
