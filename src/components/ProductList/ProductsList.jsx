import React from "react";
import "./ProductsList.css";
import Sidebar from "../Sidebar/Sidebar";
import { useProducts } from "../../contexts/productsContext";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const ProductsList = () => {
  console.log("productsList");
  const { productsData } = useProducts();
  return (
    <div className="products-list">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="cards">
        {productsData.map((product) => {
          return (
            <Link
              className="restaurant-cards"
              to={"/product/" + product.id}
              key={product.id}>
              <Product {...product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
