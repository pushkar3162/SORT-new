import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Navigation Bar</h1>
      <Link to="/auth" className="navbar-user">LOGOUT</Link>
    </div>
  );
};

export default Navbar;
