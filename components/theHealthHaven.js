import React from 'react'
import img1 from '../public/images/tips-for-avoiding-summer-migraines-and-headaches.webp'
import img2 from '../public/images/diabetes-treatment-in-bangalore.webp'
import img3 from '../public/images/department-manipal-hospitals17.png'
import img4 from '../public/images/dr-minal-mohit-vohra-consultant-endocrionology.png'
import { Clock } from 'lucide-react';
import Image from 'next/image'
import { Button } from './ui/button'
const TheHealthHaven = () => {
  return (
    <div className='py-4 2xl:py-8 max-w-[1660px] bg-[#fff] text-center px-4 2xl:px-8 max-h-fit'>
      <h1 className='text-primary text-[40px] leading-20 font-bold my-8'>The Health Haven</h1>
      <div className='w-full my-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
        <div className='min-w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 shadow-lg shadow-slate-300'>
            <Image src={img1} alt='The Health Haven' className='rounded-l-lg min-h-full'/>
            <div className='min-h-full w-full flex flex-col item-center justify-between p-2 lg:px-4 xl:px-2'>
                <p className='text-primary text-md leading-5 font-medium'>Tips To Avoid Summer Migraines And Headaches</p>
                <Image src={img3} alt='' className='w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-full mx-auto' />
                <p className='text-[11px] leading-1 text-black uppercase'>Department of Internal Medicine</p>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center justify-start gap-2 text-xs'><Clock className='w-4'/> 4 min read</div>
                  <div className='flex flex-row items-center justify-start gap-2 text-xs'>07 - 06 - 2024</div>
                </div>
            </div>
        </div>
        <div className='min-w-full min-h-full rounded-lg grid grid-cols-1 sm:grid-cols-2 shadow-lg shadow-slate-300'>
            <Image src={img2} alt='The Health Haven' className='rounded-l-lg min-h-full'/>
            <div className='min-h-full w-full flex flex-col item-center justify-between p-2 lg:px-4 xl:px-2'>
                <p className='text-primary text-md leading-5 font-medium'>How to Reverse Diabetes?</p>
                <Image src={img3} alt='' className='w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-full mx-auto' />
                <p className='text-[11px] leading-1 text-black uppercase'>Dr. Minal Mohit Vohra</p>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center justify-start gap-2 text-xs'><Clock className='w-4'/>5 min read</div>
                  <div className='flex flex-row items-center justify-start gap-2 text-xs'>07 - 06 - 2024</div>
                </div>
            </div>
        </div>
      </div>
      <Button variant="default" className='mt-4'>View All</Button>
    </div>
  )
}

export default TheHealthHaven