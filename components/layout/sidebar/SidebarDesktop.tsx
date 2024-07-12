import { useStore } from "@/store"
import Link from "next/link"
import Image from 'next/image';
import BitverseLogo from '@/assets/bitverse-logo.png';
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, ReactElement, useState } from "react";
import { RoutesTypes, SubRoutesTypes } from "@/types";
import {BiChevronDown} from "react-icons/bi";

interface Props {
    handleDropdownSub: (navLink:string) => void
    routes: RoutesTypes[]
}
export default function SidebarDesktop(props:Props) {

    const {routes, handleDropdownSub} = props
    const navRoute = useStore((state: any) => state.navRoute)


    const [showSub, setShowSub] = useState<boolean>(false)
    const pathname = usePathname()
    
    const isActiveRoute = (routeLink: string) => {
        return pathname.startsWith(routeLink);
    };

    const subRoutesList = (subRoutes:SubRoutesTypes[], navLink:string | null): ReactElement  => {
        return (
            <ul className={`transition ease-in-out delay-1000 ${navRoute.current == navLink? 'h-fit': 'h-0'} overflow-hidden`}>
                {
                    Array.isArray(subRoutes) 
                        && subRoutes.map((sub: any, index: number) => 
                            <li className={`${isActiveRoute(sub.link)? 'bg-blue-100':''}`} key={index}>
                                <Link className="flex gap-4 pl-20 py-4" href={sub.link}>
                                    <span>{sub.icon}</span>
                                    <div className={`transition-all overflow-hidden`}>
                                        {sub.name}
                                    </div>
                                </Link>
                            </li>
                        ) 
                        
                }
            </ul>
        )
    }

    return (
        <div className={`h-screen w-[280px] shadow-2xl z-20`}>

            <aside className={`h-full w-full  bg-white`}>
                <nav>
                    <div className="flex h-16 items-center">
                        <Link href="">
                            <Image
                                src={BitverseLogo}
                                alt="Bitverse Logo"
                                className={`w-32 pl-8`}
                            />
                        </Link>
                        
                    </div>

                    <hr></hr>

                    <ul className="">
                        {routes.map((route: any, index: number) => (
                            <Fragment>
                                <li 
                                    className={`${(!Array.isArray(route.sub) || route.sub.length == 0) && isActiveRoute(route.link)? 'bg-blue-100':''} px-4 flex justify-between items-center cursor-pointer`} 
                                    key={index} 
                                    onClick={() => handleDropdownSub(route.link)}
                                >
                                    <Link 
                                        className="flex gap-4 px-8 py-4" 
                                        href={route.link}
                                    >
                                        <span>{route.icon}</span>
                                        <div className={`transition-all overflow-hidden`}>
                                            {route.name}
                                        </div>
                                    </Link>
                                    
                                    {route.sub && route.sub.length > 0 && <BiChevronDown className="text-2xl"/>}
                                </li>
                                {subRoutesList(route.sub, route.link)}
                            </Fragment>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}