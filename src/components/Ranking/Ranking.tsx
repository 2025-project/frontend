import React from "react";

const rankings = [
  { rank: 1, name: "엔비디아", change: "New", changeType: "new" },
  { rank: 2, name: "테슬라", change: "-", changeType: "neutral" },
  { rank: 3, name: "리게티 컴퓨팅", change: "-", changeType: "neutral" },
  { rank: 4, name: "엔비디아", change: "-1", changeType: "down" },
  { rank: 5, name: "테슬라", change: "-1", changeType: "down" },
  { rank: 6, name: "리게티컴퓨팅", change: "+1", changeType: "up" },
];

const Ranking = () => {
  return (
    <div className="w-[400px] bg-white border-2 border-[#E8E8E8] rounded-[25px] p-6">
      {/* 제목 */}
      <h2 className="text-[20px] font-bold text-black mb-1">거래량 순위</h2>
      <p className="text-[14px] text-gray-400 mb-4">2025.01.15 15:30 기준</p>
      <hr className="border-[#E8E8E8] mb-4" />

      {/* 랭킹 리스트 */}
      <ul className="space-y-2">
        {rankings.map(({ rank, name, change, changeType }) => (
          <li key={rank} className="flex justify-between items-center text-[16px] text-black">
            <div className="flex items-center">
              <span
                className={`text-[18px] font-bold mr-2 ${
                  rank <= 3 ? "text-customBlue" : "text-gray-500"
                }`}
              >
                {rank}
              </span>
              <span className="text-gray-800">{name}</span>
            </div>

            <span
              className={`text-[14px] font-medium ${
                changeType === "new"
                  ? "text-red-500"
                  : changeType === "up"
                  ? "text-red-500 flex items-center"
                  : changeType === "down"
                  ? "text-customBlue flex items-center"
                  : "text-gray-400"
              }`}
            >
              {changeType === "up" && <span className="mr-1">🔺</span>}
              {changeType === "down" && <span className="mr-1">🔻</span>}
              {change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
