import React from "react";
import { createContext } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
};

const CartContext = createContext(initialState);

export default CartContext;
