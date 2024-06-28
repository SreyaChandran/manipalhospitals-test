import React from 'react'
import doctor_img_1 from '@/public/images/heart-specialist-in-gurgaon-col-dr-monik-mehta.png'
import Image from 'next/image'
import { Button } from './ui/button'

const DoctorsCard = () => {
  return (
    <div className='w-[290px] h-[450px] rounded-xl p-0 flex flex-col gap-0 shadow-2xl m-2'>
        <div className='min-h-[28px] gradient-bg rounded-t-xl text-center text-white flex items-center justify-center text-sm'>Gurugram</div>
        <Image src={doctor_img_1} 
            alt="Manipal Hospitals" 
            className='min-w-[100%] h-auto'
            layout="responsive"
            placeholder="blur"
            blurDataURL="../public/images/heart-specialist-in-gurgaon-col-dr-monik-mehta.png"
        />
        <div className='h-[25px] bg-primary'></div>
        <div className='flex flex-col items-center justify-between'>
            <div className='border-b-[1px] border-b-slate-100 py-2'>
                <p className='text-xs uppercase font-medium text-center'>(Col) Dr. Monik Mehta</p>
                <p className='text-[11px] uppercase font-light text-center pt-1'>SENIOR CONSULTANT - CARDIOLOGY</p>
            </div>
            <div className='w-full p-4 mt-[60px]'>
                <Button variant="default" className=' w-full'>View Profile</Button>
            </div>
        </div>
    </div>
  )
}

export default DoctorsCard