import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { footerNavigation } from "../helpers/ui-data";
import HeroSide from "./hero-side";

const Hero = () => {
  return (
    <div className="relative">
      <ul className="absolute top-[30%] right-4 text-white">
        {footerNavigation.social.map((item) => (
          <li
            key={item.name}
            className="group hidden my-4 md:flex justify-end items-center "
          >
            <p className="group-hover:inline-block text-xs hidden transition-all duration-300 mr-2 group-hover:text-primaryTextColor  ">
              {item.name}
            </p>
            <a
              className=" text-white border-2 p-2 rounded-full group-hover:text-primaryTextColor border-white inline-block "
              href={item.href}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden sm:h-[100vh]">
        <div className="mx-auto max-w-7xl lg:px-8 h-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 h-full">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-start">
              <div className="lg:py-24">
                <a
                  href="#"
                  className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span className="pl-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full">
                    {" "}
                    Welcome To{" "}
                  </span>

                  <span className="px-3 ml-2 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-primaryTextColor to-cyan-600 rounded-full">
                    OAKS & BEARS
                  </span>
                </a>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Your Partner in</span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-secondaryTextColor to-cyan-400 sm:pb-5">
                    Software Solutions
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Software development with a Personal touch.With cutting-edge
                  technologies and a deep understanding of the industry, we help
                  transform your ideas into reality.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div className="md:flex md:justify-center lg:justify-start">
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-full shadow bg-gradient-to-r from-primaryTextColor to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          // className="block w-full py-3 px-6  shadow border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        >
                          Get Started
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full py-3 px-6 rounded-full shadow border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      Start your free 14-day trial, no credit card necessary. By
                      providing your email, you agree to our{" "}
                      <a href="#" className="font-medium text-white">
                        terms of service
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative hidden lg:block"> */}
            <div className="overflow-hidden  hidden lg:flex justify-center items-center relative">
              <HeroSide />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto max-w-xs h-[507px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
