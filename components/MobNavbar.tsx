import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  isMobileNav: boolean;
  closeNav: () => void;
};

export default function MobNavbar({ isMobileNav, closeNav }: Props) {
  const NavOpen = isMobileNav ? "translate-x-0" : "translate-x-[-100%]";
  const router = useRouter();
  const pathname = usePathname();

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
    closeNav();
  };

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen ${NavOpen}`}
      ></div>
      {/* navLinks */}
      <div
        className={`fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-red-900 z-[1050] space-y-6 ${NavOpen}`}
      >
        {navLinks.map((link) => {
          return (
            <button onClick={() => handleNavClick(link.url)} key={link.id}>
              <p
                className={`text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 botrder-white sm:text-[30px] cursor-pointer`}
              >
                {link.label}
              </p>
            </button>
          );
        })}
        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 text-white sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
}
