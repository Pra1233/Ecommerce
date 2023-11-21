import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (e) => {},
  decrementItems: (e) => {},
  removeItems: (e) => {},
});

export default CartContext;
