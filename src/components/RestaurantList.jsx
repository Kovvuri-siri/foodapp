import React from 'react';
const restaurants = [
  { name: 'Spicy Hub', location: 'Tadepalligudem', image: 'https://tse4.mm.bing.net/th?id=OIP.Yk5OqJEAj0Hsc6m12tIy3wHaE8&pid=Api&P=0&h=180' },
  { name: 'Tandoori Tales', location: 'Tadepalligudem', image: 'https://tse4.mm.bing.net/th?id=OIP.OJxUariOxhWGaE347qpF1QHaEK&pid=Api&P=0&h=180' },
  { name: 'Pizza Palace', location: 'Tadepalligudem', image: 'https://tse2.mm.bing.net/th?id=OIP.goC5ME6ss_E9Epa20icgkAHaEU&pid=Api&P=0&h=180' }
];
const RestaurantList = ({ selectRestaurant }) => (
  <div className="restaurant-list">
    {restaurants.map((rest, index) => (
      <div key={index} className="restaurant" onClick={() => selectRestaurant(rest.name)}>
        <img src={rest.image} alt={rest.name} />
        <h3>{rest.name}</h3>
        <p>{rest.location}</p>
      </div>
    ))}
  </div>
);
export default RestaurantList;
