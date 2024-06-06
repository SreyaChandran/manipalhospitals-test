"use client"
import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
const MenuTwo = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger className='h-[28px] text-primary text-[13px] font-primary flex font-semibold flex-row gap-[2px] px-[4px] rounded-full' aria-label='Language'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                    <span className='max-[575px]:hidden'>EN</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>English</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref aria-label='podcast'>
                    <NavigationMenuLink aria-label='podcast' className='h-[28px] bg-white text-primary text-[13px] font-semibold font-primary flex flex-row gap-[2px] px-[8px] rounded-full items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                        <span className='max-[992px]:hidden'>Podcast</span>
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='max-[768px]:hidden'>
                <Button variant="transperant" className='p-0' aria-label='Search'>
                    <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className='h-[28px] bg-white text-primary text-[13px] font-semibold font-primary flex flex-row gap-[2px] px-[8px] rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#284797" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <span  className='max-[992px]:hidden'>Search</span>
                    </NavigationMenuLink>
                    </Link>
                </Button>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuTwo