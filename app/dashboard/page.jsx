import React from 'react'
import Banner from '@/components/banner'
import DoctorSearch from '@/components/doctorSearch'
import MethodToMiracle from '@/components/methodToMiracle'
import HumanCareExperts from '@/components/humanCareExperts'
const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className='relative'>
        <Banner/>
        <DoctorSearch />
      </div>
      <MethodToMiracle />
      <HumanCareExperts />
    </div>
  )
}

export default Dashboard