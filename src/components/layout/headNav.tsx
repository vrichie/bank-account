"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownFill } from "react-icons/ri";
import {
  FiDollarSign,
  FiUser,
  FiMessageCircle,
  FiLogOut,
  FiInbox,
  FiHelpCircle,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

const HeadNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const DashboardLinks = [
    {
      name: "Profile",
      href: "/profile",
      role: 0,
      icon: FiUser,
    },
    {
      name: "Inbox",
      href: "/inbox",
      role: 0,
      icon: FiMessageCircle,
    },
    {
      name: "Chat",
      href: "/chat",
      role: 0,
      icon: FiInbox,
    },
    {
      name: "Settings",
      href: "/settings",
      role: 0,
      icon: FiSettings,
    },
    {
      name: "Pricing",
      href: "/pricing",
      role: 0,
      icon: FiDollarSign,
    },
    {
      name: "FAQ",
      href: "/faq",
      role: 0,
      icon: FiHelpCircle,
    },
    {
      name: "Sign Out",
      href: "/signout",
      role: 0,
      icon: FiLogOut,
    },
  ];
  return (
    <div className="container mt-4">
      <nav className=" w-full bg-white text-black rounded-md">
        <div className="flex justify-between py-2 px-8">
          <h1 className=" pt-1 text-xl">Dashboard</h1>
          <div className="flex ">
            <Image
              src="/bg1.jpg"
              className="rounded w-9 h-9"
              alt="dp"
              width={20}
              height={20}
            />
            <div onClick={toggleDropdown}>
              <RiArrowDropDownFill
                className={`text-black text-xl cursor-pointer hover:scale-[1.5] duration-300 ${
                  showDropdown ? "rotate-180" : ""
                } `}
                size={35}
              />
            </div>
            {showDropdown && (
              <div className="absolute top-12 right-0 mt-2 py-2 bg-white rounded-md shadow-lg w-[20vw] z-10">
                <ul className="flex flex-col gap-2 text-black">
                  <div>
                    <div className="flex mx-auto py-2 pl-4">
                      <Image
                        src="/bg1.jpg"
                        className="rounded-full w-12 h-12"
                        alt="bg1"
                        width={60}
                        height={60}
                      />
                      <div>
                        <p>Christine Beacoup</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {DashboardLinks.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <Link href={item.href}>
                        <li
                          key={item.name}
                          className="flex items-center px-4 py-2 hover:bg-gray-200 rounde-md cursor-pointer"
                        >
                          <span>
                            <item.icon className="mr-2" />
                          </span>
                          {item.name}
                        </li>
                      </Link>
                      {(index + 1) % 3 === 0 && <hr />}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeadNav;
