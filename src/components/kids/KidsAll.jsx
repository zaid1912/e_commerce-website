import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function KidsAll() {
  const [kidsProducts, setKidsProducts] = useState([]);
  useEffect(() => {
    // Fetch data from your backend API
    async function fetchData() {
      try {
        const req = await axios.get("/kids");
        setKidsProducts(req.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {kidsProducts.map((product) => (
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

export default KidsAll;
