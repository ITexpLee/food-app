import React from "react";

// Importing other custom components
import Input from "../../UI/Input";

// Importing css and other assets
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* Here we pass an object containing type and id of the UI Input Component */}
      {/* This way input is configurable and it spreads with spread operator as key and value */}
      <Input
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
    </form>
  );
};

export default MealItemForm;
