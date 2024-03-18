import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const { cartItems } = useCart();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={() => {}} className="nav-logo">
        <img src={logo} alt="" />
        <p>Art-Vista</p>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/">Shop</Link>
        </li>

        <li>
          <Link to="/">Modern</Link>
        </li>

        <li>
          <Link to="/">Retro</Link>
        </li>
        <li>
          <Link to="/">Theatre</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
          <span>{cartItems?.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
