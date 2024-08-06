import React from 'react'
import Image from 'next/image'
import bannerImage from '@/public/images/specilaity-banner-image_1678361627.webp'
import IframeComponent from '@/components/IframeComponent';
import ContactAddress from '@/components/ContactAddress';

const page = () => {
  return (
    <div class="block w-full max-w-[1660px]"> 
        <Image src={bannerImage} 
            alt="Manipal Hospitals" 
            className='min-w-[100%] h-auto'
            layout="responsive"
            placeholder="blur"
            blurDataURL="../public/images/specilaity-banner-image_1678361627.webp"
        />
        <div className="max-w-[1660px] bg-slate-50 py-[40px] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[200px]">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <IframeComponent />
            </div>
            <ContactAddress />
        </div>
    </div>
  )
}

export default page