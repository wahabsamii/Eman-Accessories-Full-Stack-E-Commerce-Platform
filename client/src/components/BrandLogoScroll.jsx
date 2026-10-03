
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import logo1 from "../assessts/logo1.webp";
import logo2 from "../assessts/logo2.webp";
import logo3 from "../assessts/logo3.webp";
import logo4 from "../assessts/logo4.webp";
import logo5 from "../assessts/logo4.webp";

const BrandLogoScroll = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="mt-20 border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Collection
            </span>

            <span className="h-px w-10 bg-blue-600" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Featured Brands
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Explore collections from brands selected for their quality,
            craftsmanship, and distinctive style.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative px-8 sm:px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            speed={500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="group flex h-28 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/60 px-8 transition-all duration-500 hover:border-gray-200 hover:bg-white hover:shadow-lg">
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="max-h-12 max-w-[150px] object-contain opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous Button */}
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous brands"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            type="button"
            aria-label="Next brands"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* Bottom Trust Text */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
            Carefully selected brands
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

          <span className="text-xs text-gray-400">
            Quality you can trust
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoScroll;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import logo1 from '../assessts/logo1.webp'
// import logo2 from '../assessts/logo2.webp'
// import logo3 from '../assessts/logo3.webp'
// import logo4 from '../assessts/logo4.webp'
// const BrandLogoScroll = () => {
//   const logos = [
//     logo1,
//     logo2,
//     logo3,
//     logo4,
//   ];

//   return (
//     <div className="relative w-full bg-white py-6">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//       >
//         {logos.map((logo, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <img src={logo} alt={`Brand ${index + 1}`} className="h-12" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//         <FaChevronLeft className="text-gray-600" />
//       </button>
//       <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//         <FaChevronRight className="text-gray-600" />
//       </button>
//     </div>
//   );
// };

// export default BrandLogoScroll;
