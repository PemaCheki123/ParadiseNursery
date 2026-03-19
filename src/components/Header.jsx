import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Paradise Nursery</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 {cartCount} Items
        </Link>
      </nav>
    </header>
  );
}

export default Header;