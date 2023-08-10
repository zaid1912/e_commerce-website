import React, { useEffect, useState } from 'react'
import CategoriesNavbar from '../categories-navbar/CategoriesNavbar';
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard'; 
import { Outlet } from 'react-router-dom';

function MenPage() {
  
  return (
    <div className='men-page'>
      <CategoriesNavbar/>
      <Outlet/>
    </div>
  )
}

export default MenPage