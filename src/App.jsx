import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // --- Cart state here ---
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart(prev => {
      const existing = prev.find(p => p.id === plant.id);
      if (existing) {
        return prev.map(p =>
          p.id === plant.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...plant, quantity: 1 }];
      }
    });
  }

  function updateQuantity(id, qty) {
    setCart(prev =>
      prev
        .map(p => (p.id === id ? { ...p, quantity: Math.max(0, qty) } : p))
        .filter(p => p.quantity > 0)
    );
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  // --- Routing ---
  return (
    <Router>
      {/* Pass cartCount to header */}
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Pass addToCart to ProductListing so it can add plants */}
        <Route path="/products" element={<ProductListing addToCart={addToCart} />} />
        {/* Pass cart and cart functions to ShoppingCart */}
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;