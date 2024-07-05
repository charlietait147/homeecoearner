"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignupHome from "./component/SignUpHome";
import ContactFormHome from "./component/ContactFormHome";
import { Link as Linky, animateScroll as scroll } from "react-scroll";

export default function Home() {
  // title, content, shortDesc, img, features  services
  // cardHeading, cardImg products

  useEffect(() => {
    const section1 = document.getElementById("sectionscroll");
    const handleScroll = () => {
      const rect = section1.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section1.classList.add("middle");
      } else {
        section1.classList.remove("middle");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const verticalSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    vertical: true,
    arrows: false,
    dots: false,
  };

  const placements = ["outside"];
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setProducts(data.data); // Assuming your API returns { data: productsArray }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setProductsLoading(false); // Ensure loading is set to false even if there is an error
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log('Fetched packages:', data);
        setPackages(data.data); // Assuming your API returns { data: packagesArray }
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setPackagesLoading(false); // Ensure loading is set to false even if there is an error
      }
    };

    fetchPackages();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden relative top-0 left-0 w-full">
      {/* banner section */}
      <section className=" hidden md:flex main-banner w-full h-[690px] overflow-hidden flex-col justify-end  ">
        <div className=" container mx-auto my-auto z-10 flex md:flex-row flex-col">
          <div className="flex flex-col w-1/2 justify-start gap-6">
            <h1 className="text-4xl lg:text-7xl  text-white font-bold ">
              Home EcoEarner <br /> Power System
            </h1>
            <span className="text-[23px] text-white ">
              Ready to get your electricity costs under control <br /> and give
              your self the chance to transform your <br /> costs into income?
            </span>
            <Slider {...verticalSlider}>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  Energy Storage System
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  HF-H Series Inverter
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  SR-182 Series Solar Panels
                </h3>
              </div>
            </Slider>
            <div>
              <Linky
                to="sectionscroll"
                smooth={true}
                duration={600}
                className="relative overflow-hidden  py-2 px-6 bg-[#FFB800] rounded-3xl mx-auto text-black group priority-btn text-center font-bold my-5 m-[0 auto]"
              >
                <span className="text relative z-10">Sign Up</span>
                <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <ArrowForwardOutlinedIcon className="ml-2" />
                </span>
              </Linky>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-3/4  flex justify-end">
              <Slider {...settings} className="w-3/4  image-slider">
                <div className="carousel-item mx-auto overflow-hidden">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery1.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item flex justify-end items-center">
                  <div className="text-center flex justify-center items-center my-auto">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery2.svg"
                      alt="product image"
                      className="my-auto flex justify-center items-center"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="/assets/images/solar-panel.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* mobile view banner  */}
      <section className="flex md:hidden mob-main-banner w-full h-[690px] overflow-hidden">
        <div className=" w-5/6 mx-auto my-auto z-10 flex flex-col gap-10">
          <div className=" flex flex-col gap-5 ">
            <h1 className="text-4xl   text-white font-bold ">
              Home EcoEarner <br /> Power System
            </h1>
            <span className="text-[16px] text-white ">
              Ready to get your electricity costs under control and give your
              self the chance to transform your costs into income?
            </span>
            <Slider {...verticalSlider}>
              <div className="carousel-item">
                <h3 className="text-[24px] font-bold text-white">
                  Energy Storage System
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-[24px] font-bold text-white">
                  HF-H Series Inverter
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-[24px] font-bold text-white">
                  SR-182 Series Solar Panels
                </h3>
              </div>
            </Slider>
            <Link
              href="#"
              className="relative overflow-hidden py-1 px-6 bg-[#FFB800]  text-black group w-[155px]  rounded-[50px]  text-center font-bold priority-btn"
            >
              <span className="text relative z-10 text-[20px] my-auto">
                Sign Up
              </span>
              <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <ArrowForwardOutlinedIcon className="ml-2" />
              </span>
            </Link>
          </div>
          <div className="">
            <div className="w-full  flex justify-center">
              <Slider {...settings} className="w-3/4  image-slider">
                <div className="carousel-item mx-auto overflow-hidden">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery1.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item flex justify-end items-center">
                  <div className="text-center flex justify-center items-center my-auto">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery2.svg"
                      alt="product image"
                      className="my-auto flex justify-center items-center"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="/assets/images/solar-panel.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto mb-10">
        <h1 className="font-bold text-[35px] md:text-[50px] text-center text-green my-5 md:my-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:p-10">
          {productsLoading
            ? [1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="p-5 w-full py-10 flex justify-center items-center flex-col "
                >
                  <Skeleton width={255} height={250} />
                  <h2 className="text-[15px] md:text-[22px] text-[#385723] font-semibold text-center mt-2 md:mt-10">
                    <Skeleton width={150} />
                  </h2>
                  <Skeleton width={100} height={30} />
                </div>
              ))
            : products.slice(0, 3).map((product) => (
                <div
                  key={product._id}
                  className="p-5 w-full py-10 flex justify-between items-center flex-col product-div"
                >
                  <div className="my-auto">
                    <Image
                      src={product.cardImg}
                      width={255}
                      height={250}
                      alt="productimg"
                      className="min-w-[280px] mx-auto"
                    />
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <h2
                      className="text-[15px] md:text-[22px] text-[#385723] font-semibold text-center mt-2 md:mt-10"
                      dangerouslySetInnerHTML={{ __html: product.cardHeading }}
                    />
                    <Link
                      href={`/products/${product._id}`}
                      className="text-lg text-[#028921]"
                    >
                      <button className="relative overflow-hidden py-1 px-6 group rounded-[50px] text-center priority-btn mx-auto">
                        <span className="text relative z-10 text-[20px] my-auto">
                          View More
                        </span>
                        <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                          <ArrowForwardOutlinedIcon className="ml-2" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </section>
      {/* Sign up Form  */}
      <div id="sectionscroll" className="w-full sectionscrollClass">
        <SignupHome />
      </div>

      

      <section className="main-section w-full relative flex  ">
       
        <div className="w-full sticky top-10 left-0 z-10">
          <div className="container mx-auto mt-[60px] xl:mt-[300px]">
            <div className="steps-inner-div  p-5 py-10 ">
              <h1 className="text-2xl xl:text-5xl text-green font-semibold text-center my-1">
                For our Home EcoEarner Power System today{" "}
                <br className="hidden md:flex" /> and experience the future of
                renewable energy.
              </h1>
              <p className="text-center text-[18px] py-4">
                Experience the future of renewable energy today with our Home
                EcoEarner Power System, designed to
                <br className="hidden md:flex" />
                seamlessly integrate sustainable power solutions into your home.
              </p>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:p-10 gap-10">
                <div className="flex flex-col gap-3 bg-white p-10 ">
                  <h1 className="text-lg font-bold">Step-1</h1>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    Get your energy costs under control
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    No up-front cost
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    No more gas and electricity bills
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    No more electricity and gas price hikes
                  </span>
                </div>
                <div className="flex flex-col gap-3 bg-white p-10  ">
                  <h1 className="text-lg font-bold">Step-2</h1>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    Line yourself up for cost-free access to our new
                    technologies as they come to market
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    We promise to install our Home EcoEarner Power Booster upon
                    release.
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    You pay nothing upfront.
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    We buy excess electricity from you, putting money back into
                    your pocket.
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    Say goodbye to out-of-pocket expenses.
                  </span>
                  <span>
                    <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                    And when possible, we pay you instead of the other way
                    around.
                  </span>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="relative overflow-hidden p-3 px-6 bg-[#028921] rounded-3xl mx-auto text-white group priority-btn text-center font-bold my-5"
              >
                <span className="text relative z-10">
                  Join Our Priority List Today
                </span>
                <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <ArrowForwardOutlinedIcon className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full my-10">
            <div className="container mx-auto">
              <h1 className="font-bold text-[35px] md:text-[50px] text-center text-green my-5 mb-10">
                Customer Packages
              </h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 container mx-auto packages-div justify-center gap-5 lg:gap-20">
              {packagesLoading
                ? [1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-10 w-full"
                    >
                      <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
                        <Skeleton width={150} />
                      </h1>
                      {[...Array(7)].map((_, i) => (
                        <p key={i}>
                          <Skeleton width={200} />
                        </p>
                      ))}
                    </div>
                  ))
                : packages.map((pkg) => (
                    <div
                      key={pkg._id}
                      className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-10 w-full"
                    >
                      <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
                        {pkg.title}{" "}
                        <span className="text-[22px]">{pkg.shortDesc}</span>
                      </h1>
                      {pkg.features.map((feature, index) => (
                        <p key={index}>
                          <VerifiedIcon className="mr-2 verified-icon" />
                          {feature}
                        </p>
                      ))}
                    </div>
                  ))}
            </div>
          </div>
          <div className="  bg-green  py-10">
            <div className="flex justify-center flex-col  items-center">
              <div className="container mx-auto">
                <h1 className="font-bold text-[35px] md:text-[50px] text-center text-white ">
                  Contact Us
                </h1>
                <h1 className="text-white text-center text-lg">
                  Feel free to contact us any time We will get back to you as
                  soon as we can!{" "}
                </h1>
              </div>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-10 gap-5 ">
                <div className="px-10">
                  <ContactFormHome />
                </div>
                <div className="px-10 cotact-div-top-border  cotact-div-left-border  ">
                  <div className="my-auto bg-white p-5 sm:p-10 flex flex-col gap-4 mt-5 rounded-md shadow-xl ">
                    <h2 className="text-[22px] font-bold text-[#385723]">
                      Info
                    </h2>
                    <h2 className="text-lg">
                      <span>
                        <MailOutlineIcon className="mr-2 text-green" />
                      </span>
                      info@homeecoearner.com
                    </h2>
                    <h2 className="text-lg">
                      <span>
                        <LocalPhoneOutlinedIcon className="mr-2 text-green" />
                      </span>
                      0203 286 5350
                    </h2>
                    <h2 className="text-lg">
                      <span>
                        <PlaceOutlinedIcon className="mr-2 text-green" />
                      </span>
                      2 Brunel Place, Slough, SL1 1FQ, UK
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
