"use client";
import { navLinks } from "@/data/navLinks";
import ThemeToggle from "./ThemeToggle";
// import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  openNav: () => void;
};

export default function Navbar({ openNav }: Props) {
  const [navBgColor, setNavBgColor] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBgColor(true);
      } else {
        setNavBgColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (url: string) => {
    const sectionId = url.replace("#", "");
    if (pathname === "/") {
      // Already on home, just scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Go to home with hash
      router.push(`/${url}`);
    }
  };

  return (
    <nav
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-red-900 ${
        navBgColor ? "bg-red-950 shadow-md" : "fixed"
      }`}
    >
      <div className="flex justify-between items-center  mx-auto h-full sm:w-[90%] w-[90%]">
        {/* Logo */}
        <div className="text-2xl font-bold sm:text-3xl">TECHNYON</div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <button
                // href={link.url}
                onClick={() => handleNavClick(link.url)}
                key={link.id}
                className="cursor-pointer transition-all duration-200 text-white hover:text-gray-300 font-semibold"
              >
                <p>{link.label}</p>
              </button>
            );
          })}
        </div>
        <ThemeToggle />
        {/* Menu Button */}
        <HiBars3BottomRight
          onClick={openNav}
          className="lg:hidden text-white w-8 h-8"
        />
      </div>
    </nav>
  );
}
