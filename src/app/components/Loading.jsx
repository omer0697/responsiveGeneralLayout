

import Logo from '../../../public/10.svg'
import Image from 'next/image'

const Loading = () => {
    return (
        <div className='h-screen w-full flex items-center text-center justify-center bg-black z-[999999]'>
            <div>
                <Image
                    src="/logo.svg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    className='object-cover animate-pulse'
                />
            </div>
        </div>
    )
}

export default Loading

