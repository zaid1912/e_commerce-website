import React, { useEffect, useState } from "react";
import axios from "../../axios";
import ProductsCard from "../main-page/products/ProductsCard";

function MenTops() {
  const [menTops, setMenTops] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("men/tops");
      setMenTops(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {menTops.map((product) => (
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

export default MenTops;
