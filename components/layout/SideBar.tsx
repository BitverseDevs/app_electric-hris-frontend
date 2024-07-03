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
import { useRouter } from 'next/navigation';

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

    const router = useRouter()

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

    const handleSideBar = (e:any) => {
        if(e.target === sideBarRef.current){
            setShowSideBar(false)
        }
    }

    const onClick: MenuProps['onClick'] = (e) => {

        console.log(e)
        if(e.key == "employees") router.push('/employees')
        if(e.key == "dashboard") router.push('/employees')
    };

    return (
        <>
            {screenSize.width > 640 ? (
                <div className='h-screen'>
                    {/* Sidebar content for larger screens */}
                    <aside className={`h-full bg-white overflow-hidden`}>
                        <nav>
                            <div className="flex justify-between h-16 items-center">
                                <Link href="">
                                    <Image
                                        src={BitverseLogo}
                                        alt="Bitverse Logo"
                                        className={`overflow-hidden transition-all ${showSideBar ? 'w-32 pl-8' : 'w-0'}`}
                                    />
                                </Link>
                                {showSideBar
                                    ? <Button type="link" onClick={() => setShowSideBar(!showSideBar)}>
                                        <BiChevronLeft
                                            className='text-3xl text-slate-500 hover:text-blue-600'
                                        />
                                    </Button>
                                    : <Button type="link" onClick={() => setShowSideBar(!showSideBar)}>
                                        <BiChevronRight
                                            className='text-3xl text-slate-500 hover:text-blue-600'
                                        />
                                    </Button>
                                }
                            </div>

                            <hr></hr>
                            <ul className="">
                                {routes.map((route: any, index: number) => (
                                    <li key={index}>
                                        <Link className="flex p-4" href={route.link}>
                                            <span>{route.icon}</span>
                                            <div className={`transition-all overflow-hidden ${showSideBar ? "w-40 px-4 " : "w-0"}`}>
                                                {route.name}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </div>
            ) : (
                // Portal for smaller screens (client-side only)
                createPortal(
                    <div ref={sideBarRef} onClick={handleSideBar} className={`h-screen transition-all bg-slate-300 bg-opacity-30 top-0 fixed z-10 overflow-hidden ${showSideBar ? "w-full": "w-0"}` }>
                        <div className={`bg-white w-fit h-full`}>
                            <div className='flex justify-end p-2'>
                                <IoClose onClick={() => setShowSideBar(false)} className='text-2xl'/>
                            </div>
                            <div className=''>
                                <Link href="">
                                    <Image
                                        src={BitverseLogo}
                                        alt="Bitverse Logo"
                                        className='w-32 pl-8'
                                        // className={`overflow-hidden transition-all ${showSideBar ? 'w-32 pl-8' : 'w-0'}`}
                                    />
                                </Link>
                            </div>
                            <Menu
                                mode="inline"
                                style={{ width: 250 }}
                                onClick={onClick}
                                items={items}
                            />
                        </div>
                    </div>
                    ,document.body
                )
            )}
        </>
    );
};

