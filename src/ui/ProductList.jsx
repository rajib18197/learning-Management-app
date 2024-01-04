import { useState } from "react";

export function withToggles(Component) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayList = isCollapsed ? list.slice(0, 3) : list;

    return (
      <div>
        <h2>{title}</h2>
        <button>{isOpen ? "open" : "close"}</button>

        <ul>
          {displayList.map((item) => (
            <Component {...props} item={item} />
          ))}
        </ul>

        <button>{isCollapsed ? "Show all items" : "Show less"}</button>
      </div>
    );
  };
}

export default function ProductList({ title, list, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayList = isCollapsed ? list.slice(0, 3) : list;

  function handleClick() {
    setIsCollapsed((cur) => !cur);
  }

  function handleToggle() {
    setIsOpen((open) => !open);
    setIsCollapsed(false);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleToggle}>{isOpen ? "open" : "close"}</button>

      <ul>{displayList.map(render)}</ul>

      <button onClick={handleClick}>
        {isCollapsed ? "Show all items" : "Show less"}
      </button>
    </div>
  );
}

function Main() {
  return (
    <div>
      <ProductList
        title={"Sports"}
        list={products}
        render={(product) => <div>{product.name}</div>}
      />
    </div>
  );
}
