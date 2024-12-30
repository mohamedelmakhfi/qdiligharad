import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: 'fa-lightbulb',
    title: 'Skills to decorate your home',
    description: 'Level up your skills with step-by-step guidance on projects to achieve learnings you’re proud of.'
  },
  {
    icon: 'fa-calendar-alt',
    title: 'Flexible curriculum',
    description: 'We break down the class into manageable activities to do at your own pace.'
  },
  {
    icon: 'fa-comments',
    title: 'Feedback & discussions',
    description: 'Access a community of peers to get feedback and be inspired.'
  },
  {
    icon: 'fa-signal',
    title: 'All levels',
    description: 'This session is approachable for beginners and has advanced techniques for the more experienced.'
  }
];

const Features = () => {
  return (
    <div className="features-container">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-card">
          <i className={`fas ${feature.icon} feature-icon`}></i>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
