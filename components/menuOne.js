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

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react" 
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion" 

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
    <>
    <NavigationMenu className='max-[767px]:hidden'>
        <NavigationMenuList>
            <NavigationMenuItem className='my-2'>
                <NavigationMenuTrigger className='bg-transparent h-[30px] text-[#fff] menu-li font-semibold'>
                    Centre of Excellence
                    <ChevronDown className="chevronDown relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className='pt-2 flex'>
                    <ul className="hospitals-menu-card grid gap-6 p-6 grid-cols-[1fr_1fr_1fr]">
                        <li className="row-span-3">
                            <p className='menu-li font-semibold text-slate-600 mb-2 px-3'>Centre of Excellence</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {Excellence.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-li w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 font-medium text-slate-500 hover:text-primary'>
                                            <Link href="#" legacyBehavior passHref>
                                                <p className='hover:translate-x-4 duration-700'>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="row-span-3">
                            <p className='menu-li font-semibold text-slate-600 mb-2 px-3'>Other Specialities</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {specialities.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-li w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 font-medium text-slate-500 hover:text-primary'>
                                            <Link href="#" legacyBehavior passHref>
                                                <p className='hover:translate-x-4 duration-700'>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="row-span-3">
                            <p className='menu-li font-semibold text-slate-600 mb-2 px-3'>Speciality Clinics</p>
                            <ul className='py-2 w-full h-[60vh] overflow-y-scroll overflow-x-hidden px-3'>
                                {clinics.map((item)=>{
                                    return(
                                        <li key={item.name} className='menu-li w-[90%] px-[2px] py-[8px] border-b-[1px] border-b-slate-400/60 font-medium text-slate-500 hover:text-primary'>
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
        </NavigationMenuList>
    </NavigationMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true} className='max-[767px]:hidden'>
        <Button variant="transperant" className='btn-hospitals bg-transparent text-[#fff] h-[30px] menu-li font-semibold px-2 border-none hover:bg-[#fff] hover:text-primary rounded border-b-[1px] border-b-slate-400/60  max-[576px]:bg-slate-400'>
            Hospitals
            <ChevronDown className="chevronDown relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>
                    <span >Bengaluru</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent className='py-2 px-4 ml-2'>
                        <span className='menu-li font-medium text-primary'>Bengaluru</span>
                        <div className='grid grid-col-1 md:grid-cols-2 gap-2 mt-2'>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Doddaballapur</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Hebbal</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Jayanagar</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Malleshwaram</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Millers Road</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Old Airport Road</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Sarjapur Road</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Varthur Road</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item min-w-[150px] pt-0'>
                                <span>Whitefield</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item min-w-[150px] pt-0'>
                                <span>Yeshwanthpur</span>
                            </DropdownMenuItem>
                        </div>
                        <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mt-4 gap-4'>
                            <div className='border-[1px] border-primary rounded-sm p-2'>
                                <DropdownMenuItem className='sub-menu-item p-[2px]'>
                                    <span>Clinic</span>
                                </DropdownMenuItem>
                            </div>
                            <div className='flex flex-row items-center justify-end gap-0 border-[1px] border-primary rounded-sm p-2'>
                                <DropdownMenuItem className='sub-menu-item p-[4px] border-r-[1px] border-primary text-xs'>
                                    <span>Begur</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='sub-menu-item p-[4px] border-r-[1px] border-primary text-xs'>
                                    <span>Brookefield</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='sub-menu-item p-[4px] border-r-[1px] border-primary text-xs'>
                                    <span>Budigere</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='sub-menu-item p-[4px] border-r-[1px] border-primary text-xs'>
                                    <span>Jayanagar</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='sub-menu-item p-[4px] text-xs'>
                                    <span>Sarjapur</span>
                                </DropdownMenuItem>
                            </div>
                        </div>
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Bhubaneswar</DropdownMenuItem>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>
                    <span >Delhi - NCR</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent className='py-2 px-4 ml-2'>
                        <span className='menu-li font-medium text-primary'>Delhi - NCR</span>
                        <div className='grid grid-cols-1 gap-2 mt-2'>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Delhi</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Ghaziabad</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item min-w-[150px] pt-0'>
                                <span>Gurugram</span>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Goa</DropdownMenuItem>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Jaipur</DropdownMenuItem>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>
                    <span >Kolkata</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                <DropdownMenuSubContent className='py-2 px-4 ml-2'>
                        <span className='menu-li font-medium text-primary'>Kolkata</span>
                        <div className='grid grid-cols-1 gap-2 mt-2'>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Broadway</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Dhakuria</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0'>
                                <span>Mukundapur</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item min-w-[150px] pt-0'>
                                <span>Salt Lake</span>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Mangaluru</DropdownMenuItem>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Mysuru</DropdownMenuItem>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Patiala</DropdownMenuItem>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>
                    <span >Pune</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent className='py-2 px-4 ml-2'>
                        <span className='menu-li font-medium text-primary'>Pune</span>
                        <div className='grid grid-cols-1 gap-2 mt-2'>
                            <DropdownMenuItem className='sub-menu-item border-b-[1px] border-b-slate-400/60 min-w-[150px] pt-0 '>
                                <span>Baner</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='sub-menu-item min-w-[150px] pt-0'>
                                <span>Kharadi</span>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 menu-li font-medium text-slate-500 hover:text-primary'>Salem</DropdownMenuItem>
            <DropdownMenuItem className='rounded-none menu-li font-medium text-slate-500 hover:text-primary'>Vijayawada</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <Popover className='min-[768px]:hidden'>
        <PopoverTrigger className='min-[768px]:hidden border border-primary text-primary px-2 py-1 rounded-full flex flex-row items-center justify-between text-xs font-medium'>
            Hospitals
            <ChevronDown className="chevronDown relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180 font-medium" aria-hidden="true" />
        </PopoverTrigger>
        <PopoverContent className='w-[200px] max-h-[300px] overflow-auto'>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-medium'>Bengaluru</AccordionTrigger>
                <AccordionContent>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Doddaballapur</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Hebbal</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Jayanagar</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Malleshwaram</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Millers Road</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Old Airport Road</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Sarjapur Road</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Varthur Road</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Whitefield</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Yeshwanthpur</Link>
                </AccordionContent>
            </AccordionItem>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Bhubaneswar</Link>
            <AccordionItem value="item-2">
                <AccordionTrigger className='font-medium'>Delhi - NCR</AccordionTrigger>
                <AccordionContent>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Delhi</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Ghaziabad</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Gurugram</Link>
                </AccordionContent>
            </AccordionItem>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Goa</Link>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Jaipur</Link>
            <AccordionItem value="item-3">
                <AccordionTrigger className='font-medium'>Kolkata</AccordionTrigger>
                <AccordionContent>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Broadway</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Dachuria</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Mukundapur</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Salt Lake</Link>                    
                </AccordionContent>
            </AccordionItem>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Mangaluru</Link>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Mysuru</Link>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Patiala</Link>
            <AccordionItem value="item-4">
                <AccordionTrigger className='font-medium'>Pune</AccordionTrigger>
                <AccordionContent>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Lanes</Link>
                    <Link href="#" className='text-primary/80 text-[12px] font-medium w-full block py-2'>Kharadi</Link>
                </AccordionContent>
            </AccordionItem>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Selam</Link>
            <Link href="#" className='text-slate-500 hover:text-primary text-[14px] font-medium w-full block py-2'>Vijayaada</Link>
        </Accordion>

        </PopoverContent>
    </Popover>
    <Link href="#" className='max-[767px]:hidden bg-transparent text-[#fff] menu-li font-medium hover:bg-[#ffffff] hover:text-primary px-[8px] py-[5px] h-[30px] rounded'>Doctors</Link>
    <Link href="#" className='max-[767px]:hidden bg-transparent text-[#fff] menu-li font-medium hover:bg-[#ffffff] hover:text-primary px-[8px] py-[5px] h-[30px] rounded'>International Patients</Link>
    </>
  )
}

export default MenuOne

