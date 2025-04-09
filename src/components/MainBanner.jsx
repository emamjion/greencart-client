import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center md:items-start pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-72 md:max-w-80 lg:max-w-105 text-center md:text-left leading-tight lg:leading-15">
          Fresh Groceries Delivered to Your Doorstep
        </h1>
        <p className="mt-4 max-w-72 md:max-w-80 lg:max-w-105 text-center md:text-left ">
          Get the best quality fruits, vegetables, daily essentials and more.
          All handpicked, delivered fast, and full of freshness. Shop smart and
          save time every day.
        </p>
        <div className="flex items-center mt-6 font-medium">
          <Link className="group flex items-center gap-2 bg-primary text-white px-7 md:px-9 py-2 rounded hover:bg-primary-dull transition duration-300 cursor-pointer">
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
          <Link className="group hidden md:flex items-center gap-2 px-7 py-3 md:px-9 cursor-pointer">
            Shop Now
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
