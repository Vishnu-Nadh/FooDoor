import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Model from "../UI/Model";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const { items: cartItems, totalAmount } = useContext(CartContext);
  const hasItems = cartItems.length > 0;
  
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
          <span className={styles.cart__price}>${totalAmount.toFixed(2)}</span>
        </div>
        <div style={{ padding: "1rem", textAlign: "center" }}>
          {hasItems && (
            <button
              className="btn-primary"
              style={{ fontSize: "1.8rem", padding: "1rem 2rem" }}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </Model>
  );
};

export default Cart;
