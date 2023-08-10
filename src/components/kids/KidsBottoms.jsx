import React, {useState, useEffect} from 'react'
import ProductsCard from '../main-page/products/ProductsCard';
import axios from '../../axios';

function KidsBottoms() {
  const [kidsBottoms, setKidsBottoms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("kids/bottoms");
      setKidsBottoms(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {kidsBottoms.map((product) => (
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

export default KidsBottoms