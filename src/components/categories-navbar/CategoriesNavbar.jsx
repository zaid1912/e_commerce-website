import './CategoriesNavbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

function CategoriesNavbar() {
  return (
    <div className='categories-navbar'>
        <NavLink to='tops'>Tops</NavLink>
        <NavLink to='bottoms'>Bottoms</NavLink>
        <NavLink to='jackets'>Jackets/Hoodies</NavLink>
        <NavLink to='accessories'>Accessories</NavLink>
    </div>
  )
}

export default CategoriesNavbar