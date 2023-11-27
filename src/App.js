import React, { useState, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Cart from "./components/Cart";
import Head from "./components/Head";
import Main from "./components/Main";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/pages/NotFound";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";

function App() {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);

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
          {authCtx.isLoggedIn && <Main />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>

        {!authCtx.isLoggedIn && (
          <Route exact path="/login">
            <AuthForm />
          </Route>
        )}
        <Route exact path="/home">
          {authCtx.isLoggedIn && <Home />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route exact path="/about">
          {authCtx.isLoggedIn && <About />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route exact path="/store">
          {authCtx.isLoggedIn && <Main />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route exact path="/contactus">
          {authCtx.isLoggedIn && <ContactUs />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route exact path="/productDetail/:id">
          {authCtx.isLoggedIn && <ProductDetail />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
