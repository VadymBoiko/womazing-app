import React from "react";

import { Call } from "../../icons/Call";
import { CartIcon } from "../../icons/CartIcon";
import { Navbar } from "../Navbar";


export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Navbar/>
        <div className="header__call">
          <span>
            <Call/>
          </span>
          <span>+7 (495) 823-54-12</span>
        </div>
        <div className="header__cart">
          <span>
            <CartIcon/>
          </span>
        </div>
      </header>
    </div>
  );
};
