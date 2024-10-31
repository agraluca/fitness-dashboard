import Button from "components/Button";
import useCheckList from "./useCheckList";

export default function CheckList() {
  const {
    items,
    inputValue,
    handleChangeInput,
    handleAddItem,
    handleRemoveItem,
  } = useCheckList();

  return (
    <div className="h-full w-full p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new item"
          value={inputValue}
          onChange={handleChangeInput}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-teal-400"
        />
        <Button onClick={handleAddItem}>Add</Button>
      </div>

      <ul className="flex flex-col gap-2 max-h-[300px] overflow-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 bg-white border rounded border-teal-700"
          >
            <span className="flex-1 text-teal-700">
              <input
                type="checkbox"
                className="mr-2 rounded accent-teal-700 focus:ring-teal-400"
              />
              <span>{item}</span>
            </span>
            <button
              onClick={() => handleRemoveItem(index)}
              className="text-red-500 hover:text-red-700 transition-all"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
