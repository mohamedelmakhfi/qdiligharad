// SkillsComponent.jsx
import React from "react";
import "./SkillsComponent.css";
import imageUrl from "../../../../asset/images/womanSection.png";

const skillsData = {
  title: "About Our Company",
  icon: 'fa-building',
  sections: [
    {
      heading: "Our Mission",
      items: [
        "Deliver quality products",
        "Innovate continuously",
        "Focus on customer satisfaction",
        "Maintain high ethical standards",
      ],
    },
    {
      heading: "Our Values",
      items: [
        "Deliver quality products",
        "Innovate continuously",
        "Focus on customer satisfaction",
        "Maintain high ethical standards",
      ],
    },
    {
      heading: "Our Vision",
      items: [
        "Lead in innovation",
        "Expand globally",
        "Empower communities",
        "Promote sustainability",
      ],
    },
  ],
};

const SkillsComponent = () => {
  return (
    <div className="skills_section">
      <div className="skills-container">
        <div className="skills">
          <div className="skills-content">
          <h2><i className={`fas ${skillsData.icon}`}></i> -  {skillsData.title}</h2>
          {skillsData.sections.map((section, index) => (
              <div key={index} className={`skills-box ${index === 2 ? 'highlight' : ''}`}>
                <h3>{section.heading}</h3>
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="skills-image">
            <img src={imageUrl} alt="Companyy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
