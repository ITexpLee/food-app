import React from "react";

// Importing other custom components
import MealItemForm from "./MealItemForm";

// Importing css and assets
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <article>
        <h3>{props.name}</h3>
        <p className={classes.desc}>{props.desc}</p>
        <p className={classes.price}>{price}</p>
      </article>
      <article>
        <MealItemForm id={props.id} />
      </article>
    </li>
  );
};

export default MealItem;
