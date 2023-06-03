import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimer-wrapper">
      <div className="sidebar-shimmer">
        {Array(1)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card-sidebar"></div>
          ))}
      </div>
      <div className="products-shimmer-list">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
