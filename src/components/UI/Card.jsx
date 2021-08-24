import React from "react";

// Importing css and other assets
import classes from "./Card.module.css";

// This is simply a wrapper component which wraps the card
// It passes the data to the further inside card component specific to each instance
const Card = (props) => {
  return <article className={classes.card}>{props.children}</article>;
};

export default Card;
