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

const MethodToMiracleCard = ({image,srcText="https://www.youtube.com/embed/mozIAAJihno"}) => {
    const [openVideo, setOpenVideo] = useState(false)
    return (
        <>
            <div className='flex flex-row items-center justify-between aspect-video w-full h-full bg-[#000] rounded relative'>
                <Image src={image} 
                    alt="Manipal Hospitals" 
                    className='min-w-[100%] h-[100%] absolute aspect-video opacity-90 rounded z-0'
                    layout="responsive"
                    placeholder="blur"
                />
                <Button variant="ghost" className='bg-transparent absolute left-0 right-0 m-auto z-20 hover:bg-transparent max-w-fit' onClick={()=>setOpenVideo(true)}>
                    <Circle className='absolute text-white w-[38px] h-[38px] z-20'/>
                    <Play className='absolute text-white w-[20px] h-[20px] left-0 right-0 m-auto fill-white z-20' />
                </Button>
            </div>
            <Dialog open={openVideo} onOpenChange={setOpenVideo} className="bg-transparent">
            <DialogContent className='min-w-fit p-0 max-w-fit'>
                <iframe className='p-1 sm:w-[80vw] h-auto aspect-video' src={srcText} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
            </Dialog>

        </>
    )
}

export default MethodToMiracleCard