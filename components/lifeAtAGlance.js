import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import LifeCarouselCard from '@/components/lifeCarouselCard'
// import CarouselImage3 from '../public/images/carousel-img-3.webp'
import carousel1_1 from '../public/images/total-knee-replacement.webp'
import carousel1_2 from '../public/images/partial-molar-pregnancy-with-hellp-syndrome.webp'
import carousel1_3 from '../public/images/patients-journey-to-recovery.webp'
import carousel1_4 from '../public/images/remarkable-orthopedic-surgery.webp'
import carousel1_5 from '../public/images/what-age-does-scoliosis-typically-develop.webp'
import carousel2_1 from '../public/images/respiratory-medicine-specialist-in-bangalore.webp'
import carousel2_2 from '../public/images/different-stages-of-diabetic-retinopathy.webp'
import carousel2_3 from '../public/images/what-causes-diabetic-retinopathy.webp'
import carousel3_1 from '../public/images/coronary-bypass-surgery.webp'
import carousel3_2 from '../public/images/how-glaucoma-is-treated.webp'
import carousel3_3 from '../public/images/lactation-for-new-mothers.webp'
import carousel3_4 from '../public/images/introduction-to-what-is-ct-scan-computerised-tomography.webp'
import carousel3_5 from '../public/images/bone-marrow-transplant.webp'
// import carousel3_ from '../public/images/.webp'
const LifeAtAGlance = () => {
  return (
    <div className='w-full items-center py-4 md:py-8 max-w-[1660px] bg-[#00b7ac] text-center'>
        <p className='text-white text-[44px] font-bold py-[30px]'>Life at a Glance</p>
        <Tabs defaultValue="life-tab-1" className="w-full bg-transparent">
            <TabsList className="w-full flex flex-row items-center justify-center gap-4 bg-transparent pb-8">
                <TabsTrigger value="life-tab-1" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>Patient Stories</TabsTrigger>
                <TabsTrigger value="life-tab-2" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>Doctor &#8216; s Speak</TabsTrigger>
                <TabsTrigger value="life-tab-3" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>General</TabsTrigger>
                <TabsTrigger value="life-tab-4" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>Health Days</TabsTrigger>
                <TabsTrigger value="life-tab-5" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>Events</TabsTrigger>
                <TabsTrigger value="life-tab-6" className='btn-tab text-lg leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac]'>Written Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value="life-tab-1">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_2} titleText="Partial molar pregnancy…"  decText="🌟 Hear from our brave patient who triumphed over partial molar pregnancy and HELLP…"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_1} titleText="Total Knee Replacement…"  decText="Mr. Chandresh Seth, a 79-year-old lawyer from Lucknow, shares his incredible journey…"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_5} titleText="At what age does scoliosis…"  decText="Curious about scoliosis and when it typically develops? 🩺 Watch Dr. Ashish Dagar,…"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_3} titleText="Orthopaedic Triumph : Patient's…"  decText="Dr. Vishav Goyal, Consultant in Orthopedic Joint Replacement and Arthroscopic Surgery…"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_4} titleText="Expert Care in Action :…"  decText="Dr. Vishav Goyal, Consultant in Orthopedic Joint Replacement and Arthroscopic Surgery…"/>
                      </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="life-tab-2">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_2} titleText="What Causes Diabetic Retinopathy?…"  decText="👁️ &bdquo; Diabetic Retinopathy: What Causes It?&bdquo; by Dr. Nikhila Sathe, Consultant Ophthalmology…" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_1} titleText="Pulmonary Rehabilitation…"  decText="The most integral aspect of respiratory care is not just the medications or innovations…"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_3} titleText="What are the symptoms of…"  decText="🔍👁️ Dr. Nikhila Sathe, Consultant Ophthalmologist at Manipal Hospitals Baner, discusses…"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_2} titleText="What is Diabetic Retinopathy?…"  decText="👁️🩺 What is Diabetic Retinopathy? Dr. Nikhila Sathe, Consultant Ophthalmologist…"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_3} titleText="What are the different…"  decText="👁️ Understanding Diabetic Retinopathy: A Journey Through Its Stages👁️ Join Dr. Nikhila…"/>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="life-tab-3">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_1} titleText="Coronary Bypass Surgery:…"  decText="🔍 Discover everything you need to know about Coronary Bypass Surgery in our latest…" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_2} titleText="How Glaucoma is Treated?"  decText="Glaucoma is a condition that damages the eye’s optic nerve due to increased pressure…" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_3} titleText="Lactation for New Mothers…"  decText="Any woman can go through issues with lactation. In such a situation, it's important…" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_4} titleText="Introduction To What Is…"  decText="<p>This animated video is an informative video that explains the working of Computerized…</p>" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_5} titleText="Bone Marrow Transplant…"  decText="Discover the life-saving potential of bone marrow transplants! Our latest blog delves…" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="life-tab-4">
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      {/* <LifeCarouselCard image="" titleText=""  decText="" /> */}
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="life-tab-5"></TabsContent>
            <TabsContent value="life-tab-6"></TabsContent>
        </Tabs>
    </div>
  )
}

export default LifeAtAGlance