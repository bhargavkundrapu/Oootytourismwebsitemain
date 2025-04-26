import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './index.css';
import thala from '../../assets/thalacabs.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo-container">
            <img 
              src={thala}
              alt="Thala Cabs Logo" 
              className="logo" 
            />
          </div>
          <h2 className="company-name">THALA CABS</h2>
          <p className="company-tagline">OOTY TOURS AND TRAVELS</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" className="social-icon"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" className="social-icon"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" className="social-icon"><FaTwitter /></a>
            <a href="https://wa.me/919876543210" target="_blank" className="social-icon"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="column-title">Contact Us</h3>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+919876543210" target="_blank">+91 98765 43210</a>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <a href="https://wa.me/919876543210" target="_blank">+91 98765 43210</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a target="_blank">Manojkumar3m3k@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <address>Office Address:
                      Manoj kumar 
                      Yellanalli, 
                      Ooty 
                      The Nilgiris 
                      643243
            </address>
          </div>
        </div>
        
        {/* idedo bagundi anipinchindi oka sari chudu*/}
        <div className="footer-column map-column">
          <h3 className="column-title">Find Us</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2811.3203161174265!2d76.744067!3d11.378307999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1743949793742!5m2!1sen!2sin" 
            className="map" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Thala Cabs Location"
          />
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Thala Cabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;