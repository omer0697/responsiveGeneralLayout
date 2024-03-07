

import Logo from '../../../public/10.svg'
import Image from 'next/image'

const Loading = () => {
    return (
        <div className=' w-full h-full absolute flex items-center justify-center bg-black z-10'>
            <div>
                <Image
                    src="/logo.svg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className='object-cover top-0 left-0 animate-pulse'
                />
            </div>
        </div>
    )
}

export default Loading

