import React from "react";
import { useCart } from "../../contexts/cartContext";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import CartPrice from "../../components/CartPrice/CartPrice";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  const navigate = useNavigate();
  if (cart.length < 1) {
    return (
      <div className="no-items-in-cart">
        <h1>Cart</h1>
        <h4>Your Cart is Empty</h4>
        <button onClick={() => navigate("../products")}>
          See products here
        </button>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="cart-block">
        <div className="cart-items">
          <ul>
            {cart.map((product) => (
              <CartProductCard key={product._id} {...product} />
            ))}
          </ul>
        </div>
        <div className="cart-price">
          <div className="total-cart-price">
            <CartPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
