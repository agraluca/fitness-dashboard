import { ChangeEvent, useState } from "react";

export default function useCheckList() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    const parsedInput = inputValue.trim();
    if (!parsedInput) return;
    setItems((prev) => [...prev, parsedInput]);
    setInputValue("");
  };

  const handleRemoveItem = (itemIndex: number) => {
    setItems((prev) => {
      return prev.filter((_, index) => index !== itemIndex);
    });
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    items,
    inputValue,
    handleChangeInput,
    handleAddItem,
    handleRemoveItem,
  };
}
