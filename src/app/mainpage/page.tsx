import { Header, NewsTicker, Ranking, SearchBar, StockList, SortDropdown } from "@/components";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[178px] flex flex-col items-center">
      <Header />

      <div className="w-full max-w-[1300px] flex justify-end mt-4">
        <NewsTicker />
      </div>

      <div className="w-full max-w-[1300px] flex justify-end mt-4">
        <Ranking />
      </div>

      <div className="w-full max-w-[1300px] flex justify-between items-center mt-6">
        <div>
          <SortDropdown />
        </div>

        <div>
          <SearchBar />
        </div>
      </div>

      <div className="w-full max-w-[1300px] mt-6">
        <StockList />
      </div>
    </div>
  );
};

export default MainPage;
