import React, { Fragment } from "react";

// Importing other custom components required
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// Importing assets and css

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
