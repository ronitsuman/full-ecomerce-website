import React from 'react'

import { CiHeart } from "react-icons/ci";
import { HiStar } from "react-icons/hi";

const ProductCarousel = (props) => {
    const{img,tittle,Price}= props.ProductData 
  return (
    <div className='flex flex-col gap-4 pl-10 group '> 
        {/* heading product carousel here */}
        
        {/* card start from here */}
        <div className='w-[231px] h-[392px] border-2 border-black flex flex-col relative   '>
            <img src={img} alt="" className='' />
            <div className='flex flex-col gap-2 absolute top-1 left-1 '>
                <span className='text-base text-center rounded font-bold bg-white text-black w-[67px] h-[24px]   '>New</span>
                <span className='text-base text-center rounded font-bold bg-green-500 text-white w-[71px] h-[24px] '>-50%</span>
            </div>
            <span className='bg-white text-black w-[32px] h-[32px] rounded-2xl p-2 absolute left-48 top-2'><CiHeart />
            </span>
            {/* button here */}
            <button className='w-[220px] h-[46px] bg-black text-white rounded-xl absolute top-[245px] left-[1px] py-2 px-6 opacity-0 hover:opacity-100 '>Add to Cart </button>
            {/* button here */}
            {/* product carousel content starts here  */}
            <div className='flex flex-col gap-2 pl-2 pt-1'>
                <div className='flex flex-row '>
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                </div>
                  <h1 className='text-base font-semibold'>{ tittle}</h1>
                <p className='flex gap-10 text-base font-semibold '> {Price} <span className='line-through text-gray-500'>$ 299</span> </p>
                

            </div>
             {/* product carousel content ends here  */}




        </div>
        {/* card ends here */}
       
       

    </div>
  )
}

export default ProductCarousel