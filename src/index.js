import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/productsContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
