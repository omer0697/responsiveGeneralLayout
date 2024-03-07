"use client";

import React from 'react'
import Image from 'next/image'
import { CustomDrawerMobilNav, TeklifAl } from './reusableComponents'
import DrawerMobileNavigation from './DrawerMobile'
import Link from 'next/link'
import CustomTable from './CustomTable'
import Loading from './Loading'
import Navbar from './Navbar';


// before heresection loads we show loading



const HeroSection = () => {

  // loading bar is shown before the page loads and after the page loads it is hidden
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  , [])

  if (loading) {
    return <Loading />
  }


  return (
    <div className='h-screen  w-full border-4 border-black  pt-40'>
      <div className='w-full flex items-center justify-center p-10 px-20 lg-px-32 z-auto'>
        <div className="text-center flex flex-col items-center lg:flex-row lg:gap-10">
          <h1 className='basis-4/6 text-2xl lg:text-5xl font-bold text-white mb-8 z-50'>
            Ankara Jeneratör Satış ve Kiralama Hizmetleri, Bakım ve Servis İşlemleri, Yedek Parça ve Aksesuarlar
          </h1>
          <h1 className='basis-2/6 text-blue-200 text-sm lg:text-xl font-semibold z-50 flex flex-col items-center gap-5'>
            Projelerinizde güvenilir enerji kaynağı ve yedek güç ihtiyaçlarınız için Ankara jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar konusunda uzman kadromuzla hizmetinizdeyiz.
            <TeklifAl 
              variant='outlined'
            />
          </h1>
        </div>
      </div>

    </div>
  )
}


export default HeroSection