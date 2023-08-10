import React, { useEffect, useState } from "react";
import axios from "../../axios";
import ProductsCard from "../main-page/products/ProductsCard";

function KidsTops() {
  const [kidsTops, setKidsTops] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("kids/tops");
      setKidsTops(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {kidsTops.map((product) => (
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

export default KidsTops;
