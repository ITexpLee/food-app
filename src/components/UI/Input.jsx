import React from "react";

// Importing css and other asset
import classes from "./Input.module.css";

// We wrap our component with forwardRef as we want to use Ref declared
// on the custom component in parent
const Input = React.forwardRef((props, ref) => {
  return (
    <article className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </article>
  );
});

export default Input;
