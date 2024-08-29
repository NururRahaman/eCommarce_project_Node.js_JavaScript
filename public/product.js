// product-list.js

// Function to redirect to add to cart page
function redirectToCartPage() {
  window.location.href = "/add-to-cart.html";
}

fetch("/api/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
              <p>${product.name} - $${product.price}</p>
              <button onclick="showProductDetails(${product.id})">View Details</button>
              <button onclick="redirectToCartPage()">Add to Cart</button> <!-- Modify here -->
          `;
      productList.appendChild(productElement);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

// Function to show product details page
function showProductDetails(productId) {
  window.location.href = `/product-details.html?id=${productId}`;
}
