import React, { useState, useEffect } from "react";
import ProductsCard from "../ProductsCard";
import "./featured.css";
import featuredDictionary from "./featuredDictionary";
import axios from '../../../../axios';
// import ProductsCard from "../ProductsCard";

function Featured() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/");
      setFeaturedProducts(req.data);
      console.log(req.data);
    }
    fetchData();
  }, []);
  return (
    <div className="horizCentre">
      <div className="products-header">
        <h1>Products Overview</h1>
        <h2>Featured Items</h2>
        {/* <div className="all-featured-cards">
          {featuredDictionary.map((item) => (
            <ProductsCard
              key={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              prod_id = {item.id}
            />
          ))}
        </div> */}
        <div className="all-featured-cards">
          {featuredProducts.map((product) => (
            <ProductsCard
              key={product.product_id}
              prod_id={product.product_id}
              imgUrl={product.image_url}
              name={product.product_name}
              price={product.price}
              desc = {product.product_description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
