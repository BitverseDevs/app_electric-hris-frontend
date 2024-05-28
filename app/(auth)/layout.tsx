import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";


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
      <div className="h-screen">
            {children}
      </div>

  );
}
