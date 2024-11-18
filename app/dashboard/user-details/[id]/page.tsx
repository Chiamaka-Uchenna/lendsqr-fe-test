"use client";

import { useEffect, useState } from "react";
import UserDetails from "@/app/utils/dashboard/UserDetails";
import UserProfileCard from "@/app/utils/dashboard/UserProfileCard";
import { User } from "@/app/types/User";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null); // State to hold user data
  const [allUsers, setAllUsers] = useState<User[]>([]); // State to hold all users
  const router = useRouter(); // Initialize router

  // Unwrap the params promise
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Await the promise to get the resolved value
      setUserId(resolvedParams.id); // Set the user ID
    };

    fetchParams();
  }, [params]);

  // Fetch all users and set selected user based on ID
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch(
        `https://run.mocky.io/v3/30ca8643-e3d1-4bf7-84b0-a421d8c97e64`
      );
      const data = await response.json();
      setAllUsers(data.users); // Store all users
      const selectedUser = data.users.find((u: User) => u.id === userId); // Find user by ID
      setUser(selectedUser || null);
    };

    if (userId) {
      fetchAllUsers();
    }
  }, [userId]);

  return (
    <main className="flex flex-col items-center w-full px-1 py-4">
      <div
        className="flex items-center space-x-2 mb-6 w-full max-w-4xl"
        onClick={() => router.back()}
      >
        <BiArrowBack className="cursor-pointer" />{" "}
        {/* Use router.back */}
        <p className="text-secondary leading-[18.77px] text-[16px] font-normal cursor-pointer">
          Back to Users
        </p>
      </div>

      <div className="flex items-center justify-between w-full max-w-4xl  pb-4 mb-6">
        <h2 className="text-[24px] font-semibold text-primary leading-[28.15px] mb-4">
          User Details
        </h2>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {/* Blacklist Button */}
          <button className="px-3 py-2 font-semibold text-[14px] leading-[16.42px] text-customRed border border-customRed rounded-md hover:bg-customRed hover:text-white">
            BLACKLIST USER
          </button>

          {/* Activate Button */}
          <button className="px-3 py-2 font-semibold text-[14px] leading-[16.42px] text-teal border border-teal rounded-md hover:bg-teal hover:text-white">
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mb-6">
        {user ? <UserProfileCard user={user} allUsers={allUsers} /> : <p></p>}
      </div>

      <div className="w-full max-w-4xl">
        {user ? <UserDetails user={user} /> : <p>Loading user details...</p>}
      </div>
    </main>
  );
}
