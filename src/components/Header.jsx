import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const currPath = location.pathname;

  return (
    <div className="nav-bar">
      {/* <Link className="me-4" to="/home" >Home</Link> 
      <Link className="me-4" to="/about" >About US</Link> 
      <Link className="me-4" to="/contact" >Contact US</Link> */}

      <NavLink to="/home" className="me-4">
        Home
      </NavLink>
      <NavLink to="/about" className="me-4">
        About Us
      </NavLink>
      <NavLink to="/contact" className="me-4">
        Contact Us
      </NavLink>
      <hr />
      <div className="">
        {currPath === "/home" ? (
          <h5>
           
            <Link to="/about">About us</Link> / Home / User
          </h5>
        ) : (
          <></>
        )}
        {currPath === "/about" ? (
          <h5>
            <Link to="/about">About us</Link> / Detalis
          </h5>
        ) : (
          <></>
        )}
        {currPath === "/contact" ? <h5>Contact Us</h5> : <></>}
      </div>

      <hr />
    </div>
  );
};

export default Header;
