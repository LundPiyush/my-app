import React from "react";
import "./OrderSummary.css";
import { useCart } from "../../contexts/cartContext";
import { useAddress } from "../../contexts/addressContext";

const OrderSummary = () => {
  const { cart, priceDetails } = useCart();
  const { addressFormData } = useAddress();

  return (
    <div className="order-summary-container">
      <div className="product-summary">
        <h3>Product Details</h3>
        <hr className="order-summary-line" />
        <div className="product-summary-details">
          <div className="item-qty-heading">
            <p>Item</p>
            <p>Quantity</p>
          </div>
          {cart.map((item) => {
            return (
              <div className="item-qty-details">
                <p>{item.name}</p>
                <p>{item.qty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="order-summary-line" />
      <div className="quantity-summary">
        <p>Total quantity</p>
        <p>{priceDetails?.quantity}</p>
      </div>
      <hr className="order-summary-line" />
      <div className="price-summary">
        <h3>Price Details</h3>
        <hr className="order-summary-line" />
        <div className="price-summary-details">
          <div className="total-price-summmary">
            <p>Total Price</p>
            <p>₹ {priceDetails.totalPrice}</p>
          </div>
          <div className="total-discount-summmary">
            <p>Total Disount</p>
            <p>₹ - {priceDetails.totalPrice - priceDetails.totalSubTotal}</p>
          </div>
          <hr className="order-summary-line" />
          <div className="sub-total-summmary">
            <p>Grand Total</p>
            <p>₹ {priceDetails.totalSubTotal}</p>
          </div>
        </div>
      </div>
      <hr className="order-summary-line" />
      <div className="delivery-summary">
        <h3>Delivery Address</h3>
        <hr className="order-summary-line" />
        {Object.values(addressFormData)[0].length > 0 ? (
          <div className="deliver-to-address">
            <p>
              <strong>{addressFormData?.name}</strong>
            </p>
            <p>{addressFormData.area}</p>
            <p>
              {addressFormData?.city}, {addressFormData.state},{" "}
              {addressFormData?.pincode}
            </p>
            <p>{addressFormData?.phoneNumber}</p>
          </div>
        ) : (
          <p>Please select the Address</p>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
