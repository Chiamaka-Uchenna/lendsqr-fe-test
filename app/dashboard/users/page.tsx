"use client";

import { useEffect, useState, useMemo } from "react";
import InfoCard from "@/app/utils/dashboard/InfoCard";
import TableData from "@/app/utils/dashboard/TableData";
import { User } from "@/app/types/User";
import Pagination from "@/app/utils/dashboard/Pagination";
import icons from "@/app/utils/dashboard/icons";

export default function Page() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/30ca8643-e3d1-4bf7-84b0-a421d8c97e64"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsersData(data.users);
      } catch (error) {
        setError("Error fetching users. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page whenever items per page changes
  };

  const totalItems = usersData.length;
  console.log(usersData);

  // Calculate paginated data based on current page and items per page
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return usersData.slice(startIndex, startIndex + itemsPerPage);
  }, [usersData, currentPage, itemsPerPage]);

  return (
    <main className="flex flex-col items-center p-4">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        <div className="mb-4 p-3 text-lg">
          <p className="text-primary font-bold text-[14px] leading-[28.15px]">
            Users
          </p>
        </div>

        {/* Info Cards Section */}
        <div className="flex flex-wrap justify-between gap-4 mb-3">
          <div className="flex-1 min-w-[150px] max-w-[200px]">
            <InfoCard
              roundedCircle={true}
              circleColor="#fce8ff"
              cardIcon={icons.usersIcon}
              cardTitle="USERS"
              cardKpi={totalItems.toString()}
            />
          </div>
          <div className="flex-1 min-w-[150px] max-w-[200px]">
            <InfoCard
              roundedCircle={true}
              circleColor="#eee8ff"
              cardIcon={icons.activeUsersIcon}
              cardTitle="ACTIVE USERS"
              cardKpi={usersData
                .filter((user) => user.status === "Active")
                .length.toString()}
            />
          </div>
          <div className="flex-1 min-w-[150px] max-w-[200px]">
            <InfoCard
              roundedCircle={true}
              circleColor="#feefec"
              cardIcon={icons.usersWithLoanIcon}
              cardTitle="USERS WITH LOAN"
              cardKpi={usersData
                .filter((user) => user.loan_repayment !== "")
                .length.toString()}
            />
          </div>
          <div className="flex-1 min-w-[150px] max-w-[200px]">
            <InfoCard
              roundedCircle={true}
              circleColor="#feefec"
              cardIcon={icons.usersWithSavingsIcon}
              cardTitle="USERS WITH SAVINGS"
              cardKpi={usersData
                .filter((user) => user.savings)
                .length.toString()}
            />
          </div>
        </div>

        {/* Table Data Section */}
        <div className="max-w-full">
          {isLoading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div>
              <TableData
                users={paginatedData}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
              <Pagination
                totalItems={usersData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
