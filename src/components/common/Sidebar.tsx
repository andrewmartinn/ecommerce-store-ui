import { IoMdArrowForward } from "react-icons/io";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/cartStore";
import uiStore from "../../stores/uiStore";
import SidebarProductItem from "../sidebar/SidebarProductItem";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Sidebar = observer(() => {
  return (
    <div
      className={clsx(
        "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]",
        {
          "right-0": uiStore.isSideBarActive,
          "-right-full": !uiStore.isSideBarActive,
        }
      )}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-bold">
          Cart Items ({cartStore.getCartCount()})
        </div>
        <div className="cursor-pointer w-8 h-8 flex items-center justify-between">
          <IoMdArrowForward
            className="text-2xl"
            onClick={() => uiStore.toggleSidebar(uiStore.isSideBarActive)}
          />
        </div>
      </div>
      <div className=" flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden">
        {cartStore.cartItems.map((item) => (
          <SidebarProductItem key={item.product.id} item={item} />
        ))}
      </div>

      {cartStore.getCartCount() > 0 && (
        <div className="mt-5">
          <Link to="/cart">
            <button
              className="bg-gray-200 text-zinc-900 p-2 w-full"
              onClick={() => uiStore.toggleSidebar(uiStore.isSideBarActive)}
            >
              Procced to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
});
export default Sidebar;
