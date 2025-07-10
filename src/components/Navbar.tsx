import React from "react";
import { NavLink } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/head-tail" className="nav-link">
          Head & Tail
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
