import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "T-Bone Steak",
    description: "The best in Town!",
    price: 120.5,
  },
  {
    id: "m2",
    name: "Veggie Salad",
    description: "For Green Lovers!",
    price: 40.8,
  },
  {
    id: "m3",
    name: "Spagetti",
    description: "Yummy As Always",
    price: 35.7,
  },
  {
    id: "m4",
    name: "Soufflé",
    description: "Tantalizing Dessert",
    price: 25.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
