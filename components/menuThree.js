"use client"
import React from 'react'
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


const MenuThree = () => {
  return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="transperant">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                    <line x1="10" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuTrigger asChild className='min-[576px]:hidden min-[576px]:w-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                <line x1="10" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
            </DropdownMenuTrigger> */}
            <DropdownMenuContent className="w-[230px]">
        {/* <DropdownMenuSeparator /> */}
                <DropdownMenuGroup className='min-[768px]:hidden'>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Centre of Excellence</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Doctors</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>International Patients</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Self Registration</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>In-Patient Deposit</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Mars - Ambulance</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Home Care</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Organ Donation</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Corporate & PSU</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>TPA & Insurance</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Awards And Achievements</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup className='flex flex-row item-center justify-center gap-2 pt-2 pb-[1px]'>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60 text-[12px] font-medium text-slate-500 hover:text-primary'>About Us</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60 text-[12px] font-medium text-slate-500 hover:text-primary'>Events</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none text-[12px] font-medium text-slate-500 hover:text-primary '>Media</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup className='flex flex-row items-center justify-center gap-2 pb-2'>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60 text-[12px] font-medium text-slate-500 hover:text-primary '>Blog</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60 text-[12px] font-medium text-slate-500 hover:text-primary '>Mobile App</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none text-[12px] font-medium text-slate-500 hover:text-primary '>Gallery</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem className='rounded-none border-b-[1px] border-b-slate-400/60 text-[13px] font-medium text-slate-500 hover:text-primary'>Careers</DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant="transparant" className='text-[13px] font-medium text-slate-500 hover:text-primary border-[1px] border-slate-400/60 hover:border-primary'>Contact Us</Button>
                </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default MenuThree