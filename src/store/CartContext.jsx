import React from "react";

// Here addItem and removeItem act as keys of the method
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem(item) {},
  removeItem(id) {},
});

export default CartContext;
