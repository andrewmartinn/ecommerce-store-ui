import { makeAutoObservable } from "mobx";

class UIStore {
  isSideBarActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar(sidebarState: boolean) {
    this.isSideBarActive = !sidebarState;
  }
}

const uiStore = new UIStore();
export default uiStore;
