// console.log("hello from cart js");

const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
   
    const product = productField.value;
    const quantity = quantityField.value;

    // Clear input fields
    productField.value = '';
    quantityField.value = '';

    // Save product to local storage
    saveProductToCart(product, quantity);

    // Display the product
    displayProduct(product, quantity);
}

const saveProductToCart = (product, quantity) => {
    const cart = getShoppingCart();
    cart[product] = quantity; // Add product and quantity to the cart object
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
}

const getShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    
    return cart;
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const displayCartOnLoad = () => {
    const cart = getShoppingCart();
    for (const product in cart) {
        displayProduct(product, cart[product]);
    }
}

// Display cart products when the page loads
document.addEventListener('DOMContentLoaded', displayCartOnLoad);