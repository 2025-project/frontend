import React from "react";
import { Header, NewsTicker, Ranking, SearchBar, StockList, SortDropdown } from "@/components";

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-8 bg-gray-100 pt-[178px]">
      <Header />
      <NewsTicker />
      <SortDropdown/>
      <SearchBar />
      <Ranking />
      <StockList />
    </div>
  );
};

export default MainPage;
