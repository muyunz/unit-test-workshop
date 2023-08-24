import { useState } from "react";

function List() {
  const [items, setItems] = useState<Array<Record<string, string>>>([]);
  const onAddClick = () => setItems([...items, {}]);
  const onRemoveClick = (index: number) => () => {
    const patch = [...items];
    patch.splice(index, 1);
    setItems(patch);
  };
  return (
    <div>
      <button onClick={onAddClick}>+</button>
      <ul>
        {items.map((_, index) => (
          <li key={index}>
            <input />
            <button onClick={onRemoveClick(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
