import { BsBag } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import uiStore from "../../stores/uiStore";
import { Link } from "react-router-dom";
import cartStore from "../../stores/cartStore";
import Logo from "../../assets/logo.svg";

const Navbar = observer(() => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between h-full py-4 px-2">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[40px]" />
        </Link>
        <button
          className="flex relative"
          onClick={() => uiStore.toggleSidebar(uiStore.isSideBarActive)}
        >
          <BsBag className="text-2xl" />
          {cartStore.getCartCount() > 0 && (
            <div className="bg-red-500 text-white absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center  ">
              {cartStore.getCartCount()}
            </div>
          )}
        </button>
      </div>
    </header>
  );
});
export default Navbar;
