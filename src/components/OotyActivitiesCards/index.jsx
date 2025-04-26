
import React from 'react';
import './index.css';
import wall from '../../assets/wall.jpg'; 
import camp from '../../assets/camp.jpg';   
import cand from '../../assets/cand.jpg';  
import train from '../../assets/train.jpg';   
import explo from '../../assets/explo.jpg';  
import trib from '../../assets/trib.jpg';
import camping from '../../assets/camping.jpg';
import cycling from '../../assets/cycling.jpg';  
import safa from '../../assets/safa.jpg';
import avala from '../../assets/avala.jpg';
import ebike from '../../assets/ebike.jpg';
import Horse from '../../assets/horse.jpg';
import { FaHorse } from 'react-icons/fa';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OotyActivitiesCards = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scroll');

    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const activities = [
    {
      id: 1,
      location: "Crestvalley",
      title: "Campfire in Ooty",
      description: "Enjoy an evening under the stars with a cozy campfire experience in the hills.",
      oldPrice: 2500,
      price: 1000,
      imageUrl: camp
    },
    {
      id: 2,
      location: "Bengalmattam",
      title: "Outdoor Candle Light Dinner",
      description: "Romantic dinner setup with stunning views of the Nilgiri mountains.",
      oldPrice: 2500,
      price: 5000,
      imageUrl: cand
    },
    {
      id: 3,
      location: "Ooty",
      title: "Ooty Toy Train – The Heritage Train Booking",
      description: "Experience the historic Nilgiri Mountain Railway with breathtaking valley views.",
      oldPrice: 2500,
      price: 250,
      imageUrl: train
    },
    {
      id: 4,
      location: "Ooty",
      title: "Explore Unexplored Places in Ooty",
      description: "Discover hidden gems and secret spots that most tourists never see.",
      oldPrice: 2500,
      price: 800,
      imageUrl: explo
    },
    {
      id: 5,
      location: "Avalanche",
      title: "Toda Tribal Tour",
      description: "Learn about the indigenous Toda culture and their traditional way of life.",
      oldPrice: 2500,
      price: 500,
      imageUrl: trib
    },
    {
      id: 6,
      location: "Crestvalley",
      title: "Camping",
      description: "Overnight camping adventure with tents, bonfires and stargazing activities.",
      price: 2000,
      oldPrice: 2500,
      imageUrl: camping
    },
    {
      id: 7,
      location: "Ooty",
      title: "Cycling Tour",
      description: "Pedal through scenic landscapes and tea plantations at your own pace.",
      oldPrice: 2500,
      price: 800,
      imageUrl: cycling
    },
    {
      id: 8,
      location: "Mudumalai",
      title: "Mudumalai Forest Safari",
      description: "Explore the rich biodiversity of Mudumalai Wildlife Sanctuary in a jeep safari.",
      oldPrice: 2500,
      price: 2000,
      imageUrl: safa
    },
    {
      id: 9,
      location: "Avalanche",
      title: "Avalanche Safari Ride",
      description: "Journey through the pristine Avalanche Lake area with expert local guides.",
      oldPrice: 2500,
      price: 500,
      imageUrl: avala
    },
    {
      id: 10,
      location: "Ooty Bus Stand",
      title: "Electric Bike Tour",
      description: "Eco-friendly way to explore Ooty's attractions with minimum effort.",
      oldPrice: 2500,
      price: 2000,
      imageUrl: ebike
    },
    {
      id: 11,
      location: "Ooty Boat House",
      title: "Horse Ride",
      description: "Classic horse riding experience around the beautiful Ooty Lake area.",
      oldPrice: 2500,
      price: 150,
      imageUrl: Horse 
    },
    {
      id: 12,
      location: "Adventure Park",
      title: "Wall Climbing",
      description: "Test your strength and agility on professionally designed climbing walls.",
      oldPrice: 2500,
      price: 200,
      imageUrl: wall
    }
  ];

  return (
    <div className="activities-container" id="activitiessection">
      <h2 className="section-title">Exciting Activities in Ooty</h2>
      
      <div className="activities-grid">
        {activities.map(activity => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image">
              <img src={activity.imageUrl} alt={activity.title} />
              <div className="price-tag">
                {activity.oldPrice && (
                  <span className="old-price">₹{activity.oldPrice}</span>
                )}
                <span className="current-price">₹{activity.price}</span>
              </div>
            </div>
            
            <div className="card-content">
              <div className="location">{activity.location}</div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OotyActivitiesCards;
