import React from "react";
import { useCart } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddressForm from "../../components/AddressForm/AddressForm";
import "./Checkout.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { useAddress } from "../../contexts/addressContext";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
const Checkout = () => {
  const { cart, removeCartData, priceDetails } = useCart();
  const navigate = useNavigate();
  const { addressFormData } = useAddress();
  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_soK51IwFJ39FSG",
      amount: Number(priceDetails.totalSubTotal) * 100,
      currency: "INR",
      name: "Shop Now",
      description: "Thank you for shopping with us",
      handler: function () {
        toast.success(
          `Payment of Rs.${priceDetails.totalSubTotal} is succesfully done`
        );
        navigate("/");
        cart.map((item) => removeCartData(item._id));
        setTimeout(() => {
          console.log("Success");
          navigate("/");
        }, 4000);
      },
      theme: {
        color: "#875599",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="checkout-section">
      <div>
        <AddressForm />
      </div>
      <div className="order-summary-card">
        <OrderSummary />
        <div className="payment-button">
          <button
            onClick={() => {
              addressFormData?.name.length > 0
                ? displayRazorpay()
                : toast.error(
                    "Please select an address before placing an order"
                  );
            }}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
