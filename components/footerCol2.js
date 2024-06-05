import React from 'react'
import Link from 'next/link'

const FooterCol2 = () => {
  return (
    <div className='flex flex-col gap-0'>
      <p className='text-[#fff] text-[18px] leading-[22px] font-semibold pt-8 mb-6'>Centres of Excellence</p>
      <Link href="#"><p className='footer-list-item'>Accident and Emergency Care</p></Link>
      <Link href="#"><p className='footer-list-item'>Cancer Care/Oncology</p></Link>
      <Link href="#"><p className='footer-list-item'>Cardiology</p></Link>
      <Link href="#"><p className='footer-list-item'>Cardiothoracic Vascular Surgery</p></Link>
      <Link href="#"><p className='footer-list-item'>Dialysis</p></Link>
      <Link href="#"><p className='footer-list-item'>Gastrointestinal Science</p></Link>
      <Link href="#"><p className='footer-list-item'>Laparoscopic Surgery</p></Link>
      <Link href="#"><p className='footer-list-item'>Liver Transplantation Surgery</p></Link>
      <Link href="#"><p className='footer-list-item'>Nephrology</p></Link>
      <Link href="#"><p className='footer-list-item'>Neurology</p></Link>
      <Link href="#"><p className='footer-list-item'>Neurosurgery</p></Link>
      <Link href="#"><p className='footer-list-item'>Obstetrics and Gynaecology</p></Link>
      <Link href="#"><p className='footer-list-item'>Organ Transplant</p></Link>
      <Link href="#"><p className='footer-list-item'>Orthopaedic Robotic Surgery</p></Link>
      <Link href="#"><p className='footer-list-item'>Orthopaedics</p></Link>
      <Link href="#"><p className='footer-list-item'>Paediatric And Child Care</p></Link>
      <Link href="#"><p className='footer-list-item'>Proctology</p></Link>
      <Link href="#"><p className='footer-list-item'>Rheumatology</p></Link>
      <Link href="#"><p className='footer-list-item'>Spine Care</p></Link>
      <Link href="#"><p className='footer-list-item'>Urology</p></Link>
    </div>
  )
}

export default FooterCol2