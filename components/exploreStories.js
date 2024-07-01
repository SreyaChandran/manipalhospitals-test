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
import TestimonialCard from '@/components/testimonialCard'
const ExploreStories = () => {
  const carousel1_1 = 'total-knee-replacement.webp';
  const carousel1_2 = 'partial-molar-pregnancy-with-hellp-syndrome.webp';
  const carousel1_3 = 'patients-journey-to-recovery.webp';
  const carousel1_4 = 'remarkable-orthopedic-surgery.webp';
  const carousel1_5 = 'what-age-does-scoliosis-typically-develop.webp';

  const carousel2_1 = 'respiratory-medicine-specialist-in-bangalore.webp';
  const carousel2_2 = 'different-stages-of-diabetic-retinopathy.webp';
  const carousel2_3 = 'what-causes-diabetic-retinopathy.webp';

  const carousel3_1 = 'coronary-bypass-surgery.webp';
  const carousel3_2 = 'how-glaucoma-is-treated.webp';
  const carousel3_3 = 'lactation-for-new-mothers.webp';
  const carousel3_4 = 'introduction-to-what-is-ct-scan-computerised-tomography.webp';
  const carousel3_5 = 'bone-marrow-transplant.webp';

  const carousel4_1 = 'organ-donation-awareness-event-1.webp';
  const carousel4_2 = 'kidney-health-awareness-on-world-kidney-day-2023_1.webp';
  const carousel4_3 = 'early-diagnosis-of-blood-cancer.webp';
  const carousel4_4 = 'happy-doctors-day-2023.webp';
  const carousel4_5 = 'cervical-cancer-awareness.webp';

  const carousel5_1 = 'world-no-tobacco-day.webp';
  const carousel5_2 = 'celebrating-nurses-day-at-manipal.webp';
  const carousel5_3 = 'enhancing-healthcare-accessibility.webp';
  const carousel5_4 = 'internal-medicine-doctors-at-manipal.webp';
  const carousel5_5 = 'exclusive-senior-care-pathway.webp';

  return (
    <div className='w-full items-center py-4 md:py-8 max-w-[1660px] bg-[#00b7ac] text-center'>
        <p className='text-white text-[44px] font-bold py-[30px]'>Explore Stories</p>
        <Tabs defaultValue="life-tab-1" className="w-full bg-transparent pb-4">
            <TabsList className="w-full flex flex-row items-center justify-center gap-4 bg-transparent pb-8 flex-wrap">
                <TabsTrigger value="life-tab-1" className='btn-tab lg:text-xl leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac] lg:py-2 lg:px-4 '>Patient Stories</TabsTrigger>
                <TabsTrigger value="life-tab-2" className='btn-tab lg:text-xl leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac] lg:py-2 lg:px-4'>Doctor &#8216; s Speak</TabsTrigger>
                <TabsTrigger value="life-tab-3" className='btn-tab lg:text-xl leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac] lg:py-2 lg:px-4'>General</TabsTrigger>
                <TabsTrigger value="life-tab-4" className='btn-tab lg:text-xl leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac] lg:py-2 lg:px-4'>Health Days</TabsTrigger>
                <TabsTrigger value="life-tab-5" className='btn-tab lg:text-xl leading-6 font-bold data-[state=active]:bg-white data-[state=active]:text-[#00b7ac] lg:py-2 lg:px-4'>Events</TabsTrigger>
            </TabsList>
            <TabsContent value="life-tab-1">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_2} titleText="Partial molar pregnancy…"  decText="🌟 Hear from our brave patient who triumphed over partial molar pregnancy and HELLP…" srcText="https://www.youtube.com/embed/MAFB0Hebh7c"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_1} titleText="Total Knee Replacement…"  decText="Mr. Chandresh Seth, a 79-year-old lawyer from Lucknow, shares his incredible journey…" srcText="https://www.youtube.com/embed/mozIAAJihno"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_5} titleText="At what age does scoliosis…"  decText="Curious about scoliosis and when it typically develops? 🩺 Watch Dr. Ashish Dagar,…" srcText="https://www.youtube.com/embed/IiJpgXx_ogY"/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_3} titleText="Orthopaedic Triumph : Patient's…"  decText="Dr. Vishav Goyal, Consultant in Orthopedic Joint Replacement and Arthroscopic Surgery…" srcText=""/>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                      <div className="p-1 m-1">
                        <LifeCarouselCard image={carousel1_4} titleText="Expert Care in Action :…"  decText="Dr. Vishav Goyal, Consultant in Orthopedic Joint Replacement and Arthroscopic Surgery…" srcText=""/>
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
                      <LifeCarouselCard image={carousel2_2} titleText="What Causes Diabetic Retinopathy?…"  decText="👁️ &bdquo; Diabetic Retinopathy: What Causes It?&bdquo; by Dr. Nikhila Sathe, Consultant Ophthalmology…" srcText="https://www.youtube.com/embed/qFYherleLJY"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_1} titleText="Pulmonary Rehabilitation…"  decText="The most integral aspect of respiratory care is not just the medications or innovations…" srcText="https://www.youtube.com/embed/pcNr74wWn-o"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_3} titleText="What are the symptoms of…"  decText="🔍👁️ Dr. Nikhila Sathe, Consultant Ophthalmologist at Manipal Hospitals Baner, discusses…" srcText="https://www.youtube.com/embed/qFYherleLJY"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_2} titleText="What is Diabetic Retinopathy?…"  decText="👁️🩺 What is Diabetic Retinopathy? Dr. Nikhila Sathe, Consultant Ophthalmologist…" srcText="https://www.youtube.com/embed/LdoslpF71Us"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel2_3} titleText="What are the different…"  decText="👁️ Understanding Diabetic Retinopathy: A Journey Through Its Stages👁️ Join Dr. Nikhila…" srcText="https://www.youtube.com/embed/qFYherleLJY"/>
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
                      <LifeCarouselCard image={carousel3_1} titleText="Coronary Bypass Surgery:…"  decText="🔍 Discover everything you need to know about Coronary Bypass Surgery in our latest…" srcText="https://www.youtube.com/embed/99YjxgoypiU" />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_2} titleText="How Glaucoma is Treated?"  decText="Glaucoma is a condition that damages the eye’s optic nerve due to increased pressure…" srcText="" />
                    </div>
                  </CarouselItem> */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_3} titleText="Lactation for New Mothers…"  decText="Any woman can go through issues with lactation. In such a situation, it's important…" srcText="https://www.youtube.com/embed/RZPwoutj7nQ"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_4} titleText="Introduction To What Is…"  decText="<p>This animated video is an informative video that explains the working of Computerized…</p>" srcText="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel3_5} titleText="Bone Marrow Transplant…"  decText="Discover the life-saving potential of bone marrow transplants! Our latest blog delves…" srcText="https://www.youtube.com/embed/q7lACQ_1kAE" />
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
                      <LifeCarouselCard image={carousel4_5} titleText="Cervical Cancer Awareness…"  decText="Cervical cancer is one of the leading causes of cancer related mortality in women.…" srcText="https://www.youtube.com/embed/N_KOII4GRrY" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel4_3} titleText="Early Diagnosis of Blood…"  decText="Welcome to Manipal Hospitals, Get to Know about the Symptoms of Blood Cancer and…" srcText="https://www.youtube.com/embed/Z01JKAxpY3Q" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel4_1} titleText="Organ Donation Awareness…"  decText="With the aim to raise awareness about organ donation, Manipal Hospitals Jaipur organized…" srcText="https://www.youtube.com/embed/59W7A9TZRsE" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel4_2} titleText="Kidney Health Awareness…"  decText="On the occasion of World Kidney Day, Manipal Hospital Sarjapur celebrated the awareness…" srcText="https://www.youtube.com/embed/p5X_nQEUovw" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel4_4} titleText="Happy Doctor's Day 2023…"  decText="Manipal Hospital Varthur Road, Bangalore celebrates the dedicated doctors who prioritise…" srcText="https://www.youtube.com/embed/CnOZ3awy8Uw" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="life-tab-5">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel5_5} titleText="Manipal Vriddara Maitri…"  decText="Manipal Hospitals Millers Road proudly introduced a one-of-a-kind initiative, Manipal…" srcText="https://www.youtube.com/embed/77I1KU7idqo" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel5_1} titleText="World No Tobacco Day |…"  decText="🚭 No Tobacco Day: Spreading Awareness for a Healthier Tomorrow 🚭 Tobacco claims…" srcText="https://www.youtube.com/embed/IHbn7nV-SZI" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel5_2} titleText="We Are The Heroes - A Song…"  decText="From Florence Nightingale to modern heroes, nurses illuminate the path for patients…" srcText="https://www.youtube.com/embed/pJqy2uPK4J0" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel5_3} titleText="Unveiling the Neighbourhood…"  decText="Providing high-quality medical care to members of the community is one of Manipal's…" srcText="https://www.youtube.com/embed/tlmY8Fx-i2U" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 bg-[#00b7ac]">
                    <div className="p-1 m-1">
                      <LifeCarouselCard image={carousel5_4} titleText="Know Your Doctors | Department…"  decText="Manipal Hospitals Whitefield hosted a 'Know Your Doctors' event with the Department…" srcText="https://www.youtube.com/embed/KZs1oXpQohM" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
        </Tabs>
        <Button variant="default" className='bg-white text-[#00b7ac] text-[18px] h-15 w-30 px-10 py-2 font-medium my-8'>View All</Button>
    </div>
  )
}

export default ExploreStories