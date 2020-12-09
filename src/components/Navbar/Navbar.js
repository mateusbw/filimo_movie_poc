import React from "react";
import { NavLink } from "react-router-dom";

import ROUTER_PATHS from "../../routes/RouterPaths";

import Logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Filimo" />
      <ul className="navbar__menu-list">
        <li>
          <NavLink
            to={ROUTER_PATHS.HOME}
            className="navbar__menu-list__item"
            activeClassName="navbar__menu-list__item--active"
          >
            Movies & Series
          </NavLink>
        </li>
        <li className="navbar__menu-list__item">In Theaters</li>
        <li className="navbar__menu-list__item">Top Reated</li>
        <li>
          <NavLink
            to={ROUTER_PATHS.WISHLIST}
            className="navbar__menu-list__item"
            activeClassName="navbar__menu-list__item--active"
          >
            My wishlist
          </NavLink>
        </li>
      </ul>
      <img
        src="https://picsum.photos/300"
        alt="Filimo"
        className="navbar__profile-img"
      />
    </div>
  );
};

export default Navbar;
