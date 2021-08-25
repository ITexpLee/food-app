import React, { useContext } from "react";

// Importing Custom components
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext.jsx";

// Importing css and assets
import classes from "./Cart.module.css";

const Cart = (props) => {
  // Using Context to render the cart
  const cartCtx = useContext(CartContext);

  // Order button logic
  const hasItems = cartCtx.items.length > 0;

  // Getting all the information. Fixing it to two decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Cart Item Removing and Adding handler
  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  // We have created CartItems outside of the return because we want the logic to be outside
  // All this code will be broken into component iteself.
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <p className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </p>
      <article className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {/* Dynamically checking if the cart has items */}
        {hasItems && <button className={classes.button}>Order</button>}
      </article>
    </Modal>
  );
};

export default Cart;
