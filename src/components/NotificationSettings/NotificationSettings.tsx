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

  const [inputValues, setInputValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(settings.map((item) => [item.id, item.value.toString()]))
  );

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

  // 입력 필드 값 변경 핸들러 (실시간 업데이트)
  const handleInputChange = (id: number, value: string) => {
    if (/^\d*$/.test(value)) {
      // 숫자만 입력 가능
      setInputValues((prev) => ({ ...prev, [id]: value }));
    }
  };

  // 숫자 저장 로직
  const handleSave = async (id: number) => {
    const parsedValue = parseInt(inputValues[id], 10);
    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 99) {
      alert("1~99 사이의 숫자를 입력하세요.");
      return;
    }

    // 상태 업데이트 (UI 반영)
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: parsedValue } : item
      )
    );

    // 서버로 데이터 전송 (백엔드 API 필요)
    try {
      const response = await fetch("/api/save-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, value: parsedValue }),
      });

      if (!response.ok) {
        throw new Error("서버 저장 실패");
      }

      console.log("✅ 저장 성공:", { id, value: parsedValue });
    } catch (error) {
      console.error("❌ 저장 오류:", error);
    }
  };

  return (
    <div className="max-w-[1300px] w-full p-6 text-lg bg-white">
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
            {/* 체크박스 */}
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

            {/* 숫자 입력 필드 & 저장 버튼 */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValues[item.id]}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave(item.id)}
                className={`w-16 text-center text-lg font-semibold border-b-2 focus:outline-none focus:border-blue-500 transition ${
                  item.checked ? item.color : "text-gray-400 border-gray-300"
                }`}
              />
              <button
                className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                onClick={() => handleSave(item.id)}
              >
                저장
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
