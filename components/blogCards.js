import React from 'react'
import Image from 'next/image'
import img1 from '../public/images/tips-for-avoiding-summer-migraines-and-headaches.webp'
import img3 from '../public/images/department-manipal-hospitals17.png'
import { Clock } from 'lucide-react';

const BlogCards = ({blog}) => {
  return (
    <div className='min-w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 shadow-lg shadow-slate-300 gradient-bg-3'>
        <Image src={`/${blog.image.webp}`} alt='The Health Haven' className='rounded-l-lg min-h-full w-auto' width={100} height={50}/>
        <div className='min-h-full w-[98%] flex flex-col item-center justify-between p-2 lg:px-4 xl:px-2 bg-white border-t-[1px] border-t-slate-100'>
            <p className='text-primary text-[13px] leading-5 font-normal'>{blog.title}</p>
            <Image src={img3} alt='' className='w-[35px] h-[35px] lg:w-[35px] lg:h-[35px] rounded-full mx-auto' />
            <p className='text-[11px] leading-1 text-black uppercase w-full text-center'>{blog.author}</p>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-start gap-2 text-xs'><Clock className='w-4'/>{blog.readTime}</div>
                <div className='flex flex-row items-center justify-start gap-2 text-xs'>{blog.date}</div>
            </div>
        </div>
    </div>
  )
}

export default BlogCards