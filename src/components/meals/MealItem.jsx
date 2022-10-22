import React from "react";
import styles from "./MealItem.module.css";
import Input from "../UI/Input";

const MealItem = ({ meal, id }) => {
  return (
    <li className={styles.meal}>
      <div className={styles.meal__info}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </div>
      <form className={styles.meal__form}>
        <Input
          label="Amount"
          id={`Amount-${id}`}
          input={{
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
          }}
        />
        <button className="btn-primary">+ Add to Cart</button>
      </form>
    </li>
  );
};

export default MealItem;
