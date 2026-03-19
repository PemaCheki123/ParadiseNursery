function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <div className="quantity-controls">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    </div>
  );
}

export default CartItem;