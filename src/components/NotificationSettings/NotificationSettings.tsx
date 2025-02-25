"use client";

import React, { useState } from "react";
import Image from "next/image";

const NotificationSettings = () => {
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [settings, setSettings] = useState([
    { id: 1, label: "관심종목 거래량", value: 28, checked: true, color: "text-gray-600" },
    { id: 2, label: "관심종목 상승율", value: 30, checked: false, color: "text-red-500" },
    { id: 3, label: "관심종목 하락율", value: 30, checked: true, color: "text-blue-500" },
  ]);

  // 알림 토글 핸들러
  const toggleNotification = () => setIsNotificationOn(!isNotificationOn);

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (id: number) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // 숫자 변경 핸들러 (+, - 버튼 사용)
  const handleValueChange = (id: number, delta: number) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, value: Math.max(1, Math.min(99, item.value + delta)) }
          : item
      )
    );
  };

  return (
    <div className="w-[600px] p-6 text-lg">
      {/* 알림 설정 제목 */}
      <h2 className="text-2xl font-bold text-gray-700 mb-5">알림 설정</h2>

      {/* 알림 토글 */}
      <div className="flex items-center space-x-4 mb-6">
        <Image src="/bell.svg" alt="알림 아이콘" width={32} height={32} priority />
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isNotificationOn}
            onChange={toggleNotification}
          />
          <div className="w-16 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>
          <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-8 transition"></div>
        </label>
        <span className="text-gray-500 text-lg">
          {isNotificationOn ? "알림이 켜졌습니다." : "알림이 꺼졌습니다."}
        </span>
      </div>

      {/* 알림 옵션 리스트 */}
      <div className="space-y-4">
        {settings.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-4 ${
              item.checked ? "text-gray-900 font-medium" : "text-gray-400"
            }`}
          >
            {/* ✅ 체크 모양만 나타나는 체크박스 */}
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
                className="sr-only peer"
              />
              <div
                className={`w-6 h-6 flex items-center justify-center rounded border transition-all duration-200 ${
                  item.checked ? "border-blue-500" : "border-gray-400"
                }`}
              >
                {item.checked && (
                  <span className="text-blue-500 text-lg font-bold scale-100 peer-checked:scale-110 transition-transform">
                    ✓
                  </span>
                )}
              </div>
            </label>

            {/* 알림 설정 텍스트 */}
            <span>{item.label}</span>

            {/* 숫자 조절 (증가/감소 버튼 방식) */}
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 text-gray-600 hover:text-black"
                onClick={() => handleValueChange(item.id, -1)}
                disabled={item.value <= 1}
              >
                -
              </button>
              <span
                className={`px-4 text-lg font-semibold ${
                  item.checked ? item.color : "text-gray-400"
                }`}
              >
                {item.value}%
              </span>
              <button
                className="px-2 py-1 text-gray-600 hover:text-black"
                onClick={() => handleValueChange(item.id, 1)}
                disabled={item.value >= 99}
              >
                +
              </button>
            </div>

            <span className="text-gray-500">이상일 때 알려주세요</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
