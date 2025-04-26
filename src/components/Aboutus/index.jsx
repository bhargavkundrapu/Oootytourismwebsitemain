
import './index.css';

import  EmblaCarousel from '../EmblaCarousel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OPTIONS = { dragFree: true, loop: true }

const Aboutus = () => {
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

  return (
    <div className="about-container" id="aboutussection">
        <h1 className="aboutus-heading">About Us</h1>
        <hr className="horigantal-line-aboutus"/>
      <div className="about-content">
        <div className="image-container">
          <EmblaCarousel  options={OPTIONS} /> 
        </div>
        <div className="text-container">
          <h2>Welcome to Thala Cabs</h2>
          <p>
            Thala Cabs is Ooty's premier taxi service, dedicated to providing comfortable, reliable, and affordable transportation across the beautiful Nilgiri Hills. With over 15 years of experience, our knowledgeable drivers ensure you experience the true beauty of Ooty while traveling in safety and comfort.
          </p>
          <p>
            Whether you're a tourist exploring the Queen of Hill Stations or a local resident in need of transportation, Thala Cabs offers a range of vehicles to meet your needs - from compact cars to luxury SUVs and tempo travelers for group tours.
          </p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="32" height="28" rx="3" fill="#3498db" opacity="0.2" />
              <path d="M12 10C12 8.89543 12.8954 8 14 8H26C27.1046 8 28 8.89543 28 10V22C28 23.1046 27.1046 24 26 24H14C12.8954 24 12 23.1046 12 22V10Z" fill="#3498db" />
              <path d="M17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11C15.6569 11 17 12.3431 17 14Z" fill="#ffffff" />
              <path d="M23 30H8V32H32V30H23Z" fill="#3498db" />
              <path d="M20 16L24 22H16L20 16Z" fill="#ffffff" />
            </svg>
          </div>
          <h3>Explore Destinations</h3>
          <p>Visit all popular attractions around Ooty with our guided tours and knowledgeable drivers.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="14" fill="#3498db" opacity="0.2" />
              <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20Z" fill="#3498db" />
              <path d="M20 16V24M18 18H22M17 22H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 14L28 10L32 6" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 26L12 30L8 34" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Affordable Pricing</h3>
          <p>Transparent pricing with no hidden charges. Best rates guaranteed for all your travel needs.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="28" height="24" rx="2" fill="#3498db" opacity="0.2" />
              <path d="M12 8H28V32H12V8Z" fill="#3498db" />
              <path d="M12 14H28M12 20H28M12 26H28" stroke="white" strokeWidth="2" />
              <path d="M18 8V32M24 8V32" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <h3>Accommodation Support</h3>
          <p>Get recommendations and bookings for hotels and homestays through our network of partners.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="14" fill="#3498db" opacity="0.2" />
              <path d="M8 22H32V26C32 27.1046 31.1046 28 30 28H10C8.89543 28 8 27.1046 8 26V22Z" fill="#3498db" />
              <path d="M10 16L13 12H27L30 16V22H10V16Z" fill="#3498db" />
              <circle cx="13" cy="25" r="2" fill="#2c3e50" />
              <circle cx="27" cy="25" r="2" fill="#2c3e50" />
              <path d="M15 16H25V20H15V16Z" fill="white" />
            </svg>
          </div>
          <h3>Transportation Options</h3>
          <p>Choose from our fleet of well-maintained vehicles suited for different group sizes and terrains.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;