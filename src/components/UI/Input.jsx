import styles from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(({ label, input, id, inputRef }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} id={id} ref={inputRef} />
    </div>
  );
});

export default Input;
