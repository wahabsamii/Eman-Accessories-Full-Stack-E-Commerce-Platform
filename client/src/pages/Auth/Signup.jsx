import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { serverUrl } from "../../utils/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${serverUrl}/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );

      if (res && res.data) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

          {/* ================= LEFT SECTION ================= */}
          <div className="hidden lg:flex lg:w-[40%] relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-12 text-white flex-col justify-between min-h-[760px]">

            {/* Decorative circles */}
            <div className="absolute -top-28 -right-28 w-80 h-80 bg-white/10 rounded-full" />

            <div className="absolute -bottom-36 -left-24 w-96 h-96 bg-white/10 rounded-full" />

            {/* Branding */}
            <div className="relative z-10">

              

              <p className="text-blue-200 text-sm font-semibold tracking-wider mb-3">
                GET STARTED
              </p>

              <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                Create your
                <br />
                account.
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-sm">
                Join us today and get access to everything you need.
                Creating your account only takes a few minutes.
              </p>
            </div>

            {/* Features */}
            <div className="relative z-10 space-y-5">

              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-medium">
                    Quick registration
                  </p>

                  <p className="text-sm text-blue-200">
                    Get started in minutes
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-medium">
                    Secure account
                  </p>

                  <p className="text-sm text-blue-200">
                    Your information stays protected
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-medium">
                    Easy access
                  </p>

                  <p className="text-sm text-blue-200">
                    Sign in anytime from anywhere
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="w-full lg:w-[60%] p-6 sm:p-10 lg:p-12 xl:p-14">

            

            {/* Header */}
            <div className="mb-8">

              <p className="text-sm font-semibold text-blue-600 mb-2">
                CREATE ACCOUNT
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Let's get you started
              </h2>

              <p className="text-slate-500 mt-3">
                Fill in your details below to create your account.
              </p>

            </div>

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* ================= NAME + EMAIL ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full name
                  </label>

                  <div className="relative">

                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21a7 7 0 0114 0"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email address
                  </label>

                  <div className="relative">

                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

              </div>

              {/* ================= PHONE + ADDRESS ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Phone */}
                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Phone number
                  </label>

                  <div className="relative">

                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.3a2 2 0 011.9 1.4L11.2 8a2 2 0 01-.5 2.1l-1.4 1.4a16 16 0 006.2 6.2l1.4-1.4a2 2 0 012.1-.5l3.6 1.2a2 2 0 011.4 1.9V21a2 2 0 01-2 2h-1C11.6 23 1 12.4 1 1V5z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 1234567"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

                {/* Address */}
                <div>

                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Address
                  </label>

                  <div className="relative">

                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 21s8-7.2 8-12a8 8 0 10-16 0c0 4.8 8 12 8 12z"
                        />

                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Your address"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

              </div>

              {/* ================= SECURITY ANSWER ================= */}
              <div>

                <label
                  htmlFor="answer"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Security answer
                </label>

                <div className="relative">

                  {/* Icon */}
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h8M8 14h5M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="What is your favorite car?"
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    required
                  />

                </div>

                <p className="text-xs text-slate-400 mt-2">
                  This answer may be used to recover your account.
                </p>

              </div>

              {/* ================= PASSWORD ================= */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Password
                </label>

                <div className="relative">

                  {/* Lock Icon */}
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3h8z"
                      />
                    </svg>
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full h-14 pl-12 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    required
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 4.2A9.7 9.7 0 0112 4c5 0 8.5 4 9.5 8-.4 1.6-1.2 3-2.3 4.2M6.1 6.1C4.5 7.4 3.4 9.1 3 12c1 4 4.5 8 9 8 1.2 0 2.3-.2 3.3-.6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="2.5"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </button>

                </div>
              </div>

              {/* ================= FORGOT PASSWORD ================= */}
              <div className="flex justify-end">

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </button>

              </div>

              {/* ================= SIGNUP BUTTON ================= */}
              <button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                Create account
              </button>

            </form>

            {/* ================= DIVIDER ================= */}
            <div className="flex items-center gap-4 my-7">

              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs text-slate-400 uppercase tracking-wider">
                Already registered?
              </span>

              <div className="h-px flex-1 bg-slate-200" />

            </div>

            {/* ================= LOGIN ================= */}
            <p className="text-center text-sm text-slate-500">

              Already have an account?{" "}

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign in
              </button>

            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
