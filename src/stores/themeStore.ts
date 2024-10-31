import { create } from "zustand";

type SidebarStoreProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

export const useTheme = create<SidebarStoreProps>((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
