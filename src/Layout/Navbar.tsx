import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <nav className="navigate">
      <div className="navigate__logo">
        <Logo />
      </div>
      <div className="navigate__menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contacts">Contacts</NavLink>
      </div>
    </nav>
  );
};
