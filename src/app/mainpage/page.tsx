import { Header, NewsTicker, Ranking, SearchBar, StockList, SortDropdown } from "@/components";
import Graphs from "@/components/Graphs/Graphs";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[178px] flex flex-col items-center">
      <Header />

      <div className="w-full max-w-[1300px] flex mt-4">
        <div className="flex-1 mt-8">
          <Graphs />
        </div>
        <div className="flex flex-col max-w-[500px]">
  <div className="ml-4">
    <NewsTicker />
  </div>
  <Ranking />
</div>

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
