"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Circle } from 'lucide-react';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';

const LifeCarouselCard = ({image, titleText, decText, srcText="https://www.youtube.com/embed/mozIAAJihno"}) => {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <>
    <div className='flex flex-row items-center justify-between aspect-video w-full bg-[#000] rounded relative'>
        <Image src={`/images/${image}`}
            alt="Manipal Hospitals" 
            className='min-w-[100%] h-[100%] absolute aspect-video opacity-30 rounded z-0'
            layout="responsive"
            // placeholder="blur"
            width={100}
            height={50}
        />
        <Button variant="ghost" className='bg-transparent absolute left-0 right-0 m-auto z-20 hover:bg-transparent max-w-fit' aria-label='play video' onClick={()=>setOpenVideo(true)}>
          <Circle className='absolute text-white w-[38px] h-[38px] fill-black z-20'/>
          <Play className='absolute text-white w-[20px] h-[20px] left-0 right-0 m-auto fill-white z-20' />
        </Button>
        <div className='h-[80%] w-[50%] flex items-center justify-end py-4 pl-4 pr-2  z-10 border-r-2 border-white'>
            <p className='flex-grow text-white text-lg'>{titleText}</p>
        </div>
        <div className='h-[80%] w-[50%] flex items-center justify-start p-4  z-10'>
            <p className='flex-grow text-white text-xs pl-4'>{decText}</p>
        </div>
    </div>
    <Dialog open={openVideo} onOpenChange={setOpenVideo} className="bg-transparent">
      <DialogContent className='min-w-fit p-0 max-w-fit'>
        <iframe className='p-1 sm:w-[80vw] h-auto aspect-video' src={srcText} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </DialogContent>
    </Dialog>

    </>
  )
}

export default LifeCarouselCard