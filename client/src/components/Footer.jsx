import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const Footer = () => {
  const shopLinks = [
    "New In",
    "Women",
    "Men",
    "Shoes",
    "Bags & Accessories",
    "Top Brands",
    "Sale & Special Offers",
  ];

  const informationLinks = [
    "About Us",
    "Our Story",
    "Blog",
    "FAQs",
  ];

  const serviceLinks = [
    "Search Terms",
    "Advanced Search",
    "Orders & Returns",
    "Contact Us",
    "Store Locations",
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      icon: <FaPinterestP />,
      label: "Pinterest",
    },
    {
      icon: <FaTiktok />,
      label: "TikTok",
    },
    {
      icon: <FaYoutube />,
      label: "YouTube",
    },
    {
      icon: <FaXTwitter />,
      label: "X",
    },
  ];

  return (
    <footer className="bg-[#0b0b0b] text-white">
      {/* Newsletter / Brand Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            {/* Brand */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                  <span className="text-sm font-bold">E</span>
                </div>

                <span className="text-2xl font-semibold tracking-[0.15em]">
                  ELLA
                </span>
              </div>

              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Style that speaks
                <span className="text-white/40"> for itself.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                Discover thoughtfully selected fashion, timeless essentials,
                and modern pieces designed to elevate your everyday style.
              </p>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                  <FiMail className="text-lg" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Stay in the loop
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Join our newsletter
                  </h3>
                </div>
              </div>

              <p className="mb-5 text-sm leading-6 text-white/50">
                Get first access to new arrivals, exclusive offers, and
                fashion updates.
              </p>

              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-white/30 focus:bg-white/[0.08]"
                />

                <button
                  type="submit"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-200 active:scale-95"
                >
                  Subscribe
                  <FiArrowRight className="text-base" />
                </button>
              </form>

              <p className="mt-3 text-[11px] text-white/30">
                By subscribing, you agree to receive promotional emails from
                ELLA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Shop */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Information
            </h3>

            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Customer Service
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-white/60" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-white/30">
                    Store
                  </p>
                  <p className="mt-1 text-sm leading-5 text-white/60">
                    Visit our store and discover
                    <br />
                    the latest collection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-white/60" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-white/30">
                    Customer Care
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    +92 343 2214582
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0 text-white/60" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-white/30">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    support@ella.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Features */}
      <div className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          <div className="flex items-center gap-4 py-6 sm:px-6 sm:first:pl-0">
            <FiTruck className="text-2xl text-white/70" />

            <div>
              <p className="text-sm font-semibold">Fast Delivery</p>
              <p className="mt-1 text-xs text-white/40">
                Reliable shipping on every order
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 sm:px-6">
            <FiShield className="text-2xl text-white/70" />

            <div>
              <p className="text-sm font-semibold">Secure Shopping</p>
              <p className="mt-1 text-xs text-white/40">
                Safe and secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 sm:px-6 sm:last:pr-0">
            <FiArrowRight className="text-2xl text-white/70" />

            <div>
              <p className="text-sm font-semibold">Easy Returns</p>
              <p className="mt-1 text-xs text-white/40">
                Simple returns & support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-xs text-white/40">
              © 2026 ELLA. All Rights Reserved.
            </p>

            <p className="mt-1 text-xs text-white/25">
              Designed & Developed by Abdul Wahab
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 lg:justify-end">
            {socialLinks.map((social) => (
              <button
                key={social.label}
                type="button"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/30 lg:justify-start">
          <button type="button" className="hover:text-white transition-colors">
            Privacy Policy
          </button>

          <button type="button" className="hover:text-white transition-colors">
            Terms & Conditions
          </button>

          <button type="button" className="hover:text-white transition-colors">
            Shipping Policy
          </button>

          <button type="button" className="hover:text-white transition-colors">
            Refund Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
