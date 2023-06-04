import React from "react";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <h2>Connect with me</h2>
        <div className="connect-links">
          <NavLink className="nav-link" target="_blank">
            <LanguageIcon />
          </NavLink>
          <NavLink className="nav-link" target="_blank">
            <GitHubIcon />
          </NavLink>
          <NavLink className="nav-link" target="_blank">
            <TwitterIcon />
          </NavLink>
          <NavLink className="nav-link" target="_blank">
            <LinkedInIcon />
          </NavLink>
        </div>
      </div>
      <div className="info">
        <h2>Shop Now</h2>
        <p>
          Stay in touch with us, get product updates, offers, discounts directly
          to your inbox
        </p>
        <h3>© 2023 Shop Now</h3>
      </div>
      <div className="useful-links">
        <h2>Useful Links</h2>
        <NavLink className="nav-link" to="/cart">
          Cart
        </NavLink>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/products">
          Store
        </Link>
        <Link className="nav-link" to="/wishlist">
          Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Footer;
