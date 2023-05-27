import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/getProduct";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();

  async function getSingleProduct() {
    try {
      const product = await getProduct(productId);
      console.log(product);
      setSingleProduct(product?.product);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getSingleProduct();
  }, []);

  const { _id, name, price, category, rating, discount, src, outOfStock } =
    singleProduct;
  if (Object.keys(singleProduct).length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div className="product-details">
        <img src={src} alt={name} />
        <div className="product-detail">
          <h1>{category}</h1>
          <p className="title-product">{name}</p>
          <hr />
          <p className="rating">
            {rating}⭐ ({rating * 100} reviews)
          </p>
          <div className="product-price">
            <h2>₹{price}</h2>
          </div>
          <p className="stock">
            <strong>Availability: </strong>
            {outOfStock ? "Not in Stock" : "In Stock"}
          </p>
          <div className="cart">
            <button
              className="add-cart"
              disabled={outOfStock ? true : false}
              style={{ backgroundColor: outOfStock ? "#FFFFFF" : "#1a73e8" }}>
              Add To Cart
            </button>
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
