import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function KidsAccessories() {
  const [kidsAccessories, setKidsAccessories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("kids/accessories");
      setKidsAccessories(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {kidsAccessories.map((product) => (
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

export default KidsAccessories