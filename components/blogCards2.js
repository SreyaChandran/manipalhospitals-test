import React from 'react'
import Image from 'next/image'
import img1 from '../public/images/tips-for-avoiding-summer-migraines-and-headaches.webp'
import img3 from '../public/images/department-manipal-hospitals17.png'
import { Clock } from 'lucide-react';

const BlogCards = ({blog}) => {
  return (
    <div className='w-[95%] flex flex-col shadow-lg shadow-slate-300'>
        <Image src={`/${blog.image.webp}`} alt='The Health Haven' className='w-full' width={100} height={50}/>
        <div className='h-[140px] w-full flex flex-col gap-2 item-center p-2 lg:px-4 xl:px-2 bg-white border-t-[1px] border-t-slate-100'>
            <p className='text-primary text-[13px] leading-5 font-normal'>{blog.title}</p>
            <div className='w-full flex flex-row gap-2 items-center'>
                <Image src={img3} alt='' className='w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-full' />
                <div className='flex flex-col gap-2 w-full'>
                    <p className='text-sm leading-1 text-black w-full font-medium'>{blog.author}</p>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='text-xs flex flex-row items-center justify-start gap-1'><Clock className='w-4'/>{blog.readTime}</div>
                        <div className='text-xs'>{blog.date}</div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default BlogCards