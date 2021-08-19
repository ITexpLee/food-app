import React from "react";

// Importing Custom React Components
import HeaderCartButton from "./HeaderCartButton";

// Importing assets and Css
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    // We have regularly used React fragment as the root node
    <React.Fragment>
      {/* For the top/header part we use header tag. Div/article(symantic reasons) is for the image */}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      {/* If our styles has a dash we need to add it this way */}
      <article className={classes["main-image"]}>
        <img src={meals} alt="Table full of good Food" />
      </article>
    </React.Fragment>
  );
};

export default Header;
