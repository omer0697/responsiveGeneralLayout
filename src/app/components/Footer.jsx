import Link from 'next/link'
import React from 'react'
import MapIcon from '@mui/icons-material/Map';

const FOOTER_SECTIONS = [
    {
        title: 'Ankara Jeneratör.',
        text : "Ankara Jeneratör, jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar",
    },
    {
      title:"Ofisimiz",
      text:"OSTİM OSB MAH. 1235. CAD. NO: 36 OSTİM YENİMAHALLE/ANKARA",
      href:"https://www.google.com/maps/place/Powerexa+-+Portatif+ve+Dizel+Jenerat%C3%B6r+Firmas%C4%B1/@39.9699591,32.7446883,17z/data=!3m1!4b1!4m5!3m4!1s0x14d33762658e00ab:0x85918db997dd37ed!8m2!3d39.969955!4d32.746877?shorturl=1",
      Tel:"+90 535 423 1662"
    },
    {
      title:"Hakkımızda",
      hrefs:[
        {
          title:"Hakkımızda",
          href:"/about"
        },
        {
          title:"Referanslarımız",
          href:"/references"
        },
        {
          title:"İletişim",
          href:"/contact"
        }
      ]
    },
    {
      title:"Ankara Jeneratör Hakkında",
      text:"Ankara Jeneratör, jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar"
    }
  ]
        

function Footer() {
  return ( <div className='bg-black text-white flex flex-col items-center justify-center z-[999999]'>
      <div className='container '>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 p-10'>
          {FOOTER_SECTIONS.map((section, index) => {
            return (
              <div className='flex flex-col gap-1' key={index}>
                <h1 className='text-2xl font-bold'>{section.title}</h1>
                {section.href ? <Link 
                className=' '
                href={
                  section.href
                }>
                  <MapIcon fontSize='medium'/>
                  &nbsp;
                  {section.text}</Link> : <p>{section.text}</p>
                }
                {section.Tel && <a href={`tel:${section.Tel}`} className='text-lg '>{section.Tel}</a>}
                <div className='flex flex-col gap-1 p-2'>
                  {section.hrefs && section.hrefs.map((href, index) => {
                    return (
                      <a key={index} href={href.href} className='text-lg '>{href.title}</a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-full container flex justify-between bg-black text-white  border-t-2 p-8 flex-col gap-3 lg:flex-row'>
        <p>Ankara Jeneratör bir Jeneratör firmasıdır. Tüm hakları saklıdır. 2024</p>
        <p>Ankara Jeneratör Firmaları</p>
      </div>
    </div>
  )
}
export default Footer
