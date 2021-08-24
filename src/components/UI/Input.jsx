import React from "react";

// Importing css and other asset
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <article className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </article>
  );
};

export default Input;
