import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ cartitem }) => {
  return (
    <div className={styles.cartitem}>
      <h3>{cartitem.name}</h3>
    </div>
  );
};

export default CartItem;
