import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Space_Mono({weight:['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faizan || Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="bg-black/50">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
