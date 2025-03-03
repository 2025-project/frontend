"use client";

import React, { useState } from "react";
import Image from "next/image";

type ToastOptions = {
  type?: "normal" | "success" | "error" | "warning";
  duration?: number;
};

type ToastMessage = {
  id: number;
  message: string;
  type: "normal" | "success" | "error" | "warning";
};

const NotificationSettings = () => {
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [settings, setSettings] = useState([
    { id: 1, label: "관심종목 거래량", value: 10, checked: true, color: "text-gray-600" },
    { id: 2, label: "관심종목 상승율", value: 10, checked: false, color: "text-red-500" },
    { id: 3, label: "관심종목 하락율", value: 10, checked: true, color: "text-blue-500" },
  ]);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(settings.map((item) => [item.id, item.value.toString()]))
  );

  // ✅ 토스트 메시지 상태
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  let toastCounter = 0;

  // ✅ 토스트 메시지 표시 함수
  const showToast = (message: string, options?: ToastOptions) => {
    const id = ++toastCounter;
    const type = options?.type || "normal";
    const duration = options?.duration || 3000;

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

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

  // 입력 필드 값 변경 핸들러
  const handleInputChange = (id: number, value: string) => {
    if (/^\d*$/.test(value)) {
      setInputValues((prev) => ({ ...prev, [id]: value }));
    }
  };

  // 숫자 저장 로직
  const handleSave = async (id: number) => {
    const parsedValue = parseInt(inputValues[id], 10);
    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 99) {
      showToast("1~99 사이의 숫자를 입력하세요.", { type: "error" });
      return;
    }

    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: parsedValue } : item
      )
    );

    showToast("알림 설정이 저장되었습니다.", { type: "success" });
  };

  return (
    <div className="max-w-[1300px] w-full p-6 text-lg bg-white">
      {/* 토스트 메시지 */}
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => (
          <div key={id} className={`toast toast-${type}`}>
            {message}
          </div>
        ))}
      </div>

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

            {/* 숫자 입력 필드 */}
            <input
              type="text"
              value={inputValues[item.id]}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              onBlur={() => handleSave(item.id)}
              onKeyDown={(e) => e.key === "Enter" && handleSave(item.id)}
              disabled={!item.checked}
              className={`w-16 text-center text-lg font-semibold border-b-2 focus:outline-none focus:border-blue-500 transition ${
                item.checked ? item.color : "text-gray-400 border-gray-300"
              }`}
            />

            <span className="text-gray-500">이상일 때 알려주세요</span>
          </div>
        ))}
      </div>

      {/* 토스트 스타일 */}
      <style jsx>{`
        .toast-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .toast {
          min-width: 250px;
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          opacity: 1;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .toast-success { background: #4caf50; color: white; }
        .toast-error { background: #f44336; color: white; }
      `}</style>
    </div>
  );
};

export default NotificationSettings;
