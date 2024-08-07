// "use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from '@/public/images/logo1.webp'
import logo2 from '@/public/images/logo2.webp'
import lifesOn from '@/public/images/lifes-on.webp'
import MenuOne from '@/components/menuOne'
import MenuTwo from '@/components/menuTwo'
import MenuThree from '@/components/menuThree'

const Header = () => {
  return (
    <div className='h-[120px] w-full max-w-[1660px] mx-auto flex flex-col items-center gap-0 justify-between sticky top-0 z-20'>
        <div className='w-full bg-white flex-grow'>
          <div className='navbar-sec1 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20 w-full max-w-[1300px] 2xl:w-[1300px] mx-auto h-full flex flex-row items-center justify-between gap-2'>
            <div className='w-[240px] max-[767px]:w-[200px] max-[575px]:hidden'>
              <Link href="/home"><Image src={logo1} alt="Manipal Hospitals" /></Link>
            </div>
            <Link href="#" className='btn-lifesOn py-2 px-4 border-[1px] rounded border-[#fff] bg-[#fff] w-[100px] h-[50px] min-[576px]:hidden'>
              <Image src={lifesOn} alt="Manipal Hospitals" />
            </Link>
            <div className='flex flex-row items-center justify-end gap-2 md:gap-2'>
              <Link href="#" className='btn-lab-report rounded py-2 px-4 font-semibold md:flex-grow max-[575px]:bg-[#fff] max-[575px]:text-primary text-sm max-[575px]:text-xs max-[575px]:w-[80px] max-[575px]:h-[52px] max-[575px]:p-1 text-center flex items-center justify-center'>
                Access Lab Reports
              </Link>
              <Link aria-label="Appointment" href="#" className='btn-appoinment font-semibold flex flex-row gap-2 items-center rounded py-2 px-4 max-[991px]:rounded-full max-[991px]:p-2'>
                <svg className="icon-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <svg className='menu-icon-blue' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className='max-[991px]:hidden'>Appointment</span>
              </Link>
              <Button variant="outline" aria-label='Search' className='min-[768px]:hidden bg-white text-primary text-[13px] font-semibold font-primary flex flex-row gap-2 px-[9px] rounded-full items-center m-0 outline-0 border-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span  className='max-[992px]:hidden'>Search</span>
              </Button>
              <Link href="#" aria-label="Emergency" className='btn-emergency font-semibold flex flex-row gap-2 items-center rounded py-2 px-4 max-[991px]:rounded-full max-[991px]:p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ambulance"><path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                <span className='max-[991px]:hidden'>Emergency</span>
              </Link>
              <Link href="#" className='btn-lifesOn py-2 px-4 border-[1px] rounded border-primary w-[120px] max-[767px]:w-[100px] max-[575px]:hidden'>
                <Image src={lifesOn} alt="Manipal Hospitals" />
              </Link>
              <Link href="#" className='w-[40px] rounded max-[765px]:hidden'>
                <Image src={logo2} alt="Manipal Hospitals" />
              </Link>
            </div>
          </div>
        </div>
        <div className='nav-bar w-full min-h-[40px] border-b-[3px] border-b-primary flex items-center justify-between'>
          <div className='w-full max-w-[1300px] 2xl:w-[1300px] mx-auto px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20 flex items-center justify-between'>
            <div className='w-[140px] min-[576px]:hidden'>
              <Image src={logo1} alt="Manipal Hospitals" />
            </div>
            <div className='flex flex-row items-center justify-end gap-1 md:gap-2 w-full h-full'>
              <MenuOne className="flex-grow"/>
              <MenuTwo />
              <MenuThree />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header