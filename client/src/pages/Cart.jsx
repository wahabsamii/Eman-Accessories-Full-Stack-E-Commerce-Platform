
import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import Payments from "../components/Payments";
import Header from "../components/Header";

const Cart = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // total price
  const totalPrice = () => {
    try {
      let total = 0;

      cart?.map((item) => {
        total = total + item.price * (item.quantity || 1);
      });

      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-10">

          {/* Header */}
          <div className="mb-10">
            <div className="rounded-2xl bg-black px-6 py-8 text-white shadow-lg">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-300">
                Shopping Cart
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                {auth?.token
                  ? `Hello ${auth?.user?.name}`
                  : "Welcome to your cart"}
              </h1>

              <p className="mt-3 text-gray-300">
                {cart?.length
                  ? `You have ${cart.length} item${
                      cart.length > 1 ? "s" : ""
                    } in your cart${
                      auth?.token
                        ? ""
                        : " — please log in to checkout"
                    }`
                  : "Your cart is empty."}
              </p>
            </div>
          </div>

          {/* Empty Cart */}
          {!cart?.length ? (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
                🛒
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">

              {/* Cart Items */}
              <div className="space-y-5 lg:col-span-2">

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Your Items
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Review your selected products
                    </p>
                  </div>

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                    {cart.length} Product{cart.length > 1 ? "s" : ""}
                  </span>
                </div>

                {cart?.map((p) => (
                  <div
                    key={p._id}
                    className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-6">

                      {/* Product Image */}
                      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-36">
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex min-w-0 flex-1 flex-col justify-between">

                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                              {p.name}
                            </h3>

                            <button
                              onClick={() => removeCartItem(p._id)}
                              className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                              title="Remove item"
                            >
                              ✕
                            </button>
                          </div>

                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            {p.description?.substring(0, 50)}
                            {p.description?.length > 50 ? "..." : ""}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

                          {/* Quantity */}
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              Quantity
                            </span>

                            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-900">
                              {p.quantity || 1}
                            </span>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-xs text-gray-400">
                              Price
                            </p>

                            <p className="text-lg font-bold text-gray-900">
                              ${(p.price * (p.quantity || 1)).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

                  <div className="mb-6">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                      Order Summary
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-gray-900">
                      Cart Summary
                    </h2>
                  </div>

                  <div className="space-y-4 border-b border-gray-200 pb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Products
                      </span>

                      <span className="font-medium text-gray-900">
                        {cart.length}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Quantity
                      </span>

                      <span className="font-medium text-gray-900">
                        {cart.reduce(
                          (total, item) =>
                            total + (item.quantity || 1),
                          0
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-end justify-between py-6">
                    <div>
                      <p className="text-sm text-gray-500">
                        Total Amount
                      </p>

                      <p className="mt-1 text-3xl font-bold text-gray-900">
                        {totalPrice()}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  {auth?.user?.address ? (
                    <div className="mb-6 rounded-xl bg-gray-50 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Delivery Address
                          </p>

                          <p className="mt-2 text-sm font-medium leading-5 text-gray-800">
                            {auth?.user?.address}
                          </p>
                        </div>

                        <button
                          className="shrink-0 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                          onClick={() =>
                            navigate("/dashboard/user/profile")
                          }
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {/* Checkout */}
                  <div className="mt-2">
                    {auth?.token ? (
                      <div>
                        <Payments />
                      </div>
                    ) : (
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-[0.98]"
                      >
                        Login to Checkout
                      </button>
                    )}
                  </div>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Secure checkout • Your information is protected
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
