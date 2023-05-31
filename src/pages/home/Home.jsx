import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { useProducts } from "../../contexts/productsContext";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../contexts/filtersContext";

const Home = () => {
  const { categories } = useProducts();
  const navigate = useNavigate();
  const { handleCategoryFilter } = useFilters();
  const handleCategoryCard = (event, name) => {
    handleCategoryFilter(event, name);
    navigate("./products/");
  };
  return (
    <>
      <HomeBanner />
      <div className="category-section">
        <h3>Featured Categories</h3>
        <div className="category-cards">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category._id}
              onClick={(e) => handleCategoryCard(e, category.categoryName)}>
              <div className="card-img-container">
                <img src={category.src} alt={category.categoryName} />
              </div>
              <div className="card-category-title">
                <h2>{category.categoryName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
