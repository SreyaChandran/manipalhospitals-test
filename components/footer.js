import React from 'react'
import FooterCol1 from '@/components/footerCol1'
import FooterCol2 from '@/components/footerCol2'
import FooterCol3 from '@/components/footerCol3'
import FooterCol4 from '@/components/footerCol4'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full bg-black min-h-10 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-20 w-full max-w-[1300px] 2xl:w-[1300px] mx-auto px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20'>
          <FooterCol1 />
          <FooterCol2 />
          <FooterCol4 />
          <FooterCol3 />
        </div>
        <div className='w-full flex flex-row items-center justify-center gap-2 bg-[#00b7ac] px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20 py-4 flex-wrap'>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-2 text-[10px] md:text-sm font-medium'>BENGALURU</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>DELHI</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>GOA</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>JAIPUR</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>MANGALURU</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>SALEM</p></Link>
          </div>
          <div className='h-[20px] flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>VIJAYAWADA</p></Link>
          </div>
        </div>
        <hr className='bg-white h-[2px] min-[600px]:hidden'/>
        <div className='w-full flex flex-row items-center justify-center gap-2 bg-[#00b7ac] px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20 py-4 flex-wrap'>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>PUNE</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>PATIALA</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>MYSURU</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>KOLKATA</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>GURUGRAM</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>GHAZIABAD</p></Link>
          </div>
          <div className='h-[20px] flex items-center '>
              <Link href="#"><p className='footer-list-item-2 px-2 md:px-8 text-[10px] md:text-sm font-medium'>BHUBANESWAR</p></Link>
          </div>
        </div>
        <div className='w-full max-w-[1300px] 2xl:w-[1300px] mx-auto px-1 md:px-4 lg:px-10 xl:px-16 2xl:px-20 flex flex-row items-center justify-between py-8 flex-wrap gap-4'>
          <p className='text-xs md:text-sm text-[#f4f7fd80] px-2 md:px-4 font-medium'>Copyright © 2024 MANIPAL HEALTH ENTERPRISES PVT LTD - ALL RIGHTS RESERVED</p>
          <div className='flex items-center justify-end gap-2'>
            <div className='h-[20px] flex flex-row items-center border-r-2 border-r-[#f4f7fd80]'>
                <Link href="#"><p className='text-xs md:text-sm text-[#f4f7fd80] px-2 md:px-4 font-medium'>CSR POLICY</p></Link>
            </div>
            <div className='h-[20px] flex flex-row items-center border-r-2 border-r-[#f4f7fd80]'>
              <Link href="#"><p className='text-xs md:text-sm text-[#f4f7fd80] px-2 md:px-4 font-medium'>DISCLAIMER</p></Link>
            </div>
            <div className='h-[20px] flex flex-row items-center border-r-2 border-r-[#f4f7fd80]'>
              <Link href="#"><p className='text-xs md:text-sm text-[#f4f7fd80] px-2 md:px-4 font-medium'>PRIVACY POLICY</p></Link>
            </div>
            <div className='h-[20px] flex flex-row items-center'>
              <Link href="#"><p className='text-xs md:text-sm text-[#f4f7fd80] px-2 md:px-4 font-medium'>T&C</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer