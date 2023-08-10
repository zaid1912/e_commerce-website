import React, {useState, useEffect} from 'react';
import ProductsCard from '../main-page/products/ProductsCard';
import axios from '../../axios';

function MenJackets() {
  const [menJackets, setMenJackets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("men/jackets");
      setMenJackets(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {menJackets.map((product) => (
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

export default MenJackets