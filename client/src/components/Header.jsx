import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assessts/logo.jpg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Badge } from "antd";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { FaUserAlt } from "react-icons/fa";
import SearchInput from "./Layout/SearchInput";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isPagesDropdownVisible, setIsPagesDropdownVisible] =
    useState(false);

  const navigation = useNavigate();

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-[1000] bg-black border-b border-white/10 shadow-lg">

      {/* ================= HEADER CONTAINER ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative flex h-[72px] items-center justify-between">

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="flex items-center sm:hidden">

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

          </div>

          {/* ================= LOGO + NAVIGATION ================= */}
          <div className="flex items-center">

            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center group"
            >
              <div className="flex h-11  items-center justify-center overflow-hidden bg-white transition-transform duration-200 group-hover:scale-105">
                <img
                  src={logo}
                  alt="Your Company"
                  className="h-full w-full object-cover"
                />
              </div>
            </NavLink>

            {/* Navigation */}
            <div className="hidden sm:block ml-8">

              <div className="flex items-center gap-1">

                {/* Home */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Home

                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                      )}
                    </>
                  )}
                </NavLink>

                {/* Products */}
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Products

                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                      )}
                    </>
                  )}
                </NavLink>

                {/* ================= PAGES DROPDOWN ================= */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsPagesDropdownVisible(true)}
                  onMouseLeave={() => setIsPagesDropdownVisible(false)}
                >

                  <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Pages

                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isPagesDropdownVisible ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>

                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  {isPagesDropdownVisible && (
                    <div className="absolute left-0 top-full pt-2 w-52">

                      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">

                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Explore
                          </p>
                        </div>

                        <NavLink
                          to="/about"
                          className="group flex items-center px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                            ℹ
                          </span>

                          <div>
                            <p className="font-medium">
                              About Us
                            </p>
                            <p className="text-xs text-gray-400">
                              Learn more about us
                            </p>
                          </div>
                        </NavLink>

                        <NavLink
                          to="/faqs"
                          className="group flex items-center px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                            ?
                          </span>

                          <div>
                            <p className="font-medium">
                              FAQs
                            </p>
                            <p className="text-xs text-gray-400">
                              Find answers
                            </p>
                          </div>
                        </NavLink>

                        

                      </div>

                    </div>
                  )}

                </div>

                {/* Contact */}
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Contact

                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                      )}
                    </>
                  )}
                </NavLink>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="hidden md:block">
              <SearchInput />
            </div>

            {/* ================= CART ================= */}
            <NavLink
              to="/cart"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              <Badge
                count={cart?.length}
                showZero
                size="small"
              >
                <MdOutlineShoppingBag className="text-[24px] text-gray-200 transition-colors group-hover:text-white" />
              </Badge>
            </NavLink>

            {/* ================= PROFILE ================= */}
            {auth?.user ? (

              <div
                className="relative"
                onMouseEnter={() => setIsMenuVisible(true)}
                onMouseLeave={() => setIsMenuVisible(false)}
              >

                {/* User Button */}
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-all duration-200 hover:bg-white/10 hover:border-white/20 hover:text-white focus:outline-none"
                >
                  <FaUserAlt className="text-[17px]" />
                </button>

                {/* Profile Dropdown */}
                {isMenuVisible && (
                  <div className="absolute right-0 top-full pt-2 w-56">

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">

                      {/* User Header */}
                      <div className="border-b border-gray-100 px-4 py-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <FaUserAlt className="text-sm" />
                          </div>

                          <div className="min-w-0">

                            <p className="truncate text-sm font-semibold text-gray-900">
                              {auth?.user?.name || "Account"}
                            </p>

                            <p className="text-xs text-gray-400">
                              My account
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* Profile */}
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600">
                          <FaUserAlt className="text-xs" />
                        </span>

                        Dashbaord
                      </NavLink>

                      {/* Settings */}
                      <NavLink
                        to="#"
                        className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600">
                          ⚙
                        </span>

                        Settings
                      </NavLink>

                      {/* Divider */}
                      <div className="border-t border-gray-100" />

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="group flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-500 transition-colors hover:bg-red-50"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                          ↪
                        </span>

                        Sign out
                      </button>

                    </div>

                  </div>
                )}

              </div>

            ) : (

              /* ================= LOGIN BUTTON ================= */
              <NavLink
                to="/login"
                className="hidden sm:flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-blue-600/30"
              >
                Login
              </NavLink>

            )}

          </div>

        </div>

      </div>
    </nav>
  );
}
