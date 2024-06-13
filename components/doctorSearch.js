"use client"
import React, { useEffect, useState } from 'react'
import SelectHospital from '@/components/selectHospital'
import { Button } from './ui/button'
import {getHospitalsData, getSpecialitiesData, getDoctorsData} from "@/actions/actions";

const DoctorSearch = () => {
  const [hospitals, setHospitalsList] = useState([])
  const [selectedHospital, setSelectedHospital] = useState()
  const [speciality, setSpeciality] = useState([])
  const [selectedSpeciality, setSelectedSpeciality] = useState()
  const [doctors, setDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState()
  
  useEffect(()=>{
    const getHospitals = async () =>{
      const data = await getHospitalsData()
      setHospitalsList(data)
    }
    getHospitals()
    const getSpeciality = async () =>{
      const data = await getSpecialitiesData()
      // console.log(data)
      setSpeciality(data)
    }
    getSpeciality()
  },[])
  const getDoctors = async(hospital, speciality) =>{
    const data = await getDoctorsData(hospital, speciality)
    // console.log(data)
    setDoctors(data)
  }
  useEffect(()=>{
    // console.log("selectedHospital",selectedHospital)
    // console.log("selectedSpeciality",selectedSpeciality)
    if(selectedHospital !== "" && selectedSpeciality !== ""){
      setSelectedDoctor("")
      setDoctors([])
      getDoctors(selectedHospital,selectedSpeciality)
    }
  },[selectedHospital, selectedSpeciality])
  return (
    <div className='static mt-2 md:mt-0 md:absolute w-[220px] md:w-[90vw] max-w-[1200px] left-0 right-0 ml-auto mr-auto md:bottom-5 xl:bottom-8 flex flex-col gap-2 sm:flex sm:flex-col md:grid md:grid-cols-4 items-center justify-center md:gap-4 border-[1.5px] border-[#00b7ac] py-2 md:px-6 rounded-md bg-[#ffffffe6]'>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={hospitals} textVal="Select Hospital"  name='hospitalName' value={selectedHospital} setValue={setSelectedHospital} />
        </div>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={speciality} textVal="Select speciality" name='specialityName' value={selectedSpeciality} setValue={setSelectedSpeciality} />
        </div>
        <div className='border-b-2 border-b-[#00b7ac] md:border-b-0 md:border-r-2 md:border-r-[#00b7ac] flex items-center justify-center'>
          <SelectHospital hospitals={doctors} textVal="Select Doctors" name='doctorName' value={selectedDoctor} setValue={setSelectedDoctor} />
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