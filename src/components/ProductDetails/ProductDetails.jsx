import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../utils/getProduct";
import "./ProductDetails.css";
import { useCart } from "../../contexts/cartContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { useAuth } from "../../contexts/authContext";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { useWishlist } from "../../contexts/wishlistContext";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const { cart, addCartData } = useCart();
  const { wishlist, addWishlistData } = useWishlist();
  const { authState } = useAuth();
  const navigate = useNavigate(productId);

  async function getSingleProduct() {
    try {
      const product = await getProduct(productId);
      setSingleProduct(product?.product);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(
    () => {
      getSingleProduct();
    }, // eslint-disable-next-line
    []
  );

  const { _id, name, price, category, rating, discount, src, outOfStock } =
    singleProduct;
  if (Object.keys(singleProduct).length === 0) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div className="product-details">
        <img src={src} alt={name} />
        <div className="product-detail">
          <h1>{category.toUpperCase()}</h1>
          <p className="title-product">{name}</p>
          <hr />
          <p className="rating">
            {rating} ⭐ ({(rating * 100).toFixed(0)} reviews)
          </p>
          <div className="product-price">
            <s className="product-original-price">₹{price}</s>
            <span className="product-discounted-price">
              ₹{price - (price * discount) / 100}
            </span>
          </div>
          <p className="stock">
            <strong>Availability: </strong>
            {outOfStock ? "Not in Stock" : "In Stock"}
          </p>
          <div className="cart">
            {!outOfStock && (
              <button
                className="add-cart"
                disabled={outOfStock ? true : false}
                onClick={() => {
                  if (authState.isLoggedIn) {
                    if (isItemInCart(cart, _id)) {
                      navigate("/cart");
                    } else {
                      addCartData(singleProduct);
                      //toast.success("Added to cart!");
                    }
                  }
                }}>
                {isItemInCart(cart, _id) ? "Go to Cart" : "Add To Cart"}
              </button>
            )}
            {!outOfStock && (
              <button
                className="add-cart"
                disabled={outOfStock ? true : false}
                onClick={() => {
                  if (authState.isLoggedIn) {
                    if (isItemInWishlist(wishlist, _id)) {
                      navigate("/wishlist");
                    } else {
                      addWishlistData(singleProduct);
                      //toast.success("Added to cart!");
                    }
                  }
                }}>
                {isItemInWishlist(wishlist, _id)
                  ? "Go to Wishlist"
                  : "Add To Wishlist"}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <div className="like-product">
        <Featured />
      </div> */}
    </>
  );
};

export default ProductDetails;
