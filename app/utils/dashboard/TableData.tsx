"use client";

import { useEffect, useRef, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

import Filters from "@/app/utils/dashboard/Filters";
import Pagination from "@/app/utils/dashboard/Pagination";
import dynamic from "next/dynamic";
import { User } from "@/app/types/User";

const DropdownMenu = dynamic(() => import("./DropdownMenu"), { ssr: false });

type TableProps = {
  users: User[];
};

const getStatusClasses = (status: User["status"]) => {
  switch (status) {
    case "Active":
      return "text-customGreen bg-customLightGreen";
    case "Pending":
      return "text-customYellow bg-customLightYellow";
    case "Blacklisted":
      return "text-customRed bg-customLightRed";
    case "Inactive":
      return "text-secondary bg-customLightGray";
    default:
      return "";
  }
};

export default function TableData({ users }: TableProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleBlacklistUser = (userId: string) => {
    console.log(`Blacklisting user: ${userId}`);
    setShowDropdown(null);
  };

  const handleActivateUser = (userId: string) => {
    console.log(`Activating user: ${userId}`);
    setShowDropdown(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = (filters: {
    organization?: string;
    status?: string;
  }) => {
    let filteredData = users;

    if (filters.organization) {
      filteredData = filteredData.filter(
        (user) => user.organization === filters.organization
      );
    }

    if (filters.status) {
      filteredData = filteredData.filter(
        (user) => user.status === filters.status
      );
    }

    setFilteredUsers(filteredData);
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(null);
      }

      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-w-full relative">
      {showFilters && (
        <div
          ref={filtersRef}
          className="absolute top-8 -left-3 z-10 p-4 rounded-md"
        >
          <Filters applyFilters={applyFilters} />
        </div>
      )}

      <table className="w-auto bg-white border-2  border-t-gray-100 border-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-white text-[12px] font-semibold text-secondary leading-[14.08px] w-1/6">
            {[
              "Organization",
              "Username",
              "Email",
              "Phone Number",
              "Date Joined",
              "Status",
              "",
            ].map((header) => (
              <th
                key={header}
                className="py-4 px-3 text-left font-semibold text-[12px] leading-[14.08px] text-secondary"
              >
                <div className="flex items-center">
                  {header}
                  {header && (
                    <MdFilterList
                      className="ml-2 text-gray-500 cursor-pointer"
                      onClick={toggleFilters}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(currentUsers) &&
            currentUsers.map((user, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 border-b-slate-200  text-[14px] leading-[16.42px] text-secondary"
              >
                <td className="py-3 px-4 text-secondary">
                  {user.organization}
                </td>
                <td className="py-3 px-4 text-secondary">{user.username}</td>
                <td className="py-3 px-4 text-secondary">{user.email}</td>
                <td className="py-3 px-4 text-secondary">
                  {user.phone_number}
                </td>
                <td className="py-3 px-4 text-secondary">
                  {new Date(user.date_joined).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full font-normal text-[14px] leading-[16.42px] ${getStatusClasses(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <FaEllipsisV
                    className="text-secondary font-normal cursor-pointer"
                    onClick={() =>
                      setShowDropdown(
                        showDropdown === user.username ? null : user.username
                      )
                    }
                  />
                  {showDropdown === user.username && (
                    <div ref={dropdownRef}>
                      <DropdownMenu
                        user={user}
                        onBlacklist={handleBlacklistUser}
                        onActivate={handleActivateUser}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
