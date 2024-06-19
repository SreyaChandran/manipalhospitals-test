import React from 'react'
import dynamic from 'next/dynamic'
import Banner from '@/components/banner'
import DoctorSearch from '@/components/doctorSearch'
import MethodToMiracle from '@/components/methodToMiracle'
import HumanCareExperts from '@/components/humanCareExperts'
const LifeAtAGlance = dynamic(() => import('@/components/lifeAtAGlance'))

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className='relative'>
        <Banner/>
        <DoctorSearch />
      </div>
      <MethodToMiracle />
      <HumanCareExperts />
      <LifeAtAGlance />
    </div>
  )
}

export default Dashboard