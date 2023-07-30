import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter} from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Slider from './components/main-page/slider/Slider';
// import Categories from './components/main-page/categories/Categories';
// import Featured from './components/main-page/products/featured/Featured';
// import Footer from './components/main-page/footer/Footer';
// import MainLayout from './components/main-page/MainLayout';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
