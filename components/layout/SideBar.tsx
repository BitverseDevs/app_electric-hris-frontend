"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Menu } from 'antd';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { BiCategory, BiChevronLeft, BiChevronRight, BiGroup, BiSolidDashboard } from "react-icons/bi";
import BitverseLogo from '@/assets/bitverse-logo.png';
import { MenuProps } from 'antd/lib/menu';
import { useStore } from '@/store';
import { usePathname, useRouter } from 'next/navigation';
import SidebarMobile from './sidebar/SidebarMobile';
import SidebarDesktop from './sidebar/SidebarDesktop';
import { GrUserAdmin } from 'react-icons/gr';
import { FaCcPaypal } from 'react-icons/fa';
import { RoutesTypes } from '@/types';

type MenuItem = Required<MenuProps>['items'][number];

export default function SideBar() {
    // const [isShow, setIsShow] = useState<boolean>(false);
    const setShowSideBar = useStore((state: any) => state.setShowSideBar)
    const showSideBar = useStore((state: any) => state.showSideBar)

    const navRoute = useStore((state: any) => state.navRoute)

    const currentRoute = useStore((state: any) => state.setCurrent)

    const screenSize = useStore((state: any) => state.screenSize)
    const setScreenSize = useStore((state: any) => state.setScreenSize)

    const sideBarRef = useRef(null)


    // Routes and menu items
    const routes: RoutesTypes[] = [
        {
            name: "Dashboard",
            icon: <BiSolidDashboard className='text-2xl' />,
            link: "/dashboard",
            sub: []
        },
        {
            name: "Admin Portal",
            icon: <GrUserAdmin className='text-2xl' />,
            link: "/admin",
            sub: [
                {
                    name: "Categories",
                    icon: <BiCategory className='text-2xl'/>,
                    link: "/admin/categories"
                },
                {
                    name: "Payroll",
                    icon: <FaCcPaypal className='text-2xl'/>,
                    link: "/admin/payroll"
                }
            ]
        },
        {
            name: "Employees",
            icon: <BiGroup className='text-2xl' />,
            link: "/employees",
            sub: [
                {
                    name: "Categories",
                    icon: <BiCategory className='text-2xl'/>,
                    link: "/employees/categories"
                },
                {
                    name: "Payroll",
                    icon: <FaCcPaypal className='text-2xl'/>,
                    link: "/employees/payroll"
                }
            ]
        }
    ];

    // const items: MenuItem[] = [
    //     {
    //         key: 'dashboard',
    //         icon: <BiSolidDashboard className='text-2xl' />,
    //         label: 'Dashboard',
    //     },
    //     {
    //         key: "admin",
    //         icon: <BiGroup className='text-2xl' />,
    //         label: "/admin"
    //     },
    //     {
    //         key: 'employees',
    //         icon: <BiGroup className='text-2xl' />,
    //         label: 'Employees',
    //     },
    // ];

    // const handleResize = () => {
    //     setScreenSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     });
    // }
    const handleResize = useCallback(() => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    },[setScreenSize])

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
    }, [handleResize, setScreenSize]);


    const handleDropdownSub = (navLink:string) => {

        console.log(navLink)
        switch (navLink) {

            case navRoute.current:
                navRoute.setCurrent(null)
                break;

            default:
                navRoute.setCurrent(navLink)
                break
        }

    }

    useEffect(() => {
        console.log(navRoute.current)
    },[navRoute.current])

    return (
        <div className=''>
            {screenSize.width > 640 ? (
                <SidebarDesktop 
                    routes={routes}
                    handleDropdownSub={handleDropdownSub}
                />
            ) : (
                <SidebarMobile 
                    routes={routes}
                    handleDropdownSub={handleDropdownSub}
                />
            )}
        </div>
    );
};

