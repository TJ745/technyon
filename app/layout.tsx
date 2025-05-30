import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technyon",
  description: "Showcasing the latest in technology and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 text-black dark:bg-black dark:text-white scroll-smooth transition-colors`}
      >
        <ResponsiveNavbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
