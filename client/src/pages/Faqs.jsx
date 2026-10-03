import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Imm2 from "../assessts/shop-banner.webp";

import {
FiArrowRight,
FiChevronDown,
FiHelpCircle,
FiMail,
FiMessageCircle,
FiPackage,
FiRefreshCw,
FiTruck,
} from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqsData = [
{
question: "What is your return policy?",
answer:
"We offer a 30-day return policy. Products must be returned in original condition with their original packaging. Please contact our support team before sending an item back.",
},
{
question: "How long does shipping take?",
answer:
"Shipping typically takes 3–7 business days depending on your location. Delivery times may vary during busy periods, holidays, or unexpected delays.",
},
{
question: "Do you offer international shipping?",
answer:
"Yes, we ship internationally. Shipping charges and delivery times vary depending on the destination. Any applicable customs or import charges are the responsibility of the customer.",
},
{
question: "Can I track my order?",
answer:
"Yes. Once your order has been shipped, you will receive a tracking number so you can follow your package's delivery progress.",
},
{
question: "Can I change or cancel my order?",
answer:
"If your order has not yet been processed or shipped, contact our support team as soon as possible. We will do our best to accommodate your request.",
},
{
question: "What payment methods do you accept?",
answer:
"We support the payment methods available during checkout. Available options may vary depending on your location and order.",
},
{
question: "What if I receive a damaged or incorrect item?",
answer:
"Please contact our customer support team as soon as possible and provide your order details along with photos of the item. We will review the issue and help you with the next steps.",
},
{
question: "How can I contact customer support?",
answer:
"You can reach us through our Contact page or email our support team at [support@yourecommerce.com](mailto:support@yourecommerce.com). We aim to respond to customer inquiries as quickly as possible.",
},
];

const Faqs = () => {
const [openIndex, setOpenIndex] = useState(null);

useEffect(() => {
AOS.init({
duration: 900,
once: true,
offset: 80,
});
}, []);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return ( 
      <>
        <Header />
        <div className="bg-white text-gray-900 overflow-hidden">
{/* ===================================================== HERO ====================================================== */} 
<section
className="relative min-h-[480px] flex items-center justify-center text-white"
style={{
backgroundImage: `url(${Imm2})`,
backgroundSize: "cover",
backgroundPosition: "center",
}}
>
{/* Overlay */} <div className="absolute inset-0 bg-black/60" /> <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

```
    {/* Decorative circles */}
    <div className="absolute top-10 left-8 sm:left-16 w-24 h-24 border border-white/10 rounded-full" />
    <div className="absolute bottom-10 right-8 sm:right-16 w-36 h-36 border border-white/10 rounded-full" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div
        data-aos="fade-down"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6"
      >
        <FiHelpCircle size={14} />

        <span className="text-xs uppercase tracking-[0.25em]">
          Help Center
        </span>
      </div>

      <h1
        data-aos="fade-up"
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
      >
        FAQ<span className="font-light">'s</span>
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-8"
      >
        Everything you need to know about orders, shipping, returns,
        payments, and your shopping experience.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="250"
        className="mt-9 flex justify-center"
      >
        <div className="w-px h-14 bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  </section>

  {/* =====================================================
      FAQ INTRO
  ====================================================== */}
  <section className="py-20 sm:py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div
        data-aos="fade-up"
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">
          Need Some Help?
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-5">
          Frequently Asked
          <span className="font-light text-gray-500"> Questions</span>
        </h2>

        <p className="text-gray-500 leading-7">
          Find quick answers to the questions our customers ask most
          often. If you still need help, our support team is ready to
          assist you.
        </p>
      </div>

      {/* =====================================================
          FAQ + SIDE INFO
      ====================================================== */}
      <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index < 4 ? index * 50 : 0}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gray-900 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-6 text-left bg-white"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`hidden sm:flex w-9 h-9 rounded-xl items-center justify-center text-xs font-semibold transition-all ${
                        isOpen
                          ? "bg-gray-950 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-sm sm:text-base font-semibold transition-colors ${
                        isOpen ? "text-gray-950" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gray-950 text-white rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <FiChevronDown size={17} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6 pt-0">
                      <div className="sm:ml-[52px] pt-5 border-t border-gray-100">
                        <p className="text-sm sm:text-base text-gray-500 leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SIDE HELP CARD */}
        <div
          data-aos="fade-left"
          className="lg:sticky lg:top-28"
        >
          <div className="bg-gray-950 text-white rounded-3xl p-7 sm:p-8 overflow-hidden relative">
            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 w-48 h-48 border border-white/10 rounded-full" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white text-gray-950 flex items-center justify-center mb-7">
                <FiMessageCircle size={21} />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Still Have Questions?
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                We're here to help.
              </h3>

              <p className="text-sm text-gray-400 leading-7 mb-7">
                Can't find the answer you're looking for? Get in touch
                with our customer support team.
              </p>

              <a
                href="/contact"
                className="group inline-flex items-center justify-between w-full bg-white text-gray-950 rounded-xl px-5 py-4 font-semibold text-sm hover:bg-gray-200 transition"
              >
                Contact Support

                <span className="w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <FiArrowRight size={15} />
                </span>
              </a>
            </div>
          </div>

          {/* Email card */}
          <div className="mt-4 rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                <FiMail size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Email Us
                </p>

                <p className="text-sm font-semibold text-gray-900 mt-1">
                  support@yourecommerce.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =====================================================
      QUICK HELP
  ====================================================== */}
  <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
    <div className="max-w-7xl mx-auto">
      <div
        data-aos="fade-up"
        className="text-center mb-12"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">
          Quick Help
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4">
          Looking for something specific?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Orders */}
        <div
          data-aos="fade-up"
          className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-5">
            <FiPackage size={21} />
          </div>

          <h3 className="font-bold text-gray-900 mb-2">
            Orders
          </h3>

          <p className="text-sm text-gray-500 leading-6">
            Questions about placing or managing your order.
          </p>
        </div>

        {/* Shipping */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-5">
            <FiTruck size={21} />
          </div>

          <h3 className="font-bold text-gray-900 mb-2">
            Shipping
          </h3>

          <p className="text-sm text-gray-500 leading-6">
            Learn about delivery times and tracking.
          </p>
        </div>

        {/* Returns */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-5">
            <FiRefreshCw size={21} />
          </div>

          <h3 className="font-bold text-gray-900 mb-2">
            Returns
          </h3>

          <p className="text-sm text-gray-500 leading-6">
            Find information about returns and refunds.
          </p>
        </div>

        {/* Contact */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-5">
            <FiMessageCircle size={21} />
          </div>

          <h3 className="font-bold text-gray-900 mb-2">
            Support
          </h3>

          <p className="text-sm text-gray-500 leading-6">
            Need personal assistance? Contact our team.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* =====================================================
      FINAL CTA
  ====================================================== */}
  <section className="bg-gray-950 text-white py-20 sm:py-24 px-6">
    <div
      data-aos="fade-up"
      className="max-w-3xl mx-auto text-center"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Need More Help?
      </span>

      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-5 mb-5">
        Let's make things
        <span className="font-light text-gray-400"> simple.</span>
      </h2>

      <p className="text-gray-400 leading-7 max-w-xl mx-auto mb-9">
        Our support team is always ready to help with your questions,
        orders, returns, or anything else you need.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center gap-3 bg-white text-gray-950 px-7 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all group"
      >
        Get In Touch

        <span className="w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
          <FiArrowRight size={15} />
        </span>
      </a>
    </div>
  </section>
</div>
<Footer/>
      </>
);
};

export default Faqs;
