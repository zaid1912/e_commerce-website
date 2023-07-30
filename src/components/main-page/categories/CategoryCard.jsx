import React from "react";
import { useNavigate } from "react-router-dom";
import './card.css';
import {NavLink} from 'react-router-dom';

function CategoryCard(props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={props.imgUrl} alt="image" className="card-img" />
      <div className="card-content">
        <h3 className="card-heading">{props.heading}</h3>
        <p className="card-description">{props.desc}</p>
      </div>
      {/* <NavLink to={props.gotoUrl} className="card-link">
        Shop Now
      </NavLink> */}
      <a className="card-link" onClick={() => navigate(props.gotoUrl)}>Shop Now</a>
    </div>
  );
}

export default CategoryCard;
