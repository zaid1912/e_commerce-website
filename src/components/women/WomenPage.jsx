import React from 'react'
import CategoriesNavbar from '../categories-navbar/CategoriesNavbar';
import { Outlet } from 'react-router-dom';

function WomenPage() {
  return (
    <div className='women-page'>
      <CategoriesNavbar/>
      <h3>Women Section</h3>
      <Outlet />
    </div>
  )
}
export default WomenPage;