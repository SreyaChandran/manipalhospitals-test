import Image from 'next/image'
import React from 'react'
import { Circle } from 'lucide-react';
import { Play } from 'lucide-react';


const LifeCarouselCard = ({image, titleText, decText}) => {
  return (
    <div className='flex flex-row items-center justify-between aspect-video w-full bg-[#000] rounded relative'>
        <Image src={image} 
            alt="Manipal Hospitals" 
            className='min-w-[100%] h-[100%] absolute aspect-video opacity-30 rounded z-0'
            layout="responsive"
            placeholder="blur"
        />
        <Circle className='absolute text-white w-[38px] h-[38px] left-0 right-0 m-auto fill-black z-20' />
        <Play className='absolute text-white w-[20px] h-[20px] left-0 right-0 m-auto fill-white z-20' />
        <div className='h-[80%] w-[50%] flex items-center justify-end py-4 pl-4 pr-2  z-10 border-r-2 border-white'>
            <p className='flex-grow text-white text-lg'>{titleText}</p>
        </div>
        <div className='h-[80%] w-[50%] flex items-center justify-start p-4  z-10'>
            <p className='flex-grow text-white text-xs pl-4'>{decText}</p>
        </div>
    </div>
  )
}

export default LifeCarouselCard