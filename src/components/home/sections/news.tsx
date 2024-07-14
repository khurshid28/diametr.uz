import React from "react";

import bg_mask from "../../../assets/bg.png"

export default function News(): JSX.Element {
  return (
    <div className="w-full px-4 md:px-5 py-20 min-h-[500px]  flex flex-col items-center space-y-1 text-center bg-white">

      <p className='font-semibold md:text-[36px] text-[24px] text-textColor max-w-[1200px]'>
        Reklama
      </p>
      <p className='text-[18px] text-primary max-w-[600px] pb-[30px]'>
        Siz uchun foydali takliflar
      </p>

      <div className="flex lg:flex-row flex-col items-center w-full h-full gap-4">
        <div className="w-1/2 h-full">
        <div className="carousel rounded-box max-w-[560px] h-[320px]">
        <div className="carousel-item w-full">
          <img
            src="https://lh5.googleusercontent.com/proxy/FTnkH7dPf1n-LKtULCq2AXwmpTNkG1eLW0BjIbNnD4L9nEgf58x1TS4TcsEi9953-jdaO1W2SEkMW7Rf_3pJ1z2hOqpXYyth3BNH42Y5j9SLeBHMUPXuAFDL1iEpoO0yxPNCDes25A"
            className="h-full w-full object-cover"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://frankfurt.apollo.olxcdn.com/v1/files/ryscr6dt2avt1-UZ/image;s=1800x1200"
            className="w-full"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="h-full w-full object-cover "
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="h-full w-full object-cover"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="h-full w-full object-cover"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component" />
        </div>
      </div>

        </div>
        <div className="w-1/2 h-full max-w-[620px] min-h-[320px] flex flex-col items-center justify-center bg-no-repeat	bg-center	" style={{
          backgroundImage: `url(${bg_mask})`,
          height: "120px",
          
        }}>
       <div className="text-start  ">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

       </div>
        </div>

      </div>
    </div>
  );
}