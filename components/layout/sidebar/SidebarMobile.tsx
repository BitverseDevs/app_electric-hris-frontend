"use client"

import { useStore } from "@/store"
import Link from "next/link"
import Image from 'next/image';
import BitverseLogo from '@/assets/bitverse-logo.png';
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "antd";
import { BiChevronLeft } from "react-icons/bi";
import { createPortal } from "react-dom";
import { Fragment, useEffect, useRef, useState } from "react";

export default function SidebarMobile (props:any) {
    const {routes} = props
    const setShowSideBar = useStore((state: any) => state.setShowSideBar)
    const showSideBar = useStore((state: any) => state.showSideBar)
    const [isClient, setIsClient] = useState(false);
    
    const router = useRouter()
    const pathname = usePathname()

    const sideBarRef = useRef(null)
    
    const isActiveRoute = (routeLink: string) => {
        return pathname.startsWith(routeLink);
    };

    const handleSideBar = (event:any) => {
        if (sideBarRef.current == event.target) {
            // Clicked outside sidebar, close sidebar
            setShowSideBar(false);
        }
    };

    useEffect(() => {
        if (typeof document !== "undefined") {
            setIsClient(true);
        }
    }, []);


    
    

    return (
            // <Fragment>
            //     {
            //         isClient && <h1>Hiiiiiiii</h1>
            //     }
            // </Fragment>
            <Fragment>
                {isClient && createPortal(
                    <div 
                        ref={sideBarRef} 
                        onClick={handleSideBar}
                        className={`h-screen top-0 fixed z-20 shadow-2xl transition-all ${showSideBar ? 'w-full' : 'w-0' } bg-slate-400 bg-opacity-30 overflow-hidden`}>
                    {/* Sidebar content for larger screens */}
                        <aside className={`h-full w-[250px] bg-white`}>
                            <nav>
                                <div className="flex pl-8 justify-between h-16 items-center">
                                    <Link href="">
                                        <Image
                                            src={BitverseLogo}
                                            alt="Bitverse Logo"
                                            className={`transition-all w-20`}
                                        />
                                    </Link>
                                    {/* {showSideBar
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
                                    } */}
                                    <Button type="link" onClick={() => setShowSideBar(!showSideBar)}>
                                        <BiChevronLeft
                                            className='text-3xl text-slate-500 hover:text-blue-600'
                                        />
                                    </Button>
                                    {/* <IoClose onClick={() => setShowSideBar(false)} className='text-2xl'/> */}
                                </div>
        
                                <hr></hr>
                                <ul className="">
                                    {routes.map((route: any, index: number) => (
                                        <li className={`${isActiveRoute(route.link)? 'bg-blue-100':''}`} key={index}>
                                            <Link className="flex gap-4 px-8 py-4" href={route.link} onClick={() => setShowSideBar(false)}>
                                                <span>{route.icon}</span>
                                                <div className={`transition-all overflow-hidden`}>
                                                    {route.name}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                    </div>,document.body)
                }
            </Fragment>
            

        
    )
}