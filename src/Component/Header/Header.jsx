import React, { useState } from 'react'
import { LuTicketPercent } from "react-icons/lu";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { TfiAngleDown } from "react-icons/tfi";
import Mobilemenu from './Mobilemenu';


const Header = () => {
    const [Flyer ,setFlyer] = useState(false)
    const handleBox=()=>{
        setFlyer((prev)=>!prev)
    }
  return (
    <div >
        
        {/* Notification pannel starts Here :-  */}
        <section className='mx-0 bg-[#F3F5F7] relative  flex item center justify-center  gap-4 text-sm  py-2 px-8  sm:text-base sm:gap-4 sm:items-center       '>
            {/* icon and text starts here  */}
            <div className='flex items-center justify-center  gap-2 sm:text-xl '>
            <LuTicketPercent className='leading-3' />
            <p className='text-[12px] leading-4 sm:text-base '>30% off storewide - Limited time ! </p>
            </div>
            <a href="#" className='hidden sm:block sm:text-base  sm:border-b-2 border-blue-500 sm:flex items-center justify-center gap-4 sm:text-blue-500      '>Shop Now  <FaArrowRight /> </a> 
            <HiMiniXMark className='absolute right-4  sm:right-22'  />

           
           
        </section>
        {/* notification panel ends here */}
        {/* nav section starts here */}
        <section className='flex items-center justify-between  px-4 py-2 sm:px-20   '>
            {/* icon and logo outline starts here */}
            <div className='flex items-center gap-1 '>

            <IoMenuOutline className=' visible sm:hidden   '  onClick={handleBox} />
            {Flyer && <Mobilemenu/> }
            <a href="#" className='text-base font-medium sm:text-2xl sm:font-bold  '>3legant</a>


            </div>
              {/* icon and logo outline ends here */}
              {/* nav starts here  */}
              <nav>
                <ul className='hidden  sm:flex items-center justify-center sm:gap-4   gap-10 sm:text-xl  '>
                    <li><a href="#" className=' ' >Home</a></li>
                    <li><a href="#" className='hidden sm:hidden  lg:flex items-center justify-center gap-2 '>Shop <TfiAngleDown/>  </a></li>
                    <li><a href="#" className='hidden sm:hidden md:flex  items-center justify-center gap-2 '>Product  <TfiAngleDown/> </a></li>
                    <li><a href="#" className=' '>About us  </a></li>
                </ul>
              </nav>

              {/* nav ends here  */}

            {/* shopping icon & icon cart*/}
           
            <div className='flex items-center justify-center gap-2  '>
            <HiMagnifyingGlass className='hidden sm:block ' />   
            <FaRegCircleUser className='hidden sm:block' /> 
            <HiOutlineShoppingBag />
            <span className='bg-black border-2 rounded-lg flex items-center justify-center  w-6 h-5   text-white'>2</span>

            </div>

        </section>
        {/* nav section ends here */}
    </div>
  )
}

export default Header