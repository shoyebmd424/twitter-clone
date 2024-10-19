import React, { useState } from 'react'

const Header = () => {
    const [intreset, setIntrest] = useState("for you");
  return (
    <div className="flex   w-full   cursor-pointer border border-t-0 border-gray-600">
        <div
          className={`w-[50%]  hover:bg-[#29292a70] flex ${
            intreset === "for you" ? "text-gray-0 font-bold" : "text-gray-400"
          } `}
          onClick={() => setIntrest("for you")}
        >
          <div
            className={`py-3 mx-auto ${
              intreset === "for you"
                ? "border-b-4 border-blue-500"
                : "border-b-4 border-transparent"
            }`}
          >
            For You
          </div>
        </div>
        <div
          className={`w-[50%]  flex ${
            intreset === "following" ? "text-gray-0 font-bold" : "text-gray-400"
          } `}
          onClick={() => setIntrest("following")}
        >
          <div
            className={`py-3 mx-auto ${
              intreset === "following"
                ? "border-b-4 border-blue-500"
                : "border-b-4 border-transparent"
            }`}
          >
            Following
          </div>
        </div>
      </div>
  )
}

export default Header