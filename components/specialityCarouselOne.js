import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from './ui/button'

const SpecialityCarouselOne = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/2">
            <div className="p-4">
              <Card className='border-primary drop-shadow-lg'>
                <CardContent className="flex flex-col items-start justify-start p-8">
                  <p className='text-primary text-[30px] pb-4'>Coronary angiogram</p>
                  <p className='text-sm text-slate-500 leading-5 md:leading-8 xl:leading-10'>An X-ray imaging test is done to see if there are any restrictions in blood flow going to your heart. This is the most common test to help doctors diagnose heart conditions. During coronary angiography, a small catheter or tube is inserted through the skin into an artery in the groin or the Hand. Through a special x-ray viewing instrument, the catheter…</p>
                  <Button className='px-6 my-4' variant="default">Read More</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious className='bg-primary -left-8' />
      <CarouselNext className='bg-primary -right-8' />
    </Carousel>
  )
}

export default SpecialityCarouselOne