import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import './navbar.css';

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
        <a onClick={() => handleScrollToSection("home")} href="">Home</a>
        <a onClick={() => handleScrollToSection("categories")} href="#categories">Shop</a>
        <a onClick={() => handleScrollToSection("about")} href="">About</a>
        <a onClick={() => handleScrollToSection("contact")} href="">Contact</a>
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
