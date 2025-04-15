import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("are you sure to delete all the task");
    if (confirmed) return setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdateItems={handleToggleItems}
        handleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>Travel and Don't forget</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescribtion] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescribtion("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your Trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDescribtion(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({
  items,
  onDeleteItems,
  onUpdateItems,
  handleClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedByItems;

  if (sortBy === "input") sortedByItems = items;
  if (sortBy === "description")
    sortedByItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedByItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedByItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By input Order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={() => handleClearItems()}>Clear</button>
      </div>
    </div>
  );
}

function Items({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li>
      {" "}
      <input
        type="checkbox"
        className="checked"
        value={item.packed}
        onChange={() => onUpdateItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `you're done`
          : `you have ${numItems} in your list, and you already packed ${packedItems}
     (${percentage}%)`}
      </em>
    </footer>
  );
}
