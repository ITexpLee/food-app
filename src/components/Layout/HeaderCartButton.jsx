import React, { useContext, useEffect, useState } from "react";

// Importing css and assets
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.jsx";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  // useState is used to Re-Render the entire class
  const [itemAdded, setItemAdded] = useState(false);

  // Using context for the button
  const ctx = useContext(CartContext);
  const { items } = ctx;

  // Counting the number of items in Cart
  // Here currentNumber is an accumulator repeated everytime
  const numberOfItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  // Adding animation to React
  const btnClasses = `${classes.button} ${itemAdded ? classes.bump : ""}`;

  // useEffect for animations
  useEffect(() => {
    // if the cart is empty we don't want a bump
    // It is because useEffect is always run the first time page Render
    // We run useEffect whenever item changes
    if (items.length === 0) {
      return;
    }
    setItemAdded(true);
    // Create a step Timeout which removes the class
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 200);

    // Clearing the previous Timer
    // it is only run when the code is executed for second time
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
