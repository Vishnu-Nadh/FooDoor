import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Model from "../UI/Model";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const { items: cartItems, totalAmount } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const hasItems = cartItems.length > 0;

  const onShowCheckoutForm = () => {
    setIsCheckout(true);
  };

  const onCloseForm = () => {
    setIsCheckout(false);
  };

  const cartActions = (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      {hasItems && (
        <button
          className="btn-primary"
          style={{ fontSize: "1.8rem", padding: "1rem 2rem" }}
          onClick={onShowCheckoutForm}
        >
          Order
        </button>
      )}
    </div>
  );

  const itemsClassNames = isCheckout
    ? `${styles.cart__items} ${styles.checkout}`
    : `${styles.cart__items}`;

  return (
    <Model onClose={props.onCloseModel}>
      <div className={styles.cart}>
        <ul className={itemsClassNames}>
          {cartItems.map((cartitem) => (
            <CartItem key={cartitem.id} cartitem={cartitem} />
          ))}
        </ul>
        <div className={styles.cart__billing}>
          <span className={styles.cart__amount_label}>Total Amount</span>
          <span className={styles.cart__price}>${totalAmount.toFixed(2)}</span>
        </div>
        {!isCheckout && cartActions}
        {isCheckout && hasItems && <Checkout onCloseForm={onCloseForm} />}
      </div>
    </Model>
  );
};

export default Cart;
