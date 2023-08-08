import React from "react";
import { Route } from "react-router-dom";
import WomenPage from "./components/women/WomenPage";
import MenPage from "./components/men/MenPage";
import KidsPage from "./components/kids/KidsPage";
import MainLayout from "./components/main-page/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import MainPage from "./components/main-page/MainPage";
import CategoriesNavbar from "./components/categories-navbar/CategoriesNavbar";
import WomenTops from "./components/women/WomenTops";
import Featured from "./components/main-page/products/featured/Featured";
import HelpLayout from "./components/help-section/HelpLayout";
import Faqs from "./components/help-section/Faqs";
import Contact from "./components/help-section/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<About/>} />
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faqs" element = {<Faqs />}/>
          <Route path="contact" element = {<Contact />}/>
        </Route>
        <Route path="women" element={<WomenPage />}>
          <Route index element={<Featured/>}/>
          {/* <Route path="bottoms" element={<WomenTops />} /> */}
        </Route>
        <Route path="men" element={<MenPage />}>
          {/* <Route path="tops" element={<WomenTops />} /> */}
        </Route>
        <Route path="kids" element={<KidsPage />}>
          {/* <Route path="tops" element={<WomenTops />} /> */}
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
