"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import CarouselImage1 from '../public/images/carousel-img-1.webp'
import CarouselImage2 from '../public/images/carousel-img-2.webp'
import CarouselImage3 from '../public/images/carousel-img-3.webp'
import CarouselImage4 from '../public/images/caroudel-img-4.webp'
import CarouselImage5 from '../public/images/carousel-img-5.webp'


const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <div className='w-full h-fit banner-bg'>
      <Carousel
      plugins={[plugin.current]}
      className="w-full h-max"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem key={1}>
            <div>
              <Image src={CarouselImage1} alt="Manipal Hospitals" className='min-w-[100%] h-auto'/>
            </div>
        </CarouselItem>
        <CarouselItem key={2}>
          <div>
            <Image src={CarouselImage2} alt="Manipal Hospitals" className='min-w-[100%] h-auto'/>
          </div>
        </CarouselItem>
        <CarouselItem key={3}>
          <div>
            <Image src={CarouselImage3} alt="Manipal Hospitals" className='min-w-[100%] h-auto'/>
          </div>
        </CarouselItem>
        <CarouselItem key={4}>
          <div>
            <Image src={CarouselImage4} alt="Manipal Hospitals" className='min-w-[100%] h-auto'/>
          </div>
        </CarouselItem>
        <CarouselItem key={5}>
          <div>
            <Image src={CarouselImage5} alt="Manipal Hospitals" className='min-w-[100%] h-auto'/>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
  )
}

export default Banner