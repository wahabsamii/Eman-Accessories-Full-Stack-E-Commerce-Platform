import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  const gettingAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://backend-psi-woad.vercel.app/all-users"
      );

      setUsers(response.data.AllUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    gettingAllUsers();
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              User Management
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  All Users
                </h1>

                <p className="text-gray-500 mt-2">
                  View and manage all registered users.
                </p>
              </div>

              {/* User Count */}
              <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Total Users
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {users.length}
                </p>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Table Header */}
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Registered Users
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                List of all users registered in the system.
              </p>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">

                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr className="text-left">
                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      #
                    </th>

                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Name
                    </th>

                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email
                    </th>

                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>

                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-blue-50/40 transition-colors duration-200"
                    >
                      {/* Number */}
                      <td className="py-4 px-6 text-sm text-gray-400 font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      {/* Name */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>

                          <span className="text-sm font-semibold text-gray-800">
                            {user.name}
                          </span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {user.email}
                      </td>

                      {/* Phone */}
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {user.phone}
                      </td>

                      {/* Address */}
                      <td className="py-4 px-6 text-sm text-gray-600 max-w-xs">
                        <span className="line-clamp-2">
                          {user.address}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {users.length === 0 && (
              <div className="py-14 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  No Users Found
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  There are currently no registered users.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}