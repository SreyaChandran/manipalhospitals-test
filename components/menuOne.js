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
  

const MenuOne = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-transparent h-[30px] text-[#fff] text-[13px] font-primary'>Centre of Excellence</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className='bg-transparent h-[30px] text-[#fff] text-[13px] font-primary'>
                        Doctors
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuOne

