import React from "react";
import styles from "./Checkout.module.css";

const Checkout = ({ onCloseForm }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form action="" method="post" className={styles.checkout}>
      <div className={styles.form__group}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="street">Street</label>
        <input type="text" id="namstreet" />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="city">City</label>
        <input type="text" id="namcity" />
      </div>
      <div className={styles.btn__group}>
        <button className="btn-primary" type="submit" onClick={onSubmitHandler}>
          Confirm Order
        </button>
        <button type="button" onClick={onCloseForm} className="btn-secondary">
          Cancel order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
