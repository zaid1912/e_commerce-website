import React from "react";
import Navbar from "../navbar/Navbar";
// import Slider from "react-slick";
import Slider from './slider/Slider';
import Categories from "./categories/Categories";
import Featured from "./products/featured/Featured";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      {/* <Slider />
      <Categories />
      <Featured /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
