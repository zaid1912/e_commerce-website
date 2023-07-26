import React from 'react';
import categories from './catagoryDictionary';
import CategoryCard from './CategoryCard';
import './categories.css';
function Categories() {
  return (
    <div className='all-cards'>
      {categories.map((catagory) => <CategoryCard 
        
        imgUrl = {catagory.imageUrl}
        heading = {catagory.heading}
        desc = {catagory.desc}
        gotoUrl = {catagory.gotoUrl}

      />)}
    </div>
    
  )
}

export default Categories