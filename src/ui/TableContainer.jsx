import SortableTable from "./SortableTable";
import Table from "./Table";

export default function TableContainer() {
  const data = [
    { name: "Audi", color: "white", price: 8000 },
    { name: "Bugatti", color: "white", price: 10000 },
    { name: "Mercedes", color: "white", price: 6000 },
    { name: "Ferrari", color: "white", price: 12000 },
  ];

  const config = [
    { label: "Name", render: (car) => car.name, sortValue: (car) => car.name },
    { label: "Color", render: (car) => car.color },
    {
      label: "Price",
      render: (car) => car.price,
      sortValue: (car) => car.price,
    },
  ];

  const kenFn = (car) => car.name;

  return (
    <>
      <Table data={data} config={config} keyFn={kenFn} />
      <SortableTable data={data} config={config} keyFn={kenFn} />
    </>
  );
}
