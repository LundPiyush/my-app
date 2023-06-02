import React from "react";
import "./Product.css";
import { useAuth } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishlist } from "../../contexts/wishlistContext";
import { toast } from "react-toastify";

const Product = ({ data }) => {
  const { authState } = useAuth();
  const { wishlist, addWishlistData, removeWishlistData } = useWishlist();
  const { _id, name, price, category, rating, discount, src, outOfStock } =
    data;
  const { cart, addCartData } = useCart();
  const navigate = useNavigate();

  const addToWishLisButtontHandler = (product) => {
    if (authState.isLoggedIn && authState.token) {
      addWishlistData(product);
      toast.success(`Added ${product.name} to wishlist`);
    } else {
      navigate("../login");
      toast.error("Please login before adding item(s) to wishlist");
    }
  };
  return (
    <div className="card">
      <div className="wishlist-icon">
        {isItemInWishlist(wishlist, _id) ? (
          <FavoriteIcon
            className="wishlist-icon-card"
            onClick={() => {
              removeWishlistData(_id);
              toast.success(`Removed ${name} from wishlist`);
            }}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            className="wishlist-icon-card"
            onClick={() => addToWishLisButtontHandler(data)}
          />
        )}
      </div>
      <div onClick={() => navigate(`/product/${_id}`)}>
        <img src={src} alt={name} height={240} width={240} />
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
        disabled={outOfStock}
        onClick={() => {
          if (authState.isLoggedIn) {
            if (isItemInCart(cart, _id)) {
              navigate("/cart");
            } else {
              addCartData(data);
              toast.success(`Added ${data.name} to cart! `);
            }
          }
        }}>
        {outOfStock
          ? "out of stock"
          : isItemInCart(cart, _id)
          ? "Go to Cart"
          : "Add to cart"}
      </button>
    </div>
  );
};

export default Product;
