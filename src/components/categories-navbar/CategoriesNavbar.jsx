import "./CategoriesNavbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function CategoriesNavbar() {
  return (
    <div className="centered-nav">
      <div className="categories-navbar">
        <NavLink to="tops" activeClassName="active-link">
          Tops
        </NavLink>
        <NavLink to="bottoms" activeClassName="active-link">
          Bottoms
        </NavLink>
        <NavLink to="jackets" activeClassName="active-link">
          Jackets
        </NavLink>
        <NavLink to="shoes" activeClassName="active-link">
          Shoes
        </NavLink>
      </div>
    </div>
  );
}

export default CategoriesNavbar;
