import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import "./Navigation.css";
import { useAuth } from "../../contexts/authContext";
import { useFilters } from "../../contexts/filtersContext";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";

const Navigation = () => {
  //const navigate = useNavigate();
  const { authState } = useAuth();
  const { handleSearchText } = useFilters();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-link-heading logo-name">
        <h3 className="brand_name">Shop Now</h3>
      </NavLink>
      <ul className="nav-actions-list">
        <NavLink className="nav-link cart" to="/cart">
          <p>{cart.length}</p>
          <ShoppingCartIcon style={{ width: 40, height: 40 }} />
        </NavLink>
        <NavLink className="nav-link wishlist" to="/wishlist">
          <p>{wishlist.length}</p>
          <FavoriteIcon style={{ width: 40, height: 40 }} />
        </NavLink>
        <NavLink
          className="nav-link cart"
          to={authState.isLoggedIn ? "/profile" : "/login"}>
          <PersonIcon style={{ width: 40, height: 40 }} />
        </NavLink>
      </ul>
      <div className="input-search-section">
        <input
          id="search-input"
          type="text"
          placeholder="Search products..."
          className="input-search"
          onChange={(e) => handleSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navigation;
