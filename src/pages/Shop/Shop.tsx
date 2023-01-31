import React from "react";
import { NavLink } from "react-router-dom";
import { ProductList } from "../../components/ProductList/ProductList";


export const Shop = () => {
  return (
    <div className="container">
      <div className="shop-wrapper">
        <h1 className="title">Shop</h1>
        <div className="navigation">Home - Shop</div>
        <ul className="categories">
          <NavLink to='#' className="categories__link"> All</NavLink>
          <NavLink to='#' className="categories__link">Topcoats</NavLink>
          <NavLink to='#' className="categories__link">Sweatshirts</NavLink>
          <NavLink to='#' className="categories__link">Cardigans</NavLink>
          <NavLink to='#' className="categories__link">Hoodies</NavLink>
        </ul>
        <div className="calculation-products"> Showed 9 from 12 goods</div>
          <ProductList/>
        <div className="calculation-products"> Showed 9 from 12 goods</div>
      </div>
    </div>
  );
};
