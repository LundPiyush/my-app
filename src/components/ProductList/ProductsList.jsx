import React from "react";
import "./ProductsList.css";
import Sidebar from "../Sidebar/Sidebar";
import { useProducts } from "../../contexts/productsContext";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useFilters } from "../../contexts/filtersContext";

const ProductsList = () => {
  const { productsData } = useProducts();
  const { finalFilterData } = useFilters();
  return (
    <div className="products-list">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="cards">
        {finalFilterData.map((product) => {
          return <Product key={product._id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
