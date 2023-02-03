import React, { useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ProductList } from "../../components/ProductList/ProductList";


export const Shop = () => {

  const [category, setCategory] = useState<string>('all');

  return (
    <div className="container">
      <div className="shop-wrapper">
        <h1 className="title">Shop</h1>
        <Breadcrumbs />
        <ul className="categories">
          <li className={`categories__link ${category === 'all' && 'categories__link_active'}`} onClick={() => setCategory('all')}> All</li>
          <li className={`categories__link ${category === 'topcoats' && 'categories__link_active'}`} onClick={() => setCategory('topcoats')}>Topcoats</li>
          <li className={`categories__link ${category === 't-shirts' && 'categories__link_active'}`} onClick={() => setCategory('t-shirts')}>T-shirts</li>
          <li className={`categories__link ${category === 'sweatshirts' && 'categories__link_active'}`} onClick={() => setCategory('sweatshirts')}>Sweatshirts</li>
          <li className={`categories__link ${category === 'cardigans' && 'categories__link_active'}`} onClick={() => setCategory('cardigans')}>Cardigans</li>
          <li className={`categories__link ${category === 'hoodies' && 'categories__link_active'}`} onClick={() => setCategory('hoodies')}>Hoodies</li>
        </ul>
        <ProductList category={category} />
      </div>
    </div>
  );
};
