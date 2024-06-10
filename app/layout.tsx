import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";


const poppins = Poppins(
  { 
    subsets: ["latin"],
    weight: ['400']
  }
);

export const metadata: Metadata = {
  title: "HRIS",
  description: "Human Resources Information System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuthenticated = true
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AntdRegistry>{children}</AntdRegistry>
          {/* {children} */}
          {/* <Footer /> */}
      </body>
    </html>
  );
}
