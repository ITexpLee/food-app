import React, { useReducer } from "react";

// Importing state wide context
import CartContext from "./CartContext";

// Default Cart State
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer function should be outside the component
const cartReducer = (state, action) => {
  //   Check if the action type is ADDITEM
  if (action.type === "ADDITEM") {
    const updatedItem = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItem,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //Calling the useReducer as hooks cannot be called outside component
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Creating state handling functions
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADDITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVEITEM", id: id });
  };

  // Helper function or data handling
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
