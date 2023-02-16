import React from "react";
import { Link } from "react-router-dom";

import { Call } from "../../icons/Call";
import { ReactComponent as CartIconSVG } from "../../icons/CartIcon.svg";
import { Navbar } from "../Navbar";


export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Navbar/>
        <div className="call-wrapper">
          <span className="header__call">
            <Call/>
          </span>
          <span>+7 (495) 823-54-12</span>
        </div>
        <div className="header__cart">
          <Link to='/cart'>
          <span className="cartBackground">
            <CartIconSVG/>
          </span>
          </Link>
        </div>
      </header>
    </div>
  );
};
