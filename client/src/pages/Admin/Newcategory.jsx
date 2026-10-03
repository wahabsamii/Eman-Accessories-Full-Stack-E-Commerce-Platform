
import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../utils/api";
import toast from "react-hot-toast";

export default function NewCategory() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);

    if (image) {
      formData.append("photo", image);
    }

    try {
      const res = await axios.post(
        `${serverUrl}/create-category`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setImage(null);
        setPreview(null);
      } else {
        toast.error(res.data.message || "Failed to create category");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response?.data || error.message
      );

      toast.error(error.response?.data?.message || error.message);
    }
  };

  const getAllCategory = async () => {
    try {
      const response = await axios.get(`${serverUrl}/all-categories`);
      setCategories(response.data.allcategories);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Categories
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Category Management
          </h1>

          <p className="text-gray-500 mt-2">
            Create a new category and view your existing categories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Existing Categories */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Existing Categories
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {categories?.length || 0} categories available
                </p>
              </div>
            </div>

            {categories?.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div key={category?._id || index}
                    className="group border border-gray-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={category.photo}
                        alt={category?.name || "Category"}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-gray-800 truncate text-center">
                      {category?.name || "new"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-300 rounded-xl p-10 text-center">
                <p className="text-gray-500">
                  No categories available.
                </p>
              </div>
            )}
          </div>

          {/* Create Category Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-fit">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Add Category
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Enter category details below.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter category name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Image */}
              <div className="mb-5">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category Image
                </label>

                <input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-sm text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Preview */}
              {preview && (
                <div className="mb-5">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Image Preview
                  </p>

                  <div className="border border-gray-200 rounded-xl p-3 bg-gray-50">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                Create Category
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}