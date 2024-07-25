"use client"
import React from 'react'
import Image from 'next/image'
import doctor_profile_pic from '@/public/images/critical-care-medicine-expert-in-bangalore-dr-adarsh-kulkarni.png'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react" 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
  
const page = () => {
  return (
    <div class="relative w-full max-w-[1660px] h-[900px] ">
        <div className='w-full h-[180px] sm:h-[200px] md:h-[280px] lg:h-[320px] xl:h-[380px] 2xl:h-[450px] bg-[#00b7ac]'></div>
        <div className='mx-[2%] lg;mx-0 absolute top-0 w-[96%] lg:w-full pb-[50px] flex flex-col lg:flex-row items-start justify-center gap-6 py-[60px]'>
            <div className='w-full lg:w-[750px] min-h-[600px] flex flex-col gap-4'>
                <div className='w-full rounded-lg bg-white h-auto md:h-[225px] drop-shadow-lg flex flex-col md:flex-row items-start gap-2'>
                    <div className='bg-primary flex flex-col items-center justify-center h-full w-full md:w-[240px] rounded-l-lg py-4 gap-2'>
                        <p className='text-white text-xs'>Old Airport Road - Bengaluru</p>
                        <Image src={doctor_profile_pic} 
                            alt="Manipal Hospitals" 
                            className='min-w-[100%] h-auto'
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL="../public/images/critical-care-medicine-expert-in-bangalore-dr-adarsh-kulkarni.png"
                        />
                        <p className='text-white text-sm'></p>
                    </div>
                    <div className='flex-grow p-6'>
                        <p className='text-md text-primary uppercase font-bold pb-1'>Dr. Adarsh Kulkarni</p>
                        <p className='text-[11px] text-slate-500 pb-6'>Consultant - Critical Care Medicine</p>
                        <p className='text-xs text-primary uppercase font-bold pb-2'>QUALIFICATION:</p>
                        <p className='text-[11px] text-slate-500 pb-6'>MBBS | MD (Anaesthesia) | FNB (Critical Care Medicine)</p>
                    </div>
                    <Button variant="default" className='text-xs py-1 px-2 m-2 h-6'>Go Back</Button>
                </div>
                <div className='w-full rounded-lg gradient-bg h-auto drop-shadow-lg'>
                    <div className='w-full h-auto mb-[10px] bg-white rounded-t-lg'>
                        <Tabs defaultValue="teb-1" className="w-full bg-transparent">
                            <TabsList className='w-full flex flex-row md:justify-start gap-0 bg-transparent p-0 flex-wrap bg-slate-100'>
                                <TabsTrigger value="teb-1" className='rounded-none rounded-tl-lg border-r border-r-[#cbebe3] text-[10px] font-light text-black lg:text-[10px] leading-6 data-[state=active]:bg-[#e6f6f1] data-[state=active]:text-primary lg:py-2 lg:px-4 uppercase'>Overview</TabsTrigger>
                                <TabsTrigger value="teb-2" className='rounded-none border-r border-r-[#cbebe3] text-[10px] font-light text-black lg:text-[10px] leading-6 data-[state=active]:bg-[#e6f6f1] data-[state=active]:text-primary lg:py-2 lg:px-4 uppercase'>Field of Expertise</TabsTrigger>
                                <TabsTrigger value="teb-3" className='rounded-none border-r border-r-[#cbebe3] text-[10px] font-light text-black lg:text-[10px] leading-6 data-[state=active]:bg-[#e6f6f1] data-[state=active]:text-primary lg:py-2 lg:px-4 uppercase'>Languages Spoken</TabsTrigger>
                                <TabsTrigger value="teb-4" className='rounded-none text-[10px] font-light text-black lg:text-[10px] leading-6 data-[state=active]:bg-[#e6f6f1] data-[state=active]:text-primary lg:py-2 lg:px-4 uppercase'>Talks & Publications</TabsTrigger>
                            </TabsList>
                            <TabsContent value="teb-1" className='py-4 px-8'>
                                <p className='text-md font-medium text-primary'>Overview</p>
                                <ul className='text-xs leading-6 font-light list-disc pl-4 pt-2'>
                                    <li>Dr. Adarsh Kulkarni is a Consultant – In Critical Care Medicine, currently practising at Manipal Hospital Old Airport Road, Bengaluru. His field of expertise lies exclusively in handling patients both in general critical care and haematology critical care. Dr. Kulkarni has contributed his rich knowledge to various publications and research papers, both at national and international levels. During COVID-19, his analysis of Influence of IL-6 levels on patient survival in COVID-19, Defining potential therapeutic targets in Coronavirus disease 2019, Sex differences in immunological responses to Covid-19, etc., were published in many journals. He was praised for her initiative to raise awareness of anaesthesia management in journal papers on topics such as Anesthesia management of a patient of Gorhams syndrome, Anesthesia management of a patient with Congenital methemoglobinemia for emergency Caesarea section., Anesthesia management of a patient with multiple system atrophy, Successful regional anaesthesia in a patient of Takayasu arteritis, The Hazards of look-alike drugs in anaesthesia practice, and more. He is the foremost Critical Care Medicine Expert in Bangalore.</li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="teb-2" className='py-4 px-8'>
                                <p className='text-md font-medium text-primary'>Field of Expertise</p>
                                <ul className='text-xs left-6 font-light list-disc pl-4 pt-2'>
                                    <li className='pb-1'>General critical care</li>
                                    <li className='pb-1'>Haemoncology critical care, UCLH, London</li>
                                    <li className='pb-1'>Basic research (Sepsis)</li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="teb-3" className='py-4 px-8'>
                                <p className='text-md font-medium text-primary'>Languages Spoken</p>
                                <ul className='text-xs leading-6 font-light list-disc pl-4 pt-2'>
                                    <li className='pb-1'>Kannada</li>
                                    <li className='pb-1'>English</li>
                                    <li className='pb-1'>Hindi</li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="teb-4" className='py-4 px-8'>
                                <p className='text-md font-medium text-primary'>Talks & Publications</p>
                                <ul className='text-xs leading-6 font-light list-disc pl-4 pt-2'>
                                    <li className='pb-1'>Influence of IL-6 levels on patient survival in COVID-19 by Journal of Critical Care 2021.</li>
                                    <li className='pb-1'>Defining potential therapeutic targets in Corona virus disease 2019 a cross-sectional analysis of a single - centre cohort Critical care explorations 2021.</li>
                                    <li className='pb-1'>Sex differences in immunological responses to Covid-19 cross-sectional analysis of a single - centre cohort Critical care explorations 2021 BJA 2021.</li>
                                    <li className='pb-1'>Anesthesia management of a patient of Gorhams syndrome published in may 2018 journal of Anesthesiology and Clinical Pharmacology.</li>
                                    <li className='pb-1'>Patient satisfaction in pain OPD of a tertiary hospital published in IOSR Journals in March 2015.</li>
                                    <li className='pb-1'>Anesthesia management of a patient with Congenital methmoglobinemia for emergency Caesarea section. published in IOSR Journals in March 2015.</li>
                                    <li className='pb-1'>Successful regional anesthesia in a patient of Takayasu arteritis published in IOSR Journals in March 2015.</li>
                                    <li className='pb-1'>Intraoperative air embolism and post operative tension pneumocephalus- is hydrogen peroxide the culprit?  published by the journal of neuro anesthesiology and neuro critical care in May 2017.</li>
                                </ul>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className='w-[380px] h-[600px] bg-white rounded-lg drop-shadow-lg'>
                <div className='w-full min-h-[150px] bg-primary rounded-t-lg p-6'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='text-sm uppercase text-[#a2c2e9]'>PICK A TIME SLOT</p>
                        <p className='text-xs text-[#a2c2e9]'>₹ Price not available</p>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-4'>
                        <Button variant="outline" className='bg-transparent outline-1 outline-white border-white text-white text-[11px] p-2'>Old Airport Road - Bengaluru</Button>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild={true} className='max-[767px]:hidden'>
                                <Button variant="outline" className='bg-transparent outline-1 outline-white border-white text-white text-[11px] p-2 w-[150px]'>
                                    ICU andCritical Care
                                    <ChevronDown className="chevronDown relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                                </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-full'>
                            <DropdownMenuItem className='text-xs'>ICU andCritical Care</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='text-sm text-slate-800'>Book an appointment for Consultation</p>
                    <div className='flex items-center justify-center gap-4 flex-wrap py-2'>
                        <Button variant="default" className='text-xs'>Physical Hospital Visit</Button>
                        <Button variant="default" className='text-xs bg-[#00b7ac]'>Video Consultation</Button>
                        <Button variant="default" className='text-xs'>Prime Consultation</Button>
                    </div>
                    <p className='text-xs leading-5 text-slate-500 py-2'>All slots are booked for the doctor today. Please check for another day or call us at 1800 102 4647.</p>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm px-4"
                        >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                {index + 1}
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='h-6 w-6' />
                        <CarouselNext className='h-6 w-6'/>
                    </Carousel>
                    <Button className='w-full bg-white border-2 hover:bg-transparent border-primary rounded-none font-normal text-xs text-primary mb-2' variant="outline">Next Available Slot</Button>
                    <Button className='w-full btn-appoinment rounded-none font-normal text-xs text-primary hover:text-white mt-4 border-none' variant="outline">Request Call Back</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page