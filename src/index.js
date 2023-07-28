import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Slider from './components/main-page/slider/Slider';
import Categories from './components/main-page/categories/Categories';
import Featured from './components/main-page/products/featured/Featured';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Slider/>
    <Categories />
    <Featured />
    <Footer />

  </React.StrictMode>
);
