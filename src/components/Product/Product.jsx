import React from "react";
import "./Product.css";

const Product = ({ id, _id, author, categoryName, price, title }) => {
  return (
    <div className="card">
      {/* <img src={IMG_CDN_URL + cloudinaryImageId}></img> */}
      <h3 className="card-title">{title}</h3>
      <h5 className="card-cuisine">{author}</h5>
      <div className="card-rating">
        <span>{price} </span>
        <span>{categoryName}</span>
      </div>
    </div>
  );
};

export default Product;
