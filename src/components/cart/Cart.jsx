import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Model from "../UI/Model";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import Loader from "../UI/Loader";
import Succuss from "../UI/Succuss";

const Cart = (props) => {
  const { items: cartItems, totalAmount, clearCart } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const hasItems = cartItems.length > 0;

  const onShowCheckoutForm = () => {
    setIsCheckout(true);
  };

  const onCloseForm = () => {
    setIsCheckout(false);
  };

  const onSubmitOrder = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://foodoor-b2240-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );
    setIsSubmitting(false);
    setHasSubmitted(true);
    clearCart();
  };

  const itemsClassNames = isCheckout
    ? `${styles.cart__items} ${styles.checkout}`
    : `${styles.cart__items}`;

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

  const cartContent = (
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
      {isCheckout && hasItems && (
        <Checkout onOrder={onSubmitOrder} onCloseForm={onCloseForm} />
      )}
    </div>
  );

  const cartLoader = (
    <div className={styles.container}>
      <h4>Submitting your orders.....</h4>
      <Loader />
    </div>
  );

  const cartSuccess = (
    <div className={styles.container}>
      <Succuss />
      <h4>Your order has been placed succussfully!</h4>
    </div>
  );

  return (
    <Model onClose={props.onCloseModel}>
      {!isSubmitting && !hasSubmitted && cartContent}
      {isSubmitting && cartLoader}
      {hasSubmitted && !isSubmitting && cartSuccess}
    </Model>
  );
};

export default Cart;
