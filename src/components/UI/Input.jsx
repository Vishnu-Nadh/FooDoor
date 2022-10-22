import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, input, id }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} id={id} />
    </div>
  );
};

export default Input;
