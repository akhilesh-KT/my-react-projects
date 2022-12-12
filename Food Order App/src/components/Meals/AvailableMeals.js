import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Taste...in budget",
    price: 15.3,
  },
  {
    id: "m2",
    name: "Garlic Bread",
    description: "A healthy breakfast!",
    price: 45.5,
  },
  {
    id: "m3",
    name: "Big Burger",
    description: "with extra cheese",
    price: 75.1,
  },
  {
    id: "m4",
    name: "Green Bowl Salad",
    description: "Green...Leafy...Healthy",
    price: 150.7,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
