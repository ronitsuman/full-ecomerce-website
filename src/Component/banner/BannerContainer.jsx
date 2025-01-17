import React from 'react'
import Banner from './Banner'
import Banner2 from './Banner2'

const BannerContainer = () => {
  return (
    <div className="  px-12 m-auto  pb-1 flex item-center justify-center gap-5 sm:px-18 sm:pb-5 md:px-20 md:pb-10 lg:px-40 lg:pb-10">
      <Banner />
      <Banner2 />
    </div>
  );
}

export default BannerContainer