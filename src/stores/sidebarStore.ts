import { create } from "zustand";

type SidebarStoreProps = {
  isSidebarOpen: boolean;
  handleSidebarState: () => void;
  handleCloserSidebar: () => void;
};

export const useSidebar = create<SidebarStoreProps>((set) => ({
  isSidebarOpen: false,
  handleSidebarState: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  handleCloserSidebar: () => set(() => ({ isSidebarOpen: false })),
}));
