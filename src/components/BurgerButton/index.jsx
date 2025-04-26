import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/index.css";
import {Link} from "react-router-dom";


import "./index.css";

import { BiColor } from "react-icons/bi";
import { PiX } from "react-icons/pi";

export default function BurgerButton() {
  const [isDark, setDark] = React.useState(true);
  return (
    <div   className="app">
      <Menu
        arrow
        menuButton={<MenuButton className="menu-button"><RxHamburgerMenu  className="burgericon"/></MenuButton>}
        
      >
       <Link className="linksinburger" to="/?scroll=homesection"> <MenuItem>Home</MenuItem></Link>
       <Link className="linksinburger" to="/?scroll=aboutussection"> <MenuItem>About us </MenuItem></Link>
       <Link className="linksinburger" to="/?scroll=packagessection"><MenuItem> Packages </MenuItem></Link>
       <Link className="linksinburger" to="/?scroll=activitiessection" > <MenuItem>Activities </MenuItem></Link>
       <Link className="linksinburger" to="/pickupdrop" ><MenuItem> PickUp/Drop</MenuItem></Link>
       <Link className="linksinburger" to="/contact"> <MenuItem> Contact us</MenuItem></Link>
      </Menu>
     
    </div>
  );
}
