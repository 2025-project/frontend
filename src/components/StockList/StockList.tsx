import React from "react";
import Image from "next/image";

const stockData = [
  { id: 1, logo: "/nvidia.svg", name: "엔비디아", price: "111,595원", change: "+8,671원", changeRate: "(8.4%)", volume: "6,500주", amount: "7.2억원" },
  { id: 2, logo: "/nvidia.svg", name: "엔비디아", price: "111,595원", change: "+8,671원", changeRate: "(8.4%)", volume: "6,500주", amount: "7.2억원" },
  { id: 3, logo: "/nvidia.svg", name: "엔비디아", price: "111,595원", change: "+8,671원", changeRate: "(8.4%)", volume: "6,500주", amount: "7.2억원" },
  { id: 4, logo: "/nvidia.svg", name: "엔비디아", price: "111,595원", change: "+8,671원", changeRate: "(8.4%)", volume: "6,500주", amount: "7.2억원" },
];

const StockList = () => {
  return (
    <div className="w-[1306px] bg-white rounded-lg overflow-hidden">
      <table className="w-full text-right">
        <thead>
          <tr className="bg-white h-[50px] text-gray-500 text-[14px] font-thin">
            <th className="px-6 pr-4 text-right w-[20%]">종목</th>
            <th className="px-6 pr-4 w-[15%]">현재가</th>
            <th className="px-6 pr-4 w-[20%]">등락률</th>
            <th className="px-6 pr-4 w-[20%]">거래대금</th>
            <th className="px-6 pr-4 w-[20%]">거래량</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={stock.id} className={`h-[65px] text-[16px] text-gray-900 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>  
              <td className="px-6 pr-4 h-full text-right w-[20%]">  
                <div className="flex items-center justify-end space-x-4 h-full">
                  <div className="pr-1 text-customBlue font-bold">{stock.id}</div>
                  <div><Image src={stock.logo} alt={`${stock.name} 로고`} width={24} height={24} priority /></div>
                  <div>{stock.name}</div>
                </div>
              </td>
              <td className="px-6 pr-4 h-full w-[15%]">{stock.price}</td>
              <td className="px-6 pr-4 h-full text-red-500 font-medium w-[20%]">
                {stock.change} <span className="text-[14px] ml-1">{stock.changeRate}</span>
              </td>
              <td className="px-6 pr-4 h-full w-[20%]">{stock.amount}</td>
              <td className="px-6 pr-4 h-full w-[20%]">{stock.volume}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
