import React, { useRef, useState } from "react";

// Importing other custom components
import Input from "../../UI/Input";

// Importing css and other assets
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // using reference to get the input
  // As we want to use the Ref on a custom component we need to pass it
  const amountInputRef = useRef();

  // Using state for managing the validation logic
  const [amountIsValid, setAmountIsValid] = useState(true);

  // handling submission
  const submitEventHandler = (event) => {
    event.preventDefault();
    // As we transffered to the reference to DOM input element
    const enteredAmount = amountInputRef.current.value;
    // This is the shortcut way to convert it into a number
    const enteredAmountNumber = +enteredAmount;
    // Validate the entered data 1) if string empty or if number too big or small
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      // Here return is like exit simply stops execution
      return;
    }
    // if all validation successfull send the data
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitEventHandler}>
      {/* Here we pass an object containing type and id of the UI Input Component */}
      {/* This way input is configurable and it spreads with spread operator as key and value */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount + ${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* Output error only when input is not validated */}
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
