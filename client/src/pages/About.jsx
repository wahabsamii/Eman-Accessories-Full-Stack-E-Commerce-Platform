
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Img from "../assessts/hero.webp";
import Imm2 from "../assessts/shop-banner.webp";

import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Header/>
      <div className="bg-white text-gray-900 overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="relative min-h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Imm2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium">
              Our Story
            </span>
          </div>

          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            About <span className="font-light">Us</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-8"
          >
            Discover the story behind our brand, the people who make it
            possible, and the values that shape everything we do.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-10 flex justify-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={Img}
                alt="Our team"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-2xl p-5 sm:p-6 max-w-[220px]"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
                <FiHeart size={20} />
              </div>

              <p className="text-sm font-semibold text-gray-900">
                Made with passion
              </p>

              <p className="text-xs text-gray-500 mt-1 leading-5">
                Every detail matters to us.
              </p>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left" className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">
              Who We Are
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-6 leading-tight">
              More than a store.
              <br />
              <span className="font-light text-gray-500">
                It's a lifestyle.
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              We are a passionate team dedicated to creating a shopping
              experience that feels simple, inspiring, and personal. From
              discovering something you love to receiving it at your doorstep,
              every part of the journey matters.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              We carefully bring together quality products, thoughtful design,
              and reliable service so you can shop with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FiAward size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Quality First
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Products selected with care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FiHeart size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Customer Focused
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Your experience comes first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-aos="fade-up"
            className="text-center mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              By The Numbers
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Growing with our community
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-10">
            <div
              data-aos="fade-up"
              className="text-center border-b sm:border-b-0 sm:border-r border-white/10 pb-8 sm:pb-0"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tight">
                10K<span className="text-gray-500">+</span>
              </h3>

              <p className="mt-4 text-gray-400">
                Happy Customers
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center border-b sm:border-b-0 sm:border-r border-white/10 pb-8 sm:pb-0"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tight">
                5
              </h3>

              <p className="mt-4 text-gray-400">
                Years of Experience
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tight">
                500<span className="text-gray-500">+</span>
              </h3>

              <p className="mt-4 text-gray-400">
                Products Delivered Monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="max-w-2xl mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">
              What Matters To Us
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
              Built around values
              <span className="font-light text-gray-500"> that matter.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-950 text-white flex items-center justify-center mb-7">
                <FiShield size={23} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Trust
              </h3>

              <p className="text-gray-500 leading-7">
                We believe great shopping starts with transparency,
                reliability, and keeping our promises.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-950 text-white flex items-center justify-center mb-7">
                <FiStar size={23} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Quality
              </h3>

              <p className="text-gray-500 leading-7">
                Every product is chosen with attention to quality, style,
                value, and the experience it delivers.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-950 text-white flex items-center justify-center mb-7">
                <FiShoppingBag size={23} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Simplicity
              </h3>

              <p className="text-gray-500 leading-7">
                From browsing to checkout, we aim to make every step simple,
                smooth, and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="py-24 sm:py-32 px-6 bg-white">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-7">
            <div className="w-14 h-14 rounded-full bg-gray-950 text-white flex items-center justify-center">
              <FiHeart size={22} />
            </div>
          </div>

          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">
            Our Mission
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-5 mb-7 leading-tight">
            Making shopping
            <br />
            <span className="font-light text-gray-500">
              more personal.
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-3xl mx-auto">
            Our mission is to redefine online shopping by making it more
            accessible, personalized, and enjoyable. We want every customer to
            discover products they love while receiving the quality, value,
            and care they deserve.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICE HIGHLIGHTS
      ====================================================== */}
      <section className="border-y border-gray-100 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center justify-center gap-3">
            <FiTruck size={22} />
            <div>
              <p className="font-semibold text-sm">Fast Delivery</p>
              <p className="text-xs text-gray-500 mt-1">
                Reliable shipping
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiShield size={22} />
            <div>
              <p className="font-semibold text-sm">Secure Shopping</p>
              <p className="text-xs text-gray-500 mt-1">
                Shop with confidence
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiStar size={22} />
            <div>
              <p className="font-semibold text-sm">Quality Products</p>
              <p className="text-xs text-gray-500 mt-1">
                Carefully selected
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiHeart size={22} />
            <div>
              <p className="font-semibold text-sm">Customer Care</p>
              <p className="text-xs text-gray-500 mt-1">
                We're here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative bg-gray-950 text-white py-20 sm:py-24 px-6 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 border border-white/10 rounded-full" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 border border-white/10 rounded-full" />

        <div
          data-aos="fade-up"
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Start Exploring
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-5 mb-5 tracking-tight">
            Find something
            <br />
            <span className="font-light text-gray-400">
              you'll love.
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-7 mb-9">
            Explore our latest collection and discover products selected to
            bring style, quality, and value to your everyday life.
          </p>

          <a
            href="/products"
            className="group inline-flex items-center gap-3 bg-white text-gray-950 font-semibold px-7 py-4 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            Visit Our Store

            <span className="w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <FiArrowRight size={16} />
            </span>
          </a>
        </div>
      </section>
    </div>


    <Footer />
    </>
  );
};

export default About;