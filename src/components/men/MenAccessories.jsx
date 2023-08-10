import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function MenAccessories() {
  const [menAccessories, setMenAccessories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("men/accessories");
      setMenAccessories(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {menAccessories.map((product) => (
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

export default MenAccessories