import React, { useContext } from "react";

// Importing other custom components
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext.jsx";

// Importing css and assets
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  // usingContext to send data to the app wide context
  const cartCtx = useContext(CartContext);

  // Handling the amount from children form
  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // toFixed keeps it to 2 decimal places
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <article>
        <h3>{props.name}</h3>
        <p className={classes.desc}>{props.desc}</p>
        <p className={classes.price}>{price}</p>
      </article>
      <article>
        <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
      </article>
    </li>
  );
};

export default MealItem;
