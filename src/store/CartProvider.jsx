import React from "react";

// Importing state wide context
import CartContext from "./CartContext";

// Creating state handling functions
const addItemHandler = (item) => {};

const removeItemHandler = (id) => {};

// Helper function or data handling
const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemHandler,
  removeItem: removeItemHandler,
};

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
