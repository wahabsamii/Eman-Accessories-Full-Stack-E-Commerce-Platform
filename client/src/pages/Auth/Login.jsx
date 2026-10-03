import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { serverUrl } from "../../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleAdminLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("admin");
  };
  const handleCustomerLogin = () => {
    setEmail("jhondoe@gmail.com");
    setPassword("jhondoe123");
  };

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${serverUrl}/login`,
        {
          email,
          password,
        }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex min-h-[620px]">

        {/* LEFT BRANDING SECTION */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-12 text-white flex-col justify-between">
          
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/10 rounded-full" />

          <div className="relative z-10">
            

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Welcome
              <br />
              Back.
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-sm">
              Sign in to your account and continue where you left off.
              Everything you need is just one step away.
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                ✓
              </div>
              <div>
                <p className="font-medium">Secure & Simple</p>
                <p className="text-sm text-blue-200">
                  Your account is protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="w-full md:w-1/2 p-7 sm:p-10 lg:p-14 flex items-center">
          <div className="w-full max-w-md mx-auto">

            {/* Mobile Logo */}
            <div className="md:hidden flex justify-center mb-7">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">A</span>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-blue-600 mb-2">
                WELCOME BACK
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Sign in to your account
              </h2>

              <p className="text-slate-500 mt-3">
                Enter your details below to access your account.
              </p>
            </div>

            <div className="mb-4">
              <button onClick={handleAdminLogin} className="bg-blue-600 text-white px-4 py-2 rounded-md">Admin Login</button>
              <button onClick={handleCustomerLogin} className="bg-blue-600 ml-3 text-white px-4 py-2 rounded-md">Customer Login</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email address
                </label>

                <div className="relative">
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
                        d="M16 12H8m8 0-3 3m3-3-3-3m9 3a9 9 0 11-18 0 9 9 0 0118 0z"
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

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
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
                    placeholder="Enter your password"
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

              {/* Remember Me */}
              <div className="flex items-center">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-sm text-slate-600">
                    Remember me
                  </span>
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400 uppercase tracking-wider">
                New here?
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Create an account
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
