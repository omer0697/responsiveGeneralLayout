
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
        <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={160}
            height={160}
            className='top-10 left-10 z-10 p-3 lg:p-0 object-contain cursor-pointer'
        />
    </Link>
  )
}

export default Logo