"use client"; // Ensure this is at the top

import { AiOutlineEye, AiOutlineStop, AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for Next.js 13+
import { User } from "@/app/types/User";
import { useEffect, useState } from "react";

type DropdownMenuProps = {
  user: User;
  onBlacklist: (userId: string) => void;
  onActivate: (userId: string) => void;
};

export default function DropdownMenu({
  user,
  onBlacklist,
  onActivate,
}: DropdownMenuProps) {
  const router = useRouter(); // Call useRouter unconditionally
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  // Check if the component is mounted to avoid accessing router on server side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleViewDetails = () => {
    if (isMounted) {
      router.push(`/dashboard/user-details/${user.id}`);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
      <ul className="py-1">
        <li
          className="flex items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
          onClick={handleViewDetails}
        >
          <AiOutlineEye className="mr-2" />
          View Details
        </li>
        <li
          className="flex items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
          onClick={() => onBlacklist(user.username)}
        >
          <AiOutlineStop className="mr-2" />
          Blacklist User
        </li>
        <li
          className="flex items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
          onClick={() => onActivate(user.username)}
        >
          <AiOutlineCheck className="mr-2" />
          Activate User
        </li>
      </ul>
    </div>
  );
}
