import { observer } from "mobx-react-lite";
import cartStore from "../stores/cartStore";

import CartProductItem from "../components/cart/CartProductItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = observer(() => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState<string>("");
  const [couponCode, setCouponCode] = useState<string>("");

  const handleCheckout = () => {
    cartStore.clearCartItems();
    navigate("/checkout");
  };

  const handleApplyCoupon = () => {
    if (couponCode) {
      if (cartStore.checkDiscountCodeValid(couponCode)) {
        cartStore.applyDiscount(couponCode);
        setCouponCode("");
        setErrorText("");
      } else {
        setCouponCode("");
        setErrorText("Coupon code not valid!");
      }
    } else {
      setCouponCode("");
      setErrorText("Coupon code not valid!");
    }
  };

  return (
    <div className="container mx-auto min-h-screen mt-[6rem] py-6">
      <p className="text-xl lg:text-3xl uppercase">
        Cart{" "}
        <small className="text-[12px] text-gray-500">{`(${cartStore.getCartCount()} items)`}</small>
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        {cartStore.getCartCount() > 0 ? (
          <div className="flex-1">
            {cartStore.cartItems.map((item) => (
              <CartProductItem key={item.product.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex-1 text-center py-24 font-medium text-2xl">
            Add Items to Cart!
          </div>
        )}
        <div className="w-full lg:w-1/3">
          <div className="border p-4">
            <p className="text-xl">Order Summary</p>
            <div className="bg-zinc-200 p-4 my-2 font-medium text-md lg:text-xl">
              10% OFF YOUR FIRST ORDER USE FIRST10
            </div>
            <div className="w-full my-8 flex flex-col items-center gap-2 h-[100px]">
              <div className="w-[100%]">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full border pl-2 py-2"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                {errorText && (
                  <small className="py-1 font-medium text-md">
                    Coupon code not valid
                  </small>
                )}
              </div>
              <button
                onClick={handleApplyCoupon}
                className="border-zinc-300 border-2 text-zinc-700 p-2 cursor-pointer w-full"
              >
                Apply
              </button>
            </div>
            <div className="my-4 border-b border-zinc-200">
              <div className="flex justify-between mb-6">
                <p>Subtotal</p>
                <p>$ {cartStore.getProductsSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-6">
                <p>Shipping Charges</p>
                <p>$ {cartStore.getCartCount() > 0 ? "9.99" : "0.00"}</p>
              </div>
              <div className="flex justify-between mb-6">
                <p>Sales Tax</p>
                <p>$ {cartStore.getCartCount() > 0 ? "5.00" : "0.00"}</p>
              </div>
              {cartStore.discountPrice > 0 && (
                <div className="flex justify-between mb-6">
                  <p>Discount</p>
                  <p>{cartStore.discountPrice}%</p>
                </div>
              )}
            </div>
            <div className="my-4">
              <div className="flex justify-between items-ceter">
                <p className="text-xl">Total</p>
                <p className="text-xl">
                  ${" "}
                  {cartStore.getCartCount() > 0
                    ? cartStore.getTotalCartValue().toFixed(2)
                    : "0.00"}
                </p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gray-700 text-white p-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Cart;
