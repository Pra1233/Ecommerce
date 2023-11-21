import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemsFunction = (newitem) => {
    setItem((item) => {
      const index = item.findIndex((i) => i.id === newitem.id);
      console.log(index, "SAaaaaaaaaaa");
      if (index >= 0) {
        item[index].quantity = +item[index].quantity + newitem.quantity;
        return [...item];
      }

      return [...item, newitem];
    });
  };

  const decrementItemFunction = (id) => {
    setItem((olditem) => {
      const index = olditem.findIndex((i) => i.id === id);
      if (olditem[index].quantity <= 1) {
        olditem.splice(index, 1);
        return [...olditem];
      }
      olditem[index].quantity = +olditem[index].quantity - 1;
      return [...olditem];
    });
  };

  const removeItemFunction = (id) => {
    setItem((olditem) => {
      const index = olditem.findIndex((i) => i.id === id);
      olditem.splice(index, 1);
      return [...olditem];
    });
  };

  const cartContext = {
    items: item,
    totalAmount: 0,
    addItems: addItemsFunction,
    decrementItems: decrementItemFunction,
    removeItems: removeItemFunction,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
