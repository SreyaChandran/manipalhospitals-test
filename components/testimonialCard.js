import React from 'react'
import iconImg from '../public/images/pateint-testimonial_1677833604.webp'
import iconImage2 from '../public/images/written-card-symbol.webp'
import Image from 'next/image'
import Link from 'next/link'
const TestimonialCard = ({name, description, link="#", doctor, speciality, hospital}) => {
  return (
    <div className='flex flex-col items-center justify-start gap-1 aspect-video w-full bg-[#fff] rounded py-2 px-4'>
        <Image src={iconImg} className='aspect-square' width={55} height={55} alt="user" />
        <p className='text-lg font-semibold'>{name}</p>
        <p className='text-xs text-slate-500 font-medium'>Patient</p>
        <Image src={iconImage2} width={25} height={25} alt="user" />
        <p className='text-xs font-medium text-left'>{description}<Link href={link} className='text-xs text-primary underline'> Read full feedback</Link></p>
        <p className='pt-2 px-2 text-left text-xs w-full'>Doctor Name : <span className='font-medium'>{doctor}</span></p>
        <p className='px-2 text-left text-xs w-full'>Speciality : <span className='font-medium'>{speciality}</span></p>
        <p className='px-2 text-left text-xs w-full'>Hospitals : <span className='font-medium'>{hospital}</span></p>
    </div>
  )
}

export default TestimonialCard