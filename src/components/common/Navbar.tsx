import { BsBag } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import uiStore from "../../stores/uiStore";
import { Link } from "react-router-dom";
import cartStore from "../../stores/cartStore";
import Logo from "../../assets/logo.svg";
import clsx from "clsx";

const Navbar = observer(() => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60
        ? setIsNavbarScrolled(true)
        : setIsNavbarScrolled(false);
    });
  }, []);

  return (
    <header
      className={clsx("fixed w-full z-10 transition-all", {
        "bg-white py-4 shadow-md": isNavbarScrolled,
        "bg-none py-4": !isNavbarScrolled,
      })}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[50px]" />
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
