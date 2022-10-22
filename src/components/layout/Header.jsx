import React from "react";
import styles from "./Header.module.css";

const Header = ({ onOpenModel }) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>FooDoor</span>
      <button className={styles.nav__button} onClick={onOpenModel}>
        <span className={styles.nav__button_icon}>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span className={styles.nav__button_text}>Your Cart</span>
        <span className={styles.nav__button_count}>3</span>
      </button>
    </nav>
  );
};

export default Header;
