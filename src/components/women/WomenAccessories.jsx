import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function WomenAccessories() {
  const [womenAccessories, setWomenAccessories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("women/accessories");
      setWomenAccessories(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {womenAccessories.map((product) => (
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

export default WomenAccessories