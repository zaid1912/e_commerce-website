import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import './navbar.css';
import { NavLink } from "react-router-dom";
import About from '../about/About';

function Navbar() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (

    <div className="nav">
      <div className="heading">
        TRENDY <span>THREADS</span>
      </div>
      <div className="nav-list">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>Shop</NavLink>
       
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
      </div>
      <div className="right-nav">
        <IconButton>
          <ShoppingCartIcon className="shopping-cart" />
        </IconButton>
        <IconButton>
          <FavoriteIcon className="favourites"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
