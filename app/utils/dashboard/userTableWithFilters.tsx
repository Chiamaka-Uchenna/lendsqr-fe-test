import React, { useState } from "react";
import Filters from "@/app/utils/dashboard/Filters";
import  { User } from "@/app/types/User";
import TableData from "@/app/utils/dashboard/TableData";

// Sample user data
const sampleUsers: User[] = [
  {
    id: "1", // Add an id
    borrower_id: "borrower123", // Add a borrower_id
    bank: "Example Bank", // Add a bank name
    account_number: "1234567890", // Add an account number
    organization: "Lendsqr",
    username: "user1",
    email: "user1@example.com",
    phone_number: "1234567890",
    date_joined: "2020-04-30T10:00:00",
    status: "Active",
    full_name: "John Doe",
    bvn: 123456,
    gender: "Male",
    marital_status: "Single",
    children: "0",
    type_of_residence: "Apartment",
    level_of_education: "Bachelor's",
    employment_status: "Employed",
    sector_of_employment: "Finance",
    duration_of_employment: "5 years",
    office_email: "user1@company.com",
    monthly_income: "5000",
    loan_repayment: "200",
    savings: "1000",
    socials: { twitter: "", facebook: "", instagram: "" },
    guarantor: {
      full_name: "Jane Doe",
      phone_number: 123456789,
      email: "jane@example.com",
      relationship: "Friend",
    },
  },
  // Add more sample users as needed, ensuring each has the required properties
];
export default function UserTableWithFilters() {
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Update filters based on selected options in Filters component
  const applyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // Filter the user data based on the selected filters
  const filteredUsers = sampleUsers.filter((user) => {
    return (
      (filters.organization === "" ||
        user.organization === filters.organization) &&
      (filters.username === "" || user.username.includes(filters.username)) &&
      (filters.email === "" || user.email.includes(filters.email)) &&
      (filters.date === "" || user.date_joined.startsWith(filters.date)) &&
      (filters.phoneNumber === "" ||
        user.phone_number.includes(filters.phoneNumber)) &&
      (filters.status === "" || user.status === filters.status)
    );
  });

  return (
    <div>
      <button
        onClick={toggleFilters}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Filters
      </button>
      {showFilters && (
        <div className="p-4">
          <Filters applyFilters={applyFilters} />
        </div>
      )}
      <TableData users={filteredUsers} />
    </div>
  );
}
