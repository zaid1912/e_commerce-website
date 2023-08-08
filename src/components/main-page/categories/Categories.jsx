import React from "react";
import categories from "./catagoryDictionary";
import CategoryCard from "./CategoryCard";
import "./categories.css";

function Categories() {
  return (
    <div id="categories" className="centered">
      <div className="center-text">
        <h2 className="shop-heading">Shop Now</h2>
      </div>
      <div className="all-cards">
        {categories.map((catagory) => (
          <CategoryCard
            key={catagory.id}
            imgUrl={catagory.imageUrl}
            heading={catagory.heading}
            desc={catagory.desc}
            gotoUrl={catagory.gotoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
