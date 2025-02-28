"use client";

import React, { useState } from "react";
import Link from "next/link";
import NotificationSettings from "@/components/NotificationSettings/NotificationSettings";
import StockList from "@/components/StockList/StockList";
import Image from "next/image"; 

const MyPage = () => {
  const [username] = useState("000님");

  return (
    <div className="min-h-screen bg-white pt-[120px] px-8">
      {/* 상단 헤더 */}
      <header className="w-full h-[120px] bg-white flex justify-center absolute top-0 left-0 right-0">
        <div className="max-w-[1300px] w-full flex items-center justify-between px-12">
          <h1 className="text-[40px] font-bold text-gray-600">{username}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/mainpage">
                  <Image
                    src="/home.svg"
                    alt="홈 아이콘"
                    width={40}
                    height={40}
                    priority
                    className="cursor-pointer hover:opacity-80"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 회색 선 (헤더 아래 더 위로 조정) */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1300px] w-full border-b border-gray-300"></div>
      </div>

      {/* 알림 설정 */}
      <section className="flex flex-col items-center p-6">
        <div className="max-w-[1300px] w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-5 text-left">알림 설정</h2>
          <NotificationSettings />
        </div>
      </section>

      {/* 관심 종목 리스트 */}
      <section className="flex flex-col items-center p-6">
        <div className="max-w-[1300px] w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-5 text-left">관심 종목</h2>
          <StockList hideId={true} />
        </div>
      </section>
    </div>
  );
};

export default MyPage;
