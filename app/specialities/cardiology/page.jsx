import React from 'react'
import Image from 'next/image'
import bannerImage from '@/public/images/cardiology-treatment-hospital-in-bangalore.webp'
import speciality_icon from '@/public/images/Cardiology_white.png'
import speciality_img_1 from '@/public/images/cardiology-treatment-in-bangalore.webp'
import speciality_img_2 from '@/public/images/cardiology-hospital-in-bangalore.webp'
import SpecialityCarouselOne from '@/components/specialityCarouselOne'
import DoctorsCard from '@/components/doctorsCard'
const Cardiology = () => {
  return (
    <div class="block w-full max-w-[1660px]"> 
        <Image src={bannerImage} 
            alt="Manipal Hospitals" 
            className='min-w-[100%] h-auto'
            layout="responsive"
            placeholder="blur"
            blurDataURL="../public/images/cardiology-treatment-hospital-in-bangalore.webp"
        />
        <div className='relative w-full bg-[#00b7ac] pb-[50px]'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4 item-center md:items-start justify-center py-[20px] px-[20px] lg:px-[40px] xl:px-[80px] absolute w-[95vw] lg:w-[80vw] h-auto md:h-[250px] bg-white rounded-lg left-0 right-0 ml-auto mr-auto -top-[2%] sm:-top-[5%] md:-top-[10%]'>
                <div className='bg-primary aspect-square w-[100px] md:w-[150px] rounded-lg flex items-center justify-center'>
                  <div className='w-[70px] aspect-square'>
                    <Image src={speciality_icon} 
                        alt="Manipal Hospitals" 
                        className='w-[20px] h-auto'
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL="../public/images/Cardiology_white.webp"
                    />
                  </div>
                </div>
                <div className='flex-grow w-full'>
                    <p className='text-[#00b7ac] text-[32px] font-bold'>Cardiology</p>
                    <p className='text-black text-[22px] font-bold py-4'>Best Heart Hospital in Bangalore | Cardiology</p>
                    <p className='text-[16px] text-slate-600 leading-7'>In matters of the heart, ours is one of the largest cardiac speciality centres of excellence in India offering comprehensive heart care, diagnostics and treatment including minimal invasive procedures under one roof.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 pt-[500px] sm:pt-[320px] md:pt-[220px] lg:pt-[280px] px-[20px] md:px-[60px] lg:px-[40px] xl:px-[100px]'>
              <div className='relative'>
                <div className='sm:w-[300px] md:w-[420px]'>
                  <Image src={speciality_img_1} 
                      alt="Manipal Hospitals" 
                      className='min-w-[100%] h-auto'
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL="../public/images/cardiology-treatment-in-bangalore.webp"
                  />
                </div>
                <div className='absolute bg-primary w-[150px] rounded-md -top-[5%] -left-[5%] px-4 md:px-6 py-4'>
                  <p className='text-[16px] text-white font-serif'>OUR STORY</p>
                  <p className='text-white text-[20px] font-bold leading-6 mt-2'>Know About Us</p>
                </div>
              </div>
              <div>
                <p className='text-white font-bold text-[28px] py-4'>Why Manipal?</p>
                <p className='text-white text-[16px] leading-7'>Our superlative cardiac experts handle the most delicate of cardiac cases across all ages. Their range of treatment expertise includes the entire spectrum of cardiac conditions including congenital heart disease, coronary artery disease, heart rhythm disorders, disorders of heart failure, and valvular disease. Best in their speciality, our team of eminent echo cardiologists, electrophysiologists, interventional cardiologists, radiologists and cardiovascular surgeons are skilled in treating the most challenging of heart conditions including paediatric surgeries even in the newborn. </p>
              </div>
            </div>
        </div>
        <div className='w-full py-[60px] px-[20px] md:px-[60px] lg:px-[50px] xl:px-[100px]'>
          <p className='text-[#00b7ac] text-[30px] font-bold pb-[10px]'>Treatment & Procedures</p>
          <SpecialityCarouselOne />
          <div className='flex flex-col-reverse lg:flex-row gap-[40px] xl:gap-[80px] items-start justify-between pt-[40px] md:pt-[70px] xl:pt-[100px]'>
            <div>
              <p className=' text-[25px] font-medium pb-[10px] text-slate-700'>Manipal Hospitals offers a wide range of services in cardiology</p>
              <p className='text-sm text-slate-500 leading-8 md:leading-10'>The Adult cardiology treatments and services include Coronary angiogram and angioplasty (radial and femoral), Emergency Percutaneous Coronary Intervention (PCI), Complex coronary interventions (Left main, bifurcation, chronic total occlusion, rotaablation), Coronary lesion physiological assessment and imaging (FFR, IVUS, OCT), Electrophysiological Radio Ablation including 3D ablation, Structural heart disease intervention including Transaortic valve implantation, Left Atrial Appendage closures, Balloon Mitral Valvotomy, Balloon pulmonary valvotomy, Adult congenital heart disease interventions including atrial septal defect closure, ventricular septal defect closure, PDA device closures, pulmonary AVM closures, Peripheral angiogram and angioplasty and cardiac device implantation including pacemaker, ICD implantation and CRT implantation. The Paediatric Cardiology treatments and services include</p>
            </div>
            <div className='md:w-[70vw] lg:min-w-[350px] xl:min-w-[450px] h-auto'>
              <Image src={speciality_img_2} 
                  alt="Manipal Hospitals" 
                  className='w-full h-auto'
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="../public/images/cardiology-hospital-in-bangalore.webp"
                />
            </div>
          </div>
          <ul className="list-disc text-sm leading-8 md:leading-10 text-slate-500">
            <li>Fetal Echocardiogram</li>
            <li>Balloon Dilatation of Stenotic Valve in Neonates</li>
            <li>Hemodynamic evaluation of Complex Congenital Heart Diseases</li>
            <li>Counselling following a diagnosis of congenital heart defects in Neonates</li>
            <li>Infants and children</li>
            <li>Device closure of abnormal communication such as Patent Ductus Arteriosus (PDA)</li>
            <li>Device closure of Septal Defects such as Ventricular Septal Defects (VSD) and Atrial Septal Defects (ASD)</li>
          </ul>
        </div>
        <div className='grid grid-cols-4 w-full'>
        {Array.from({ length: 5 }).map((_, index) => (<DoctorsCard  key=""/>))}
        </div>
    </div>
  )
}

export default Cardiology