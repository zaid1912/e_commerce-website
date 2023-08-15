import React, { useEffect, useState } from 'react'
import CategoriesNavbar from '../categories-navbar/CategoriesNavbar';
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard'; 
import { Outlet } from 'react-router-dom';
import './MenPage.css';

function MenPage() {
  
  return (
    <div className='men-page'>
      <div className="men-header">
        <h1>Men's Collection</h1>
      </div>
      <CategoriesNavbar/>
      <Outlet/>
    </div>
  )
}

export default MenPage