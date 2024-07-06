import { observer } from "mobx-react-lite";
import cartStore from "../stores/cartStore";

import CartProductItem from "../components/cart/CartProductItem";

const Cart = observer(() => {
  return (
    <div className="container mx-auto min-h-screen mt-10">
      <p className="text-xl lg:text-3xl uppercase">
        Cart{" "}
        <small className="text-[12px] text-gray-500">{`(${cartStore.getCartCount()} items)`}</small>
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          {cartStore.cartItems.map((item) => (
            <CartProductItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <div className="border p-4">
            <p className="text-xl">Order Summary</p>
            <div className="w-full my-4 flex items-center gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-[90%] border pl-2 py-2"
              />
              <button className="bg-gray-700 text-white p-2 cursor-pointer">
                Apply
              </button>
            </div>
            <div className="my-4 border-b border-gray-200">
              <div className="flex justify-between mb-6">
                <p>Subtotal</p>
                <p>$ {cartStore.getProductsSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-6">
                <p>Shipping Charges</p>
                <p>$ 9.99</p>
              </div>
              <div className="flex justify-between mb-6">
                <p>Sales Tax</p>
                <p>$ 5.00</p>
              </div>
            </div>
            <div className="my-4">
              <div className="flex justify-between items-ceter">
                <p className="text-xl">Total</p>
                <p className="text-xl">
                  $ {cartStore.getTotalCartValue().toFixed(2)}
                </p>
              </div>
            </div>
            <button className="w-full bg-gray-700 text-white p-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Cart;
