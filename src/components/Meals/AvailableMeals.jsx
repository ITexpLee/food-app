import React, { useState, useEffect } from "react";

// Importing other components
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem.jsx";

// Importing Css file and Assets
import classes from "./AvailableMeals.module.css";
import axios from "axios";

const AvailableMeals = () => {
  // Managing the state of meals
  const [meals, setMeals] = useState([]);
  // Managing the loading state
  const [isLoading, setIsLoading] = useState(true);
  // Managing the Erorr State
  const [hasError, setHasErorr] = useState(null);

  // We will fetch the Meals from the Database on this page which will finally Render in Meals Component
  useEffect(() => {
    // As we cannot convert the useEffect function to async
    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          "https://react-http-63562-default-rtdb.firebaseio.com/meals.json"
        );
        // Mapping the parsed JSON data in an object
        const loadedMeals = [];
        // Loop through all the keys in data
        // Here each key id contains a movie object with name,description,price.. We store this entire thus keys: value in array;
        for (let key in res.data) {
          loadedMeals.push({
            id: key,
            name: res.data[key].name,
            description: res.data[key].description,
            price: res.data[key].price,
          });
        }
        // Set our Meals state to be loadedMeals array
        setMeals(loadedMeals);
      } catch (error) {
        setHasErorr(`Something went Error: ${error.message}!!`);
      }
    };
    // executing fetch meals
    fetchMeals();
    // Turn isLoading to false since the set Meals state change is completed
    setIsLoading(false);
  }, []);

  // Setting content variable depending on the state of meals (loaded or not)
  // We can also simply return some other jsx code depending on error or loading

  if (isLoading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>...is Loading</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes["meals-error"]}>
        <p>{hasError}</p>
      </section>
    );
  }

  // We always want to return a lean JSX code thus the logic is kept outside
  // We want a small jsx component for every meal which we will do by mapping
  const mealsList = meals.map((meal) => (
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
