import React from "react";
import "./Footer.scss";

import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content-container">
        <ul className="footer__link-list">
          <li className="footer__link-item">Home</li>
          <li className="footer__link-item">Contact Us</li>
          <li className="footer__link-item">Terms of service</li>
          <li className="footer__link-item">About us</li>
          <li className="footer__link-item">In Theaters</li>
          <li className="footer__link-item">FAQ</li>
          <li className="footer__link-item">Premium</li>
          <li className="footer__link-item">Privacy Policy</li>
          <li className="footer__link-item">Recently Released</li>
          <li className="footer__link-item">Top Reated</li>
          <li className="footer__link-item">Advertise with us</li>
        </ul>
        <div>
          <img src={Logo} alt="Fimilo" />
          <p className="footer__about">
            Filimo is the world’s leading community for creators to share, grow,
            and get hired.
          </p>
        </div>
      </div>
      <span className="footer__rights">
        © 2020 Filimo. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
