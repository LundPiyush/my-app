import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/productsContext";
import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/authContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import { FilterProvider } from "./contexts/filtersContext";
import { AddressProvider } from "./contexts/addressContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <ProductsProvider>
        <WishlistProvider>
          <CartProvider>
            <FilterProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </FilterProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
