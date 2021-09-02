import { classes } from "istanbul-lib-coverage";
import React from "react";

// Importing css module and other assets
import "./checkout.module.css";

const Checkout = () => {
  return (
    <form>
      <div class={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div class={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <div class={classes.control}>
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" />
      </div>
      <div class={classes.control}>
        <label htmlFor="city">City</label>
        <input type="name" id="city" />
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
