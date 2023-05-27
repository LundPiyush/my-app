import React from "react";
import "./CartProductCard.css";
import { useCart } from "../../contexts/cartContext";

const CartProductCard = (product) => {
  const {
    _id,
    name,
    category,
    createdAt,
    discount,
    outOfStock,
    price,
    qty,
    rating,
    src,
    updatedAt,
  } = product;
  const { changeCartQuantity, removeCartData } = useCart();
  return (
    <div className="card-product">
      <img src={src} alt={name} />
      <div className="card-product-details">
        <h4 className="card-product-name">{name}</h4>
        <p>{category.toUpperCase()}</p>
        <div className="cart-price-details">
          <p>
            <s style={{ color: "red" }}>₹{price}</s>
          </p>
          <p style={{ color: "green" }}>₹{price - (price * discount) / 100}</p>
        </div>
        <div className="card-quanity">
          <button
            disabled={qty <= 1}
            onClick={() => changeCartQuantity(_id, "decrement")}
            className="cart-btn-qty">
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => changeCartQuantity(_id, "increment")}
            className="cart-btn-qty">
            +
          </button>
        </div>
        <div>
          <button
            className="cart-remove-btn"
            onClick={() => removeCartData(_id)}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
