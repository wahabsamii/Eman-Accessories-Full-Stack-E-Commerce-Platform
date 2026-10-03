
import React, { useEffect, useMemo, useState } from "react";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiGrid,
  FiList,
  FiSliders,
} from "react-icons/fi";

const FilterMenu = ({ products = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const productsPerPage = 6;

  // Extract unique categories
  useEffect(() => {
    if (products?.length) {
      const uniqueCategories = [
        ...new Set(
          products
            .map((product) => product?.category?.name)
            .filter(Boolean)
        ),
      ];

      setCategories(uniqueCategories);
    } else {
      setCategories([]);
    }
  }, [products]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setMobileFilterOpen(false);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product?.category?.name === selectedCategory
    );
  }, [products, selectedCategory]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startItem =
    filteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1;

  const endItem = Math.min(
    indexOfLastProduct,
    filteredProducts.length
  );

  return (
    <section className="min-h-screen bg-[#f8f8f7]">
      {/* =====================================================
          TOP HEADER
      ====================================================== */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Shop Collection
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                All Products
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                Explore our complete collection and find pieces that fit
                your style.
              </p>
            </div>

            {/* Mobile Filter */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-800 shadow-sm transition-all hover:border-gray-900 md:hidden"
            >
              <FiSliders />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="flex gap-8">
          {/* =================================================
              DESKTOP SIDEBAR
          ================================================== */}
          <aside className="hidden w-60 shrink-0 md:block lg:w-64">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              {/* Sidebar Header */}
              <div className="border-b border-gray-100 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiFilter className="text-gray-500" />

                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                      Filters
                    </h2>
                  </div>

                  {selectedCategory !== "all" && (
                    <button
                      type="button"
                      onClick={() => handleCategoryChange("all")}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Categories
                  </h3>

                  <span className="text-xs text-gray-400">
                    {categories.length}
                  </span>
                </div>

                <div className="space-y-1">
                  {/* All */}
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("all")}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition-all ${
                      selectedCategory === "all"
                        ? "bg-gray-900 font-medium text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>All Products</span>

                    <span
                      className={`text-xs ${
                        selectedCategory === "all"
                          ? "text-white/60"
                          : "text-gray-400"
                      }`}
                    >
                      {products.length}
                    </span>
                  </button>

                  {/* Categories */}
                  {categories.map((category) => {
                    const categoryCount = products.filter(
                      (product) =>
                        product?.category?.name === category
                    ).length;

                    const isSelected =
                      selectedCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          handleCategoryChange(category)
                        }
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition-all ${
                          isSelected
                            ? "bg-gray-900 font-medium text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span className="capitalize">
                          {category}
                        </span>

                        <span
                          className={`text-xs ${
                            isSelected
                              ? "text-white/60"
                              : "text-gray-400"
                          }`}
                        >
                          {categoryCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Small Info */}
              <div className="border-t border-gray-100 bg-gray-50 p-5">
                <p className="text-xs leading-5 text-gray-500">
                  Browse our collection by category to find exactly
                  what you're looking for.
                </p>
              </div>
            </div>
          </aside>

          {/* =================================================
              PRODUCTS
          ================================================== */}
          <div className="min-w-0 flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1
                    ? "Product"
                    : "Products"}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Showing {startItem}–{endItem} of{" "}
                  {filteredProducts.length}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                {/* Selected Category */}
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="text-xs text-gray-400">
                    Category:
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium capitalize text-gray-700">
                    {selectedCategory === "all"
                      ? "All Products"
                      : selectedCategory}
                  </span>
                </div>

                {/* View Toggle */}
                <div className="flex rounded-lg border border-gray-200 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition-all ${
                      viewMode === "grid"
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                    aria-label="Grid view"
                  >
                    <FiGrid />
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition-all ${
                      viewMode === "list"
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                    aria-label="List view"
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                EMPTY STATE
            ================================================== */}
            {currentProducts.length === 0 ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <FiFilter className="text-xl text-gray-400" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  No products found
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  We couldn't find any products in this category.
                  Try selecting another category.
                </p>

                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  className="mt-5 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <>
                {/* =================================================
                    GRID VIEW
                ================================================== */}
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {currentProducts.map((item) => (
                      <div
                        key={item._id}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
                      >
                        {/* Image */}
                        <div className="relative h-72 overflow-hidden bg-gray-100">
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                          {/* Category */}
                          <div className="absolute left-4 top-4">
                            <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold capitalize text-gray-800 shadow-sm backdrop-blur-sm">
                              {item?.category?.name}
                            </span>
                          </div>
                        </div>

                        {/* Information */}
                        <div className="p-5">
                          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="mt-2 min-h-[40px] text-sm leading-5 text-gray-500">
                            {item.description
                              ?.split(" ")
                              .slice(0, 15)
                              .join(" ")}
                            {item.description?.split(" ").length > 15
                              ? "..."
                              : ""}
                          </p>

                          <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-4">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Price
                              </p>

                              <p className="mt-1 text-xl font-bold text-gray-900">
                                ${item.price}
                              </p>
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                              <FiChevronRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* =================================================
                      LIST VIEW
                  ================================================== */
                  <div className="space-y-4">
                    {currentProducts.map((item) => (
                      <div
                        key={item._id}
                        className="group flex overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                      >
                        <div className="h-40 w-40 shrink-0 overflow-hidden bg-gray-100 sm:h-48 sm:w-48">
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6">
                          <span className="mb-2 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
                            {item?.category?.name}
                          </span>

                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                            {item.description}
                          </p>

                          <div className="mt-4">
                            <span className="text-xl font-bold text-gray-900">
                              ${item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* =================================================
                    PAGINATION
                ================================================== */}
                {totalPages > 1 && (
                  <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-6 sm:flex-row">
                    <p className="text-xs text-gray-400">
                      Page {currentPage} of {totalPages}
                    </p>

                    <div className="flex items-center gap-2">
                      {/* Previous */}
                      <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.max(prev - 1, 1)
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-600"
                        aria-label="Previous page"
                      >
                        <FiChevronLeft />
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;

                          return (
                            <button
                              type="button"
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`h-10 min-w-10 rounded-xl px-3 text-sm font-medium transition-all ${
                                currentPage === page
                                  ? "bg-gray-900 text-white shadow-md"
                                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>

                      {/* Next */}
                      <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-600"
                        aria-label="Next page"
                      >
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE FILTER DRAWER
      ====================================================== */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl">
            <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gray-200" />

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Shop
                </p>

                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                  Filter Products
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-sm ${
                  selectedCategory === "all"
                    ? "bg-gray-900 font-medium text-white"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <span>All Products</span>
                <span>{products.length}</span>
              </button>

              {categories.map((category) => {
                const count = products.filter(
                  (product) =>
                    product?.category?.name === category
                ).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-sm capitalize ${
                      selectedCategory === category
                        ? "bg-gray-900 font-medium text-white"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span>{category}</span>
                    <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FilterMenu;


// import React, { useState, useEffect } from "react";

// const FilterMenu = ({ products }) => {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [categories, setCategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   // Extract unique categories
//   useEffect(() => {
//     if (products?.length) {
//       const uniqueCategories = [
//         ...new Set(products.map((product) => product.category.name)),
//       ];
//       setCategories(uniqueCategories);
//     }
//   }, [products]);

//   // Handle category change
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//     setCurrentPage(1); // Reset to first page
//   };

//   // Filtered products
//   const filteredProducts =
//     selectedCategory === "all"
//       ? products
//       : products.filter((product) => product.category.name === selectedCategory);

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   // Change page
//   const goToPage = (page) => setCurrentPage(page);

//   return (
//     <div className="flex flex-row w-full gap-4">
//       {/* Filter options */}
//       <div className="filter-options bg-slate-200 w-[25%] flex flex-col p-5">
//         <h4 className="text-2xl font-bold mb-4">Categories</h4>
//         <label className="w-full text-[20px]">
//           <input
//             type="checkbox"
//             name="category"
//             value="all"
//             checked={selectedCategory === "all"}
//             onChange={handleCategoryChange}
//           />
//           All
//         </label>
//         {categories.map((category) => (
//           <label className="text-[20px]" key={category}>
//             <input
//               type="checkbox"
//               name="category"
//               value={category}
//               checked={selectedCategory === category}
//               onChange={handleCategoryChange}
//             />
//             {category}
//           </label>
//         ))}
//       </div>

//       {/* Product list */}
//       <div className="product-container w-[75%] p-5 flex flex-col items-center">
//         <div className="flex flex-wrap justify-start gap-5 w-full">
//           {currentProducts.map((item, i) => (
//             <div key={i} className="w-[250px] p-2 rounded-xl bg-blue-200">
//               <img
//                 src={item.photo}
//                 alt=""
//                 className="rounded-xl mb-3 w-[250px] h-[250px] object-cover"
//               />
//               <p className="text-blue-200 bg-black inline px-1 py-1 rounded-sm text-[14px]">
//                 {item.category.name}
//               </p>
//               <h1 className="text-[18px] font-semibold py-2">{item.name}</h1>
//               <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>
//               <p>$ {item.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* Pagination controls */}
//         <div className="mt-6 flex gap-2">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToPage(index + 1)}
//               className={`px-4 py-2 rounded border ${
//                 currentPage === index + 1
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-blue-600"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterMenu;