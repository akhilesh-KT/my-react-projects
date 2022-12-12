import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http RestAPI link");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setLoadingError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={classes.mealsIsLoading}>
        <p>Loading Page...</p>
      </section>
    );
  }

  if (loadingError) {
    return (
      <section className={classes.mealsHttpError}>
        <p>{loadingError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
