import React from 'react'
import ProductCarousel from './ProductCarousel'
import ProductData from './ProductCarousel.json'
import { GoArrowRight } from "react-icons/go";

const ProductCarouselContainer = () => {
  return (
    <div className=" mt-4 flex flex-col gap-8 pt-8 pl-8 pb-8  ">
      <h1 className="text-3xl">New Arrivals</h1>
      {/* process to pass data as  props 
          (i)we have to import json file 
          (ii)we can use js in curly braces so create a curly braces 
          (iii) inside curly braces you have to first write the json name which you import 
          (iv) then . map  */}
      <div className='flex gap-4 overflow-auto'>
        {ProductData.map((data) => {
          return <ProductCarousel ProductData={data} />;
        })}
        ;
      </div>

      <a href="#" className='flex  gap-2 items-center border-b-2 hover:border-black    '>
        More Products <GoArrowRight />
      </a>
    </div>
  );
}

export default ProductCarouselContainer