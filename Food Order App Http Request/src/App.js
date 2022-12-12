import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };
  const cartHideHandler = () => {
    setCartVisible(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={cartHideHandler} />}
      <Header onVisibleCart={cartVisibleHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
