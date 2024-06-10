import React from 'react'
import Image from 'next/image'
import facebook from '@/public/images/facebook.webp'
import instagram from '@/public/images/instagram.webp'
import twitter from '@/public/images/twitter.webp'
import youtube from '@/public/images/youtube.webp'
import apple from '@/public/images/apple.webp'
import playstore from '@/public/images/playstore.webp'
import cert from '@/public/images/cert.webp'
import nabl from '@/public/images/nabl.webp'



import footerLogo from '@/public/images/footer-logo.webp'
import { Button } from '@/components/ui/button'

const FooterCol1 = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='py-8'>
            <Image src={footerLogo} alt="Manipal Hospitals" />
        </div>
        <p className="text-[#fff] text-sm font-medium leading-6 pb-4">Head Office: Manipal Health Enterprise Pvt Ltd. The Annexe, #98/2, Rustom Bagh, Off HAL Airport Road, Bengaluru - 560017</p>
        <p className="text-[#fff] text-sm font-medium leading-6 pb-4">Doctor Enquiry:  1800 102 4647</p>
        <p className="text-[#fff] text-sm font-medium leading-6 pb-4">Email : info@manipalhospitals.com</p>
        <div className='flex items-center justify-start gap-4 py-2'>
            <div className='w-[35px] h-[35px] bg-[#fff] rounded-full p-2'>
                <Image src={facebook} alt="Manipal Hospitals" />
            </div>
            <div className='w-[35px] h-[35px] bg-[#fff] rounded-full p-2'>
                <Image src={instagram} alt="Manipal Hospitals" />
            </div>
            <div className='w-[35px] h-[35px] bg-[#fff] rounded-full p-2'>
                <Image src={twitter} alt="Manipal Hospitals" />
            </div>
            <div className='w-[35px] h-[35px] bg-[#fff] rounded-full p-2'>
                <Image src={youtube} alt="Manipal Hospitals" />
            </div>
        </div>
        <Button variant="default" className='flex flex-row items-center gap-2 justify-center mt-4 w-[200px] h-[50px]'>
            <div className='w-[30px] h-[30px]'><Image src={playstore} alt="Manipal Hospitals" /></div>
            <div className='flex flex-col gap-0 items-start justify-start'>
                <p className='text-[11px]'>Get it from</p>
                <p className='text-xs'>Play Store</p>
            </div>
        </Button>
        <Button variant="default" className='flex flex-row items-center gap-2 justify-center mb-4 w-[200px] h-[50px]'>
            <div className='w-[30px] h-[30px]'><Image src={apple} alt="Manipal Hospitals" /></div>
            <div className='flex flex-col gap-0 items-start justify-start'>
                <p className='text-[11px]'>Get it from</p>
                <p className='text-xs'>App Store</p>
            </div>
        </Button>
        <p className='text-[#fff] text-xl font-semibold mt-4 mb-2'>TARIFF</p>
        <Button variant="secondary" className='text-primary w-[200px] bg-[#fff] mb-1'>Cardiac Stent Pricing</Button>
        <Button variant="secondary" className='text-primary w-[200px] bg-[#fff] mb-1'>TKR Implants Pricing</Button>
        <Button variant="secondary" className='text-primary w-[200px] bg-[#fff] mb-1'>In-patient Tariff</Button>
        <p className='text-[#fff] text-xl font-semibold mt-4 mb-2'>ACCREDITATIONS</p>
        <div className='flex flex-row item-center justify-start gap-4'>
            <div className='w-[60px] h-[70px]'>
                <Image src={cert} alt="Manipal Hospitals" />
            </div>
            <div className='w-[70px] h-[70px]'>
                <Image src={nabl} alt="Manipal Hospitals" />
            </div>
        </div>
    </div>
  )
}

export default FooterCol1