import React, { useRef, useState } from "react";

// Importing css module and other assets
import classes from "./checkout.module.css";

// Creating helper functions to optimize code and for authentication
const isEmpty = (value) => value.trim() === "";
const isFiveCharLong = (value) => value.trim().length === 5;

const Checkout = (props) => {
  // Using useRef to get all data and validate on submission
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const pincodeInputRef = useRef();
  const cityInputRef = useRef();

  // Combined State handling that input is correct
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    address: true,
    pincode: true,
  });

  // Checkout handler
  const checkoutHandler = (event) => {
    event.preventDefault();

    // All input values
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // Authenticate each one by one
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPincodeIsValid = isFiveCharLong(enteredPincode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    // We will check if all fields are valid and store it in state
    // We will do this before checking form is valid
    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      pincode: enteredPincodeIsValid,
    });

    // Check is the form valid
    const isFormValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPincodeIsValid;

    // Return and stop submission if data is inValid
    if (!isFormValid) {
      return;
    }

    // Submit the data and send value to parent
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      pincode: enteredPincode,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={checkoutHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidity.name ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.address ? classes.invalid : ""
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please enter a valid Address!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.pincode ? classes.invalid : ""
        }`}
      >
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" ref={pincodeInputRef} />
        {!formInputValidity.pincode && <p>Please enter a Pincode!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.city ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="name" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid City!</p>}
      </div>
      <article className={classes.actions}>
        <button type="click" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </article>
    </form>
  );
};

export default Checkout;
