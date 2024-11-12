//Graded Assessment: Working with JSON Data

/* Problem:

You are tasked with implementing a product management system. The system will use JSON data for storing information about products. Each product has the following properties:

· id: Unique identifier for the product.

· name: Name of the product.

· category: Category of the product.

· price: Price of the product.

· available: Boolean indicating if the product is in stock.

Tasks:

1. Parse the JSON data

2. Add a new product

3. Update the price of a product

4. Filter products based on availability

5. Filter products by category
*/

const productData = `
[
  {"id": 101, "name": "Laptop", "category": "Electronics", "price": 120000, "available": true},
  {"id": 102, "name": "Office Chair", "category": "Furniture", "price": 15000, "available": false},
  {"id": 103, "name": "Smartphone", "category": "Electronics", "price": 80000, "available": true}
]`;

// Task 1: Parse the JSON data
function parseJSONData(data) {
  try {
    const products = JSON.parse(data);
    console.log("Parsed Product Data:", products);
    return products;
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return [];
  }
}

// Initialize the products array with parsed data
let products = parseJSONData(productData);

// Task 2: Add a new product
function addProduct(newProduct) {
  if (products.some(product => product.id === newProduct.id)) {
    console.error("Product with this ID already exists.");
  } else {
    products.push(newProduct);
    console.log("New product added:", newProduct);
  }
}

// Task 3: Update the price of a product
function updateProductPrice(productId, newPrice) {
  const product = products.find(product => product.id === productId);
  if (product) {
    product.price = newPrice;
    console.log("Updated product price:", product);
  } else {
    console.error("Product not found.");
  }
}

// Task 4: Filter products based on availability
function filterAvailableProducts() {
  const availableProducts = products.filter(product => product.available);
  console.log("Available products:", availableProducts);
  return availableProducts;
}

// Task 5: Filter products by category
function filterProductsByCategory(category) {
  const productsByCategory = products.filter(product => product.category === category);
  console.log(`Products in category "${category}":`, productsByCategory);
  return productsByCategory;
}

// Adding a new product to the catalog
addProduct({"id": 104, "name": "Desk Lamp", "category": "Furniture", "price": 4500, "available": true});
updateProductPrice(101, 130000);
filterAvailableProducts();
filterProductsByCategory("Electronics");
