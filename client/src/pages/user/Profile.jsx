import React, { useEffect, useState } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import {
  FiEdit3,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiLock,
  FiCheck,
  FiX,
} from "react-icons/fi";

export default function Profile() {
  const [auth, setAuth] = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Get user data
  useEffect(() => {
    const user = auth?.user;

    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [auth?.user]);

  // Cancel editing and restore original data
  const handleCancel = () => {
    const user = auth?.user;

    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setAddress(user?.address || "");
    setPassword("");

    setIsEditing(false);
  };

  // Save changes locally
  const handleSubmit = (e) => {
    e.preventDefault();

    setAuth({
      ...auth,
      user: {
        ...auth?.user,
        name,
        phone,
        address,
      },
    });

    setPassword("");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
                My Account
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                My Profile
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your personal information and account details.
              </p>
            </div>

            {!isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
              >
                <FiEdit3 size={18} />
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Profile Top */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 sm:px-8 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-blue-600">
                    {name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                </div>

                <div className="text-white">
                  <h2 className="text-2xl font-bold">
                    {name || "User"}
                  </h2>

                  <p className="text-gray-300 mt-1">
                    {email || "No email available"}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Account Active
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">

              {!isEditing ? (
                <>
                  {/* Details Heading */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Personal Information
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Your account information is displayed below.
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <FiUser size={19} />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                            Full Name
                          </p>
                          <p className="text-gray-900 font-semibold mt-1">
                            {name || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <FiMail size={19} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                            Email Address
                          </p>
                          <p className="text-gray-900 font-semibold mt-1 break-all">
                            {email || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                          <FiPhone size={19} />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                            Phone Number
                          </p>
                          <p className="text-gray-900 font-semibold mt-1">
                            {phone || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                          <FiMapPin size={19} />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                            Address
                          </p>
                          <p className="text-gray-900 font-semibold mt-1">
                            {address || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Security */}
                  <div className="mt-6 p-5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center shrink-0">
                      <FiLock size={18} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Account Security
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        Your password is securely protected and is not displayed here.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Edit Heading */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Edit Personal Information
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Update your information below and save your changes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name
                      </label>

                      <div className="relative">
                        <FiUser
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          placeholder="Enter your name"
                          required
                          className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <FiMail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="email"
                          value={email}
                          id="email"
                          disabled
                          className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
                        />
                      </div>

                      <p className="text-xs text-gray-400 mt-2">
                        Email address cannot be changed.
                      </p>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>

                      <div className="relative">
                        <FiPhone
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          id="phone"
                          placeholder="Enter your phone number"
                          required
                          className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Address
                      </label>

                      <div className="relative">
                        <FiMapPin
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          id="address"
                          placeholder="Enter your address"
                          required
                          className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        New Password
                      </label>

                      <div className="relative">
                        <FiLock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          placeholder="Enter a new password if you want to change it"
                          className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition"
                        />
                      </div>

                      <p className="text-xs text-gray-400 mt-2">
                        Leave this empty if you do not want to change your password.
                      </p>
                    </div>
                  </div>

                  {/* Edit Actions */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-100">

                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
                    >
                      <FiX size={18} />
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
                    >
                      <FiCheck size={18} />
                      Save Changes
                    </button>

                  </div>
                </>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}