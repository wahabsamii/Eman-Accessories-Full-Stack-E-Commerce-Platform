import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiShoppingBag, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/auth";
import { MdDashboard } from "react-icons/md";

const UserMenu = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");

    navigate("/login");
  };


  return (
    <div className="w-72 min-h-screen h-[88vh] sticky top-0 bg-white border-r border-gray-200">
      <div className="flex flex-col pt-6">

        {/* Header */}
        <div className="px-6 mb-6">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Account
          </p>

          <h4 className="text-2xl font-bold text-gray-900 mt-1">
            Dashboard
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            Manage your account
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col">

          <NavLink
            to="/dashboard/user" end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-6 py-4 border-r-4 border-r-blue-600 bg-gradient-to-r from-white to-blue-50 text-blue-700 font-semibold transition-all duration-200"
                : "flex items-center gap-3 px-6 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
            }
          >
            <MdDashboard className="text-xl" />
            <span>Dashbaord</span>
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-6 py-4 border-r-4 border-r-blue-600 bg-gradient-to-r from-white to-blue-50 text-blue-700 font-semibold transition-all duration-200"
                : "flex items-center gap-3 px-6 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
            }
          >
            <FiUser className="text-xl" />
            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/dashboard/user/orders"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-6 py-4 border-r-4 border-r-blue-600 bg-gradient-to-r from-white to-blue-50 text-blue-700 font-semibold transition-all duration-200"
                : "flex items-center gap-3 px-6 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
            }
          >
            <FiShoppingBag className="text-xl" />
            <span>Orders</span>
          </NavLink>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-4 border-r-4 border-r-transparent text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-left w-full"
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default UserMenu;