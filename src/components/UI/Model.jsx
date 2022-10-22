import React from "react";
import styles from "./Model.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModelOverLay = () => {
  return (
    <div className={styles.model__overlay}>
      <span className={styles.close__btn}>
        <i class="fa-regular fa-circle-xmark"></i>
      </span>
      {props.children}
    </div>
  );
};

const Model = (props) => {
  return (
    <div className={styles.model}>
      <Backdrop />
      <ModelOverLay>{props.children}</ModelOverLay>
    </div>
  );
};

export default Model;
