"use client"
import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
  

const MenuOne = () => {
    const Excellence = [
        { name: "Accident and Emergency Care", href: "https://www.manipalhospitals.com/specialities/accident-and-emergency-care/" },
        { name: "Cancer Care/Oncology", href: "https://www.manipalhospitals.com/specialities/cancer-care/" },
        { name: "Cardiology", href: "https://www.manipalhospitals.com/specialities/cardiology/" },
        { name: "Cardiothoracic Vascular Surgery", href: "https://www.manipalhospitals.com/specialities/cardiothoracic-vascular-surgery/" },
        { name: "Dialysis", href: "https://www.manipalhospitals.com/specialities/dialysis/" },
        { name: "Gastrointestinal Science", href: "https://www.manipalhospitals.com/specialities/gastrointestinal-science/" },
        { name: "Laparoscopic Surgery", href: "https://www.manipalhospitals.com/specialities/laparoscopic-surgery/" },
        { name: "Liver Transplantation Surgery", href: "https://www.manipalhospitals.com/specialities/liver-transplantation-surgery/" },
        { name: "Nephrology", href: "https://www.manipalhospitals.com/specialities/nephrology/" },
        { name: "Neurology", href: "https://www.manipalhospitals.com/specialities/neurology/" },
        { name: "Neurosurgery", href: "https://www.manipalhospitals.com/specialities/neurosurgery/" },
        { name: "Obstetrics and Gynaecology", href: "https://www.manipalhospitals.com/specialities/obstetrics-and-gynaecology/" },
        { name: "Organ Transplant", href: "https://www.manipalhospitals.com/specialities/organ-transplant/" },
        { name: "Orthopaedic Robotic Surgery", href: "https://www.manipalhospitals.com/specialities/orthopaedic-robotic-surgery/" },
        { name: "Orthopaedics", href: "https://www.manipalhospitals.com/specialities/orthopaedics/" },
        { name: "Paediatric And Child Care", href: "https://www.manipalhospitals.com/specialities/paediatric-and-child-care/" },
        { name: "Proctology", href: "https://www.manipalhospitals.com/specialities/proctology/" },
        { name: "Rheumatology", href: "https://www.manipalhospitals.com/specialities/rheumatology/" },
        { name: "Spine Care", href: "https://www.manipalhospitals.com/specialities/spine-care/" },
        { name: "Urology", href: "https://www.manipalhospitals.com/specialities/urology/" }
    ];
    const specialities = [
        { name:"Allergy and Immunology", href:""},
        { name:"Anesthesiology", href:""},
        { name:"Bariatric  Surgery", href:""},
        { name:"Bone Marrow Transplantation", href:""},
        { name:"Children’s  Airway  Swallowing Centre", href:""},
        { name:"Clinical  Psychology", href:""},
        { name:"Dental Medicine", href:""},
        { name:"Dermatology", href:""},
        { name:"Diabetes and Endocrinology", href:""},
        { name:"Ear Nose Throat", href:""},
        { name:"Electrophysiology", href:""},
        { name:"Fetal Medicine", href:""},
        { name:"General Medicine", href:""},
        { name:"General Surgery", href:"https://www.manipalhospitals.com/specialities/general-surgery/"},
        { name:"Genetics", href:"https://www.manipalhospitals.com/specialities/genetics/"},
        { name:"Geriatric Medicine", href:"https://www.manipalhospitals.com/specialities/geriatric-medicine/"},
        { name:"GI Surgery", href:"https://www.manipalhospitals.com/specialities/gi-surgery/"},
        { name:"Growth and Hormone", href:"https://www.manipalhospitals.com/specialities/growth-and-hormone/"},
        { name:"Gynaec Oncology", href:"https://www.manipalhospitals.com/specialities/gynaec-oncology/"},
        { name:"Hand Surgery", href:"https://www.manipalhospitals.com/specialities/hand-surgery/"},
        { name:"Hemato Oncology", href:"https://www.manipalhospitals.com/specialities/hemato-oncology/"},
        { name:"Hematology", href:"https://www.manipalhospitals.com/specialities/hematology/"},
        { name:"Hepatobiliary Surgery", href:"https://www.manipalhospitals.com/specialities/hepatobiliary-surgery/"},
        { name:"ICU and Critical Care", href:"https://www.manipalhospitals.com/specialities/icu-and-critical-care/"},
        { name:"Infectious Disease", href:"https://www.manipalhospitals.com/specialities/infectious-disease/"},
        { name:"Internal Medicine", href:"https://www.manipalhospitals.com/specialities/internal-medicine/"},
        { name:"Interventional Radiology", href:"https://www.manipalhospitals.com/specialities/interventional-radiology/"},
        { name:"IVF and Infertility", href:"https://www.manipalhospitals.com/specialities/ivf-and-infertility/"},
        { name:"Kidney Transplant", href:"https://www.manipalhospitals.com/specialities/kidney-transplant/"},
        { name:"Laboratory Medicine", href:"https://www.manipalhospitals.com/specialities/laboratory-medicine/"},
        { name:"Lactation", href:"https://www.manipalhospitals.com/specialities/lactation/"},
        { name:"Medical Gastro", href:"https://www.manipalhospitals.com/specialities/medical-gastro/"},
        { name: "Medical Oncology", href: "https://www.manipalhospitals.com/specialities/medical-oncology/" },
        { name: "Microbiology", href: "https://www.manipalhospitals.com/specialities/microbiology/" },
        { name: "Minimal Access Surgery", href: "https://www.manipalhospitals.com/specialities/minimal-access-surgery/" },
        { name: "Neonatology & NICU", href: "https://www.manipalhospitals.com/specialities/neonatology-nicu/" },
        { name: "Nuclear Medicine", href: "https://www.manipalhospitals.com/specialities/nuclear-medicine/" },
        { name: "Nutrition And Dietetics", href: "https://www.manipalhospitals.com/specialities/nutrition-and-dietetics/" },
        { name: "Ophthalmology", href: "https://www.manipalhospitals.com/specialities/ophthalmology/" },
        { name: "Oral Maxillo Facial Surgery", href: "https://www.manipalhospitals.com/specialities/oral-maxillo-facial-surgery/" },
        { name: "Paediatric Cancer Care", href: "https://www.manipalhospitals.com/specialities/paediatric-cancer-care/" },
        { name: "Paediatric Cardiology", href: "https://www.manipalhospitals.com/specialities/paediatric-cardiology/" },
        { name: "Paediatric Endocrinology", href: "https://www.manipalhospitals.com/specialities/pediatric-endocrinology/" },
        { name: "Paediatric General Surgery", href: "https://www.manipalhospitals.com/specialities/paediatric-general-surgery/" },
        { name: "Paediatric Infectious Disease", href: "https://www.manipalhospitals.com/specialities/paediatric-infectious-disease/" },
        { name: "Paediatric Intensive Care Unit", href: "https://www.manipalhospitals.com/specialities/paediatric-intensive-care-unit/" },
        { name: "Paediatric Neurology", href: "https://www.manipalhospitals.com/specialities/paediatric-neurology/" },
        { name: "Paediatric Surgery", href: "https://www.manipalhospitals.com/specialities/paediatric-surgery/" },
        { name: "Paediatric Urology", href: "https://www.manipalhospitals.com/specialities/paediatric-urology/" },
        { name: "Pain Medicine", href: "https://www.manipalhospitals.com/specialities/pain-medicine/" },
        { name: "Parkinson Disease and Movement Disorder", href: "https://www.manipalhospitals.com/specialities/parkinson-disease-and-movement-disorder/" },
        { name: "Pathology", href: "https://www.manipalhospitals.com/specialities/pathology/" },
        { name: "Pediatric Bone Marrow Transplant", href: "https://www.manipalhospitals.com/specialities/pediatric-bone-marrow-transplant/" },
        { name: "Pharmacy", href: "https://www.manipalhospitals.com/specialities/pharmacy/" },
        { name: "Physical Medicine and Rehabilitation", href: "https://www.manipalhospitals.com/specialities/physical-medicine-and-rehabilitation/" },
        { name: "Physiotherapy", href: "https://www.manipalhospitals.com/specialities/physiotherapy/" },
        { name: "Plastic And Cosmetic Surgery", href: "https://www.manipalhospitals.com/specialities/plastic-and-cosmetic-surgery/" },
        { name: "Podiatric Surgery", href: "https://www.manipalhospitals.com/specialities/podiatric-surgery/" },
        { name: "Psychiatry", href: "https://www.manipalhospitals.com/specialities/psychiatry/" },
        { name: "Psychology", href: "https://www.manipalhospitals.com/specialities/psychology/" },
        { name: "Pulmonology(Respiratory and Sleep Medicine)", href: "https://www.manipalhospitals.com/specialities/pulmonology-respiratory-sleep-medicine/" },
        { name: "Radiology", href: "https://www.manipalhospitals.com/specialities/radiology/" },
        { name: "Radiotherapy(Oncology Radiation)", href: "https://www.manipalhospitals.com/specialities/radiotherapy-oncology-radiation/" },
        { name: "Rehabilitation Medicine", href: "https://www.manipalhospitals.com/specialities/rehabilitation-medicine/" },
        { name: "Renal Sciences", href: "https://www.manipalhospitals.com/specialities/renal-sciences/" },
        { name: "Reproductive Medicine", href: "https://www.manipalhospitals.com/specialities/reproductive-medicine/" },
        { name: "Robotic Assisted Surgery", href: "https://www.manipalhospitals.com/specialities/robotic-assisted-surgery/" },
        { name: "Senior Care Program", href: "https://www.manipalhospitals.com/specialities/senior-care-program/" },
        { name: "Sports Medicine", href: "https://www.manipalhospitals.com/specialities/sports-medicine/" },
        { name: "Surgical Gastro", href: "https://www.manipalhospitals.com/specialities/surgical-gastro/" },
        { name: "Surgical Oncology", href: "https://www.manipalhospitals.com/specialities/surgical-oncology/" },
        { name: "Thoracic Surgery", href: "https://www.manipalhospitals.com/specialities/thoracic-surgery/" },
        { name: "Transfusion Medicine", href: "https://www.manipalhospitals.com/specialities/transfusion-medicine/" },
        { name: "Trauma Care", href: "https://www.manipalhospitals.com/specialities/trauma-care/" },
        { name: "Vascular and Endovascular Surgery", href: "https://www.manipalhospitals.com/specialities/vascular-surgery/" }
    ]; 
    const clinics = [
        { name: "Autism Clinic", href: "https://www.manipalhospitals.com/specialities/autism-clinic/" },
        { name: "Epilepsy Clinic", href: "https://www.manipalhospitals.com/specialities/epilepsy-clinic/" },
        { name: "Cystic Fibrosis Clinic", href: "https://www.manipalhospitals.com/specialities/cystic-fibrosis-clinic/" },
        { name: "Fibroid Clinic", href: "https://www.manipalhospitals.com/specialities/fibroid-clinic/" },
        { name: "Hair Transplantation Clinic", href: "https://www.manipalhospitals.com/specialities/hair-transplantation-clinic/" },
        { name: "Healthy Weight Clinic", href: "https://www.manipalhospitals.com/specialities/healthy-weight-clinic/" },
        { name: "Heart Care Clinic", href: "https://www.manipalhospitals.com/specialities/heart-care-clinic/" },
        { name: "Lifestyle Clinic", href: "https://www.manipalhospitals.com/specialities/lifestyle-clinic/" },
        { name: "Liver Clinic", href: "https://www.manipalhospitals.com/specialities/liver-clinic/" },
        { name: "Lymphedema Clinic", href: "https://www.manipalhospitals.com/specialities/lymphedema-clinic/" },
        { name: "Neuromuscular Clinic", href: "https://www.manipalhospitals.com/specialities/neuromuscular-clinic/" }
      ];      
    return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem className='my-2'>
                <NavigationMenuTrigger className='bg-transparent h-[30px] text-[#fff] text-[13px] font-semibold px-2'>Centre of Excellence</NavigationMenuTrigger>
                <NavigationMenuContent className='pt-2'>
                    <ul className="grid gap-6 p-6 md:w-[600px] lg:w-[850px] xl:w-[1100px] grid-cols-[1fr_1fr_1fr]">
                        <li className="row-span-3">
                            <p className='text-[13px] font-semibold text-slate-600 mb-2 px-3'>Centre of Excellence</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {Excellence.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-item w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>
                                            <Link href="#" legacyBehavior passHref>
                                                <p className='hover:translate-x-4 duration-700'>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="row-span-3">
                            <p className='text-[13px] font-semibold text-slate-600 mb-2 px-3'>Other Specialities</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {specialities.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-item w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>
                                            <Link href="#" legacyBehavior passHref>
                                                <p className='hover:translate-x-4 duration-700'>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="row-span-3">
                            <p className='text-[13px] font-semibold text-slate-600 mb-2 px-3'>Speciality Clinics</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {clinics.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-item w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>
                                            <Link href="#" legacyBehavior passHref>
                                                <p className='hover:translate-x-4 duration-700'>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className='bg-transparent h-[30px] text-[#fff] text-[13px] font-semibold px-2'>
                        Doctors
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent h-[30px] text-[#fff] text-[13px] font-semibold px-2'>Hospitals</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className='bg-transparent h-[30px] text-[#fff] text-[13px] font-semibold px-2'>
                        International Patients
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuOne

