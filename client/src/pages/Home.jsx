import React, { useEffect, useState } from 'react'
import './main.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
import HomeSectionThird from '../components/HomeSectionThird';
import BrandLogoScroll from '../components/BrandLogoScroll';
import bgImg from '../assessts/banner-new-arrivals.webp'
import HomeSlider from '../components/HomeSlider';
import Marquee from '../components/Marquee';
import { serverUrl } from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
      const [auth, setAuth] = useAuth();
      const [cart, setCart, addToCart] = useCart();
      const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
      const navigate = useNavigate();
      const AllCategories = async () => {
        try {
          const allcates = await axios.get(`${serverUrl}/all-categories`);
          if(allcates.data.success){
            setCategories(allcates.data.allcategories)
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      const AllProducts = async() => {
        try {
          const allProducts = await axios.get(`${serverUrl}/api/v1/product/get-product?limit=8`);
          if(allProducts.data.success){
               setProducts(allProducts.data.products)
          }
        } catch (error) {
          console.log(error.message)
        }
      }
      useEffect(() => {
  AllCategories();
}, []);

useEffect(() => {
  AllProducts();
}, []);

  return (
    <div className='overflow-hidden'>
        <Header />
        <HomeSlider />
         
         {/* //Categories  */}
        <section className="w-full bg-white py-16 sm:py-20">

          {/* ================= SECTION HEADER ================= */}
          <div className="mx-auto max-w-7xl px-6 text-center">

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Shop by Style
              </span>

              <span className="h-px w-10 bg-blue-600" />
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Category
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Express your style with our standout collection —
              where fashion meets sophistication.
            </p>

          </div>

          {/* ================= CATEGORY GRID ================= */}
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (

              <div
                key={category._id}
                className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >

                {/* Image */}
                <img
                  src={category.photo}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

                {/* Top decorative line */}
                <div className="absolute left-5 top-5 h-px w-0 bg-white transition-all duration-500 group-hover:w-10" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">

                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    Collection
                  </p>

                  <h4 className="text-2xl font-semibold capitalize text-white">
                    {category.name}
                  </h4>

                  {/* Explore */}
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 group-hover:gap-4 group-hover:text-white">

                    <span>
                      Explore collection
                    </span>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 transition-all duration-500 group-hover:border-white/30" />

              </div>

            ))}

          </div>

        </section>


        
        
        {/* Products / New Arrivals */}
        <section className="w-full bg-white py-16 sm:py-20">
          {/* Section Header */}
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Latest Collection
              </span>

              <span className="h-px w-10 bg-blue-600" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              New Arrivals
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover our latest collection of products, carefully selected
              to bring style, quality, and sophistication to your everyday life.
            </p>

            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:text-blue-600"
            >
              <span>View All Products</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item._id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold capitalize text-gray-800 shadow-sm backdrop-blur-sm">
                      {item.category.name}
                    </span>
                  </div>

                  {/* Add To Cart */}
                  <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-4 justify-center p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        addToCart(item);

                        toast.success("Item Added to cart");
                      }}
                      className="w-full rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 active:scale-95"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div
                  className="cursor-pointer p-5"
                  onClick={() => navigate(`product/${item.slug}`)}
                >
                  {/* Product Name */}
                  <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 min-h-[40px] text-sm leading-5 text-gray-500">
                    {item.description?.slice(0, 65)}
                    {item.description?.length > 65 ? "..." : ""}
                  </p>

                  {/* Price + Arrow */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Price
                      </span>

                      <p className="mt-0.5 text-xl font-bold text-gray-900">
                        ${item.price}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        
        <Marquee />
        <HomeSectionThird />
        <img src={bgImg} alt="" />
        <BrandLogoScroll/>
        <Footer />
</div>
  )
}
