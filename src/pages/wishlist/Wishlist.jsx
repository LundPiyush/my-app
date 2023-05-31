import React from "react";
import { useWishlist } from "../../contexts/wishlistContext";
import Product from "../../components/Product/Product";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  if (wishlist.length < 1) {
    return (
      <div className="no-items-in-wishlist">
        <h1>Wishlist</h1>
        <h4>Your Wishlist is Empty</h4>
        <button onClick={() => navigate("../products")}>
          See products here
        </button>
      </div>
    );
  }
  return (
    <div className="wishlist-section">
      <h1>Wishlist</h1>
      <div className="wishlist-cards">
        {wishlist.map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
