import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function WomenAll() {
    const [womenProducts, setWomenProducts] = useState([]);
  useEffect(() => {
    // Fetch data from your backend API

    async function fetchData(){
      const req = await axios.get('/women');
      setWomenProducts(req.data);
    }
    fetchData();
  }, []);
  return (
    <div>
    {womenProducts.map(product => (
        <ProductsCard key={product.product_id} imgUrl = {product.image_url} name = {product.product_name} price = {product.price}/>
      ))}
    </div>
  )
}

export default WomenAll