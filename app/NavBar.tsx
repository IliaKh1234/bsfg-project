"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navGroups, menuIcon } from "./data/NavBarItems";

const NavBar = () => {
  const [showNames, setShowNames] = useState<boolean>(false);

  return (
    <nav
      className={`transition-all duration-300 transform ${
        showNames ? "w-[240px]" : "w-[75px]"
      } bg-[#162231]  overflow-y-auto pl-6 overflow-x-hidden hidden md:block`}
    >
      <Image
        className="cursor-pointer mg-5 ml-[-5] mt-9"
        src={menuIcon}
        alt="menu-bar"
        width={35}
        height={35}
        onClick={() => setShowNames(!showNames)}
      />

      {showNames ? (
        <div className="flex flex-col mt-4 gap-3">
          {navGroups.map((group, groupIdx) => (
            <ul
              key={groupIdx}
              className="bg-[#1C2E3D] rounded-lg p-2 flex flex-col mr-5 ml-[-5]"
            >
              {group.items.map((img, idx) => (
                <li className="cursor-pointer flex items-center mb-4" key={idx}>
                  <Image
                    src={img}
                    alt={`nav-item-${groupIdx}-${idx}`}
                    width={22}
                    height={22}
                  />
                  <span
                    className={`ml-2 text-white transition-opacity duration-200 ${
                      showNames ? "opacity-100 delay-200" : "opacity-0 delay-0"
                    }`}
                    style={{
                      width: showNames ? "auto" : 0,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {group.names[idx]}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ) : (
        <ul className="list-none flex flex-col mt-4">
          {navGroups
            .flatMap((group) => group.items)
            .map((img, key) => (
              <li className="cursor-pointer flex items-center mb-4" key={key}>
                <Image
                  src={img}
                  alt={`nav-item-${key}`}
                  width={22}
                  height={22}
                />
              </li>
            ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
