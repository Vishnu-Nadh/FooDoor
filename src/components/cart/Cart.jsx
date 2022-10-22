import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Model from "../UI/Model";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 13.99 }];
  return (
    <Model onClose={props.onCloseModel}>
      <div className={styles.cart}>
        <ul className={styles.cart__items}>
          {cartItems.map((cartitem) => (
            <CartItem key={cartitem.id} cartitem={cartitem} />
          ))}
        </ul>
        <div className={styles.cart__billing}>
          <span className={styles.cart__amount_label}>Total Amount</span>
          <span className={styles.cart__price}>${13.99}</span>
        </div>
        <button
          className="btn-primary"
          style={{ fontSize: "1.8rem", padding: "1rem 2rem" }}
        >
          Order
        </button>
      </div>
    </Model>
  );
};

export default Cart;
