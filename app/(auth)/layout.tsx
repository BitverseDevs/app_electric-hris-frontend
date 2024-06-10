import type { Metadata } from "next";
import "@/app/globals.css";
import SigninHeader from "@/components/signin-layout/SigninHeader";
import { Poppins } from "next/font/google";

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
      <body className="bg-red-100">
        <SigninHeader />
            {children}
      </body>

  );
}
