import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <nav className="navigate">
      <div className="navigate__logo">
        <Logo />
      </div>
      <div className="navigate__menu">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
        <Link to="/Contacts">Contacts</Link>
      </div>
    </nav>
  );
};
