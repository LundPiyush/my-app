import React from "react";
import "./Product.css";
import { useAuth } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishlist } from "../../contexts/wishlistContext";

const Product = ({ data }) => {
  const { authState } = useAuth();
  const { wishlist, addWishlistData } = useWishlist();
  const { _id, name, price, category, rating, discount, src, outOfStock } =
    data;
  const { cart, addCartData } = useCart();
  const navigate = useNavigate();

  const addToWishLisButtontHandler = (product) => {
    if (authState.isLoggedIn && authState.token) {
      addWishlistData(product);
      //toast.success("Added to wishlist");
    }
  };
  return (
    <div className="card">
      <div onClick={() => navigate(`/product/${_id}`)}>
        <img src={src} alt={name} height={240} width={240} />
        <div className="wishlist-icon">
          {isItemInWishlist(wishlist, _id) ? (
            <FavoriteIcon
              onClick={() => addToWishLisButtontHandler(data, _id)}
            />
          ) : (
            <FavoriteIcon onClick={() => {}} />
          )}
        </div>
        <h3 className="card-title">{name}</h3>
        <h5 className="card-brand">{category.toUpperCase()}</h5>
        <div className="card-rating">
          <s className="card-original-price">₹{price}</s>
          <span className="card-price">{price - (price * discount) / 100}</span>
        </div>
        <div>
          <span>{rating} ⭐</span> | <span>{}</span>
        </div>
      </div>
      <button
        className="btn-cart"
        onClick={() => {
          if (authState.isLoggedIn) {
            if (isItemInCart(cart, _id)) {
              navigate("/cart");
            } else {
              addCartData(data);
              //toast.success("Added to cart!");
            }
          }
        }}>
        {outOfStock ? "out of stock" : "add to cart"}
      </button>
    </div>
  );
};

export default Product;
