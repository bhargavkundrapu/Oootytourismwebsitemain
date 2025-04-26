import Enquiryform from "../Enquiryform";
import { Component } from "react";
import { SiWhatsapp } from "react-icons/si";
import "./index.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Homesection =()=>{
    

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
     
        <div className="homepage" id="homesection" >
          <div className="homesection-enquiryform">
            <Enquiryform />
            </div>
            <div className="homesection">
                <h1 className="home-heading"> <span className="W-home-heading">W</span>elcome to Ooty <br className="heading-breaking"/><span className="home-headingsuffix">-The Queen of Hill Stations </span></h1>
                <p className="home-paragraph">
                                         <span className="home-subheading">Discover the Magic of Ooty</span><br/><br/>
                            Breathe in the cool mountain air, walk through misty tea gardens, and <br/>
                            let the charmof Ooty steal your heart. Stays in the hills, Ooty is a perfect blend of <br/>
                              adventure and peace.Whether you're seeking nature, romance, or family fun<br/><br/>
                               <span className="home-endingheading">— it's all here waiting for you.   </span> 
                                    
                             
                </p>
                <a href="https://wa.me/916369663534" target="_blank" rel="noopener noreferrer" className="whatsapp-icon-container"><SiWhatsapp className="whatsapp-icon" /></a>
                
            </div>
        </div>
       

        )
    }

export default Homesection;