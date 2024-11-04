// "use client";

// import InfoCard from "@/app/utils/dashboard/InfoCard";
// import TableData, { User } from "@/app/utils/dashboard/TableData";
// import Pagination from "@/app/utils/dashboard/Pagination";
// import { useEffect, useState } from "react";
// import icons from "@/app/utils/dashboard/icons";

// export default function Page() {
//   const [usersData, setUsersData] = useState<User[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Control items per page here
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://run.mocky.io/v3/3192be13-f84d-4f81-995b-81446d1c0cfa"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setUsersData(data.users);
//       } catch (error) {
//         setError("Error fetching users. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleItemsPerPageChange = (items: number) => {
//     setItemsPerPage(items);
//     setCurrentPage(1); // Reset to the first page when items per page changes
//   };

//   const totalItems = usersData.length;
//   const paginatedData = usersData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <main className="flex flex-col p-4">
//       <div className="m-1 p-3">
//         <p className="text-secondary">Users</p>
//       </div>

//       {/* Info Cards Section */}
//       <div className="flex justify-around mb-6">
//         <InfoCard
//           roundedCircle={true}
//           circleColor="#F0F4FF"
//           cardIcon={icons.usersIcon}
//           cardTitle="USERS"
//           cardKpi={totalItems.toString()}
//         />
//         <InfoCard
//           roundedCircle={true}
//           circleColor="#E0F7FA"
//           cardIcon={icons.activeUsersIcon}
//           cardTitle="ACTIVE USERS"
//           cardKpi={usersData
//             .filter((user) => user.status === "Active")
//             .length.toString()}
//         />
//         <InfoCard
//           roundedCircle={true}
//           circleColor="#FFEBEE"
//           cardIcon={icons.usersWithLoanIcon}
//           cardTitle="USERS WITH LOAN"
//           cardKpi={usersData
//             .filter((user) => user.loan_repayment !== "")
//             .length.toString()}
//         />
//         <InfoCard
//           roundedCircle={true}
//           circleColor="#E8F5E9"
//           cardIcon={icons.usersWithSavingsIcon}
//           cardTitle="USERS WITH SAVINGS"
//           cardKpi={usersData.filter((user) => user.savings).length.toString()}
//         />
//       </div>

//       {/* Table Data Section */}
//       <div>
//         {isLoading ? (
//           <p>Loading users...</p>
//         ) : error ? (
//           <p className="text-red-600">{error}</p>
//         ) : (
//           <>
//             <TableData users={paginatedData} />
//             <Pagination
//               totalItems={totalItems}
//               itemsPerPage={itemsPerPage}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//               onItemsPerPageChange={handleItemsPerPageChange} // Pass the handler here
//             />
//           </>
//         )}
//       </div>
//     </main>
//   );
// }
