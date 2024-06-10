import Link from "next/link";

export default function SigninHeader() {

    const routes = [
        {
            link: "/about",
            label: "ABOUT"
        },
        {
            link: "/login",
            label: "SIGN IN"
        }
    ];

    return (
        <div className="bg-purple-900 py-4 sticky top-0 z-10">
            <nav>
                <ul className="flex gap-4 justify-center">
                    {routes.map((item:any, index:number) => (
                        <li key={index}>
                            <Link className="text-slate-200 hover:text-white" href={item.link}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    )
}