import React, {useState, useEffect} from 'react'
import ProductsCard from '../main-page/products/ProductsCard';
import axios from '../../axios';

function MenBottoms() {
  const [menBottoms, setMenBottoms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("men/bottoms");
      setMenBottoms(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {menBottoms.map((product) => (
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

export default MenBottoms