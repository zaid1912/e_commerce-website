import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import './navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="heading">
        TRENDY <span>THREADS</span>
      </div>
      <div className="nav-list">
        <a href="http://">Home</a>
        <a href="">Shop</a>
        <a href="">Blog</a>
        <a href="">About</a>
        <a href="">Contact</a>
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
