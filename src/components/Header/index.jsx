import "./index.css";
import {Link} from "react-router-dom";
import BurgerButton from "../BurgerButton";

const Header = () => {
    return(
        <>
            <div id="navbarsection" className="navbar-container">
                <div>
                    <Link to="/">
                        
                        <img className="logo-image" alt="logo" src="https://res.cloudinary.com/da2wrgabu/image/upload/v1743838168/uciy5la4s03muc4p9ezl.png"/>
                        
                    </Link>
                </div>
                <div className="burggerbutton-container">
                  <BurgerButton />
                </div>
                <ul className="nav-links">
                    <li >
                        
                    <Link to="/?scroll=homesection" className="list-item">  
                     
                      Home
                    </Link>
                   
                    </li>
                    <li >
                    <Link to="/?scroll=aboutussection" className="list-item">
                       About us 
                       </Link>   
                    </li>
                    
                    <li >
                    <Link to="/?scroll=packagessection" className="list-item">
                        Packages 
                        </Link>
                    </li>
                    <li >
                    <Link to="/?scroll=activitiessection" className="list-item">
                         Activities
                    </Link>
                    </li>
                    <li > 
                    <Link to="/pickupdrop" className="list-item">                        
                            PickUp/Drop
                   </Link>
                    </li>
                    <li >
                        <Link to="/contact" className="list-item"> 
                               Contact us
                        </Link>
                    </li>
                </ul>
                
            </div>
            
        </>        
    )
}
export default Header; 