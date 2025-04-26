
import "./index.css";
import ootypackage from "../../assets/ootypackage.png";
import pyakarPackage from "../../assets/pyakarpackage.jpeg";
import madumalaipackage from "../../assets/madumalaipackage.jpeg";
import avalanchepackage from "../../assets/avalanchepackage.jpeg";
import coonoorpackage from "../../assets/coonoorpackage.jpeg";
import govtmuseum from "../../assets/govtmuseumpackage.jpeg";
import ootytomysorepackage from "../../assets/ootytomysorepackage.jpeg";
import ootytobangalorepackage from "../../assets/ootytobangalorepackage.jpeg";
import coimbatoortoootypackage from "../../assets/coimbatoortoootypackage.jpeg";
import {Link } from "react-router-dom"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";


const PackagesSection = () => {
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
    return(
            <div className="packagedetailsection" id="packagessection" >
                <h1 className="heading-packages">Unforgettable Ooty Trip Packages at Best Prices!</h1>
                <hr className="horigantal-line"/>
                <div className="packages-container">
                    <div className="packages-card">
                       
                        <img className="package-image" alt ="packages" src={ootypackage}/>
                       
                        <div className="package-details">
                            <h1 className="package-name"> Ooty Site Seeing</h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price">₹1,800/-</p>
                                <div className="package-explore-container">
                                    <Link to="/ootypackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="packages-card">
                        <img className="package-image" alt ="packages" src={pyakarPackage} />
                        <div className="package-details">
                            <h1 className="package-name">Pyakar Site Seeing </h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price">₹2,200/- </p>
                                <div className="package-explore-container">
                                <Link to="/pyakarpackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="packages-card">
                        <img className="package-image" alt ="packages" src={coonoorpackage}/>
                        <div className="package-details">
                            <h1 className="package-name"> Coonoor Site Seeing</h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price"> ₹2,500/-</p>
                                <div className="package-explore-container">
                                <Link to="/coonoorpackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="packages-card">
                        <img className="package-image" alt ="packages" src={avalanchepackage}/>
                        <div className="package-details">
                            <h1 className="package-name"> Avalanche Site Seeing</h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price"> ₹5,999/-</p>
                                <div className="package-explore-container">
                                <Link to="/avalanchepackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="packages-card">
                        <img className="package-image" alt ="packages" src={madumalaipackage}/>
                        <div className="package-details">
                            <h1 className="package-name"> Mudhumalai Site Seeing</h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price"> ₹5,999/-</p>
                                <div className="package-explore-container">
                                <Link to="/madumalaipackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="packages-card">
                        <img className="package-image" alt ="packages" src={govtmuseum} />
                        <div className="package-details">
                            <h1 className="package-name"> Government Museum</h1>  
                            <p className="package-description">Taxi | Inova | Sedan</p>
                            <div className="package-price-explore">
                                <p className="package-price"> ₹5,999/-</p>
                                <div className="package-explore-container">
                                <Link to="/govtmuseumpackage" className="package-explore">Explore now</Link>
                                    <FaArrowRight className="arrow-icon"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}
export default PackagesSection;