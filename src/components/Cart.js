
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, getTotalAmount } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price} 
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total Amount: ${getTotalAmount()}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
