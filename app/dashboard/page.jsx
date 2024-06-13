import React from 'react'
import Banner from '@/components/banner'
import DoctorSearch from '@/components/doctorSearch'
import MethodToMiracle from '@/components/methodToMiracle'
const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className='relative'>
        <Banner/>
        <DoctorSearch />
      </div>
      <MethodToMiracle />
    </div>
  )
}

export default Dashboard