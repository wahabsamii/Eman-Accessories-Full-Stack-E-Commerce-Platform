import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilterMenu from '../components/Layout/FilterMenu';
import { serverUrl } from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Products() {
    const [products, setProducts] = useState([]);

    const AllProducts = async() => {
        try {
          const allProducts = await axios.get(`${serverUrl}/api/v1/product/get-product`);
          if(allProducts.data.success){
               setProducts(allProducts.data.products);
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      useEffect(() => {
        AllProducts();
      }, [])
  return (
    <div className=''>
          <Header />
          <FilterMenu products={products}/>
          <Footer/>
    </div>
  )
}
