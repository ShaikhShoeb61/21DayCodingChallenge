import React from "react";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

const Navigation = () => {
  return (
    <nav className="navigation container">
      <img
        src="../images/nike-logo.png"
        alt="nike-logo"
        className="nike-logo"
      />

      <ul>
        <a href="#">
          <li>New & Featured</li>
        </a>
        <a href="#">
          <li>Men</li>
        </a>
        <a href="#">
          <li>Women</li>
        </a>
        <a href="#">
          <li>Kids</li>
        </a>
      </ul>

      <div className="icons">
        <CiUser className="profile-icon" />
        <BsBag className="cart-icon" />
        <CiMenuBurger className="menu-icon" />
      </div>
    </nav>
  );
};

export default Navigation;
