import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ProductsList from "./components/ProductList/ProductsList";

import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeBanner />} />

        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
