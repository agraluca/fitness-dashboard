import { ReactNode } from "react";
import { useTheme } from "stores/themeStore";
import { cn } from "utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "bg-slate-100 w-full rounded p-4",
        {
          "bg-slate-800": theme === "dark",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
