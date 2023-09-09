import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { FavContextProvider } from "../context/FavouriteContext";
function MainLayout() {
  return (
    <div className="main-layout">
      <FavContextProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
        </CartProvider>
      </FavContextProvider>
      <Footer />
    </div>
  );
}

export default MainLayout;
