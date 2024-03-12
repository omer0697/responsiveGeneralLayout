"use client"

import React, {useState, useEffect, use} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const itemData = [
    {
        img : "/references/1.jpg",
    },
    {
        img : "/references/2.jpg",
    },
    {
        img : "/references/3.jpg",
    },
    {
        img : "/references/4.jpg",
    },
    {
        img : "/references/5.jpg",
    },
    {
        img : "/references/6.jpg",
    },
    {
        img : "/references/7.jpg",
    },
    {
        img : "/references/8.jpg",
    },
    {
        img : "/references/9.jpg",
    },
    {
        img : "/references/10.jpg",
    },
    {
        img : "/references/11.jpg",
    },
    {
        img : "/references/12.jpg",
    },
    {
        img : "/references/13.jpg",
    },
    {
        img : "/references/14.jpg",
    },
    {
        img : "/references/15.jpg",
    },
    {
        img : "/references/16.jpg",
    },
    {
        img : "/references/17.jpg",
    },
    {
        img : "/references/18.jpg",
    },
    {
        img : "/references/19.jpg",
    },
    {
        img : "/references/20.jpg",
    },
    {
        img : "/references/21.jpg",
    },
    {
        img : "/references/22.jpg",
    },
    {
        img : "/references/23.jpg",
    },
    {
        img : "/references/24.jpg",
    },
    {
        img : "/references/25.jpg",
    },
    {
        img : "/references/26.jpg",
    },
    {
        img : "/references/27.jpg",
    },
    {
        img : "/references/28.jpg",
    },
    {
        img : "/references/29.jpg",
    }
]

export default function ImagesList() {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    })

    return (
        <>
        <h1 className='text-white text-4xl font-bold pl-10'>Referanslarımız</h1>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={itemData.length}
            visibleSlides={windowWidth > 1024 ? 4 : 2}
            className='w-full h-44 lg:h-60 xl:h-80 2xl:h-96 relative overflow-hidden mt-10  bg-white rounded-lg'
        >
            <Slider>
                {itemData.map((item, index) => (
                    <Slide index={index} key={index}>
                        <img src={item.img} className='w-40 h-40 object-contain lg:w-60 lg:h-60 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96' />
                    </Slide>
                ))}
            </Slider>
            <ButtonBack className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full'>
                <ArrowBackIosIcon />
            </ButtonBack>
            <ButtonNext className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full'>
                <ArrowForwardIosIcon />
            </ButtonNext>
        </CarouselProvider>
        </>
    )
}
    