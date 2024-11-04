"use client";

import React, { useState } from "react";

type FiltersProps = {
  applyFilters: (filters: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: string;
  }) => void;
};

export default function Filters({ applyFilters }: FiltersProps) {
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleFilter = () => {
    applyFilters({
      organization,
      username,
      email,
      date,
      phoneNumber,
      status,
    });
  };

  const handleReset = () => {
    setOrganization("");
    setUsername("");
    setEmail("");
    setDate("");
    setPhoneNumber("");
    setStatus("");
    applyFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  return (
    <div className="p-2 bg-white rounded-lg shadow-lg w-64">
      {/* Organization Dropdown */}
      <div className="mb-4">
        <label className="labelText mb-1">Organization</label>
        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="w-full p-1 border text-secondary border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="Lendsqr">Lendsqr</option>
          <option value="Irorun">Irorun</option>
          <option value="Paystack">Paystack</option>
        </select>
      </div>

      {/* Username Input */}
      <div className="mb-4">
        <label className="block labelText mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
          placeholder="Username"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block labelText mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
          placeholder="Email"
        />
      </div>

      {/* Date Input */}
      <div className="mb-4">
        <label className="block labelText mb-1">Date Joined</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
        />
      </div>

      {/* Phone Number Input */}
      <div className="mb-4">
        <label className="block labelText mb-1">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
          placeholder="Phone Number"
        />
      </div>

      {/* Status Dropdown */}
      <div className="mb-4">
        <label className="block labelText mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-1 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around">
        <button
          onClick={handleReset}
          className="px-4 py-1 bg-white border border-black  text-black rounded hover:bg-gray-300"
        >
          Reset
        </button>
        <button
          onClick={handleFilter}
          className="px-4 py-1 bg-teal hover:bg-secondary text-white rounded hover:bg-teal-600"
        >
          Filter
        </button>
      </div>
    </div>
  );
}
