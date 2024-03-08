import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='text-white  w-full h-full px-20 flex flex-col gap-10'>
      <h1 className=' text-6xl font-bold text-green-500'>Hakkımızda</h1>
      <p className='text-xl lg:pr-96'>
        Öncelikle siz değerli müşterilerimize Ankara Jeneratör firması olarak hoşgeldiniz diyoruz.
        Ankara Jeneratör firması olarak jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar konusunda uzman kadromuzla hizmetinizdeyiz.
        Profesyonel kadromuzla sizlere en iyi hizmeti sunmak için buradayız.
      </p>
      <Image
        src={'/about.jpg'}
        alt='about'
        width={1920}
        height={1080}
        className='object-cover lg:rounded-2xl h-96 lg:h-full'
      />
    </div>
  )
}

export default Page
