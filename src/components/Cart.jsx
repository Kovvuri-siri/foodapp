import React from 'react';
const Cart = ({ cart, removeFromCart, confirmOrder }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="cart-section">
      <h3>Your Cart</h3>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price} <button onClick={() => removeFromCart(index)}>Remove</button></p>
        </div>
      ))}
      <h4>Total Amount: ₹{totalAmount}</h4>
      <button className="confirm-btn" onClick={confirmOrder}>Confirm Order</button>
    </div>
  );
};
export default Cart;