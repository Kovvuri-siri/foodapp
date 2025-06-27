import React from 'react';
const Cart = ({ cart, confirmOrder }) => (
  <div className="cart-section">
    <h2>Cart</h2>
    {cart.length === 0 ? <p>Your cart is empty</p> :
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    }
    {cart.length > 0 && <button className="confirm-btn" onClick={confirmOrder}>Place your Order</button>}
  </div>
);
export default Cart;