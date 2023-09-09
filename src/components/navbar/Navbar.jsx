import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CartContext from "../context/CartContext";
import FavContext from "../context/FavouriteContext";
import { useContext } from "react";


import "./navbar.css";
import { NavLink } from "react-router-dom";

import About from "../about/About";

function Navbar() {
  const {cartItems} = useContext(CartContext);
  const {favItems} = useContext(FavContext);
  
  return (
    <div className="nav">
      <div className="heading">
        TRENDY <span>THREADS</span>
      </div>
      <div className="nav-list">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Shop</NavLink>

        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
      </div>
      <div className="right-nav">
      <NavLink to = "cart">
        <IconButton>
          <Badge
            badgeContent={cartItems.length}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </NavLink>
        <IconButton>
          <Badge
            badgeContent={favItems.length}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <FavoriteIcon className="favourites" />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
