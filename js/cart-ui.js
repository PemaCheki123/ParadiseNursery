// js/cart-ui.js - Handle rendering the cart page

function renderCart() {
    const container = document.getElementById('cart-container');
    if (!container) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Your basket is empty 😢</p>
                <a href="products.html">
                    <button class="add-to-cart-btn" style="width: auto;">Start Shopping</button>
                </a>
            </div>
        `;
        return;
    }
    
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    let html = `
        <div class="cart-summary" style="margin-bottom: 2rem; padding: 1rem; background: #f9f9f9; border-radius: 15px;">
            <p><strong>Total Items:</strong> ${totalItems}</p>
            <p><strong>Total Investment:</strong> $${totalCost.toFixed(2)}</p>
        </div>
        <div class="cart-items">
    `;
    
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Unit Price: $${item.price}</p>
                    <p>Total: $${item.price * item.quantity}</p>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="deleteItem(${item.id})">Delete</button>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        <div style="margin-top: 3rem; display: flex; justify-content: space-between; align-items: center;">
            <a href="products.html" style="text-decoration: none; color: var(--primary-green); font-weight: 600;">
                ← Continue Curating
            </a>
            <button 
                class="add-to-cart-btn" 
                style="width: auto; padding: 1rem 3rem;"
                onclick="checkout()"
            >
                Checkout Now
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

function changeQuantity(id, qty) {
    updateQuantity(id, qty);
    renderCart();
}

function deleteItem(id) {
    removeItem(id);
    renderCart();
}

function checkout() {
    alert('Thank you for your purchase! Our green experts will prepare your plants.');
    // Optional: clear cart after checkout
    // saveCart([]);
    // renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);
