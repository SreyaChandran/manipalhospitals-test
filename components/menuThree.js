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
                <Button variant="transperant" aria-label='menu' className='p-0'>
                    <svg className='hidden md:inline' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                    <line x1="10" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                    <svg className="inline md:hidden" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
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
                <DropdownMenuGroup className='min-[768px]:hidden'>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Centre of Excellence</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Doctors</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>International Patients</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Self Registration</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>In-Patient Deposit</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Mars - Ambulance</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Home Care</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Organ Donation</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Corporate & PSU</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>TPA & Insurance</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Awards And Achievements</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='flex flex-row item-center justify-center gap-2 pt-2 pb-[1px] icon-menu-item '>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[13px]'>About Us</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[13px]'>Events</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[13px]'>Media</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup className='flex flex-row items-center justify-center gap-2 pb-2 icon-menu-item '>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[13px]'>Blog</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[13px]'>Mobile App</DropdownMenuItem>
                    <DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[13px]'>Gallery</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[13px] '>Careers</DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant="transparant" className='font-medium text-slate-500 text-[13px] hover:text-primary border-[1px] border-slate-400/60 hover:border-primary'>Contact Us</Button>
                </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default MenuThree