import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

import Img1 from "../assessts/slide1.webp";
import Img2 from "../assessts/slide2.webp";

function HomeSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* ================= SWIPER ================= */}
      <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1200}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Autoplay,
          EffectFade,
        ]}
        className="homeSwiper"
      >

        {/* ================================================= */}
        {/* SLIDE 1 */}
        {/* ================================================= */}
        <SwiperSlide>

          <div
            className="relative min-h-[650px] h-[calc(100vh-72px)] w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${Img1})`,
            }}
          >

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Left gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Decorative line */}
            <div className="absolute left-0 top-1/2 hidden h-px w-24 bg-white/40 lg:block" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">

              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-2xl text-white">

                  {/* Small label */}
                  <div className="mb-6 flex items-center gap-3">

                    <span className="h-px w-10 bg-blue-400" />

                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                      New Collection
                    </span>

                  </div>

                  {/* Heading */}
                  <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">

                    Lifestyle

                    <span className="block font-semibold">
                      Inspiration
                    </span>

                  </h1>

                  {/* Description */}
                  <p className="mt-7 max-w-lg text-base leading-7 text-gray-200 sm:text-lg">
                    Inspire your customers with a sophisticated
                    lifestyle made possible through carefully selected
                    pieces designed for modern living.
                  </p>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-wrap items-center gap-4">

                    <button
                      type="button"
                      className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/20"
                    >
                      Discover Collection

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-white/50 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                    >
                      Explore More
                    </button>

                  </div>

                </div>

              </div>

            </div>

            {/* Slide number */}
            <div className="absolute bottom-10 right-6 z-10 hidden items-center gap-3 text-white sm:flex lg:right-16">

              <span className="text-4xl font-light">
                01
              </span>

              <span className="h-px w-12 bg-white/40" />

              <span className="text-sm text-white/60">
                02
              </span>

            </div>

          </div>

        </SwiperSlide>

        {/* ================================================= */}
        {/* SLIDE 2 */}
        {/* ================================================= */}
        <SwiperSlide>

          <div
            className="relative min-h-[650px] h-[calc(100vh-72px)] w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${Img2})`,
            }}
          >

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">

              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-2xl text-white">

                  {/* Small label */}
                  <div className="mb-6 flex items-center gap-3">

                    <span className="h-px w-10 bg-blue-400" />

                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                      Timeless Collection
                    </span>

                  </div>

                  {/* Heading */}
                  <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">

                    Timeless

                    <span className="block font-semibold">
                      Essence
                    </span>

                  </h1>

                  {/* Description */}
                  <p className="mt-7 max-w-lg text-base leading-7 text-gray-200 sm:text-lg">
                    Explore classic pieces with modern touches,
                    designed for a sophisticated wardrobe that
                    never goes out of style.
                  </p>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-wrap items-center gap-4">

                    <button
                      type="button"
                      className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/20"
                    >
                      Discover Collection

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-white/50 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                    >
                      Explore More
                    </button>

                  </div>

                </div>

              </div>

            </div>

            {/* Slide number */}
            <div className="absolute bottom-10 right-6 z-10 hidden items-center gap-3 text-white sm:flex lg:right-16">

              <span className="text-sm text-white/60">
                01
              </span>

              <span className="h-px w-12 bg-white/40" />

              <span className="text-4xl font-light">
                02
              </span>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

      {/* ================================================= */}
      {/* CUSTOM ARROWS */}
      {/* ================================================= */}

      <div className="absolute bottom-8 left-6 z-30 flex items-center gap-2 sm:left-10 lg:left-16">

        <button
          type="button"
          className="swiper-button-prev-custom group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          aria-label="Previous slide"
        >
          <FaArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </button>

        <button
          type="button"
          className="swiper-button-next-custom group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          aria-label="Next slide"
        >
          <FaArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

      {/* ================================================= */}
      {/* PAGINATION */}
      {/* ================================================= */}

      <div className="custom-pagination absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2" />

      {/* ================================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================================= */}

      <div className="absolute bottom-7 right-6 z-30 hidden flex-col items-center gap-2 text-white/60 lg:flex">

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <FaArrowDown className="animate-bounce text-xs" />

      </div>

    </section>
  );
}

export default HomeSlider;
