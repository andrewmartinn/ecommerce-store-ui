import { IoMdArrowForward } from "react-icons/io";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/cartStore";
import uiStore from "../../stores/uiStore";
import SidebarProductItem from "../sidebar/SidebarProductItem";

const Sidebar = observer(() => {
  return (
    <div
      className={`${
        uiStore.isSideBarActive ? "-right-full" : "right-0"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
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
      <div>
        {cartStore.cartItems.map((item) => (
          <SidebarProductItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  );
});
export default Sidebar;
