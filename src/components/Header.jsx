import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">

      <Link className="me-4" to="/home" >Home</Link>
      <Link className="me-4" to="/about" >About US</Link>
      <Link className="me-4" to="/contact" >Contact US</Link>

      <hr />
    </div>
  );
};

export default Header;
