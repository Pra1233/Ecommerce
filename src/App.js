import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart";
import Head from "./components/Head";
import Main from "./components/Main";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import ContactUs from "./components/pages/ContactUs";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/pages/NotFound";

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
      <Head onshowCart={showCartHandler} />
      {showCart && <Cart onClose={disableCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/store">
          <Store />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/productDetail/:id">
          <ProductDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
