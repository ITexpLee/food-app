import React from "react";

// Importing other components
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem.jsx";

// Importing Css file and Assets
import classes from "./AvailableMeals.module.css";

// Right now we will be using dummy data but on this page we will connect with databse

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

// We will fetch the Meals from the Database on this page which will finally Render in Meals Component
const AvailableMeals = () => {
  // We always want to return a lean JSX code thus the logic is kept outside
  // We want a small jsx component for every meal which we will do by mapping
  let mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
