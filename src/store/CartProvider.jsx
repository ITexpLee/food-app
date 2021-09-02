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
    // Check if the item already exits in the Cart
    // if any stored has the same id then it exists
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // if it exists update the amount
    const exisitngCartItem = state.items[existingCartIndex];
    let updatedItems;

    // If it exists update the state immutably simply copy it and use
    if (exisitngCartItem) {
      const updatedItem = {
        ...exisitngCartItem,
        amount: exisitngCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  // Handling Remove Item with useReducer
  if (action.type === "REMOVEITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exisitngCartItem = state.items[existingCartIndex];

    // updating the total amount on decrement
    const updatedTotalAmount = state.totalAmount - exisitngCartItem.price;
    let updatedItems;

    // Check it's amount and then either remove it or decrement amount
    if (exisitngCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = {
        ...exisitngCartItem,
        amount: exisitngCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Check if submission complete and clear whole cart
  if (action.type === "CLEAR") {
    return defaultCartState;
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

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  // Helper function or data handling
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeAllItem: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
