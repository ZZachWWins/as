// src/pages/Cart.jsx (Classes updated)
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../context/CartContext';
import StripeCheckout from '../components/StripeCheckout';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <Helmet>
          <title>Cart - Activate Supplement</title>
        </Helmet>
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Helmet>
        <title>Cart - Activate Supplement</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div style={{ marginBottom: '2rem' }}>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mb-8">
          <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        <StripeCheckout />
        <Link to="/shop" className="block text-center mt-4 text-primary hover:underline">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;