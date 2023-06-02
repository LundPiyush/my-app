import React from "react";
import "./CartProductCard.css";
import { useCart } from "../../contexts/cartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishlist } from "../../contexts/wishlistContext";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { toast } from "react-toastify";

const CartProductCard = (product) => {
  const { _id, name, category, discount, price, qty, src } = product;
  const { changeCartQuantity, removeCartData } = useCart();
  const { wishlist, removeWishlistData, addWishlistData } = useWishlist();

  return (
    <div className="card-product">
      <div className="wishlist-icon">
        {isItemInWishlist(wishlist, _id) ? (
          <FavoriteIcon
            className="wishlist-icon-card"
            onClick={() => {
              removeWishlistData(_id);
              toast.success(`${product.name} removed from wishlist`);
            }}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            className="wishlist-icon-card"
            onClick={() => {
              addWishlistData(product);
              toast.success(`${product.name} added to wishlist`);
            }}
          />
        )}
      </div>
      <img src={src} alt={name} />
      <div className="card-product-details">
        <h4 className="card-product-name">{name}</h4>
        <p>Category: {category.toUpperCase()}</p>
        <div className="cart-price-details">
          <p>
            <s style={{ color: "red" }}>₹{price}</s>
          </p>
          <p style={{ color: "green" }}>₹{price - (price * discount) / 100}</p>
        </div>
        <div className="card-quanity">
          <button
            disabled={qty <= 1}
            onClick={() => {
              changeCartQuantity(_id, "decrement");
              toast.success(`Quantity updated successfully to ${qty - 1}`);
            }}
            className="cart-btn-qty">
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => {
              changeCartQuantity(_id, "increment");
              toast.success(`Quantity updated successfully to ${qty + 1}`);
            }}
            className="cart-btn-qty">
            +
          </button>
        </div>

        <button
          className="cart-remove-btn"
          onClick={() => {
            removeCartData(_id);
            toast.success(`${name} removed from cart successfully`);
          }}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
