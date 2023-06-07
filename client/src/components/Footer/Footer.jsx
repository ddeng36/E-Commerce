import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            LitStore is a functional ecommerce template built with React and
            Redux. This project is a personal project for learning purpose only.
            If you have any questions, please contact me. Thank you! If you think this
            project is useful, please give me a star on Github.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            This is a personal project for learning purpose only.
            Here are some words to fill the space.
            If you have any questions, please contact me. Thank you!

          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LitStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
