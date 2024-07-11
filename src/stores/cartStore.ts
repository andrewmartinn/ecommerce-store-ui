import { makeAutoObservable } from "mobx";
import { CartItem, Product } from "../types";

class CartStore {
  cartItems: CartItem[] = [];
  shippingCharge = 9.99;
  salesTax = 5.0;
  discountRate = 10.0;

  constructor() {
    makeAutoObservable(this);
    this.loadCartFromLocalStorage();
  }

  addProductToCart(product: Product) {
    const existingCartItem = this.isProductInCart(product.id);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.saveCartToLocalStorage();
  }

  removeProductFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== productId
    );
    this.saveCartToLocalStorage();
  }

  increaseProductQuantity(productId: number) {
    this.cartItems.find((item) => {
      if (item.product.id === productId) {
        item.quantity += 1;
      }
    });
    this.saveCartToLocalStorage();
  }

  decreaseProductQuantity(productId: number) {
    this.cartItems.find((item) => {
      if (item.product.id === productId) {
        item.quantity -= 1;
      }
    });
    this.saveCartToLocalStorage();
  }

  getProductsSubtotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getTotalCartValue() {
    return this.getProductsSubtotal() + this.shippingCharge + this.salesTax;
  }

  getCartCount() {
    return this.cartItems.length;
  }

  isProductInCart(productId: number) {
    return this.cartItems.find((item) => item.product.id === productId);
  }

  saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem("cart");
    console.log(savedCartItems);

    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
      console.log(savedCartItems);
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
