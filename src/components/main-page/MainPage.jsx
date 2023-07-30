import React from 'react'
import Slider from './slider/Slider';
import Categories from './categories/Categories';
import Featured from './products/featured/Featured';



function MainPage() {
  return (
    <div className='main-page'>
        <Slider />
        <Categories />
        <Featured />
    </div>
  )
}

export default MainPage