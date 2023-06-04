import React from "react";
import "./ProductsList.css";
import Sidebar from "../Sidebar/Sidebar";
import Product from "../Product/Product";
import { useFilters } from "../../contexts/filtersContext";
import Shimmer from "../Shimmer/Shimmer";

const ProductsList = () => {
  const { finalFilterData, filters } = useFilters();
  if (finalFilterData.length === 0 && filters.searchText.length === 0) {
    return <Shimmer />;
  }
  if (finalFilterData.length === 0 && filters.searchText.length > 0) {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <h1 className="no-products-message">
          No Products Found with{" "}
          <span style={{ fontStyle: "italic", color: "purple" }}>
            {filters.searchText}
          </span>{" "}
          text!
        </h1>
      </div>
    );
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
