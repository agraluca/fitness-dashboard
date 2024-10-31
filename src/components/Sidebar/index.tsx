import HomeIcon from "svgs/HomeIcon";

import { useTheme } from "stores/themeStore";
import { cn } from "utils/cn";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <nav
      className={cn("bg-slate-100 h-screen border-r border-slate-500", {
        "bg-slate-800": theme === "dark",
      })}
    >
      <div className="w-full flex justify-center items-center border-b border-b-slate-500 h-[84px]">
        <h1
          className={cn("text-slate-700", {
            "text-slate-50": theme === "dark",
          })}
        >
          Logo
        </h1>
      </div>
      <div className="flex flex-col gap-3 flex-1 px-3 overflow-auto items-center mt-4">
        <h2
          className={cn("text-slate-800", {
            "text-slate-300": theme === "dark",
          })}
        >
          Menu
        </h2>
        <ul className="flex flex-col items-start md:items-center gap-1">
          <li className="p-3 w-full">
            <a
              href="/"
              className="flex gap-3 items-center hover:text-slate-700 transition-all"
            >
              <HomeIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
