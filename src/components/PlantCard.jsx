function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="plant-price">${plant.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(plant)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PlantCard;