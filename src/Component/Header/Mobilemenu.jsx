
import React, { useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { TfiAngleDown } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";





const Mobilemenu = () => {
  
  return (
    <div className='relative flex items-center    gap-4 bg-gray-500  ' >
        {/* Mobile menu starts here  */}
    <div className=' w-[290px]  bg-gray-400  h-[680px]   rounded-lg  p-4 absolute top-4 transition-opacity ease-in-out duration-75  ' >
            {/* mobile menu header start here  */}
          <header className='flex items-center justify-between'>
          <a href="#" className='text-lg font-bold '>3legant</a>
          <HiOutlineXMark  />
          </header>
          {/* mobile menu header ends here  */}
          {/* list start here */}
          <main className='flex   flex-col gap-4 '>
            <div className='relative p'>
            <input type="text"   className='w-[268px] mt-5 h-[46px] border-2 border-[#6C7275] p-6 relative  placeholder:text-2xl placeholder:px-4 px-12  ' placeholder='Search'   />
            <HiMagnifyingGlass className='absolute top-8 left-2 text-2xl  ' /> 
            </div>
            <nav>
                <ul className='flex flex-col gap-8  '>
                    <li className='border-b-2 p-2 '>
                        <a href="#" className='text-base font-bold leading-6'>Home</a>
                    </li>
                    <li className='border-b-2 p-2 '>
                        <a href="#" className='flex items-center justify-between text-base font-bold leading-6'>Shop  <TfiAngleDown /></a>
                    </li>
                    <li className='border-b-2 p-2 '>
                        <a href="#" className='flex items-center justify-between text-base font-bold leading-6 '>Products <TfiAngleDown /> </a>
                    </li>
                    <li className='border-b-2 p-2 '>
                        <a href="#" className='text-base font-bold leading-6'>Contact Us</a>
                    </li>
                </ul>
            </nav>
             {/* list ends here  */}



          </main>
          {/* main ends here */}
          <footer className='flex flex-col gap-8  mt-8'>
            <ul className='flex gap-4 flex-col '>
                <li className='border-b-2 p-2'><a className='flex items-center justify-between text-base  leading-6 text-[#6C7275] '  href="#">Cart    <HiOutlineShoppingBag /></a></li>
                <li  className='border-b-2 p-2' ><a className='flex items-center justify-between  text-base text-[#6C7275] leading-6 '   href="#">Wishlist <FaRegHeart /> </a></li>
            </ul>
            <button className='w-[270px]border p-4  bg-black text-white text-xl  '>Singn In</button>
            <div className='flex items-start justify-start gap-5 text-xl  '>
              <FaInstagram />
              <CiFacebook />

              

             
              <FaXTwitter />
            </div>
          </footer>
         
           
        </div>
        {/* mobile menu ends here  */}

    </div>
    
  
  )
}

export default Mobilemenu