import React, { useContext } from "react";

// Importing css and assets
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.jsx";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  // Using context for the button
  const ctx = useContext(CartContext);

  // Counting the number of items in Cart
  // Here currentNumber is an accumulator repeated everytime
  const numberOfItems = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
