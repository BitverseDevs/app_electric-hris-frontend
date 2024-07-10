"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Menu } from 'antd';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { BiChevronLeft, BiChevronRight, BiGroup, BiSolidDashboard } from "react-icons/bi";
import BitverseLogo from '@/assets/bitverse-logo.png';
import { MenuProps } from 'antd/lib/menu';
import { useStore } from '@/store';
import { usePathname, useRouter } from 'next/navigation';
import SidebarMobile from './sidebar/SidebarMobile';
import SidebarDesktop from './sidebar/SidebarDesktop';

interface RoutesTypes {
    name: string,
    icon: any,
    link: string
}

type MenuItem = Required<MenuProps>['items'][number];

export default function SideBar() {
    // const [isShow, setIsShow] = useState<boolean>(false);
    const setShowSideBar = useStore((state: any) => state.setShowSideBar)
    const showSideBar = useStore((state: any) => state.showSideBar)

    const screenSize = useStore((state: any) => state.screenSize)
    const setScreenSize = useStore((state: any) => state.setScreenSize)

    const sideBarRef = useRef(null)


    // Routes and menu items
    const routes: RoutesTypes[] = [
        {
            name: "Dashboard",
            icon: <BiSolidDashboard className='text-2xl' />,
            link: "/dashboard"
        },
        {
            name: "Employees",
            icon: <BiGroup className='text-2xl' />,
            link: "/employees"
        }
    ];

    const items: MenuItem[] = [
        {
            key: 'dashboard',
            icon: <BiSolidDashboard className='text-2xl' />,
            label: 'Dashboard',
        },
        {
            key: 'employees',
            icon: <BiGroup className='text-2xl' />,
            label: 'Employees',
        },
    ];

    useEffect(() => {

        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Add event listener for resizing
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        // Update screen size state on resize
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    return (
        <div className=''>
            {screenSize.width > 640 ? (
               <SidebarDesktop routes={routes}/>
            ) : (
                <SidebarMobile routes={routes}/>
            )}
        </div>
    );
};

