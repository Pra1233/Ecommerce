import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import CartProvider from "./store/CartProvider";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";

const router = createBrowserRouter([
  { path: "/Home", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Store", element: <Store /> },
]);

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/home" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/store" element={<Store />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefination);

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const disableCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={disableCartHandler} />}
      <Header onshowCart={showCartHandler} />
      <Main />
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
