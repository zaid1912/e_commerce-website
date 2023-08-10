import React, {useState, useEffect} from 'react'
import CategoriesNavbar from '../categories-navbar/CategoriesNavbar';
// import axios from '../../axios';
// import ProductsCard from '../main-page/products/ProductsCard';
import { Outlet } from 'react-router-dom';

function WomenPage() {
  // const [womenProducts, setWomenProducts] = useState([]);
  // useEffect(() => {
  //   // Fetch data from your backend API

  //   async function fetchData(){
  //     const req = await axios.get('/women');
  //     setWomenProducts(req.data);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className='women-page'>
      <CategoriesNavbar/>
      <h3>Women Section</h3>
      {/* {womenProducts.map(product => (
        <ProductsCard key={product.product_id} imgUrl = {product.image_url} name = {product.product_name} price = {product.price}/>
      ))} */}
      <Outlet />
    </div>
  )
}
export default WomenPage;