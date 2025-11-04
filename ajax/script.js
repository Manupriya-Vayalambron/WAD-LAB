// Cart object
let cart = {};

// Sample products array (self-contained, no server needed)
const products = [
    {id: 1, name: "Laptop", price: 500},
    {id: 2, name: "Smartphone", price: 300},
    {id: 3, name: "Headphones", price: 50},
    {id: 4, name: "Keyboard", price: 40}
];

// Display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-item";
        div.innerHTML = `${product.name} ($${product.price}) 
                         <button onclick="addToCart(${product.id})">Add</button>`;
        productList.appendChild(div);
    });
}

// Add to cart
function addToCart(id) {
    // Find product by ID
    const product = products.find(p => p.id === id);
    
    // If already in cart, increase quantity
    if(cart[id]) {
        cart[id].quantity += 1;
    } else {
        cart[id] = {name: product.name, price: product.price, quantity: 1};
    }

    updateCart();
}

// Remove from cart
function removeFromCart(id) {
    delete cart[id];
    updateCart();
}

// Update cart display dynamically
function updateCart() {
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = ""; // Clear previous

    let total = 0;
    for(let id in cart) {
        const item = cart[id];
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `${item.name} x ${item.quantity} = $${item.price * item.quantity} 
                         <button onclick="removeFromCart(${id})">Remove</button>`;
        cartDiv.appendChild(div);
    }

    document.getElementById("cart-total").innerText = `Total: $${total}`;
}

// Initialize page
window.onload = displayProducts;