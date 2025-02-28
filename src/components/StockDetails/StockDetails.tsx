"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import saveIcon from "../StockDetails/save.svg";
import Graphs from "../Graphs/Graphs";

interface MarketData {
  price: string;
  volume: string;
  changeRate: string;
  tradeVolume: string;
  time: string;
}

interface StockDetailsProps {
  name: string;
  symbol: string;
  priceKRW: string;
  priceUSD: string;
  marketData: MarketData[];
}

const StockDetails: React.FC<StockDetailsProps> = ({
  name,
  symbol,
  priceKRW,
  priceUSD,
  marketData,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[1197px] h-[897px] bg-white rounded-[25px] border border-[#e8e8e8] p-6 shadow-sm">
      {/* 주식 정보 */}
      <div className="flex items-center justify-between mb-4 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {name} <span className="text-gray-500 text-lg">{symbol}</span>
          </h2>
          <p className="text-3xl font-semibold text-gray-900 mt-2">
            {priceKRW} <span className="text-gray-500 text-xl">{priceUSD}</span>
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300">
          <Image
            src={saveIcon}
            alt="Save"
            width={20}
            height={20}
            className="mr-2"
          />
          저장
        </button>
      </div>

      {/* 실시간 시세 리스트 */}
      <div className="mb-4 border-t border-[#e8e8e8] pt-4">
        <h3 className="text-lg font-semibold text-gray-700">실시간 시세</h3>
        {isClient ? (
          marketData.length > 0 ? (
            <table className="w-full text-center mt-2">
              <thead>
                <tr className="border-b border-[#e8e8e8] text-gray-500 text-sm">
                  <th className="p-2">체결가</th>
                  <th className="p-2">체결량</th>
                  <th className="p-2">등락률</th>
                  <th className="p-2">거래량(주)</th>
                  <th className="p-2">시간</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((data, index) => {
                  const previousPrice =
                    index > 0
                      ? parseFloat(
                          marketData[index - 1].price.replace(/[^0-9.-]+/g, "")
                        )
                      : parseFloat(data.price.replace(/[^0-9.-]+/g, ""));

                  const currentPrice = parseFloat(
                    data.price.replace(/[^0-9.-]+/g, "")
                  );

                  return (
                    <tr
                      key={index}
                      className="border-b border-[#e8e8e8] text-gray-900 hover:bg-gray-100"
                    >
                      <td className="p-2">{data.price}</td>
                      <td
                        className={`p-2 font-semibold ${
                          currentPrice > previousPrice
                            ? "text-red-500"
                            : "text-blue-500"
                        }`}
                      >
                        {data.volume}
                      </td>
                      <td
                        className={`p-2 font-semibold ${
                          parseFloat(data.changeRate) > 0
                            ? "text-red-500"
                            : "text-blue-500"
                        }`}
                      >
                        {data.changeRate}
                      </td>
                      <td className="p-2 text-gray-500">{data.tradeVolume}</td>
                      <td className="p-2 text-gray-500">{data.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">시세 데이터가 없습니다.</p>
          )
        ) : (
          <p className="text-gray-400">로딩 중...</p>
        )}
      </div>

      {/* 그래프 영역 */}
      <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
        <Graphs />
      </div>
    </div>
  );
};

export default StockDetails;
