import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Home from "./pages/profile/home/Home";
import Profile from "./pages/profile/Profile";
import Address from "./pages/profile/address/Address";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<Home />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
