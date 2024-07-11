import { useStore } from "@/store"
import Link from "next/link"
import Image from 'next/image';
import BitverseLogo from '@/assets/bitverse-logo.png';
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarDesktop(props:any) {

    const {routes} = props
    const setShowSideBar = useStore((state: any) => state.setShowSideBar)
    const showSideBar = useStore((state: any) => state.showSideBar)
    
    const router = useRouter()
    const pathname = usePathname()
    
    const isActiveRoute = (routeLink: string) => {
        return pathname.startsWith(routeLink);
    };

    return (
        <div className={`h-screen w-[280px] z-20`}>
            {/* Sidebar content for larger screens */}
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
                    </div>

                    <hr></hr>
                    <ul className="">
                        {routes.map((route: any, index: number) => (
                            <li className={`${isActiveRoute(route.link)? 'bg-blue-100':''}`} key={index}>
                                <Link className="flex gap-4 px-8 py-4" href={route.link}>
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
        </div>
    )
}