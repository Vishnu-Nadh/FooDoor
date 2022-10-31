import React from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://foodoor-b2240-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!");
        }
        const responseData = await response.json();
        let meals = [];
        for (let key in responseData) {
          meals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(meals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("got error");
        setHttpError(error.message);
      }
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (httpError) {
    return (
      <section className={styles.error}>
        <h3>{httpError}</h3>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <ul>
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} id={meal.id} />
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
