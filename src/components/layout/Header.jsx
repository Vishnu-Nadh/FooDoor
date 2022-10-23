import React from "react";
import styles from "./Header.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const Header = ({ onOpenModel }) => {
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.nav__button} ${
    isBtnAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsBtnAnimated(true);
    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>FooDoor</span>
      <button className={btnClasses} onClick={onOpenModel}>
        <span className={styles.nav__button_icon}>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span className={styles.nav__button_text}>Your Cart</span>
        <span className={styles.nav__button_count}>{numberOfCartItems}</span>
      </button>
    </nav>
  );
};

export default Header;
