import React from "react";
import { Routes, Route } from "react-router-dom";

import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Shop } from "../pages/Shop/Shop";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Cart } from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const Layout = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
};
