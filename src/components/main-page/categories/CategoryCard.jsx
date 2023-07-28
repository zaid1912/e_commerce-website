import React from "react";
import categories from "./catagoryDictionary";
import './card.css';


function CategoryCard(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="image" className="card-img" />
      <div className="card-content">
        <h3 className="card-heading">{props.heading}</h3>
        <p className="card-description">{props.desc}</p>
      </div>
      <a href={props.gotoUrl} className="card-link">
        Shop Now
      </a>
    </div>
  );
}

export default CategoryCard;
