import React from "react";
import { LuDollarSign, LuBellRing } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

const Header = ({}: { sidebarOpen: boolean }) => {
  return (
    <div className="header bg-[#152535] w-full flex items-center">
      <div className="flex items-center justify-around w-[99%] ">
        <div
          className={`w-[75px] bg-[#253241] h-[40px] transition-all duration-300 rounded-md`}
        ></div>
        <div className="px-4 py-3 flex items-center">
          <div className="border-[#273344] border-2 rounded-md flex">
            <button className="flex items-center gap-3 bg-[#10202D] px-6 py-2 font-medium transition-colors">
              <LuDollarSign className="w-6 h-6 text-white border-1 rounded-2xl bg-[#192C40]" />
              <span className="text-white text-lg font-medium">10,566.12</span>
            </button>
            <button className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-medium transition-colors">
              DEPOSIT
            </button>
          </div>
          <div className="flex items-center gap-3 ml-5">
            <button className="text-white bg-[#1C2E3D] p-2 rounded-md transition-colors border-2 border-[#273344]  cursor-pointer">
              <LuBellRing className="w-5 h-5" />
            </button>
            <button className="text-white bg-[#1C2E3D] p-2 rounded-md transition-colors  border-2 border-[#273344] cursor-pointer">
              <FaRegUserCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
