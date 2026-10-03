
import React from "react";
import { useSearch } from "../../context/search";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";
import Header from "../../components/Header";

const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart, addToCart] = useCart();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">

        {/* Page Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Product Search
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Search Results
          </h1>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-black"></div>

          {values?.results?.length > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              Found{" "}
              <span className="font-semibold text-gray-900">
                {values.results.length}
              </span>{" "}
              product{values.results.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* No Results */}
        {!values?.results?.length ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No Products Found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with a different product name or keyword.
            </p>
          </div>
        ) : (
          /* Products */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.results.map((item) => (
              <div
                key={item._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category */}
                  {item.category?.name && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-black/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        {item.category.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex min-h-[230px] flex-col p-5">

                  <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-gray-500">
                    {item.description
                      ?.split(" ")
                      .slice(0, 10)
                      .join(" ")}
                    {item.description?.split(" ").length > 10
                      ? "..."
                      : ""}
                  </p>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                  </div>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    className="mt-auto w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-[0.98]"
                    onClick={() => {
                      addToCart(item);
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Search;