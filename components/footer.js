import React from 'react'
import FooterCol1 from '@/components/footerCol1'
import FooterCol2 from '@/components/footerCol2'
import FooterCol3 from '@/components/footerCol3'
import FooterCol4 from '@/components/footerCol4'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1440px] 2xl:w-[1440px] mx-auto h-full bg-black min-h-10 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-20 w-full max-w-[1300px] 2xl:w-[1300px] mx-auto px-1 md:px-4 lg:px-10 xl:px-16 2xl:px-20'>
          <FooterCol1 />
          <FooterCol2 />
          <FooterCol4 />
          <FooterCol3 />
        </div>
        <div className='w-full flex flex-row items-center justify-center gap-2 bg-[#00b7ac] px-4 py-4 flex-wrap'>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>BENGALURU</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>DELHI</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>GOA</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>JAIPUR</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>MANGALURU</p></Link>
          </div>
          <div className='h-[20px] border-r-2 border-r-white flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>SALEM</p></Link>
          </div>
          <div className='h-[20px] flex items-center'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>VIJAYAWADA</p></Link>
          </div>
        </div>
        <hr className='bg-white h-[2px] min-[600px]:hidden'/>
        <div className='w-full flex flex-row items-center justify-center gap-2 bg-[#00b7ac] px-4 py-4 flex-wrap'>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>PUNE</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>PATIALA</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>MYSURU</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>KOLKATA</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>GURUGRAM</p></Link>
          </div>
          <div className='h-[20px] flex items-center border-r-2 border-r-white'>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>GHAZIABAD</p></Link>
          </div>
          <div className='h-[20px] flex items-center '>
              <Link href="#"><p className='footer-list-item-2 px-8 text-xs font-medium'>BHUBANESWAR</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer