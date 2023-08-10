import React, {useState, useEffect} from 'react'
import ProductsCard from '../main-page/products/ProductsCard';
import axios from '../../axios';

function WomenBottoms() {
  const [womenBottoms, setWomenBottoms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("women/bottoms");
      setWomenBottoms(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {womenBottoms.map((product) => (
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

export default WomenBottoms