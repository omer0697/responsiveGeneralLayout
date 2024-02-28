import React from 'react'
import Image from 'next/image'
import CustomTable, { CustomDrawerMobilNav, TeklifAl } from './reusableComponents'
import DrawerMobileNavigation from './DrawerMobile'
import Link from 'next/link'

const GENERATOR_FEATURES_AND_PRICING = {
  columns: ["Model Numarası", "Güç", "Motor Tipi", "Fiyat"],
  data: [
    {
      id: 1,
      "Model Numarası": "G1",
      Güç: "1000W",
      "Motor Tipi": "Elektrikli",
      Fiyat: "1000TL",
    },
    {
      id: 2,
      "Model Numarası": "G2",
      Güç: "2000W",
      "Motor Tipi": "Elektrikli",
      Fiyat: "2000TL",
    },
    {
      id: 3,
      "Model Numarası": "G3",
      Güç: "3000W",
      "Motor Tipi": "Elektrikli",
      Fiyat: "3000TL",
    },
  ],
}

const StyledLink = ({ children, href }) => {
  return (
    <Link href={href} className='text-white text-sm font-semibold px-4'>
      {children}
    </Link>
  )
}

const HeroSection = () => {
  return (
    <div className='h-screen w-full'>
      <div>
          <Image
              src="/10.svg"
              alt="Picture of the author"
              width={1920}
              height={1080}
              // z index is 0

              className='object-cover w-full h-full absolute top-0 left-0 pb-40 '
          />
        </div>
      <div className='z-50 w-full flex items-center justify-between p-8'>
        <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={160}
            height={160}
            className='object-cover top-10 left-10 z-10 p-3 lg:p-0'
        />
          <div className='z-20 gap-10 hidden lg:flex'>
            <StyledLink href='/about'>Hakkımızda</StyledLink>
            <StyledLink href='/references'>Referanslarımız</StyledLink>
            <StyledLink href='/studio'>İletişim</StyledLink>
          </div>
          <TeklifAl 
            isSuitForMobile
          />
          <div className='flex lg:hidden justify-end'>
            <DrawerMobileNavigation />
          </div>
      </div>
      <div className='w-full flex items-center justify-center p-10 px-20 lg-px-32 z-auto'>
        <div className="text-center flex flex-col items-center lg:flex-row lg:gap-10">
          <h1 className='basis-4/6 text-2xl lg:text-4xl font-bold text-white mb-8 z-50'>
            Ankara Jeneratör Satış ve Kiralama Hizmetleri, Bakım ve Servis İşlemleri, Yedek Parça ve Aksesuarlar
          </h1>
          <h1 className='basis-2/6 text-blue-200 text-sm font-semibold z-50 flex flex-col items-center gap-5'>
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