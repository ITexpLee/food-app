import React, { Fragment, useState } from "react";

// Importing Custom Components
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // Managing Cart State
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* Rendering Cart with Modal as it is along the Root we render it out of main and on top */}
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      {/* Rendering page header */}
      <Header onShowCart={showCartHandler} />
      {/* Rendering our main page components here */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
