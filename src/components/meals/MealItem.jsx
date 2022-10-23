import styles from "./MealItem.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = ({ meal, id }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const { addItem } = useContext(CartContext);
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +inputAmountRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      addItem({
        id: meal.id,
        name: meal.name,
        amount: enteredAmount,
        price: meal.price,
      });
    }
  };
  return (
    <li className={styles.meal}>
      <div className={styles.meal__info}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </div>
      <form className={styles.meal__form} onSubmit={submitHandler}>
        <Input
          inputRef={inputAmountRef}
          label="Amount"
          id={`Amount-${id}`}
          input={{
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
            required: true,
          }}
        />
        <button className="btn-primary">+ Add to Cart</button>
        {!amountIsValid && (
          <p className={styles.error}>Please Enter a valid amount (1-5)!</p>
        )}
      </form>
    </li>
  );
};

export default MealItem;
