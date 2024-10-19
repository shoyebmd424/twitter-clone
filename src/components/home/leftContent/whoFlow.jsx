import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const WhoFlow = () => {
  return (
    <div className="border flex flex-col gap-2 rounded-[15px]  border-gray-500">
      <h3 className="font-bold text-[22px] p-2 px-4">Who to follow</h3>
      {Array.from({length:3}).map((_,i)=>(
      <div className="flex items-center     hover:bg-[#29292a70] p-2 my-[3px] px-4 gap-3">
        <div className="w-[50px] h-[50px] flex  items-center content-center rounded-full bg-gray-500 p-2">
          MS
        </div>
        <div>
          <h5 className="font-bold flex items-center gap-2">
            MS <BsFillPatchCheckFill className="text-blue-500 text-[22px]" />
          </h5>
          <small className="opacity-[0.5]">@shoyebmd424</small>
        </div>
        <div className="ms-auto my-auto">
          <button className="bg-slate-100 rounded-full text-black p-2 px-4 font-semibold">
            Follow
          </button>
        </div>
      </div>))}
      <div className="text-center text-blue-500 py-2">Show more</div>
    </div>
  );
};

export default WhoFlow;
