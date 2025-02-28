import React from "react";

const NewsTicker = () => {
  return (
    <div className="w-[368px] bg-white border-2 border-[#E8E8E8] rounded-[25px] p-6 text-center">
      <h2 className="text-[16px] font-bold text-customBlue mb-3">한 줄 뉴스</h2>
      <p className="text-[20px] text-black leading-snug">
        엔비디아 시가총액, <br />
        애플 다시 추월... <br />
        트럼프 <span className="font-bold">AI</span> 프로젝트 영향
      </p>
    </div>
  );
};

export default NewsTicker;
