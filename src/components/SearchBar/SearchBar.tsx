import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-[300px] flex items-center border-2 border-gray-300 rounded-[15px] px-4 py-2 bg-white">
      <input
        type="text"
        placeholder="종목명"
        className="flex-1 text-gray-500 text-[16px] bg-transparent outline-none placeholder-gray-500"
      />
      <IoSearch className="text-gray-500 text-[20px]" />
    </div>
  );
};

export default SearchBar;
