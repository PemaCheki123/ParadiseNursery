// src/pages/ShoppingCart.jsx
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function ShoppingCart({ cart, updateQuantity, removeItem }) {
  // Calculate total number of items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total cost
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2 style={{ color: 'var(--primary-green)', marginBottom: '1.5rem', textAlign: 'center' }}>
        Your Botanical Basket
      </h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Your basket is empty 😢</p>
          <Link to="/products">
            <button className="add-to-cart-btn" style={{ width: 'auto' }}>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary" style={{ marginBottom: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '15px' }}>
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Investment:</strong> ${totalCost.toFixed(2)}</p>
          </div>

          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-green)', fontWeight: '600' }}>
              ← Continue Curating
            </Link>
            <button 
              className="add-to-cart-btn" 
              style={{ width: 'auto', padding: '1rem 3rem' }}
              onClick={() => alert('Thank you for your purchase! Our green experts will prepare your plants.')}
            >
              Checkout Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;