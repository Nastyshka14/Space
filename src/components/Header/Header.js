import React from "react";
import { Logo, Cart } from "../../assets/Icons";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <input
        type="checkbox"
        id="burger-checkbox"
        className="header__burger-checkbox"
      />
      <label htmlFor="burger-checkbox" className="header__burger" />
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <a href="#" className="header__menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header__menu-item">
              Products
            </a>
          </li>
        </ul>
        <div className="header__cart">
          <a href="#" className="header__menu-item">
            <Cart />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
