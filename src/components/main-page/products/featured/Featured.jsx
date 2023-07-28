import React from "react";
import ProductsCard from "../ProductsCard";
import "./featured.css";
import featuredDictionary from "./featuredDictionary";

function Featured() {
  return (
    <div className="horizCentre">
      
      <div className="products-header">
        <h1>Products Overview</h1>
        <h2>Featured Items</h2>
        <div className="all-featured-cards">
          {featuredDictionary.map((item) => (
            <ProductsCard
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
   
  );
}

export default Featured;
