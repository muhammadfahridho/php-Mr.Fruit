// Product class
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Shopping cart class
  class ShoppingCart {
    constructor() {
      this.products = [Anggur];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  
    getTotal() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  
    checkout() {
      if (this.products.length === 0) {
        console.log("Your cart is empty.");
        return;
      }
  
      const total = this.getTotal();
      console.log(`Checkout completed. Total: $${total.toFixed(2)}`);
  
      // Additional logic for payment and order processing can be added here
      // For simplicity, we're just displaying the total amount in the console.
    }
  }
  
  // Example usage
  const cart = new ShoppingCart();
  
  const product1 = new Product("T-Shirt", 19.99);
  const product2 = new Product("Jeans", 39.99);
  
  cart.addProduct(product1);
  cart.addProduct(product2);
  
  console.log("Cart total:", cart.getTotal());
  
  cart.removeProduct(product1);
  
  console.log("Cart total after removing a product:", cart.getTotal());
  
  cart.checkout();
  