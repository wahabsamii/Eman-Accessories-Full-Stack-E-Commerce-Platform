
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiArrowRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

import Imm2 from "../assessts/shop-banner.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    alert("Thank you for contacting us!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
        <main className="bg-[#f8f8f7]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="relative flex min-h-[430px] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${Imm2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

        {/* Hero Content */}
        <div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
          data-aos="fade-up"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/60" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              We'd Love To Hear From You
            </span>

            <span className="h-px w-10 bg-white/60" />
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Have a question about an order, our products, or anything else?
            Our team is here to help.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-1/2 h-16 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <div data-aos="fade-right">
              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Get In Touch
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Let's start a conversation.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                  Whether you need help with your order, have a question about
                  a product, or simply want to say hello, send us a message.
                  We'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                {/* Email */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FiMail className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900">
                      support@ella.com
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      We usually reply within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FiPhone className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900">
                      +92 343 2214582
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Monday – Saturday, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FiMapPin className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Our Store
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Visit us to explore our latest collection.
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FiClock className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Opening Hours
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Monday – Saturday
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE FORM
            ================================================== */}
            <div data-aos="fade-left">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-xl sm:p-10">
                {/* Decorative Circle */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-50" />

                <div className="relative">
                  {/* Form Header */}
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                        <FiMessageCircle className="text-lg" />
                      </div>

                      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        Send us a message
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Fill out the form and we'll be in touch.
                      </p>
                    </div>

                    <span className="hidden rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 sm:block">
                      We're here to help
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="How can we help you?"
                        required
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.99]"
                    >
                      Send Message

                      <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-xs leading-5 text-gray-400">
                      Your information is only used to respond to your
                      enquiry.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="border-t border-gray-200 bg-white px-6 py-14">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          data-aos="fade-up"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Need Something Else?
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl">
            We're always happy to help.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            From product questions to order assistance, our customer care team
            is ready to make your shopping experience easier.
          </p>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
};

export default ContactPage;