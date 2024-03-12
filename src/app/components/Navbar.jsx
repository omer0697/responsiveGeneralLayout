
import Image from 'next/image'
import { TeklifAl } from './reusableComponents'
import DrawerMobileNavigation from './DrawerMobile'
import Link from 'next/link'
import Logo from './Logo'

const StyledLink = ({ children, href }) => {
    return (
      <Link href={href} className='text-white text-sm font-semibold px-4'>
        {children}
      </Link>
    )
  }
  

const Navbar = () => {
  return (
    <div className=' w-full h-full absolute'>
        <div className='absolute w-full h-full mt-24 bg-black z-[-1]'>
        <Image
              src="/10.svg"
              alt="Picture of the author"
              width={4080 }
              height={4080}
              // z index is 0
              className='object-cover w-full h-full top-0 left-0 z-[-99999]'
          />
        </div>
        <div className='fixed z-[99] w-full flex items-center justify-between p-8 bg-black '>
            <Logo />
            <div className='z-20 gap-10 hidden lg:flex'>
                <StyledLink href='/about'>Hakkımızda</StyledLink>
                <StyledLink href='/references'>Referanslarımız</StyledLink>
                <StyledLink href='/contact'>İletişim</StyledLink>
            </div>
            <TeklifAl 
                isSuitForMobile
            />
            <div className='flex lg:hidden justify-end'>
                <DrawerMobileNavigation />
            </div>
        </div>
      </div>
  )
}

export default Navbar
