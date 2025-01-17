import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { PiDotsThreeBold } from "react-icons/pi";
import BannerContainer from '../banner/BannerContainer';
import ProductCarouselContainer from '../Product Carousel/ProductCarouselContainer';

const Home = () => {
  return (
    <>
    {/* slider section , banner section start here  */}
    <div className="px-8 m-auto sm:px-18 sm:pb-5 md:px-20 md-pb-10 lg:px-40 lg:pb-10 ">
      {/* slider section starts here  */}
      <section className=" m-auto  pb-1 flex item-center justify-center flex-col gap-5   ">
        {/* height of the image  ? */}
        <div className="w-auto">
          {/* here adding the hero image */}
          {/* when screen width is less tha 640 this image flash  */}
          <img
            src="/hero-mobile.svg"
            alt="hero-image"
            className="will-change-auto sm:hidden md:hidden"
            loading="eager"
          />
          {/* when screen width is more than 640 this image flash  */}
          <img
            src="/hero image.svg"
            loading="lazy"
            alt="hero-img"
            className="hidden sm:block md:block lg:w-[100%] "
          />

          {/* here another div for arrow icon  */}
          {/* <PiDotsThreeBold className='relative top-32 left-48 text-3xl sm:hidden    ' /> */}
          <div className="hidden sm:hidden md:hidden lg:visible">
            <GoArrowRight />
            <GoArrowRight />
          </div>
          {/* arrow icon ends here */}
        </div>
        {/* slider content section starts here */}
        <div className="flex items-center  justify-center flex-col gap-4 sm: md:flew-row  lg:flex-row lg:gap-6 ">
          <h1 className=" leading-10 text-[40px] font-medium lg:text-[72px] lg:font-medium lg:w-[643px] lg:leading-[70px]  ">
            Simply Unique/ Simply Better.
          </h1>
          <p className="text-[14px] font-semibold lg:text-[16px] lg:font-semibold lg:w-[453px] lg:text-left ">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.{" "}
          </p>
        </div>
        {/* slider content section ends  here */}
      </section>
      {/* slider section ends here  */}
      {/*  baneer section starts here*/}
      <section className="flex   flex-col sm:flex-row gap-4  m-auto  ">
        {/* container 1 starts here */}
        <div className="relative flex lg:w-[548px] lg:h-[662px]  ">
          <img src="/chair.svg" alt="" loading='lazy'/>
          <div className="absolute top-[-30px]  md:top-[-30px] md:left-[-32px] lg:top-[32px] lg:left-[32px]  flex flex-col gap-2 sm:gap-4 pt-12 pl-12 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-4xl">
              Living Room
            </h1>
            <a
              href="#"
              className="flex items-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500"
            >
              Shop Now <GoArrowRight />
            </a>
          </div>
        </div>
        {/* container1 ends here */}
        {/* container 2 start here */}
        <div className=" flex flex-col gap-6 lg:mt-[25px]   ">
          <div className="relative  ">
            <img src="/drawer.svg" alt="" loading='lazy'/>
            <div className=" absolute top-[25px] left-[-5px] md:top-[20px] md:left-[-25px]  lg:top-[130px]  p-4 flex flex-col gap-3 pt-12 pl-12 ">
              <h1 className="text-2xl md:text-3xl  lg:text-4xl">Bedroom</h1>
              <a
                href="#"
                className="flex items-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500"
              >
                Shop Now <GoArrowRight />
              </a>
            </div>
          </div>
          <div className="relative  ">
            <img src="/roaster.svg" alt=""  loading='lazy'/>
            <div className=" absolute  top-[25px] left-[-5px] md:top-[32px] md:left-[-30px]  lg:top-[130px]  p-4 flex flex-col gap-3 pt-12 pl-12 ">
              <h1 className="text-2xl md:text-3xl  lg:text-4xl">Kitchen</h1>
              <a
                href="#"
                className="flex items-center justify-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500"
              >
                Shop Now <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
        {/* container 2 ends here */}
      </section>
      {/* banner section ends here */}
    </div>
    {/* slider section , banner section ends here  */}

    {/* product carousel start here  */}

    <section>
      <ProductCarouselContainer/>

    </section>

    {/* product carousel ends here  */}


    </>
  );
}

export default Home