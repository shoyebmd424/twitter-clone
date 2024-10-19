import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdComment,
  MdGroup,
  MdHome,
  MdMailOutline,
  MdNotifications,
  MdPerson,
  MdSearch,
} from "react-icons/md";
import { PiDotsThreeBold, PiDotsThreeCircle } from "react-icons/pi";
import { TbSquareForbid2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="mx-4 flex flex-col py-3 h-[100vh">
        {sidebarData?.map((item, index) => (
          <Link className="flex" key={index} to={item?.path}>
            <li className="flex  rounded-full hover:bg-[#29292a70]   items-center   p-2 my-[3px] px-4  gap-3 text-[20px] font-semibold">
              <span className="text-[25px]">{item?.icons}</span>
              <span>{item?.name}</span>
            </li>
          </Link>
        ))}
        <button className="bg-blue-500 w-[100%] mt-3 p-2 rounded-full font-semibold text-[22px]">
          Post
        </button>
        <li className="flex items-center rounded-full mt-5  hover:bg-[#29292a70] p-2 my-[3px] px-4 gap-3">
          <div className="w-[50px] h-[50px] flex items-center content-center rounded-full bg-gray-500 p-2">
            MS
          </div>
          <div>
            <h5 className="font-bold">MS KHAN</h5>
            <small className="opacity-[0.5]">@shoyebmd424</small>
          </div>
          <div className="ms-auto">
            <PiDotsThreeBold />
          </div>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

const sidebarData = [
  { name: "", icons: <FaXTwitter />, path: "/" },
  { name: "Home", icons: <MdHome />, path: "/" },
  { name: "Explore", icons: <MdSearch />, path: "/explore" },
  { name: "Notificatios", icons: <MdNotifications />, path: "/notifications" },
  { name: "Messages", icons: <MdMailOutline />, path: "/message" },
  { name: "Grok", icons: <TbSquareForbid2 />, path: "/grok" },
  { name: "Communities", icons: <MdGroup />, path: "/communities" },
  { name: "Premium", icons: <FaXTwitter />, path: "/premium" },
  { name: "Profile", icons: <MdPerson />, path: "/profile" },
  { name: "More", icons: <PiDotsThreeCircle />, path: "/more" },
];
