import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import "./Navigation.css";
import { useAuth } from "../../contexts/authContext";
import { useFilters } from "../../contexts/filtersContext";

const Navigation = () => {
  const navigate = useNavigate();
  const { userLogout, authState } = useAuth();
  const { handleSearchText } = useFilters();

  const handleLogoutClick = () => {
    navigate("/");
    userLogout();
  };

  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-link logo-name">
        <h3 className="brand_name">E-commerce</h3>
      </NavLink>

      <ul className="nav-actions-list">
        <NavLink className="nav-link cart" to="/cart">
          <ShoppingCartIcon style={{ width: 60, height: 40 }} />
        </NavLink>
        <NavLink className="nav-link wishlist" to="/wishlist">
          <FavoriteIcon style={{ width: 60, height: 40 }} />
        </NavLink>
        {authState.isLoggedIn ? (
          <button onClick={handleLogoutClick}>Log Out</button>
        ) : (
          <button onClick={() => navigate("/login")}>Log In</button>
        )}
      </ul>
      <div className="input-search-section">
        <input
          type="text"
          className="input-search"
          onChange={(e) => handleSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navigation;
