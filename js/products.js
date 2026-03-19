// js/products.js - Handle product rendering and filtering

const plants = [
    { id: 1, name: "Fiddle Leaf Fig", price: 25, image: "images/fig.jpg", category: "Indoor" },
    { id: 2, name: "Lavender", price: 15, image: "images/lavender.jpg", category: "Aromatic" },
    { id: 3, name: "Peace Lily", price: 20, image: "images/lily.jpg", category: "Indoor" },
    { id: 4, name: "Monstera", price: 30, image: "images/Monstera.jpg", category: "Indoor" },
    { id: 5, name: "Orange Tree", price: 45, image: "images/orangetree.jpg", category: "Fruit" },
    { id: 6, name: "Orchid", price: 35, image: "images/orchid.jpg", category: "Flowering" },
];

let currentFilter = 'All';

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = currentFilter === 'All' 
        ? plants 
        : plants.filter(p => p.category === currentFilter);
        
    filtered.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plant-card';
        card.innerHTML = `
            <div class="plant-image-container">
                <img src="${plant.image}" alt="${plant.name}">
            </div>
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p class="plant-price">$${plant.price}</p>
                <button class="add-to-cart-btn" onclick='handleAdd(${JSON.stringify(plant)})'>
                    Add to Cart
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleAdd(plant) {
    addToCart(plant);
    // Visual feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added! ✅';
    btn.style.background = '#4a7c44';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function renderFilters() {
    const filterContainer = document.getElementById('category-filters');
    if (!filterContainer) return;
    
    const categories = ['All', ...new Set(plants.map(p => p.category))];
    
    filterContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.style.padding = '0.5rem 1.5rem';
        btn.style.borderRadius = '20px';
        btn.style.border = '1px solid var(--primary-green)';
        btn.style.cursor = 'pointer';
        
        if (cat === currentFilter) {
            btn.style.background = 'var(--primary-green)';
            btn.style.color = 'white';
        } else {
            btn.style.background = 'white';
            btn.style.color = 'var(--primary-green)';
        }
        
        btn.onclick = () => {
            currentFilter = cat;
            renderFilters();
            renderProducts();
        };
        filterContainer.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProducts();
});
