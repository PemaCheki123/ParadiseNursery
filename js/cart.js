// js/cart.js - Core Cart Logic using localStorage

/**
 * Get the current cart from localStorage
 * @returns {Array} Array of cart items
 */
function getCart() {
    const cart = localStorage.getItem('paradise_cart');
    return cart ? JSON.parse(cart) : [];
}

/**
 * Save the cart to localStorage
 * @param {Array} cart Array of cart items
 */
function saveCart(cart) {
    localStorage.setItem('paradise_cart', JSON.stringify(cart));
    updateCartCount();
}

/**
 * Add a plant to the cart
 * @param {Object} plant Plant object (id, name, price, image)
 */
function addToCart(plant) {
    let cart = getCart();
    const existing = cart.find(p => p.id === plant.id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...plant, quantity: 1 });
    }
    
    saveCart(cart);
}

/**
 * Update the quantity of an item in the cart
 * @param {number} id Plant ID
 * @param {number} qty New quantity
 */
function updateQuantity(id, qty) {
    let cart = getCart();
    const index = cart.findIndex(p => p.id === id);
    
    if (index !== -1) {
        cart[index].quantity = Math.max(0, qty);
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
    }
    
    saveCart(cart);
}

/**
 * Remove an item from the cart
 * @param {number} id Plant ID
 */
function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(p => p.id !== id);
    saveCart(cart);
}

/**
 * Update the cart icon count in the header
 */
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Update count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
