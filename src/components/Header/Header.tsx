import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[120px] bg-white shadow-md flex items-center justify-between px-20 absolute top-0 left-0 right-0">
      <h1 className="text-[50px] font-bold text-customBlue">Stock</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/mypage" className="text-[28px] text-customBlue hover:text-black">
              MY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
