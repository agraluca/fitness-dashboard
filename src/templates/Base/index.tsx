import { ReactNode } from "react";

import Menu from "components/Menu";
import Sidebar from "components/Sidebar";

import { useTheme } from "stores/themeStore";

import { cn } from "utils/cn";

import "./styles.css";

type BaseProps = {
  children: ReactNode;
};

export default function Base({ children }: BaseProps) {
  const { theme } = useTheme();
  return (
    <div className="base-wrapper">
      <div className="base-menu">
        <Menu />
      </div>

      <aside className="base-sidebar">
        <Sidebar />
      </aside>
      <main
        className={cn(`base-main bg-slate-50`, {
          "bg-slate-900": theme === "dark",
        })}
      >
        {children}
      </main>
    </div>
  );
}
