import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="relative flex  ">
      <img src="/chair.svg" alt="" />
      <div className='absolute top-5 p-4 flex flex-col gap-4 pt-12 pl-12 '>
        <h1 className="text-4xl">Living Room</h1>
        <a href="#" className="flex items-center gap-4 border-b-2 border-black hover:border-blue-500 hover:text-blue-500">
          Shop Now <GoArrowRight />{" "}
        </a>
      </div>
     
    </div>
  );
}

export default Banner