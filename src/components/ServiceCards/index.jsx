import React from 'react';
import './index.css';
import card1 from '../../assets/ootytomysorepackage.jpeg';
import card2 from '../../assets/servicecard2.jpeg';
import card3 from '../../assets/servicecard3.jpeg';
import card4 from '../../assets/servicecard3.jpg';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Ooty Cab Services",
      description: "Pickup drop services from various cities.",
      image: card1
    },
    {
      id: 2,
      title: "Ooty tour Packages",
      description: "Offering various types of honeymoon tour packages",
      image: card2
    },
    {
      id: 3,
      title: "Ooty sightseeing",
      description: "Taxi for local sightseeing",
      image: card3
    },
    {
      id: 4,
      title: "Food and Accommodation",
      description: "We offer both food and accommodation in our package.",
      image: card4
    }
  ];

  return (
    <div className="services-section">
      <h1 className="section-heading">We can help you with</h1>
      <div className="services-container">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="image-circle">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;