import React, {useState, useEffect} from 'react'
import CategoriesNavbar from '../categories-navbar/CategoriesNavbar'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';
import { Outlet } from 'react-router-dom';

function KidsPage() {

  const [kidsProducts, setKidsProducts] = useState([]);
  useEffect(() => {
    // Fetch data from your backend API
    async function fetchData(){
      try{
        const req = await axios.get('/kids');
        setKidsProducts(req.data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className='kids-page'>
      <CategoriesNavbar/>
      <Outlet/>
      
    </div>
  )
}

export default KidsPage