"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import Logo from "@/public/assets/images/logo.svg";
import ProfilePic from "@/public/assets/images/image 4.svg";
import { roboto } from "@/app/utils/font";


export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-2 bg-white shadow-sm">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="Lendsqr logo" width={140} height={20} />
      </div>

      {/* Center Section - Search bar (hidden on tablets and smaller screens) */}
      <div className="hidden md:flex items-center max-w-lg w-72 mx-4 border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 px-1  font-normal rounded-sm text-sm text-secondary leading-[16.42px] py-0 focus:outline-none"
        />
        <button className="bg-teal p-1 text-white">
          <HiOutlineSearch size={20} />
        </button>
      </div>

      {/* Right Section - Links and Icons */}
      <div className="flex items-center space-x-6">
        <Link
          href="/docs"
          className={`hidden md:inline underline text-primary ${roboto.className} font-normal text-[16px] leading-[18.75px] hover:text-customTextColor`}
         >
          Docs
        </Link>
        <BiBell
          className="hidden md:inline text-primary  hover:text-customTextColor cursor-pointer"
          size={24}
        />

        {/* Profile Section (Always visible) */}
        <div className="flex items-center space-x-2">
          <Image
            src={ProfilePic}
            alt="User profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden md:inline text-primary font-medium text-[16px] leading-[18.77px] hover:text-customTextColor">
            Adedeji
          </span>
          <FaCaretDown className="text-primary hidden md:inline" size={16} />
        </div>
      </div>
    </header>
  );
}
