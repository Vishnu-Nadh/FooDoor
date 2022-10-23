import React from "react";
import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = ({ cartitem }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const removeItemHandler = () => {
    removeItem(cartitem.id);
  };
  const addItemHandler = () => {
    addItem({ ...cartitem, amount: 1 });
  };
  return (
    <div className={styles.cartitem}>
      <div className={styles.cartitem__info}>
        <p className={styles.cartitem__name}>{cartitem.name}</p>
        <div className={styles.cartitem__billing}>
          <span className={styles.price}>${cartitem.price}</span>
          <span className={styles.amount}>x {cartitem.amount}</span>
        </div>
      </div>
      <div className={styles.btns}>
        <button onClick={removeItemHandler}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <button onClick={addItemHandler}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
