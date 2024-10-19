import React from 'react'
import { IoMdGlobe } from "react-icons/io";
import { FaBusinessTime, FaRegImage } from "react-icons/fa6";
import { PiGifFill } from "react-icons/pi";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { BsEmojiAstonished } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";


const Post = () => {
  return (
    <>
      <div className="border border-gray-600">
        <div className="flex gap-3 p-4">
          <div className="w-[50px] h-[50px] bg-gray-400 flex items-center justify-center text-[22px]  rounded-full">
            MS
          </div>
          <div className="w-96 flex flex-col gap-2">
            <input
              type="text"
              placeholder="What is happening?! "
              className="text-[22px] mt-2 bg-transparent border-0 outline-none"
            />

            <div className="flex items-center  gap-3 text-blue-500">
              <IoMdGlobe />
              <span className="font-bold"> Everyone can reply</span>
            </div>
            <div className="bg-gray-600 w-full h-[1px] my-2"></div>
            <div className=" flex items-center">
              <div className=" flex items-center gap-3 text-blue-500">
                
                {inputIocns?.map((v) => (
                  <span className="cursor-pointer">{v}</span>
                ))}
              </div>
              <button className="p-2 rounded-full bg-blue-500 px-5 ms-auto font-semibold">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border text-center py-3 border-gray-600 border-t-0">
        <span className="text-blue-500 ">Show 345 posts</span>
      </div>
    </>
  );
}

export default Post


const inputIocns=[
    <FaRegImage />,
    <PiGifFill />,
    <HiMiniAdjustmentsHorizontal />,
    <BsEmojiAstonished />,
    <FaBusinessTime />,
    <IoLocationOutline />
]