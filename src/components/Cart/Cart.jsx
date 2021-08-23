import React from "react";

// Importing Custom components
import Modal from "../UI/Modal";

// Importing css and assets
import classes from "./Cart.module.css";

const Cart = (props) => {
  // We have created CartItems outside of the return because we want the logic to be outside
  // All this code will be broken into component iteself.
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <p className={classes.total}>
        <span>Total Amount</span>
        <span>39.62</span>
      </p>
      <article className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </article>
    </Modal>
  );
};

export default Cart;
