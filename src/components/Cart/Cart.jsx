import React, { useContext, useState } from "react";

// Importing Custom components
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./checkout";

// Importing css and assets
import classes from "./Cart.module.css";
import axios from "axios";

const Cart = (props) => {
  // User Checkout State
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  // User order data submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Submit succesffuly or not
  const [didSubmit, setDidSubmit] = useState(false);

  // Using Context to render the cart
  const cartCtx = useContext(CartContext);

  // Order button logic
  const hasItems = cartCtx.items.length > 0;

  // Getting all the information. Fixing it to two decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Cart Item Removing and Adding handler
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // We need to send item as a object + amount. This is why we break it down
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // Order form Handler
  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  // Submit handling function (sending user Data to server)
  const submitOrderHandler = async (userData) => {
    // Set it to true when it's loading
    setIsSubmitting(true);
    // config object
    const config = JSON.stringify({
      user: userData,
      orderedItems: cartCtx.items,
    });
    // Using axios to post
    await axios.post(
      "https://react-http-63562-default-rtdb.firebaseio.com/orders.json",
      config
    );
    // completed submitting (loading complete)
    setIsSubmitting(false);
    setDidSubmit(true);
    // Clearing cart using context
    cartCtx.removeAllItem();
  };

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

  // Modal action button (These are rendered conditionally)
  const modalActions = (
    <article className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {/* Dynamically checking if the cart has items */}
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </article>
  );

  // We will store the entire Modal in the constant and remove it once done
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <p className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </p>
      {/* Render the checkout form when click on order btn */}
      {isCheckingOut && (
        <Checkout onClose={props.onHideCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckingOut && modalActions}
    </React.Fragment>
  );

  // Loading Modal Content
  const isSubmittingModalContent = <p>Sending order data...</p>;

  // When submissing is complete
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <article className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onHideCart}
        >
          Close
        </button>
      </article>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
