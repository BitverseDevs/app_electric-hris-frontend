import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


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
    <div className={inter.className}>
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </div>
    </div>
  );
}
