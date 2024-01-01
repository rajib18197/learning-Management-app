import { lazy, useState } from "react";
import Table from "./Table";

export default function SortableTable({ ...props }) {
  const { config, data } = props;
  //   const [sortBy, setSortBy] = useState(null);
  //   const [sortOrder, setSortOrder] = useState(null);
  const [sortState, setSortState] = useState({
    sortBy: null,
    sortOrder: null,
  });

  function handleClick(value) {
    setSortState((prev) => {
      if (prev.sortOrder === null) {
        return { ...prev, sortBy: value, sortOrder: "asc" };
      }
      if (prev.sortOrder === "asc") {
        return { ...prev, sortBy: value, sortOrder: "desc" };
      }

      if (prev.sortOrder === "desc") {
        return { ...prev, sortBy: null, sortOrder: null };
      }
    });
  }

  const updatedConfig = config.map((conf) => {
    if (!conf.sortValue) return { ...conf };

    return {
      ...conf,
      header: () => (
        <th onClick={() => handleClick(conf.label)}>
          <div>
            <span>
              {getSortIcon(conf.label, sortState.sortBy, sortState.sortOrder)}
            </span>
            <span>{conf.label}</span>
          </div>
        </th>
      ),
    };
  });

  let updateData = data;

  if (sortState.sortBy && sortState.sortOrder) {
    const { sortValue } = config.find((d) => d.label === sortState.sortBy);

    updateData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const order = sortState.sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * order;
      } else {
        return (valueA - valueB) * order;
      }
    });
  }

  return (
    <>
      <Table {...props} data={updateData} config={updatedConfig} />
    </>
  );
}

function getSortIcon(sortValue, sortBy, sortOrder) {
  console.log(sortBy, sortOrder, sortValue);
  if (sortValue !== sortBy) {
    return "Both Icons";
  }
  if (sortValue === sortBy && sortOrder === "asc") {
    return "Asc";
  }

  if (sortValue === sortBy && sortValue === "desc") {
    return "Desc";
  }

  if (sortValue === sortBy && sortOrder === null) {
    return "Both Icons";
  }
}
