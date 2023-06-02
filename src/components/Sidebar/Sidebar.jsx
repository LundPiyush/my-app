import React from "react";
import "./Sidebar.css";
import { useFilters } from "../../contexts/filtersContext";

const Sidebar = () => {
  const {
    filters,
    handlePrice,
    handleRating,
    handleOutOfStock,
    handleCategoryFilter,
    handleDiscount,
    clearFilters,
    handleSlider,
  } = useFilters();

  return (
    <div className="side-bar">
      <div className="clear-filter">
        <span className="filter-heading">Filters</span>
        <button className="btn-clear" onClick={() => clearFilters()}>
          Clear All
        </button>
      </div>
      <hr />
      {/* Price low to high / high to low */}
      <div className="filter-section">
        <span className="filter-heading">Sort</span>
        <div>
          <input
            id="sort-price-htl"
            type="radio"
            name="sortPrice"
            value="high_to_low"
            checked={filters.sortBy === "high_to_low"}
            onChange={() => handlePrice("high_to_low")}
          />
          <label htmlFor="sort-price-htl">Price High to Low</label>
        </div>
        <div>
          <input
            id="sort-price-lth"
            type="radio"
            name="sortPrice"
            value="low_to_high"
            checked={filters.sortBy === "low_to_high"}
            onChange={() => handlePrice("low_to_high")}
          />
          <label htmlFor="sort-price-lth">Price Low to High </label>
        </div>
      </div>
      <hr />
      {/* Avg. Customer Review / Rating*/}
      <div className="filter-section">
        <span className="filter-heading">Avg. Customer Review</span>
        <div>
          <input
            id="4-star"
            type="radio"
            name="starRating"
            value="4"
            checked={filters.rating === 4}
            onChange={() => handleRating(4)}
          />
          <label htmlFor="4-star">4 ⭐️ & above</label>
        </div>
        <div>
          <input
            id="3-star"
            type="radio"
            name="starRating"
            value="3"
            checked={filters.rating === 3}
            onChange={() => handleRating(3)}
          />
          <label htmlFor="3-star">3 ⭐️ & above</label>
        </div>
        <div>
          <input
            id="2-star"
            type="radio"
            name="starRating"
            value="2"
            checked={filters.rating === 2}
            onChange={() => handleRating(2)}
          />
          <label htmlFor="2-star">2 ⭐️ & above</label>
        </div>
      </div>
      <hr />
      {/* Discount */}
      <div className="filter-section">
        <span className="filter-heading">Discount</span>
        <div>
          <input
            id="50%"
            type="radio"
            name="discountFilter"
            checked={filters.radio_discount === 50}
            onChange={() => handleDiscount("50")}
          />
          <label htmlFor="50%">50% and above</label>
        </div>
        <div>
          <input
            id="40%"
            type="radio"
            name="discountFilter"
            checked={filters.radio_discount === 40}
            onChange={() => handleDiscount("40")}
          />
          <label htmlFor="40%">40% and above</label>
        </div>
        <div>
          <input
            id="30%"
            type="radio"
            name="discountFilter"
            checked={filters.radio_discount === 30}
            onChange={() => handleDiscount("30")}
          />
          <label htmlFor="30%">30% and above</label>
        </div>
        <div>
          <input
            id="20%"
            type="radio"
            name="discountFilter"
            checked={filters.radio_discount === 20}
            onChange={() => handleDiscount("20")}
          />
          <label htmlFor="20%">20% and above</label>
        </div>
        <div>
          <input
            id="10%"
            type="radio"
            name="discountFilter"
            checked={filters.radio_discount === 10}
            onChange={() => handleDiscount("10")}
          />
          <label htmlFor="10%">10% and above</label>
        </div>
      </div>
      {/* Price */}
      <div className="filter-section">
        <span className="filter-heading">Price</span>
        <div>
          <span className="prices">1k</span>
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
          value={filters.price_in_range}
          onChange={(e) => {
            handleSlider(e);
          }}
        />
      </div>
      <hr />
      {/* Category */}
      <div className="filter-section">
        <span className="filter-heading">Category</span>
        <div>
          <input
            id="accessories"
            type="checkbox"
            name="categoryFilter"
            value="accessories"
            checked={filters.checkBox_category.includes("accessories")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="accessories">Accessories</label>
        </div>
        <div>
          <input
            id="books"
            type="checkbox"
            name="categoryFilter"
            value="books"
            checked={filters.checkBox_category.includes("books")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="books">Books</label>
        </div>
        <div>
          <input
            id="lifestyle"
            type="checkbox"
            name="categoryFilter"
            value="lifestyle"
            checked={filters.checkBox_category.includes("lifestyle")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="lifestyle">Lifestyle</label>
        </div>
        <div>
          <input
            id="clothing"
            type="checkbox"
            name="categoryFilter"
            value="clothing"
            checked={filters.checkBox_category.includes("clothing")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="clothing">Clothing</label>
        </div>
        <div>
          <input
            id="stationery"
            type="checkbox"
            name="categoryFilter"
            value="stationery"
            checked={filters.checkBox_category.includes("stationery")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="stationery">Stationery</label>
        </div>
        <div>
          <input
            id="wallart"
            type="checkbox"
            name="categoryFilter"
            value="wallart"
            checked={filters.checkBox_category.includes("wallart")}
            onChange={(e) => handleCategoryFilter(e, e.target.value)}
          />
          <label htmlFor="wallart">Wall Art</label>
        </div>
      </div>
      <hr />
      <div className="filter-section">
        <span className="filter-heading">Availability</span>
        <div>
          <input
            id="stock"
            type="checkbox"
            name="stock"
            checked={filters.includeOutOfStock}
            onChange={(e) => handleOutOfStock(e)}
          />
          <label htmlFor="stock">Include Out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
