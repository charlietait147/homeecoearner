"use client";
import React, { useState, useEffect } from 'react'

import Image from "next/image";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignupNewsletter from '../component/SignupNewsletter';


const page = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data);
        setProducts(data.data); // Assuming your API returns { data: productsArray }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setProductsLoading(false); // Ensure loading is set to false even if there is an error
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <section className="container mx-auto mb-10">
        <h1 className="font-bold text-[35px] md:text-[50px] text-center text-green my-5 md:my-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:p-10">
          {productsLoading ? (
            [1, 2, 3].map((_, index) => (
              <div key={index} className="p-5 w-full py-10 flex justify-center items-center flex-col ">
                <Skeleton width={255} height={250} />
                <h2 className="text-[15px] md:text-[22px] text-[#385723] font-semibold text-center mt-2 md:mt-10">
                  <Skeleton width={150} />
                </h2>
                <Skeleton width={100} height={30} />
              </div>
            ))
          ) : (
            products.map((product) => (
              <div key={product._id} className="p-5 w-full py-10 flex justify-center items-center flex-col product-div">
                <Image
                  src={product.cardImg}
                  width={255}
                  height={250}
                  alt="productimg"
                  className="w-[255px] h-[250px] mx-auto"
                />
                <h2
                  className="text-[15px] md:text-[22px] text-[#385723] font-semibold text-center mt-2 md:mt-10"
                  dangerouslySetInnerHTML={{ __html: product.cardHeading }}
                />
                <Link href={`/products/${product._id}`} className="text-lg text-[#028921]">
                  <button className="relative overflow-hidden py-1 px-6 group rounded-[50px] text-center priority-btn">
                    <span className="text relative z-10 text-[20px] my-auto">View More</span>
                    <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <ArrowForwardOutlinedIcon className="ml-2" />
                    </span>
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
      <SignupNewsletter />
    </>
  )
}

export default page