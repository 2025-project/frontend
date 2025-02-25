"use client";

import React, { useState } from "react";
import Link from "next/link";
import NotificationSettings from "@/components/NotificationSettings/NotificationSettings";
import Image from "next/image"; 

const MyPage = () => {
  const [username] = useState("000님");

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      {/* 상단 헤더 */}
      <header className="w-full h-[120px] bg-white flex justify-center absolute top-0 left-0 right-0">
        <div className="max-w-[1200px] w-full flex items-center justify-between px-12">
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

      {/* 회색 선 */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1300px] w-full border-b border-gray-300"></div>
      </div>

      {/* 알림 설정 영역 */}
      <section className="flex flex-col items-center p-6">
        <NotificationSettings />
      </section>
    </div>
  );
};

export default MyPage;
