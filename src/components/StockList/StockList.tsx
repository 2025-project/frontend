import React from "react";

const StockList = () => {
  const stocks = [
    { name: "Tesla", price: "$710.50" },
    { name: "Microsoft", price: "$299.35" },
    { name: "NVIDIA", price: "$650.20" },
  ];

  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Stock List</h2>
      <ul className="space-y-2">
        {stocks.map((stock, index) => (
          <li key={index} className="flex justify-between text-gray-700">
            <span>{stock.name}</span>
            <span>{stock.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
