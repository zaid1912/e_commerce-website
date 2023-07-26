import React from 'react';
import './ProductsHeader.css';

function ProductsHeader() {
  return (
    <div className='products-header'>
        <h1>
            Products Overview
        </h1>
        <div className="product-header-list">
            <a href="http://">Featured</a>
            <a href="http://">Women</a>
            <a href="http://">Men</a>
            <a href="http://">Kids</a>
            <a href="http://">Bags</a>
            <a href="http://">Shoes</a>
        </div>
    </div>
  )
}

export default ProductsHeader