import { Fragment } from "react";

export default function Table({ data, config, keyFn }) {
  // console.log(data, config, keyFn);
  const renderedColumns = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((cell) => (
      <td key={config.label}>{cell.render(rowData)}</td>
    ));
    return <tr key={keyFn(rowData)}>{renderedCells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{renderedColumns}</tr>
      </thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
}
