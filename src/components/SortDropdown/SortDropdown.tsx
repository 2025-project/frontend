"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const SortDropdown = () => {
  const [sortOrder, setSortOrder] = useState<"상승순" | "하락순">("상승순");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 옵션 선택 시 상태 업데이트 및 드롭다운 닫기
  const selectSortOrder = (order: "상승순" | "하락순") => {
    setSortOrder(order);
    setIsOpen(false);
  };

  // 외부 클릭 감지하여 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* 정렬 버튼 */}
      <button
        onClick={toggleDropdown}
        className="w-[120px] flex items-center justify-between border-2 border-gray-300 rounded-[15px] px-4 py-2 bg-white text-gray-600 text-[14px] font-medium"
      >
        {sortOrder}
        <IoChevronDown className={`text-gray-500 text-[16px] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-[10px] shadow-md z-10">
          <ul className="text-gray-600 text-[14px] font-medium">
            <li
              onClick={() => selectSortOrder("상승순")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-t-[10px]"
            >
              상승순
            </li>
            <li
              onClick={() => selectSortOrder("하락순")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-b-[10px]"
            >
              하락순
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
