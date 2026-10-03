
import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../utils/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  const AllProducts = async () => {
    try {
      const allProducts = await axios.get(`${serverUrl}/get-allproducts`);

      if (allProducts.data.success) {
        setProducts(allProducts.data.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProduct = async (pid) => {
    try {
      const response = await axios.delete(
        `${serverUrl}/delete-product/${pid}`
      );
      console.log(response);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Store Management
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">
                Products
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your products and inventory.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl px-4 py-2">
              <span className="text-sm text-gray-500">
                Total Products
              </span>

              <span className="ml-2 font-bold text-gray-900">
                {products.length}
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category */}
                  <span className="absolute top-3 left-3 text-xs font-medium text-white bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {item.category.name}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h1 className="text-lg font-semibold text-gray-900 truncate">
                    {item.name}
                  </h1>

                  <p className="text-sm text-gray-500 leading-6 mt-2 min-h-[48px]">
                    {item.description
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                    ...
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-5 pt-4 border-t border-gray-100">
                    <button
                      className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(item._id)}
                      className="flex-1 bg-red-500 text-white py-2.5 rounded-xl font-medium hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              No Products Found
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              There are currently no products available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}