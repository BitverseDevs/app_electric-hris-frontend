import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { CookiesProvider } from "next-client-cookies/server";
import { ConfigProvider, Typography } from "antd";
import 'antd/dist/reset.css';


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
  
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins"
        }
      }}
    >
      <CookiesProvider>
        <html lang="en">
        <head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            />
          </head>
          <body className={poppins.className}>
            <AntdRegistry>{children}</AntdRegistry>
              {/* {children} */}
              {/* <Footer /> */}
          </body>
        </html>
      </CookiesProvider>
    </ConfigProvider>


  );
}
