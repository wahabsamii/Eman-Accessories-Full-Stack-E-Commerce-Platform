
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Alert } from "antd";
import { serverUrl } from "../../utils/api";
import { FiShoppingBag, FiCalendar, FiUser } from "react-icons/fi";

export default function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(`${serverUrl}/api/order/status`, {
      orderId,
      status: event.target.value,
    });

    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  const fetchAllOrders = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/order/all`);
      setAllOrders(res.data.allorders);
    } catch (error) {
      setError("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Order Management
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">
                All Orders
              </h1>

              <p className="text-gray-500 mt-2">
                View and manage customer orders.
              </p>
            </div>

            {/* Order Count */}
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Total Orders
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-1">
                {allOrders.length}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-80 flex flex-col justify-center items-center">
            <Spin size="large" />

            <p className="text-sm text-gray-500 mt-4">
              Loading orders...
            </p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <Alert message={error} type="error" showIcon />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Table Header */}
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiShoppingBag className="text-xl" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Customer Orders
                  </h2>

                  <p className="text-sm text-gray-500">
                    Manage order status and view order details.
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            {allOrders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">

                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        S.No
                      </th>

                      <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>

                      <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Status
                      </th>

                      <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Date
                      </th>

                      <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {allOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="hover:bg-blue-50/40 transition-colors duration-200"
                      >

                        {/* S.No */}
                        <td className="py-5 px-6">
                          <span className="text-sm font-medium text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                              <FiUser />
                            </div>

                            <div>
                              <p className="font-semibold text-gray-800">
                                {order.buyer.name}
                              </p>

                              <p className="text-xs text-gray-400">
                                Customer
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-5 px-6">
                          <select
                            onChange={(event) =>
                              statusHandler(event, order._id)
                            }
                            value={order.status}
                            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                          >
                            <option value="Not Process">
                              Not Process
                            </option>

                            <option value="Processing">
                              Processing
                            </option>

                            <option value="deliverd">
                              Delivered
                            </option>

                            <option value="cancel">
                              Cancel
                            </option>
                          </select>
                        </td>

                        {/* Date */}
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiCalendar className="text-gray-400" />

                            <span>
                              {new Date(
                                order.date
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </td>

                        {/* Total */}
                        <td className="py-5 px-6">
                          <div className="font-bold text-gray-900">
                            $
                            {order.products.map((item, itemIndex) => (
                              <span key={itemIndex}>
                                {item.price}
                                {itemIndex <
                                order.products.length - 1
                                  ? ", "
                                  : ""}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <FiShoppingBag className="text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  No Orders Found
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  There are currently no customer orders.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}