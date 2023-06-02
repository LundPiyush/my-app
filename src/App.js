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
import HomeProfile from "./pages/profile/home/HomeProfile";
import Profile from "./pages/profile/Profile";
import Address from "./pages/profile/address/Address";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<HomeProfile />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<HomeProfile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
