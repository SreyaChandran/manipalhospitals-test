"use client"
import React from 'react'
import SelectHospital from '@/components/selectHospital'
import { Button } from './ui/button'
const DoctorSearch = () => {
  const hospitals = [
    { id: "1", name: "Old Airport Road - Bengaluru" },
    { id: "3", name: "Malleshwaram - Bengaluru" },
    { id: "8", name: "Goa" },
    { id: "11", name: "Salem" },
    { id: "12", name: "Vijayawada" },
    { id: "2", name: "Jayanagar - Bengaluru" },
    { id: "9", name: "Jaipur" },
    { id: "10", name: "Mangaluru" },
    { id: "7", name: "Dwarka - Delhi" },
    { id: "4", name: "Whitefield - Bengaluru" }
  ]
  const speciality = [
    { id: "57", name: "Accident and Emergency Care" },
    { id: "78", name: "Allergy and Immunology" },
    { id: "17", name: "Anesthesiology Department" },
    { id: "18", name: "Bariatric Surgery | Weight loss surgery" },
    { id: "19", name: "Bone Marrow Transplantation" },
    { id: "2", name: "Cancer Care/Oncology" },
    { id: "3", name: "Cardiology" },
    { id: "5", name: "Cardiothoracic Vascular Surgery" },
    { id: "76", name: "Children’s Airway & Swallowing Centre" },
    { id: "20", name: "Clinical Psychology" }
  ]
  const doctors = [
    { id: "doc-id-0", name: "Select Doctor" },
    { id: "doc-id-1755", name: "(Col) Dr. Avnish Seth VSM" },
    { id: "doc-id-1954", name: "(Col) Dr. Monik Mehta" },
    { id: "doc-id-390", name: "(Lt Col) Dr. Leena N Sreedhar" },
    { id: "doc-id-335", name: "(Lt Gen) Dr. CS Narayanan, VSM***" },
    { id: "doc-id-2336", name: "Abraham S S" },
    { id: "doc-id-2332", name: "Ashwin Bhat H" },
    { id: "doc-id-2334", name: "Barnali Ghosh" },
    { id: "doc-id-1360", name: "Col(Dr.) Aradhana Sood" },
    { id: "doc-id-1227", name: "CPsy. Ruchi Sharma" },
    { id: "doc-id-2791", name: "Dr Chinnu Jomi" }
  ]
  return (
    <div className='static mt-2 md:mt-0 md:absolute w-[220px] md:w-[90vw] max-w-[1200px] left-0 right-0 ml-auto mr-auto md:bottom-5 xl:bottom-8 flex flex-col gap-2 sm:flex sm:flex-col md:grid md:grid-cols-4 items-center justify-center md:gap-4 border-[1.5px] border-[#00b7ac] py-2 md:px-6 rounded-md bg-[#ffffffe6]'>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={hospitals} textVal="Select Hospital" />
        </div>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={speciality} textVal="Select speciality" />
        </div>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={doctors} textVal="Select Doctors" />
        </div>
        <div className='flex items-center justify-center'>
          <Button className='btn-primary md:btn-appoinment flex items-center justify-center gap-2 text-[#fff] px-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Submit
          </Button>
        </div>
        
    </div>
  )
}

export default DoctorSearch