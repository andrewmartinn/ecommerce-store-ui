import { makeAutoObservable } from "mobx";
import { CartItem, Product } from "../types";

class CartStore {
  cartItems: CartItem[] = [];
  discountPrice: number = 0;

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
    const shippingCharge = 9.99;
    const salesTax = 5.0;
    const totalCartAmount =
      this.getProductsSubtotal() + shippingCharge + salesTax;
    const discountTotal =
      totalCartAmount - totalCartAmount * (this.discountPrice / 100);
    return discountTotal;
  }

  applyDiscount(code: string) {
    if (this.checkDiscountCodeValid(code)) {
      this.discountPrice = 10;
    } else {
      this.discountPrice = 0;
    }
  }

  checkDiscountCodeValid(code: string) {
    if (code === "FIRST10" || code === "first10") return true;
    return false;
  }

  getCartCount() {
    return this.cartItems.length;
  }

  isProductInCart(productId: number) {
    return this.cartItems.find((item) => item.product.id === productId);
  }

  clearCartItems() {
    this.cartItems = [];
    this.discountPrice = 0;
    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem("cart");
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
