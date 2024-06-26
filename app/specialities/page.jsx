"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import bannerImage from '@/public/images/specilaity-banner-image_1678361627.webp'
import Accident_Icon12 from '@/public/images/Accident_Icon12.png'
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'
const TheHealthHaven = dynamic(()=>import('@/components/theHealthHaven'))
import dynamic from 'next/dynamic'

const Specialities = () => {
  const [otherSpecialities, setOtherSpecialities] = useState(false)
  const[clinicListView, setClinicListView] = useState(false)
  const specialitieList = [
      {
        name: "Accident and Emergency Care",
        image: "Accident_Icon12.png",
        link: "/specialities/accident-and-emergency-care/"
      },
      {
        name: "Cancer Care/Oncology",
        image: "cancer-care-treatment11677058355_1677217054.webp",
        link: "/specialities/cancer-care/"
      },
      {
        name: "Cardiology",
        image: "Cardiology-Bangalore_1677236321.webp",
        link: "/specialities/cardiology/"
      },
      {
        name: "Cardiothoracic Vascular Surgery",
        image: "Icon_Blue1.png",
        link: "/specialities/cardiothoracic-vascular-surgery/"
      },
      {
        name: "Dialysis",
        image: "COE-Icons_Renal_Sciences_-_Color11.webp",
        link: "/specialities/dialysis/"
      },
      {
        name: "Gastrointestinal Science",
        image: "Icon_Blue2.png",
        link: "/specialities/gastrointestinal-science/"
      },
      {
        name: "Laparoscopic Surgery",
        image: "Icon_Blue3.png",
        link: "/specialities/laparoscopic-surgery/"
      },
      {
        name: "Liver Transplantation Surgery",
        image: "liver_transplant_blue.png",
        link: "/specialities/liver-transplantation-surgery/"
      },
      {
        name: "Nephrology",
        image: "COE-Icons_Renal_Sciences_-_Color1.png",
        link: "/specialities/nephrology/"
      },
      {
        name: "Neurology",
        image: "Icon_Blue6.png",
        link: "/specialities/neurology/"
      },
      {
        name: "Neurosurgery",
        image: "Neurosurgery_blue.png",
        link: "/specialities/neurosurgery/"
      },
      {
        name: "Obstetrics and Gynaecology",
        image: "Icon_Blue8.png",
        link: "/specialities/obstetrics-and-gynaecology/"
      },
      {
        name: "Organ Transplant",
        image: "organ_blue.png",
        link: "/specialities/organ-transplant/"
      },
      {
        name: "Orthopaedic Robotic Surgery",
        image: "Icon_Blue101.webp",
        link: "/specialities/orthopaedic-robotic-surgery/"
      },
      {
        name: "Orthopaedics",
        image: "Icon_Blue10.png",
        link: "/specialities/orthopaedics/"
      },
      {
        name: "Paediatric and Child Care",
        image: "specialty-color-icon-bangalore.webp",
        link: "/specialities/paediatric-and-child-care/"
      },
      {
        name: "Proctology",
        image: "COE-Icons_General_Medicine_-_Color11.webp",
        link: "/specialities/proctology/"
      },
      {
        name: "Rheumatology",
        image: "COE-Icons_Sports_Medicine_-_Color.png",
        link: "/specialities/rheumatology/"
      },
      {
        name: "Spine Care",
        image: "spine_care.png",
        link: "/specialities/spine-care/"
      },
      {
        name: "Urology",
        image: "urology1.png",
        link: "/specialities/urology/"
      },
  ]
  const resultotherList = [
    {
      name: "Allergy and Immunology",
      image: "allergy-treatment-hospital.png",
      link: "/specialities/allergy-and-immunology/"
    },
    {
      name: "Anesthesiology Department",
      image: "COE-Icons_Anesthesiology_-_Color.png",
      link: "/specialities/anesthesiology/"
    },
    {
      name: "Bariatric Surgery | Weight loss surgery",
      image: "COE-Icons_bariatric_surgery_-_Color.png",
      link: "/specialities/bariatric-surgery/"
    },
    {
      name: "Bone Marrow Transplantation",
      image: "COE-Icons_bone_marrow_-_Color.png",
      link: "/specialities/bone-marrow-transplantation/"
    },
    {
      name: "Children’s Airway & Swallowing Centre",
      image: "specialty-color-icon3.png",
      link: "/specialities/childrens-airway-swallowing-centre/"
    },
    {
      name: "Clinical Psychology",
      image: "Icon_Blue14.png",
      link: "/specialities/clinical-psychology/"
    },
    {
      name: "Dental Medicine",
      image: "COE-Icons_Dental_Medicine_-_Color.png",
      link: "/specialities/dental-medicine/"
    },
    {
      name: "Dermatology",
      image: "COE-Icons_Dermatology_-_Color.png",
      link: "/specialities/dermatology/"
    },
    {
      name: "Diabetes and Endocrinology",
      image: "COE-Icons_Diabetes_Endocrinology_-_Color.png",
      link: "/specialities/diabetes-and-endocrinology/"
    },
    {
      name: "Ear Nose Throat",
      image: "COE-Icons_ENT_-_Color.png",
      link: "/specialities/ear-nose-throat/"
    },
    {
      name: "Electrophysiology",
      image: "Cardiology_blue1.png",
      link: "/specialities/electrophysiology/"
    },
    {
      name: "Fetal Medicine",
      image: "COE-Icons_Fetal_Medicine_-_Color.png",
      link: "/specialities/fetal-medicine/"
    },
    {
      name: "General Medicine",
      image: "COE-Icons_General_Medicine_-_Color.png",
      link: "/specialities/general-medicine/"
    },
    {
      name: "General Surgery",
      image: "COE-Icons_General_Medicine_-_Color1.png",
      link: "/specialities/general-surgery/"
    },
    {
      name: "Genetics",
      image: "COE-Icons_Genetics_-_Color.png",
      link: "/specialities/genetics/"
    },
    {
      name: "Geriatric Medicine",
      image: "geriatrics.png",
      link: "/specialities/geriatric-medicine/"
    },
    {
      name: "GI Surgery",
      image: "gi-surgery-in-bangalore.png",
      link: "/specialities/gi-surgery/"
    },
    {
      name: "Growth and Hormone",
      image: "COE-Icons_Growth___Hormone_-_Color.png",
      link: "/specialities/growth-and-hormone/"
    },
    {
      name: "Gynaec Oncology",
      image: "cancer-care-treatment.png",
      link: "/specialities/gynaec-oncology/"
    },
    {
      name: "Hand Surgery",
      image: "COE-Icons_Hand_Surgery_-_Color.png",
      link: "/specialities/hand-surgery/"
    },
    {
      name: "Hemato Oncology",
      image: "COE-Icons_Hemato_Oncology_-_Color.png",
      link: "/specialities/hemato-oncology/"
    },
    {
      name: "Hematology",
      image: "COE-Icons_Hematology_-_Color.png",
      link: "/specialities/hematology/"
    },
    {
      name: "Hepatobiliary Surgery",
      image: "COE-Icons_Hepatobiliary_Surgery_-_Color.png",
      link: "/specialities/hepatobiliary-surgery/"
    },
    {
      name: "ICU and Critical Care",
      image: "COE-Icons_ICU_-_Color.png",
      link: "/specialities/icu-and-critical-care/"
    },
    {
      name: "Infectious Disease",
      image: "COE-Icons_Infectious_Disease_-_Color.png",
      link: "/specialities/infectious-disease/"
    },
    {
      name: "Internal Medicine",
      image: "COE-Icons_Internal_Medicine_-_Color.png",
      link: "/specialities/internal-medicine/"
    },
    {
      name: "Interventional Radiology",
      image: "specialty-color-icon2.png",
      link: "/specialities/interventional-radiology/"
    },
    {
      name: "IVF and Infertility",
      image: "COE-Icons_Infertility_-_Blue.png",
      link: "/specialities/ivf-and-infertility/"
    },
    {
      name: "Kidney Transplant",
      image: "kidney-transplant.png",
      link: "/specialities/kidney-transplant/"
    },
    {
      name: "Laboratory Medicine",
      image: "COE-Icons_Laboratory_Medicine_-_Color.png",
      link: "/specialities/laboratory-medicine/"
    },
    {
      name: "Lactation",
      image: "specialty_color_icon.png",
      link: "/specialities/lactation/"
    },
    {
      name: "Medical Gastro",
      image: "medical-gastro.png",
      link: "/specialities/medical-gastro/"
    },
    {
      name: "Medical Oncology",
      image: "medical-oncology.png",
      link: "/specialities/medical-oncology/"
    },
    {
      name: "Microbiology",
      image: "Microbiology.png",
      link: "/specialities/microbiology/"
    },
    {
      name: "Minimal Access Surgery",
      image: "Icon_Blue31.png",
      link: "/specialities/minimal-access-surgery/"
    },
    {
      name: "Neonatology & NICU",
      image: "COE-Icons_Neonatology_-_Blue.png",
      link: "/specialities/neonatology-nicu/"
    },
    {
      name: "Nuclear Medicine",
      image: "COE-Icons_Nuclear_Medicine_-_Color.png",
      link: "/specialities/nuclear-medicine/"
    },
    {
      name: "Nutrition And Dietetics",
      image: "COE-Icons_Nutrition_And_Dietetics_-_Color.png",
      link: "/specialities/nutrition-and-dietetics/"
    },
    {
      name: "Ophthalmology",
      image: "COE-Icons_Ophthalmology_-_Color.png",
      link: "/specialities/ophthalmology/"
    },
    {
      name: "Oral Maxillo Facial Surgery",
      image: "COE-Icons_Dental_Medicine_-_Color1.webp",
      link: "/specialities/oral-maxillo-facial-surgery/"
    },
    {
      name: "Paediatric Cancer Care",
      image: "specialty-color-icon3_1684322171_(1).webp",
      link: "/specialities/paediatric-cancer-care/"
    },
    {
      name: "Paediatric Cardiology",
      image: "pediatric-cardiology-hospital-in-bangalore.webp",
      link: "/specialities/paediatric-cardiology/"
    },
    {
      name: "Paediatric Endocrinology",
      image: "Pediatric_endocrinology_color_icon.png",
      link: "/specialities/pediatric-endocrinology/"
    },
    {
      name: "Paediatric General Surgery",
      image: "Icon_blue_(1).png",
      link: "/specialities/paediatric-general-surgery/"
    },
    {
      name: "Paediatric Infectious Disease",
      image: "specialty-color-icon3_1684322171.webp",
      link: "/specialities/paediatric-infectious-disease/"
    },
    {
      name: "Paediatric Intensive Care Unit",
      image: "Iconblue1_1677670621.webp",
      link: "/specialities/paediatric-intensive-care-unit/"
    },
    {
      name: "Paediatric Neurology",
      image: "specialty-color-icon3_1684322171_(1)1.webp",
      link: "/specialities/paediatric-neurology/"
    },
    {
      name: "Paediatric Surgery",
      image: "Icon-blue_1682328301.webp",
      link: "/specialities/paediatric-surgery/"
    },
    {
      name: "Paediatric Urology",
      image: "paediatric-urology.png",
      link: "/specialities/paediatric-urology/"
    },
    {
      name: "Pain Medicine",
      image: "COE-Icons_Pain_Medicine_-_Color.png",
      link: "/specialities/pain-medicine/"
    },
    {
      name: "Parkinson Disease and Movement Disorder",
      image: "Icon_Blue6_(1).png",
      link: "/specialities/parkinson-disease-and-movement-disorder/"
    },
    {
      name: "Pathology",
      image: "pathology_blue.png",
      link: "/specialities/pathology/"
    },
    {
      name: "Pediatric Bone Marrow Transplant",
      image: "pediatrc-bone-marrow-transplant-bangalore.webp",
      link: "/specialities/pediatric-bone-marrow-transplant/"
    },
    {
      name: "Pharmacy",
      image: "COE-Icons_Pharmacy_-_Color.png",
      link: "/specialities/pharmacy/"
    },
    {
      name: "Physical Medicine and Rehabilitation",
      image: "best-phyio-therapy-and-rehabilation-centre-in-bangalore.webp",
      link: "/specialities/physical-medicine-and-rehabilitation/"
    },
    {
      name: "Physiotherapy",
      image: "COE-Icons_Rehabilitation_Medicine_-_Color.png",
      link: "/specialities/physiotherapy/"
    },
    {
      name: "Plastic And Cosmetic Surgery",
      image: "COE-Icons_Cosmetic_Surgery_-_Blue.png",
      link: "/specialities/plastic-and-cosmetic-surgery/"
    },
    {
      name: "Podiatric Surgery",
      image: "podiatric.png",
      link: "/specialities/podiatric-surgery/"
    },
    {
      name: "Psychiatry",
      image: "COE-Icons_Psychiatry_-_Color.png",
      link: "/specialities/psychiatry/"
    },
    {
      name: "Psychology",
      image: "COE-Icons_Psychology_-_Color.png",
      link: "/specialities/psychology/"
    },
    {
      name: "Pulmonology (Respiratory and Sleep Medicine)",
      image: "COE-Icons_Pulmonology_Respiratory_Sleep_Medicine_-_Color.png",
      link: "/specialities/pulmonology-respiratory-sleep-medicine/"
    },
    {
      name: "Radiology",
      image: "COE-Icons_Radiology_-_Color.png",
      link: "/specialities/radiology/"
    },
    {
      name: "Radiotherapy (Oncology Radiation)",
      image: "Radiotherapy.png",
      link: "/specialities/radiotherapy-oncology-radiation/"
    },
    {
      name: "Rehabilitation Medicine",
      image: "COE-Icons_Rehabilitation_Medicine_-_Color1.png",
      link: "/specialities/rehabilitation-medicine/"
    },
    {
      name: "Renal Sciences",
      image: "COE-Icons_Renal_Sciences_-_Color.png",
      link: "/specialities/renal-sciences/"
    },
    {
      name: "Reproductive Medicine",
      image: "COE-Icons_Reproductive_-_Color.png",
      link: "/specialities/reproductive-medicine/"
    },
    {
      name: "Robotic Assisted Surgery",
      image: "COE-Icons_Robotic_Assisted_Surgery_-_Color.png",
      link: "/specialities/robotic-assisted-surgery/"
    },
    {
      name: "Senior Care Program",
      image: "geriatrics1.webp",
      link: "/specialities/senior-care-program/"
    },
    {
      name: "Sports Medicine",
      image: "COE-Icons_Sports_Medicine_-_Color1.png",
      link: "/specialities/sports-medicine/"
    },
    {
      name: "Surgical Gastro",
      image: "medical-gastro1.png",
      link: "/specialities/surgical-gastro/"
    },
    {
      name: "Surgical Oncology",
      image: "cancer-care-treatment1.png",
      link: "/specialities/surgical-oncology/"
    },
    {
      name: "Thoracic Surgery",
      image: "Speciality_Color_Icon1.webp",
      link: "/specialities/thoracic-surgery/"
    },
    {
      name: "Transfusion Medicine",
      image: "COE-Icons_Hematology_-_Color1.png",
      link: "/specialities/transfusion-medicine/"
    },
    {
      name: "Trauma Care",
      image: "COE-Icons_ICU_-_Color1.webp",
      link: "/specialities/trauma-care/"
    },
    {
      name: "Vascular and Endovascular Surgery",
      image: "COE-Icons_Vascular_Surgery_-_Color1.png",
      link: "/specialities/vascular-surgery/"
    }                  
    // {name : "" , image:, "", link:"#"},
  ]
  const clinicList = [
    {
      name: "Autism Clinic",
      image: "Iconblue1_16776706211.webp",
      link: "/specialities/autism-clinic/"
    },
    {
      name: "Cystic Fibrosis Clinic",
      image: "COE-Icons_Fibrosis_-_Color.webp",
      link: "/specialities/cystic-fibrosis-clinic/"
    },
    {
      name: "Epilepsy Clinic",
      image: "Icon_Blue61.webp",
      link: "/specialities/epilepsy-clinic/"
    },
    {
      name: "Fibroid Clinic",
      image: "book-your-video-doctor-consultations-online-today-manipal-hospitals-desktop-new.webp",
      link: "/specialities/fibroid-clinic/"
    },
    {
      name: "Hair Transplantation Clinic",
      image: "COE-Icons_Dermatology_-_Color1.webp",
      link: "/specialities/hair-transplantation-clinic/"
    },
    {
      name: "Healthy Weight Clinic",
      image: "medical-gastro2.webp",
      link: "/specialities/healthy-weight-clinic/"
    },
    {
      name: "Heart Care Clinic",
      image: "Cardiology_color_icon.png",
      link: "/specialities/heart-care-clinic/"
    },
    {
      name: "Lifestyle Clinic",
      image: "Color_icon1.png",
      link: "/specialities/lifestyle-clinic/"
    },
    {
      name: "Liver Clinic",
      image: "Live_color.png",
      link: "/specialities/liver-clinic/"
    },
    {
      name: "Lymphedema Clinic",
      image: "COE-Icons_Cosmetic_Surgery_-_Blue1.webp",
      link: "/specialities/lymphedema-clinic/"
    },
    {
      name: "Neuromuscular Clinic",
      image: "Icon_Blue62.webp",
      link: "/specialities/neuromuscular-clinic/"
    }
  ]
  const [speciality, setSpeciality] = useState(specialitieList)
  const [other, setOther] = useState(resultotherList)
  const [clinic, setClinic] = useState(clinicList)
  const handleSearch = (searchTerm) => {
    const filteredList1 = specialitieList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("filteredList1",filteredList1)
    setSpeciality(filteredList1);

    const filteredList2 = resultotherList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("filteredList2",filteredList2)
    setOther(filteredList2);

    const filteredList3 = clinicList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("filteredList3",filteredList3)
    setClinic(filteredList3);
    if(searchTerm.length > 0){
      setOtherSpecialities(true)
      setClinicListView(true)
    }
    else{
      setOtherSpecialities(false)
      setClinicListView(false)
    }
  };
  return (
    <div class="block w-full max-w-[1660px]"> 
      <Image src={bannerImage} 
        alt="Manipal Hospitals" 
        className='min-w-[100%] h-auto'
        layout="responsive"
        placeholder="blur"
        blurDataURL="../public/images/specilaity-banner-image_1678361627.webp"
      />
      <div className='w-auto py-20 md:px-[140px] bg-[#00b7ac] flex flex-col items-center gap-10'>
        <Input className='h-12 shadow-xl border-[#00b7ac] w-[1070px] max-w-[90vw]' placeholder='Search Speciality' onChange={(e) => handleSearch(e.target.value)} />   
        <div className='w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {speciality.map((item,index)=>(
            <div key={index} className='bg-white p-2 m-2 max-w-[200px] shadow-md aspect-square rounded flex flex-col items-center justify-center gap-2'>
            <Image src={`/images/${item.image}`} 
                alt="Manipal Hospitals" 
                className='max-w-[70px] h-auto'
                layout="responsive"
                width={30}
                height={30}
            />
            <p className='text-md font-medium text-slate-500 text-center'>{item.name}</p>
          </div>
          ))}
          {!otherSpecialities && <div className='bg-primary text-white p-2 m-2 max-w-[200px] shadow-md aspect-square rounded flex flex-col items-center justify-center gap-0'>
            <Button className='text-md font-medium text-white text-center p-0 h-fit' onClick={()=>setOtherSpecialities(true)}>Other Specialities</Button>
            <Button className='text-md font-medium text-white text-center p-0 h-fit' onClick={()=>setOtherSpecialities(true)}><ArrowRight className='text-white' /></Button>
          </div>}
          {otherSpecialities && other.map((item,index)=>(
            <div key={index} className='bg-white p-2 m-2 max-w-[200px] shadow-md aspect-square rounded flex flex-col items-center justify-center gap-2'>
            <Image src={`/images/${item.image}`} 
                alt="Manipal Hospitals" 
                className='max-w-[70px] h-auto'
                layout="responsive"
                width={30}
                height={30}
            />
            <p className='text-md font-medium text-slate-500 text-center'>{item.name}</p>
          </div>
          ))}
          {!clinicListView && <div className='bg-primary text-white p-2 m-2 max-w-[200px] shadow-md aspect-square rounded flex flex-col items-center justify-center gap-0'>
            <Button className='text-md font-medium text-white text-center p-0 h-fit' onClick={()=>setClinicListView(true)}>Speciality Clinics</Button>
            <Button className='text-md font-medium text-white text-center p-0 h-fit' onClick={()=>setClinicListView(true)}><ArrowRight className='text-white' /></Button>
          </div>}
          {clinicListView && clinic.map((item,index)=>(
            <div key={index} className='bg-white p-2 m-2 max-w-[200px] shadow-md aspect-square rounded flex flex-col items-center justify-center gap-2'>
            <Image src={`/images/${item.image}`} 
                alt="Manipal Hospitals" 
                className='max-w-[70px] h-auto'
                layout="responsive"
                width={30}
                height={30}
            />
            <p className='text-md font-medium text-slate-500 text-center'>{item.name}</p>
          </div>
          ))}
        </div>
      </div>
      <div className='w-[1300px] max-w-[90vw] mx-auto'>
        <TheHealthHaven />
      </div>
    </div>
  )
}

export default Specialities