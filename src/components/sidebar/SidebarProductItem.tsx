import { Link } from "react-router-dom";
import { CartItem } from "../../types";
import { IoMdClose } from "react-icons/io";
import cartStore from "../../stores/cartStore";

interface SidebarProductItemProps {
  item: CartItem;
}

const SidebarProductItem = ({ item }: SidebarProductItemProps) => {
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div className="border border-[#e4e4e4] p-2">
          <img
            className="max-w-[50px]"
            src={item.product.image}
            alt={item.product.title}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/products/${item.product.id}`}
              className="text-[12px] max-w-[240px] hover:underline"
            >
              {item.product.title}
            </Link>
            <div
              onClick={() => cartStore.removeProductFromCart(item.product.id)}
            >
              <IoMdClose />
            </div>
          </div>
          <div className="text-[12px]">${item.product.price}</div>
        </div>
      </div>
    </div>
  );
};
export default SidebarProductItem;
