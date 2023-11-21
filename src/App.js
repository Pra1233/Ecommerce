import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import CartProvider from "./store/CartProvider";

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
    </CartProvider>
  );
}

export default App;
