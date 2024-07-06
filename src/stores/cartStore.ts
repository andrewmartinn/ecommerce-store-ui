import { makeAutoObservable } from "mobx";
import { CartItem, Product } from "../types";

class CartStore {
  cartItems: CartItem[] = [
    {
      product: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 1,
    },
    {
      product: {
        id: 3,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 2,
    },
    {
      product: {
        id: 4,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 1,
    },
  ];
  shippingCharge = 9.99;
  salesTax = 5.0;
  discountRate = 10.0;

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

  increaseProductQuantity(productId: number) {
    this.cartItems.find((item) => {
      if (item.product.id === productId) {
        item.quantity += 1;
      }
    });
  }

  decreaseProductQuantity(productId: number) {
    this.cartItems.find((item) => {
      if (item.product.id === productId) {
        item.quantity -= 1;
      }
    });
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
}

const cartStore = new CartStore();
export default cartStore;
