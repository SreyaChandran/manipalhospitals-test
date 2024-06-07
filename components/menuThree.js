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
        <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='icon-white'>
                <Button variant="transperant" aria-label='menu' className='p-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                    <line x1="10" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup className='min-[768px]:hidden'>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Centre of Excellence</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Doctors</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>International Patients</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator  className='min-[768px]:hidden' />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Self Registration</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>In-Patient Deposit</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Mars - Ambulance</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Home Care</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Organ Donation</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Corporate & PSU</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>TPA & Insurance</DropdownMenuItem>
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Awards And Achievements</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <table className='w-full'>
                        <tr className='border-b-[1px] border-b-slate-300'>
                            <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>About Us</DropdownMenuItem></td>
                            <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Events</DropdownMenuItem></td>
                            <td><DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[12px] md:text-[13px]'>Media</DropdownMenuItem></td>
                        </tr>
                        <tr>
                            <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Blog</DropdownMenuItem></td>
                            <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Mobile App</DropdownMenuItem></td>
                            <td><DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[12px] md:text-[13px]'>Gallery</DropdownMenuItem></td>
                        </tr>
                    </table>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Careers</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='menu-icon-blue'>
                <Button variant="transperant" aria-label='menu' className='p-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                    <line x1="10" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                    <DropdownMenuGroup className='min-[768px]:hidden'>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Centre of Excellence</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Doctors</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>International Patients</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator  className='min-[768px]:hidden' />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Self Registration</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>In-Patient Deposit</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Mars - Ambulance</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Home Care</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Organ Donation</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Corporate & PSU</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>TPA & Insurance</DropdownMenuItem>
                        <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Awards And Achievements</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <table className='w-full'>
                            <tr className='border-b-[1px] border-b-slate-300'>
                                <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>About Us</DropdownMenuItem></td>
                                <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Events</DropdownMenuItem></td>
                                <td><DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[12px] md:text-[13px]'>Media</DropdownMenuItem></td>
                            </tr>
                            <tr>
                                <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Blog</DropdownMenuItem></td>
                                <td><DropdownMenuItem className='rounded-none border-r-[1px] border-r-slate-400/60  font-medium text-slate-500 text-[12px] md:text-[13px]'>Mobile App</DropdownMenuItem></td>
                                <td><DropdownMenuItem className='rounded-none  font-medium text-slate-500 text-[12px] md:text-[13px]'>Gallery</DropdownMenuItem></td>
                            </tr>
                        </table>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='icon-menu-item rounded-none font-medium text-slate-500 text-[12px] md:text-[13px] '>Careers</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default MenuThree