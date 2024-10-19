import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";

const PostCard = () => {
  return (
    <div className="border p-3 border-gray-600">
      <div className="flex gap-3">
        <div className="items-center justify-center flex w-[50px] rounded-full bg-gray-500 h-[50px]">
          PR
        </div>
        <div className="flex w-[93%] flex-col gap-3">
          <div>
            <div className="flex gap-3 items-center justify-center">
              <h5 className="font-bold flex items-center gap-2 text-white">
                Elon Musk
                <BsFillPatchCheckFill className="text-blue-500 text-[22px]" />
              </h5>
              <div className="opacity-[0.5] flex gap-3 items-center justify-center">
                <span>@elonmusk</span> <span className="mb-auto">.</span><span>18h</span>
              </div>
              <div className="ms-auto text-[20px] cursor-pointer  hover:bg-gray-500 rounded-full">
                <PiDotsThreeBold  />
              </div>
            </div>
          </div>
          <div>
            <p>Met and interacted with the inspiring women of 'Shakti Abhiyan' today. <br />The @Indirafellows</p>
          </div>
          <div className="w-full  aspect-auto-[4/3] ">
            <img src="https://pbs.twimg.com/media/GaLYAd0WwAAtHpd?format=jpg&name=small" className="rounded" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
