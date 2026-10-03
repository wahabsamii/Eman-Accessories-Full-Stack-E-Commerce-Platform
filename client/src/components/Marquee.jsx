import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const messages = [
  "Style Redefined.",
  "Shop The Trend!",
  "Chic Styles Await!",
  "Elevate Your Wardrobe!",
];

const Marquee = () => {
  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-white py-8 sm:py-10">
      {/* Subtle background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap text-[80px] font-black uppercase tracking-tighter text-gray-50 sm:text-[120px]">
          Fashion · Style · Collection
        </span>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <div className="flex min-w-max animate-marquee items-center">
          {messages.map((text, i) => (
            <React.Fragment key={i}>
              <div className="group mx-6 flex items-center gap-5 sm:mx-10 sm:gap-7">
                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.25em] text-gray-400">
                  0{i + 1}
                </span>

                {/* Message */}
                <span className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-3xl lg:text-4xl">
                  {text}
                </span>

                {/* Icon */}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <FiArrowUpRight className="text-lg" />
                </span>
              </div>

              {/* Divider */}
              <span className="text-2xl font-light text-gray-300 sm:text-3xl">
                /
              </span>
            </React.Fragment>
          ))}

          {/* Duplicate content for continuous marquee */}
          {messages.map((text, i) => (
            <React.Fragment key={`duplicate-${i}`}>
              <div className="group mx-6 flex items-center gap-5 sm:mx-10 sm:gap-7">
                <span className="text-xs font-semibold tracking-[0.25em] text-gray-400">
                  0{i + 1}
                </span>

                <span className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-3xl lg:text-4xl">
                  {text}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <FiArrowUpRight className="text-lg" />
                </span>
              </div>

              <span className="text-2xl font-light text-gray-300 sm:text-3xl">
                /
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;