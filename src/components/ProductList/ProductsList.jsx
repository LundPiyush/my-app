import React from "react";
import "./ProductsList.css";
import Sidebar from "../Sidebar/Sidebar";
//import { useProducts } from "../../contexts/productsContext";
import Product from "../Product/Product";
import { useFilters } from "../../contexts/filtersContext";
import Shimmer from "../Shimmer/Shimmer";

const ProductsList = () => {
  //const { productsData } = useProducts();
  const { finalFilterData } = useFilters();
  if (finalFilterData.length === 0) {
    return <Shimmer />;
  }
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
