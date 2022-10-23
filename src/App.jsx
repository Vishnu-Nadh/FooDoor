import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import { useState } from "react";
import { CartContextProvider } from "./store/CartProvider";

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  const openModelHandler = () => {
    setModelOpen(true);
  };
  const closeModelHandler = () => {
    setModelOpen(false);
  };
  return (
    <CartContextProvider>
      <div className="app">
        <Header onOpenModel={openModelHandler} />
        {modelOpen && <Cart onCloseModel={closeModelHandler} />}
        <main className="main">
          <AvailableMeals />
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
