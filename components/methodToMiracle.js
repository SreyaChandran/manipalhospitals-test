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


const MethodToMiracle = () => {
  return (
    // <div className='h-20 w-20 bg-[#05aba5]'>
      <Tabs defaultValue="tab1" className="w-full flex flex-col lg:flex-row h-auto">
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
      <TabsContent value="tab1" className='flex-grow flex items-center bg-black m-0'>
        <video width="100%" height="auto" controls>
          {/* <source src="" type="video/mp4"> */}
          {/* <source src="" type="video/ogg"> */}
        Your browser does not support the video tag.
        </video>

      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    // </div>
  )
}

export default MethodToMiracle