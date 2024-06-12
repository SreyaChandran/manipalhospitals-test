import React from 'react'
import Banner from '@/components/banner'
import DoctorSearch from '@/components/doctorSearch'
const Dashboard = () => {
  return (
    <div className="relative flex flex-col w-full mt-[120px] z-[0]">
      <Banner/>
      <DoctorSearch />
    </div>
  )
}

export default Dashboard