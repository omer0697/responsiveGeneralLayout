
import React from 'react'
import Image from 'next/image'
import { CustomDrawerMobilNav, TeklifAl, CallToMe } from './reusableComponents'
import DrawerMobileNavigation from './DrawerMobile'
import Link from 'next/link'
import CustomTable from './CustomTable'
import Loading from './Loading'
import Navbar from './Navbar';
import ImagesList from './ImagesList'


const HeroSection = () => {
  return (
    <div className='h-screen  w-full'>
      <div className='w-full flex items-center justify-center p-10 px-20 lg-px-32 z-auto'>
        <div className="text-center flex flex-col items-center lg:flex-row lg:gap-10">
          <h1 className='basis-4/6 text-2xl lg:text-5xl font-bold text-white mb-8 z-50'>
            Ankara Jeneratör Satış ve Kiralama Hizmetleri, Bakım ve Servis İşlemleri, Yedek Parça ve Aksesuarlar
          </h1>
          <h1 className='basis-2/6 text-blue-200 text-sm lg:text-xl font-semibold z-50 flex flex-col items-center gap-5'>
            Projelerinizde güvenilir enerji kaynağı ve yedek güç ihtiyaçlarınız için Ankara jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar konusunda uzman kadromuzla hizmetinizdeyiz.
            <div className='flex gap-10'>
              <TeklifAl 
                variant='outlined'
              />
              <CallToMe />
            </div>
          </h1>
        </div>
      </div>
        <ImagesList />

    </div>
  )
}


export default HeroSection