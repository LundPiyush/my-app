import React from "react";
import { useCart } from "../../contexts/cartContext";
import "./CartPrice.css";
import { useNavigate } from "react-router-dom";
const CartPrice = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { priceDetails } = useCart();
  if (cart.length < 1) {
    return null;
  }
  return (
    <div className="cart-total-price-section">
      <div>
        <h4>Price Details</h4>
        <h4>
          ({cart.length} item{cart.length > 1 && "s"})
        </h4>
      </div>
      <hr className="cart-price-line" />
      <div className="cart-block-total">
        <div className="cart-block-total-price">
          <h4>Total Price</h4>
          <h4>₹ {priceDetails.totalPrice}</h4>
        </div>
        <div className="cart-block-total-discount">
          <h4>Total Discount</h4>
          <h4>₹ - {priceDetails.totalPrice - priceDetails.totalSubTotal}</h4>
        </div>
      </div>
      <hr className="cart-price-line" />
      <div className="cart-block-final-price">
        <div className="cart-block-subtotal-price">
          <h4>Sub Total</h4>
          <h4>₹ {priceDetails.totalSubTotal}</h4>
        </div>
        <div className="cart-checkout">
          <button
            className="cart-checkout-btn"
            onClick={() => navigate("/checkout")}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPrice;
