import React, { useEffect, useState } from "react";
import axios from "../../axios";
import ProductsCard from "../main-page/products/ProductsCard";

function WomenTops() {
  const [womenTops, setWomenTops] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("women/tops");
      setWomenTops(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {womenTops.map((product) => (
        <ProductsCard
          key={product.product_id}
          imgUrl={product.image_url}
          name={product.product_name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default WomenTops;
