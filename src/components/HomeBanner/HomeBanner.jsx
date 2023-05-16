import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import BackgroundImage1 from "../../assets/images/slider_1.jpg";
import BackgroundImage2 from "../../assets/images/slider_1.jpg";
import BackgroundImage3 from "../../assets/images/slider_1.jpg";
import Carousel from "react-bootstrap/Carousel";

function HomeBanner() {
  return (
    <div className="home-banner">
      <img src={BackgroundImage1} />
      <Link to="/products">
        <button className="btn-shop-now">Shop Now</button>
      </Link>
    </div>
  );
}

export default HomeBanner;
