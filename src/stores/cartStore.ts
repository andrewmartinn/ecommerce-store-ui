import { makeAutoObservable } from "mobx";
import { CartItem, Product } from "../types";

class CartStore {
  cartItems: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addProductToCart(product: Product) {
    const existingCartItem = this.isProductInCart(product.id);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeProductFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== productId
    );
  }

  getCartCount() {
    return this.cartItems.length;
  }

  isProductInCart(productId: number) {
    return this.cartItems.find((item) => item.product.id === productId);
  }
}

const cartStore = new CartStore();
export default cartStore;
