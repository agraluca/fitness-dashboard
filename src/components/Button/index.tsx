import Spinner from "components/Spinner";
import { ComponentProps } from "react";
import { cn } from "utils/cn";

export type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
} & ComponentProps<"button">;

export default function Button({
  children,
  loading = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all",
        {
          "cursor-wait": loading,
          "disabled:cursor-not-allowed bg-gray-600 hover:bg-gray-500": disabled,
        },
        className
      )}
      {...props}
    >
      {loading ? <Spinner size={24} /> : children}
    </button>
  );
}
