import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {

  const {addItems} = useContext(AppContext)
  return (
    <div className="nav-bar">
      <div className="left">
        <NavLink to="/" className="me-4">
          Home
        </NavLink>
        <NavLink to="/about" className="me-4">
          About Us
        </NavLink>
        <NavLink to="/contact" className="me-4">
          Contact Us
        </NavLink>
      </div>

      <div className="right">
        <h4> Cart Items: {addItems}</h4>
        
      </div>
    </div>
  );
};

export default Header;
