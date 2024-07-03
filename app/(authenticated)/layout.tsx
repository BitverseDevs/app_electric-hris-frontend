
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import Loading from "./loading";
// import Loading from "./employees/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRIS",
  description: "Human Resources Information System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    // <div className={`${inter.className} bg-red-100`}>
    //     <div className="flex">
    //         <SideBar />
    //         {/* <div className="p-96">
    //           sdsdasd
    //         </div> */}
    //         <div className="w-full">
    //             <Header />
    //             {/* <div className="w-full bg-blue-100">
    //               asdas
    //             </div> */}
    //             <Suspense fallback={<Loading />}>
    //               {children}
    //             </Suspense>
    //               {/* <Footer /> */}
    //         </div>
    //     </div>
    // </div>


    <div className="flex w-screen">
      <SideBar />
      {/* <div className="p-96">
        sdsdasd
      </div> */}
      <div className="w-full">
          <Header />
          {/* <div className="w-full bg-blue-100">
            asdas
          </div> */}
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
            {/* <Footer /> */}
      </div>
    </div>


  );
}