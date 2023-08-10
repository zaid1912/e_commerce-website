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
import WomenAccessories from "./components/women/WomenAccessories";
import WomenBottoms from "./components/women/WomenBottoms";
import WomenJackets from "./components/women/WomenJackets";
import MenBottoms from "./components/men/MenBottoms";
import MenJackets from "./components/men/MenJackets";
import MenTops from "./components/men/MenTops";
import MenAccessories from "./components/men/MenAccessories";
import KidsAccessories from "./components/kids/KidsAccessories";
import KidsBottoms from "./components/kids/KidsBottoms";
import KidsJackets from "./components/kids/KidsJackets";
import KidsTops from "./components/kids/KidsTops";
import WomenAll from "./components/women/WomenAll";
import MenAll from "./components/men/MenAll";
import KidsAll from "./components/kids/KidsAll";

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
          <Route index element= {<WomenAll/>} />
          <Route path="tops" element={<WomenTops />} />
          <Route path="bottoms" element={<WomenBottoms />} />
          <Route path="jackets" element={<WomenJackets />} />
          <Route path="accessories" element={<WomenAccessories />} />
        </Route>
        <Route path="men" element={<MenPage />}>
          <Route index element= {<MenAll/>}/>
          <Route path="tops" element={<MenTops />} />
          <Route path="bottoms" element={<MenBottoms />} />
          <Route path="jackets" element={<MenJackets />} />
          <Route path="accessories" element={<MenAccessories />} />
        </Route>
        <Route path="kids" element={<KidsPage />}>
          <Route index element= {<KidsAll/>}/>
          <Route path="tops" element={<KidsTops />} />
          <Route path="bottoms" element={<KidsBottoms />} />
          <Route path="jackets" element={<KidsJackets />} />
          <Route path="accessories" element={<KidsAccessories />} />
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
