import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import { ProductProvider } from "./store/product-context";
//React Bootstrap Configuration

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  </AuthContextProvider>
);
