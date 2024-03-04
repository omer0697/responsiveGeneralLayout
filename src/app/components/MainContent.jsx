import React from 'react'
import { SliderPicture } from './reusableComponents'

const SILIDER_DATA = [
    {
        id: 1,
        title: 'title1',
        description: 'description1',
        image: '/1.jpg',
    },
    {
        id: 2,
        title: 'title2',
        description: 'description2',
        image: '/2.jpg',
    },
    {
        id: 3,
        title: 'title3',
        description: 'description3',
        image: '/3.jpg',
    },
    {
        id: 4,
        title: 'title4',
        description: 'description4',
        image: '/4.jpg',
    }
]

function MainContent() {
  return (
    <div className='text-black'>
      <SliderPicture data={SILIDER_DATA} />
    </div>
  )
}

export default MainContent
