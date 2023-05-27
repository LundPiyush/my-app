import React from "react";
import "./Product.css";
import { useAuth } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const Product = ({ data }) => {
  const { authState } = useAuth();
  const { _id, name, price, category, rating, discount, src, outOfStock } =
    data;
  const { cart, addCartData } = useCart();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div onClick={() => navigate(`/product/${_id}`)}>
        <img src={src} alt={name} width={100} height={200} />
        <h3 className="card-title">{name}</h3>
        <h5 className="card-brand">{category.toUpperCase()}</h5>
        <div className="card-rating">
          <s className="card-original-price">
            ₹{price - (price * discount) / 100}
          </s>
          <span className="card-price">{price}</span>
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
