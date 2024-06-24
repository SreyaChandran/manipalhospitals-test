import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import MethodToMiracleCard from '@/components/methodToMiracleCard'
import img1 from '@/public/images/M2M_1.jpg'
import img2 from '@/public/images/maxresdefault.jpg'
import img3 from '@/public/images/MIPC.jpg'
import img4 from '@/public/images/Untitled-1.jpg'

const MethodToMiracle = () => {
  return (
    // <div className='h-20 w-20 bg-[#05aba5]'>
      <Tabs defaultValue="tab1" className="w-full flex flex-col lg:flex-row lg:flex-wrap h-auto">
      {/* <Tabs defaultValue="tab1"> */}
      <TabsList className="overflow-auto lg:overflow-hidden flex flex-row lg:flex-col max-w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] p-4  bg-[#05aba5] rounded-none gap-4">
        <p className='hidden lg:flex flex-row gap-2 text-[28px] xl:text-[32px] 2xl:text-[39px] font-[800] text-white items-center justify-center w-full'>
          Method to Miracle
        </p>
        <TabsTrigger value="tab1" className='p-3  w-[180px] h-[60px] lg:w-[400px] text-xs md:text-sm lg:text-md'>
          <p className='w-[120px] lg:w-full items-center whitespace-normal'>Pooja Bajaj - A Testament…</p>
          <ChevronRight className='hidden lg:inline'/>
        </TabsTrigger>
        <TabsTrigger value="tab2" className='p-3 w-[180px] h-[60px] lg:w-[400px] text-xs md:text-sm lg:text-md'>
          <p className='w-[120px] lg:w-full items-center whitespace-normal'>Method to Miracle</p>
          <ChevronRight className='hidden lg:inline'/>
        </TabsTrigger>
        <TabsTrigger value="tab3" className='p-3 w-[180px] h-[60px] lg:w-[400px] text-xs md:text-sm lg:text-md'>
          <p className='w-[120px] lg:w-full items-center whitespace-normal'>Reverse Shoulder Arthroplasty</p>
          <ChevronRight className='hidden lg:inline'/>
        </TabsTrigger>
        <TabsTrigger value="tab4" className='p-3 w-[180px] h-[60px] lg:w-[400px] text-xs md:text-sm lg:text-md'>
          <p className='w-[120px] lg:w-full items-center whitespace-normal'>Reverse Shoulder Arthroplasty</p>
          <ChevronRight className='hidden lg:inline'/>
        </TabsTrigger>
      </TabsList>
      <div className='flex-grow bg-black items-center justify-center'>
      <TabsContent value="tab1" className='bg-black m-0 h-full'>
        <MethodToMiracleCard image={img1} srcText="https://www.youtube.com/embed/as-NhTeESvY" />
      </TabsContent>
      <TabsContent value="tab2" className='bg-black m-0 h-full'>
        <MethodToMiracleCard image={img3} srcText="https://www.youtube.com/embed/937_joEm61c" />
      </TabsContent>
      <TabsContent value="tab3" className='bg-black m-0 h-full'>
        <MethodToMiracleCard image={img4} srcText="https://www.youtube.com/embed/cPW7Q-YjqCo" />
      </TabsContent>
      <TabsContent value="tab4" className='bg-black m-0 h-full'>
        <MethodToMiracleCard image={img2} srcText="https://www.youtube.com/embed/TVeU3M2cv5w" />
      </TabsContent>
      </div>
      <div className='block w-full items-center py-4 px-8 md:py-8 md:px-16 max-w-[1660px]'>
        <div className='w-full gradient-bg-2 mx-auto rounded px-4 py-4 md:py-16 md:px-24'>
          <TabsContent value="tab1" className='flex flex-col gap-2 md:gap-4 '>
            <p className='text-white text-md text-center leading-[33px] font-medium pb-6'>
              The Orthopaedic Department at Manipal Hospitals provides an unparalleled assessment and treatment with both medical and surgical practice of the entire musculoskeletal system including bones, joints, muscles, nerves, ligaments and tendons - everything that makes you move and be active.
            </p>
            <p className='text-[28px] xl:text-[32px] 2xl:text-[39px] font-[800] text-white text-center '>ORTHOPAEDICS</p>
            <hr className='bg-white text-white h-[2px] border-0' />
            <Button variant="secondary" className='bg-white w-fit mx-auto text-primary font-bold'>Know More</Button>
          </TabsContent>
          <TabsContent value="tab2" className='flex flex-col gap-2 md:gap-4 '>
            <p class="text-white text-md text-center leading-[33px] font-medium pb-6">
              The premier practice of the Urology Department at Manipal Hospitals excels in diagnosing and treating problems involving the female and male urinary tract. One of the top-ranked departments in the country, it is specialized in all areas like treating kidney stones, addressing incontinence, treating cancer to restoring fertility.
            </p>
            <p class="text-[28px] xl:text-[32px] 2xl:text-[39px] font-[800] text-white text-center">
              Urology
            </p>
            <hr className='bg-white text-white h-[2px] border-0' />
            <Button variant="secondary" className='bg-white w-fit mx-auto text-primary font-bold'>Know More</Button>
          </TabsContent>
          <TabsContent value="tab3" className='flex flex-col gap-2 md:gap-4 '>
            <p className='text-white text-md text-center leading-[33px] font-medium pb-6'>The Orthopedic Department at Manipal Hospitals provides an unparalleled assessment and treatment with both medical and surgical practice of the entire musculoskeletal system including bones, joints, muscles, nerves, ligaments and tendons - everything that makes you move and be active.</p>
            <p className='text-[28px] xl:text-[32px] 2xl:text-[39px] font-[800] text-white text-center '>Orthopaedics</p>
            <hr className='bg-white text-white h-[2px] border-0' />
            <Button variant="secondary" className='bg-white w-fit mx-auto text-primary font-bold'>Know More</Button>
          </TabsContent>
          <TabsContent value="tab4" className='flex flex-col gap-2 md:gap-4 '>
            <p className='text-white text-md text-center leading-[33px] font-medium pb-6'>The Department of Plastic &amp; Cosmetic Surgery at Manipal Hospitals is a comprehensive practice for restoring, reconstructing and enhancing the physical attributes of its patients to help them achieve a better quality of life. </p>
            <p className='text-[28px] xl:text-[32px] 2xl:text-[39px] font-[800] text-white text-center'>Plastic And Cosmetic Surgery</p>
            <hr className='bg-white text-white h-[2px] border-0' />
            <Button variant="secondary" className='bg-white w-fit mx-auto text-primary font-bold'>Know More</Button>
          </TabsContent>
        </div>
      </div>
    </Tabs>

    // </div>
  )
}

export default MethodToMiracle