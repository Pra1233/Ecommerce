import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const disableCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      {showCart && <Cart onClose={disableCartHandler} />}
      <Header onshowCart={showCartHandler} />
      <Main />
    </React.Fragment>
  );
}

export default App;
