
import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { serverUrl } from "../../utils/api";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `${serverUrl}/api/v1/product/search/${values.keyword}`
      );

      setValues({
        ...values,
        results: data,
      });

      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex items-center w-full max-w-md h-11 border border-white/10 rounded-xl overflow-hidden transition-all duration-200  focus-within:border-white/30 focus-within:ring-2 focus-within:ring-blue-500/20"
    >
      {/* Search Icon */}
      <div className="flex items-center justify-center pl-4 text-gray-400">
        <FiSearch className="text-[19px]" />
      </div>

      {/* Input */}
      <input
        type="search"
        placeholder="Search products..."
        aria-label="Search products"
        value={values.keyword}
        onChange={(e) =>
          setValues({
            ...values,
            keyword: e.target.value,
          })
        }
        className="w-full h-full px-3 bg-black text-white placeholder-gray-400 outline-none border-none focus:ring-0 focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="h-9 mr-1.5 px-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white text-sm font-medium transition-all duration-200 hover:bg-blue-700 active:bg-blue-800"
      >
        <FiSearch className="text-[16px]" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchInput;
