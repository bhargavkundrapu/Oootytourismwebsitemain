import { Component } from "react";
import "./index.css";
import Enquiryform from "../Enquiryform";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

class ContactUs extends Component {
   
    
    render() {
       
        return (
            <div className="contact-page-bg">
                <div className="contact-page-wrapper">
                    <div className="contact-page-title-container">
                        <h1 className="contact-page-title">Contact Us</h1>
                        <p className="contact-page-subtitle">Feel free to reach out for any information about our taxi services</p>
                    </div>
                    
                    <div className="contact-page-content">
                        {/* Left side - Enquiry Form */}
                        <Enquiryform/>
                        
                        {/* Right side - Contact Information */}
                        <div className="contact-info-section">
                            <h2 className="contact-info-heading">Get In Touch</h2>
                            
                            <div className="contact-info-card">
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <FaPhone className="info-icon" />
                                    </div>
                                    <div className="info-content">
                                        <h3>Call Us</h3>
                                        <p>+91 6369663534</p>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <FaEnvelope className="info-icon" />
                                    </div>
                                    <div className="info-content">
                                        <h3>Email Us</h3>
                                        <p>Manojkumar3m3k@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <FaMapMarkerAlt className="info-icon" />
                                    </div>
                                    <div className="info-content">
                                        <h3>Visit Us</h3>
                                        <p>Office Address:
                                            Manoj kumar 
                                            Yellanalli, 
                                            Ooty 
                                            The Nilgiris 
                                            643243
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <FaClock className="info-icon" />
                                    </div>
                                    <div className="info-content">
                                        <h3>Business Hours</h3>
                                        <p>7 days a week</p>
                                        <p> support: 8:00 AM - 10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;