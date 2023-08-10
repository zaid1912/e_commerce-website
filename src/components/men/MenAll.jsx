import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard'; 

function MenAll() {
    const [menProducts, setMenProducts] = useState([]);
  useEffect(() => {
    // Fetch data from your backend API
    async function fetchData(){
      const req = await axios.get('/men');
      console.log(req.data);
      setMenProducts(req.data);
    }
    fetchData();
  }, []);
  return (
    <div>
    {menProducts.map(product => (
        <ProductsCard key={product.product_id} imgUrl = {product.image_url} name = {product.product_name} price = {product.price}/>
      ))}
    </div>
  )
}

export default MenAll