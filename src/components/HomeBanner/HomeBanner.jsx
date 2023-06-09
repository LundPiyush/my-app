import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import BackgroundImage1 from "../../assets/images/home-banner.jpg";

function HomeBanner() {
  return (
    <div className="home-banner">
      <img src={BackgroundImage1} alt="home-banner" />
      <Link to="/products">
        <button className="btn-shop-now">Shop Now</button>
      </Link>
    </div>
  );
}

export default HomeBanner;
