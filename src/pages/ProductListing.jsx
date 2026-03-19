import { useState } from 'react';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25, image: "/images/fig.jpg", category: "Indoor" },
  { id: 2, name: "Lavender", price: 15, image: "/images/lavender.jpg", category: "Aromatic" },
  { id: 3, name: "Peace Lily", price: 20, image: "/images/lily.jpg", category: "Indoor" },
  { id: 4, name: "Monstera", price: 30, image: "/images/Monstera.jpg", category: "Indoor" },
  { id: 5, name: "Orange Tree", price: 45, image: "/images/orangetree.jpg", category: "Fruit" },
  { id: 6, name: "Orchid", price: 35, image: "/images/orchid.jpg", category: "Flowering" },
];

function ProductListing({ addToCart }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(plants.map(p => p.category))];

  const filteredPlants = filter === 'All' 
    ? plants 
    : plants.filter(p => p.category === filter);

  return (
    <div className="product-listing-container">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-green)' }}>
        Our Premium Collection
      </h2>
      
      <div className="category-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              border: '1px solid var(--primary-green)',
              background: filter === cat ? 'var(--primary-green)' : 'white',
              color: filter === cat ? 'white' : 'var(--primary-green)',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-listing">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;