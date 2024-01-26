import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ cartItemCount }) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (page) => {
    setMenu(page);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TechBees</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("home")}>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("orders")}>
          <NavLink to="/orders" activeClassName="active">
            Orders
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("custom")}>
          <NavLink to="/custom" activeClassName="active">
            Custom PC
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("about")}>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>

      <div className="login-links">
          <NavLink to="/admindashboard" activeClassName="active" className="login-link">
            <span>Admin Panel</span>
          </NavLink>
        </div> 
        
      <div className="nav-login-cart">
        <div className="login-links">
          <NavLink to="/login" activeClassName="active" className="login-link">
            <span>Login</span>
          </NavLink>
        </div>

        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">{cartItemCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
