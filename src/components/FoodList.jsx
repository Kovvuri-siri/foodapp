import React from 'react';
import FoodItem from './FoodItem.jsx';
const FoodList = ({ foods, addToCart }) => (
  <div className="food-list">
    {foods.map(food => (
      <FoodItem key={food.id} food={food} addToCart={addToCart} />
    ))}
  </div>
);
export default FoodList;