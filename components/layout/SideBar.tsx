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

    return (
        <div className='h-screen'>
            <aside className={`w-fit h-full bg-white overflow-hidden`}>
                <nav>
                    <div className="flex justify-end">
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
                    <Link className={`${list}`} href="">
                        <Image
                            src={BitverseLogo}
                            alt="Bitverse Logo"
                            className={`overflow-hidden transition-all ${isShow ? 'w-32' : 'w-0'}`}
                        />
                    </Link>

                    <hr></hr>
                    <ul className="">
                        <li>
                            <Link className={`${list}`} href=""><BiSolidDashboard className='text-2xl'/><div className={`transition-all overflow-hidden ${isShow? "w-40 px-4 ": "w-0"}`}>Dashboard</div></Link>
                        </li>
                        <li>
                            <Link className={`${list}`} href=""><BiGroup className='text-2xl' /><div className={`transition-all overflow-hidden ${isShow? "w-40 px-4": "w-0"}`}>Employees</div></Link>
                        </li>
                    </ul>
                </nav>
            </aside>

        </div>
    )
}

const list = ' p-4 hover:text-blue-700 hover:bg-slate-100 flex items-center gap-2'