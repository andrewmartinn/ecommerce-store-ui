import { BsBag } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import uiStore from "../../stores/uiStore";

const Navbar = observer(() => {
  return (
    <div>
      <div>Navbar</div>
      <div onClick={() => uiStore.toggleSidebar(uiStore.isSideBarActive)}>
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
});
export default Navbar;
