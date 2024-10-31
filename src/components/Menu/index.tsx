import Button from "components/Button";
import { useTheme } from "stores/themeStore";
import { cn } from "utils/cn";

export default function Menu() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={cn(
        "flex items-center p-2 w-full h-full bg-slate-100 border-b border-b-slate-500 justify-end",
        {
          "bg-slate-800": theme === "dark",
        }
      )}
    >
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </header>
  );
}
