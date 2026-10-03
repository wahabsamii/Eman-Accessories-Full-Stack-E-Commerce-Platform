import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import { FaUsers, FaBox, FaClipboardList } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../../utils/api";

export default function Dashboard() {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const boxes = [
    {
      title: "All Users",
      count: users + 10,
      icon: <FaUsers className="text-white text-xl" />,
      color: "bg-blue-500",
    },
    {
      title: "All Products",
      count: products + 4,
      icon: <FaBox className="text-white text-xl" />,
      color: "bg-green-500",
    },
    {
      title: "All Orders",
      count: 78,
      icon: <FaClipboardList className="text-white text-xl" />,
      color: "bg-purple-500",
    },
  ];

  const gettingAllUsers = async () => {
    try {
      const response = await axios.get(`${serverUrl}/all-users`);
      setUsers(response.data.AllUsers.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const AllProducts = async () => {
    try {
      const allProducts = await axios.get(`${serverUrl}/get-allproducts`);

      if (allProducts.data.success) {
        setProducts(allProducts.data.products.length);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    AllProducts();
    gettingAllUsers();
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-gray-50">

      <div className="flex-1 p-6 md:p-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Admin Panel
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back. Here is an overview of your store.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boxes.map((box, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-6 text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${box.color}`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/10" />

                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-black/5" />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      {box.title}
                    </p>

                    <p className="text-3xl font-bold mt-2">
                      {box.count}
                    </p>

                    <p className="text-xs text-white/70 mt-2">
                      Current total
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {box.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Store Overview
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your users, products, and orders from the admin panel.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-medium text-gray-600">
                  System Active
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}