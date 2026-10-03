import React from "react";
import { NavLink } from "react-router-dom";

import {
FiBarChart2,
FiFolderPlus,
FiPlusSquare,
FiPackage,
FiUsers,
FiShoppingCart,
FiLogOut,
} from "react-icons/fi";

const AdminMenu = () => {
return ( 
<div className="w-72 min-h-screen h-[88vh] sticky top-0 bg-white border-r border-gray-200"> 
  <div className="flex flex-col pt-6">

    {/* Header */}
    <div className="px-8 pb-6 border-b border-gray-100">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
        Management
      </p>

      <h4 className="text-2xl font-bold text-gray-900">
        Admin Panel
      </h4>
    </div>

    <div className="flex flex-col pt-4">

      {/* Dashboard */}
      <NavLink
        to="/dashboard/admin/"
        end
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiBarChart2 className="text-[21px]" />
        <span>Dashboard</span>
      </NavLink>

      {/* Create Category */}
      <NavLink
        to="/dashboard/admin/create-category"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiFolderPlus className="text-[21px]" />
        <span>Create Category</span>
      </NavLink>

      {/* Create Product */}
      <NavLink
        to="/dashboard/admin/create-product"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiPlusSquare className="text-[21px]" />
        <span>Create Product</span>
      </NavLink>

      {/* Products */}
      <NavLink
        to="/dashboard/admin/products"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiPackage className="text-[21px]" />
        <span>Products</span>
      </NavLink>

      {/* Users */}
      <NavLink
        to="/dashboard/admin/users"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiUsers className="text-[21px]" />
        <span>Users</span>
      </NavLink>

      {/* All Orders */}
      <NavLink
        to="/dashboard/admin/all-orders"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-blue-50 py-4 border-r-4 border-r-blue-600 text-blue-700 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
        }
      >
        <FiShoppingCart className="text-[21px]" />
        <span>All Orders</span>
      </NavLink>

      {/* Logout */}
      <NavLink
        to="/dashboard/admin/userssd"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row pl-8 pr-5 items-center gap-3 bg-gradient-to-r from-white to-red-50 py-4 border-r-4 border-r-red-500 text-red-600 font-semibold"
            : "flex flex-row pl-8 pr-5 items-center gap-3 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        }
      >
        <FiLogOut className="text-[21px]" />
        <span>Logout</span>
      </NavLink>

    </div>
  </div>
</div>

);
};

export default AdminMenu;
