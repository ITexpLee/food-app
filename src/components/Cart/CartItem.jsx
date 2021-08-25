import React from "react";

// importing css module and assets
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <article>
        <h2>{props.name}</h2>
        <p className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{`x${props.amount}`}</span>
        </p>
      </article>
      <article className={classes.action}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </article>
    </li>
  );
};

export default CartItem;
