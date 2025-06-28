import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList.jsx';
import Cart from './components/Cart.jsx';
import Navbar from './components/Navbar.jsx';
import RestaurantList from './components/RestaurantList.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';

const App = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [search, setSearch] = useState('');

  const fetchFoods = (restaurant) => {
    fetch(`https://backend-wck7.onrender.com/api/foods/${restaurant}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  };

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
  };

  if (orderConfirmed) return <OrderConfirmation />;

  if (page === 'home') {
    return (
      <div className="welcome-page">
        <div className="overlay">
          <h1>Welcome to Foodie Express</h1>
          <p>Select a restaurant to explore the menu</p>
          <RestaurantList selectRestaurant={(name) => {
            setSelectedRestaurant(name);
            fetchFoods(name);
            setPage('menu');
          }} />
        </div>
      </div>
    );
  }

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <h2 className="menu-heading">{selectedRestaurant} Menu</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <FoodList foods={filteredFoods} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} confirmOrder={confirmOrder} />
    </div>
  );
};
export default App;