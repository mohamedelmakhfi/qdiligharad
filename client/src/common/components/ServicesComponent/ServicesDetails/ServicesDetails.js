import React from 'react';
import SecServices from '../componenetService/secServices';
import admin from '../../../../asset/images/admin1.png';
import delivery from '../../../../asset/images/delivery.png';
import './ServicesDetails.css';
import useStore from '../../../store/useStore';

const ServicesDetails = () => {
  const searchQuery = useStore((state) => state.searchQuery);
  const filter = useStore((state) => state.filter);

  const sections = [
    {
      key: "administrative",
      title: "Demarches Administratives",
      items: [
        "Web Design and App Development",
        "Mobile Apps",
        "UI/UX Design",
        "Logistics",
        "Technology Consulting",
        "Cybersecurity",
        "Technical Support",
        "CRM",
      ],
      images: [admin],
      imagePosition: "right",
    },
    {
      key: "Livraison",
      title: "Services de Livraison",
      items: [
        "Social Media",
        "Campaign Strategy",
        "Campaign Management",
        "Content Strategy",
        "Marketing Automation",
        "Marketing Insights and Analytics",
        "Brand Kit",
      ],
      images: [delivery],
      imagePosition: "left",
    },
    {
      key: "personal-assistance",
      title: "Personal Assistance Services",
      items: [
        "Personal Shopping",
        "Errand Running",
        "Home Organization",
        "Travel Planning",
        "Concierge Services",
        "Pet Care and Sitting",
      ],
      images: [admin],
      imagePosition: "right",
    },
  ];

  const filteredSections = sections.filter(section => {
    const matchesFilter = filter ? section.key === filter : true;
    const matchesSearchQuery = searchQuery 
      ? section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchesFilter && matchesSearchQuery;
  });

  return (
    <div className="servicesContainer">
      <div className="services-details">
        <div className="ServicesDetails">
          {filteredSections.map((section, index) => (
            <div key={index}>
              <SecServices
                title={section.title}
                items={section.items}
                images={section.images}
                imagePosition={section.imagePosition}
              />
              {index < filteredSections.length - 1 && (
                <hr
                  className={`separator ${index % 2 === 0 ? 'blue' : 'yellow'}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
