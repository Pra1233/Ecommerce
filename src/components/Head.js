import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import { Button } from "react-bootstrap";
import "./Head.css";

const Head = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  let quantity = 0;
  cartCtx.items.forEach((i) => {
    quantity += +i.quantity;
  });

  const logoutHandler = () => {
    authCtx.logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="row header">
        <div className="col-1 p-1 home">
          <NavLink to="/home" activeClassName="onlink">
            Home
          </NavLink>
        </div>
        <div className="col-1 p-1">
          <NavLink to="/about" activeClassName="onlink">
            About
          </NavLink>
        </div>

        {!authCtx.isLoggedIn && (
          <div className="col-1 p-1">
            <NavLink to="/login" activeClassName="onlink">
              Login
            </NavLink>
          </div>
        )}

        <div className="col-1 p-1">
          <NavLink activeClassName="onlink" to="/store">
            Store
          </NavLink>
        </div>
        <div className="col-4 p-1">
          <NavLink to="/contactus" activeClassName="onlink">
            ContactUs
          </NavLink>
        </div>
        {authCtx.isLoggedIn && (
          <Button className="col-2 p-1 " onClick={props.onshowCart}>
            Cart
            <span className="btn_quantity">{quantity}</span>
          </Button>
        )}

        {authCtx.isLoggedIn && (
          <Button
            variant="warning"
            size="xs"
            className="col-1 btn_logout"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        )}
      </div>

      <div className="head-2">
        <h2>The Generic</h2>
      </div>
    </>
  );
};

export default Head;
