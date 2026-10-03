import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { serverUrl } from "../../utils/api";
import {
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [auth] = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${serverUrl}/api/order/${auth?.user?._id}`
        );

        setOrders(res.data.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.user?._id) {
      fetchOrders();
    }
  }, [auth]);

  const totalOrders = orders.length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const cancelledOrders = orders.filter(
    (order) =>
      order.status === "cancel" || order.status === "Cancelled"
  ).length;

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-50 text-green-700 border-green-200";
    }

    if (status === "Processing") {
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    }

    if (status === "cancel" || status === "Cancelled") {
      return "bg-red-50 text-red-700 border-red-200";
    }

    return "bg-gray-50 text-gray-600 border-gray-200";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Welcome Header */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  My Account
                </p>

                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  Welcome back, {auth?.user?.name || "User"}!
                </h1>

                <p className="text-gray-500 mt-2">
                  Here is a quick overview of your account and recent orders.
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FiUser className="text-2xl" />
              </div>

            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

            {/* Total Orders */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Total Orders
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {totalOrders}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiShoppingBag className="text-xl" />
                </div>
              </div>
            </div>

            {/* Processing */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Processing
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {processingOrders}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <FiClock className="text-xl" />
                </div>
              </div>
            </div>

            {/* Delivered */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Delivered
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {deliveredOrders}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <FiCheckCircle className="text-xl" />
                </div>
              </div>
            </div>

            {/* Cancelled */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Cancelled
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {cancelledOrders}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <FiXCircle className="text-xl" />
                </div>
              </div>
            </div>

          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-gray-200">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Orders
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Your latest purchases and order status.
                </p>
              </div>

              <button
                onClick={() => navigate("/dashboard/user/orders")}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                View All Orders
                <FiArrowRight />
              </button>
            </div>

            {loading ? (
              <div className="p-10 text-center">
                <p className="text-gray-500">
                  Loading your orders...
                </p>
              </div>
            ) : orders.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                  <FiShoppingBag className="text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  No Orders Yet
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Your recent orders will appear here.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {orders.slice(0, 5).map((order, index) => (
                  <div
                    key={order._id || index}
                    className="px-6 py-5 hover:bg-gray-50 transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                      {/* Order Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <FiShoppingBag />
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Order #{String(index + 1).padStart(2, "0")}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            {order.products?.length || 0} product
                            {order.products?.length === 1 ? "" : "s"}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Order Date
                        </p>

                        <p className="text-sm text-gray-700 mt-1">
                          {new Date(
                            order.createdAt || order.date
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      {/* Payment */}
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Total
                        </p>

                        <p className="text-sm font-bold text-gray-900 mt-1">
                          ${order.payment}
                        </p>
                      </div>

                      {/* Status */}
                      <div>
                        <span
                          className={`inline-flex px-3 py-1.5 rounded-full border text-xs font-semibold ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Account Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Account Information
              </h2>

              <div className="mt-5 space-y-4">

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Full Name
                  </p>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    {auth?.user?.name || "Not available"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Email
                  </p>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    {auth?.user?.email || "Not available"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    {auth?.user?.phone || "Not available"}
                  </p>
                </div>

              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-2xl shadow-sm p-6 text-white">
              <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">
                Quick Access
              </p>

              <h2 className="text-xl font-bold mt-2">
                Manage your account
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                View your complete order history or manage your profile
                information.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <button
                  onClick={() =>
                    navigate("/dashboard/user/orders")
                  }
                  className="px-4 py-2.5 bg-white text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-100 transition"
                >
                  My Orders
                </button>

                <button
                  onClick={() =>
                    navigate("/dashboard/user/profile")
                  }
                  className="px-4 py-2.5 border border-gray-700 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
                >
                  My Profile
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}