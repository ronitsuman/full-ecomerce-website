import React from 'react'
import { GoArrowRight } from "react-icons/go"; 

const Banner2 = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="relative  ">
        <img src="/drawer.svg" alt="" />
        <div className=" absolute top-[130px] left-32px p-4 flex flex-col gap-3 pt-12 pl-12 ">
          <h1 className="text-4xl">Bedroom</h1>
          <a
            href="#"
            className="flex items-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500"
          >
            Shop Now <GoArrowRight />
          </a>
        </div>
      </div>
      <div className="relative  ">
        <img src="/roaster.svg" alt="" />
        <div className=" absolute top-[130px] left-32px p-4 flex flex-col gap-3 pt-12 pl-12 ">
          <h1 className="text-4xl">Kitchen</h1>
          <a
            href="#"
            className="flex items-center justify-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500"
          >
            Shop Now <GoArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner2