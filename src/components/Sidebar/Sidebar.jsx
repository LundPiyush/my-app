import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      {/* Price low to high / high to low */}
      <div className="filter-section">
        <span className="filter-heading">Sort</span>
        <div>
          <input type="radio" name="sortPrice" />
          <label>Price High to Low</label>
        </div>
        <div>
          <input type="radio" name="sortPrice" />
          <label>Price High to Low</label>
        </div>
      </div>
      <hr />
      {/* Avg. Customer Review / Rating*/}
      <div className="filter-section">
        <span className="filter-heading">Avg. Customer Review</span>
        <div>
          <input type="radio" name="starRating" />
          <label>4 ⭐️ & above</label>
        </div>
        <div>
          <input type="radio" name="starRating" />
          <label>3 ⭐️ & above</label>
        </div>
        <div>
          <input type="radio" name="starRating" />
          <label>2 ⭐️ & above</label>
        </div>
      </div>
      <hr />
      {/* Brands */}
      <div className="filter-section">
        <span className="filter-heading">Brands</span>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>Gucci</label>
        </div>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>Zara</label>
        </div>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>Cartier</label>
        </div>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>Nike</label>
        </div>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>Puma</label>
        </div>
        <div>
          <input type="checkbox" name="brandsFilter" />
          <label>H&M</label>
        </div>
      </div>
      {/* Price */}
      <div className="filter-section">
        <span className="filter-heading">Price</span>
        <div>
          <span className="prices"> 1k </span>
          <span className="prices"> 2k </span>
          <span className="prices"> 3k </span>
          <span className="prices"> 4k </span>
        </div>
        <input
          type="range"
          step="1000"
          min="1000"
          max="4000"
          className="slider"
        />
      </div>
      <hr />
      {/* Materail */}
      <div className="filter-section">
        <span className="filter-heading">Material</span>
        <div>
          <input type="checkbox" name="materialFilter" />
          <label>Cotton</label>
        </div>
        <div>
          <input type="checkbox" name="materialFilter" />
          <label>Denim</label>
        </div>
        <div>
          <input type="checkbox" name="materialFilter" />
          <label>Leather</label>
        </div>
        <div>
          <input type="checkbox" name="materialFilter" />
          <label>Silk</label>
        </div>
      </div>
      <hr />
      {/* Avialbility */}
      <div className="filter-section">
        <span className="filter-heading">Availability</span>
        <div>
          <input type="checkbox" name="stock" />
          <label>Include Out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
