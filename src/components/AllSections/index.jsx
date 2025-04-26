
import Aboutus from "../Aboutus";
import { Component } from "react";
import Homesection from "../Homesection";
import PackagesSection from "../PackagesSection";
import Ootydescription from "../Ootydescription";   
import OotyActivitiesCards from "../OotyActivitiesCards";
import Thalacabsbanner from "../ThalaCabsBanner";
import ServiceCards from "../ServiceCards";
import "./index.css";

class AllSections extends Component{
    render(){
        return(
            <>  
                <Homesection/>
                <Aboutus/>
                <PackagesSection/>
                <Thalacabsbanner/>
                <OotyActivitiesCards/>
                
                <Ootydescription/>
                <ServiceCards/>
                
                
            </>
        )
    }
}
export default AllSections