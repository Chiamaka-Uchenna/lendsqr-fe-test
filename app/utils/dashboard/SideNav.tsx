"use client";

import NavLinks from "@/app/utils/dashboard/NavLinks";
import { useState } from "react";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes icon

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger Icon or Close Icon based on isOpen state */}
      <button
        className="lg:hidden p-2 bg-gray hover:bg-gray-300 transition"
        onClick={toggleSidenav}
      >
        {isOpen ? <FaTimes size={24} className="text-primary" /> : <FaBars size={24} className="text-primary" />}
      </button>

      <aside
        className={clsx(
          "h-full w-64 bg-white shadow-md p-4 flex flex-col transition-transform",
          {
            "translate-x-0": isOpen, // Sidenav is open
            "-translate-x-full": !isOpen, // Sidenav is hidden
            "lg:translate-x-0": true, // Always visible on md screens and above
          }
        )}
      >
        <div className="flex flex-col h-full">
          <NavLinks />
        </div>
      </aside>
    </>
  );
}
