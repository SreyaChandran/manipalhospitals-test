import React from 'react'
import { Button } from './ui/button'

const HumanCareExperts = () => {
  return (
    <div class="block w-full items-center py-4 px-8 md:py-8 md:px-16 max-w-[1660px]">
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 xl:max-w-[1170px] mx-auto md:pr-[40px]'>
            <div className='flex md:col-span-3 flex-col gap-4 place-self-start'>
                <p className='text-[44px] text-primary font-bold pb-[15px]'>Human Care Experts</p>
                <p className='humenCare-p1'>The seeds of our origin were sown as early as 1953 when the founder of the Manipal Education and Medical Group (MEMG), Dr. T.M.A. Pai, established the Kasturba Medical College in Manipal,
                        Karnataka. Manipal Hospitals as an entity came into existence in 1991 with the launch of our
                        650-bed flagship hospital at Old Airport Road, Bangalore. Today, we are one of India’s
                        leading
                        healthcare groups with over 9500 beds across 33 hospitals.</p>
                <p className='humenCare-p1'>
                    Our core values are built around the thought of patient-first and that each doctor at Manipal
                        Hospitals is a human care expert, going above and beyond the call of duty as they live by
                        the
                        belief that every single life is priceless. When they embark on these journeys, stories
                        emerge -
                        stories of grit, determination and never giving up. Join us on a journey to discover stories
                        that reinforce your belief in Life&apos;s On
                </p>
                <Button className='w-fit text-lg'>Find a Doctor</Button>
            </div>
            <div className='hidden md:block col-span-2 pl-[40px]'>
                <div className='w-[225px] lg:w-[280px] min-h-[500px] bg-[#00b7ac] self-center pr-[15px] py-[20px]'>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>68</p>
                        <p className='text-sm font-medium text-white'>YEARS OF EXPERIENCE</p>
                        <hr className='bg-white h-[2px] my-2'/>
                    </div>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>33</p>
                        <p className='text-sm font-medium text-white'>HOSPITALS</p>
                        <hr className='bg-white h-[2px] my-2'/>
                    </div>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>5000</p>
                        <p className='text-sm font-medium text-white'>DOCTORS</p>
                        <hr className='bg-white h-[2px] my-2'/>
                    </div>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>9500</p>
                        <p className='text-sm font-medium text-white'>BEDS</p>
                        <hr className='bg-white h-[2px] my-2'/>
                    </div>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>17</p>
                        <p className='text-sm font-medium text-white'>SERVING CITIES</p>
                        <hr className='bg-white h-[2px] my-2'/>
                    </div>
                    <div className='my-4 relative w-full pl-[44px]'>
                        <p className='humenCare-p2'>45</p>
                        <p className='text-sm font-medium text-white'>MILLION LIVES TOUCHED</p>
                    </div>
                </div>
            </div>
            <div className='block md:hidden bg-[#00b7ac] w-full py-4 px-4 md:px-8'>
                <div className='grid grid-cols-3'>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>68</p>
                        <p className='text-xs font-medium text-white'>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>33</p>
                        <p className='text-xs font-medium text-white'>HOSPITALS</p>
                    </div>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>5000</p>
                        <p className='text-xs font-medium text-white'>DOCTORS</p>
                    </div>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>9500</p>
                        <p className='text-xs font-medium text-white'>BEDS</p>
                    </div>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>17</p>
                        <p className='text-xs font-medium text-white'>SERVING CITIES</p>
                    </div>
                    <div className='border-[1px] border-white text-center p-1 sm:p-6'>
                        <p className='humenCare-p3'>45</p>
                        <p className='text-xs font-medium text-white'>MILLION LIVES TOUCHED</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HumanCareExperts