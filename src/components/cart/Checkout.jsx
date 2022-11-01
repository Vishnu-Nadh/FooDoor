import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isValidPostalCode = (value) => value.trim().length === 6;

const Checkout = ({ onCloseForm, onOrder }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const isNameValid = !isEmpty(name);
    const isStreetValid = !isEmpty(street);
    const isPostalCodeValid = isValidPostalCode(postal);
    const isCityValid = !isEmpty(city);

    setFormValidity({
      name: isNameValid,
      street: isStreetValid,
      postal: isPostalCodeValid,
      city: isCityValid,
    });

    const isFormValid =
      isNameValid && isStreetValid && isCityValid && isPostalCodeValid;

    if (!isFormValid) return;

    onOrder({
      name,
      street,
      postalCode: postal,
      city,
    });
  };

  const nameInputClasses = `${styles.form__group} ${
    !formValidity.name ? styles.invalid : ""
  }`;
  const streetInputClasses = `${styles.form__group} ${
    !formValidity.street ? styles.invalid : ""
  }`;
  const postalInputClasses = `${styles.form__group} ${
    !formValidity.postal ? styles.invalid : ""
  }`;
  const cityInputClasses = `${styles.form__group} ${
    !formValidity.city ? styles.invalid : ""
  }`;

  return (
    <form action="" method="post" className={styles.checkout}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>This feild cannot be empty!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="namstreet" ref={streetInputRef} />
        {!formValidity.street && <p>This feild cannot be empty!</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Invalid input (6 charector required!)</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="namcity" ref={cityInputRef} />
        {!formValidity.city && <p>This feild cannot be empty!</p>}
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
