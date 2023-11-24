import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Head from "./components/UI/Head";
import Main from "./components/Main";
import CartProvider from "./store/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";

// const router = createBrowserRouter([
//   { path: "/Home", element: <Home /> },
//   { path: "/About", element: <About /> },
//   { path: "/Store", element: <Store /> },
// ]);

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const disableCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartProvider>
        {/* <RouterProvider router={router} /> */}
        {showCart && <Cart onClose={disableCartHandler} />}
        <Head onshowCart={showCartHandler} />
        <Main />
      </CartProvider>
    </>
  );
}

export default App;
