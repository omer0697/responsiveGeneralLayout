import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='text-white  w-full h-full px-8 lg:px-28 flex flex-col gap-10'>
      <h1 className=' text-6xl font-bold text-green-500'>Hakkımızda</h1>
      <div className='lg:pr-96 text-xl flex flex-col gap-4'>
        <p>
          Öncelikle siz değerli müşterilerimize Ankara Jeneratör firması olarak hoşgeldiniz diyoruz.
        </p>
        <p>Ankara Jeneratör firması olarak jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar konusunda uzman kadromuzla hizmetinizdeyiz.</p>
        <p>Profesyonel kadromuzla sizlere en iyi hizmeti sunmak için buradayız.</p>
        <p>3 kvA'dan 3000 kvA'ya kadar jeneratörlerimizle sizlere hizmet vermekten mutluluk duyarız.</p>
        </div>
      <Image
        src={'/1.jpg'}
        alt='about'
        width={1920}
        height={1080}
        className='object-cover lg:rounded-2xl h-96 lg:h-full'
      />
    </div>
  )
}

export default Page
