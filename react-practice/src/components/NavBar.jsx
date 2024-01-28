import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/" className="navbar-button">
          Home
        </Link>
        <Link to="/users" className="navbar-button">
          Users
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
