import React from "react";
import { Routes, Route } from "react-router-dom";

import { About } from "../components/About/About";
import { Contacts } from "../components/Contacts/Contacts";
import { Home } from "../components/Home/Home";
import { NotFound } from "../components/NotFound/NotFound";
import { Shop } from "../components/Shop/Shop";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
