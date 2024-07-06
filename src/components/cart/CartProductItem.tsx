import { CartItem } from "../../types";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/cartStore";

interface CartProductItemProps {
  item: CartItem;
}

const CartProductItem = observer(({ item }: CartProductItemProps) => {
  return (
    <div
      className="flex gap-x-4 py-4 border-b border-gray-200 w-full"
      key={item.product.id}
    >
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div className="border border-[#e4e4e4] p-2">
          <img
            className="max-w-[50px] lg:max-w-[50px]"
            src={item.product.image}
            alt={item.product.title}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/products/${item.product.id}`}
              className="text-[12px] max-w-[240px] lg:text-[16px] hover:underline"
            >
              {item.product.title}
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => cartStore.removeProductFromCart(item.product.id)}
            >
              <IoMdClose />
            </div>
          </div>
          <p className="text-gray-500 text-sm">$ {item.product.price}</p>
          <div className=" flex gap-x-2 mt-4">
            <div className="flex flex-1 max-w-[100px] border items-center h-full font-medium">
              <button
                className="flex-1 flex justify-center items-center cursor-pointer"
                onClick={() =>
                  cartStore.decreaseProductQuantity(item.product.id)
                }
                disabled={item.quantity === 1}
              >
                <IoMdRemove />
              </button>
              <div className="h-full flex just-center items-center px-2">
                {item.quantity}
              </div>
              <button
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  cartStore.increaseProductQuantity(item.product.id)
                }
              >
                <IoMdAdd />
              </button>
            </div>
            <div className="text-[16px] flex-1 flex justify-end items-center">
              $ {(item.product.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default CartProductItem;
