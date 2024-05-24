"use client"; 

import Link from 'next/link'
import Image from 'next/image'

//ICONS
import { 
    BiArrowToLeft,
    BiChevronLeft,
    BiChevronRight,
    BiGroup,
    BiSolidDashboard
} from "react-icons/bi";

//ASSETS
import BitverseLogo from '@/assets/bitverse-logo.png'
import BitverseLogoHead from '@/assets/bitverse-logo-head.png'
import { useState } from 'react';
import { Button } from '@mui/material';

export default function SideBar() {
    const [isShow, setIsShow] = useState<boolean>(false)

    const routes = [
        {
            name: "Dashboard" ,
            icon: <BiSolidDashboard className='text-2xl'/>,
            link: "/dashboard"
        },
        {
            name: "Employees" ,
            icon: <BiGroup className='text-2xl' />,
            link: "/employees"
        }
    ]

    return (
        <div className='h-screen'>
            <aside className={`w-fit h-full bg-white overflow-hidden`}>
                <nav>
                    <div className="flex justify-between h-16 items-center">
                        <Link href="">
                            <Image
                                src={BitverseLogo}
                                alt="Bitverse Logo"
                                className={`overflow-hidden transition-all ${isShow ? 'w-32 pl-8' : 'w-0'}`}
                            />
                        </Link>
                        {isShow 
                            ?   <Button onClick={() => setIsShow(curr => !curr)}>
                                    <BiChevronLeft 
                                        className='text-3xl text-slate-500 hover:text-blue-600'
                                    />
                                </Button>
                            :
                                <Button onClick={() => setIsShow(curr => !curr)}>
                                    <BiChevronRight
                                        className='text-3xl text-slate-500 hover:text-blue-600'
                                    />
                                </Button>
                        }
                    </div>

                    <hr></hr>
                    <ul className="">
                        {routes.map((route:any, index:number) => (
                            <li key={index}>
                                <Link className={`${list}`} href={route.link}>
                                    {route.icon}
                                    <div className={`transition-all overflow-hidden ${isShow? "w-40 px-4 ": "w-0"}`}>
                                        {route.name}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

        </div>
    )
}

const list = ' p-4 hover:text-blue-700 hover:bg-slate-100 flex items-center gap-2'