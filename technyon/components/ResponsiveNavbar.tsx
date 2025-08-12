"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

export default function ResponsiveNavbar() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleNavOpen = () => setIsMobileNav(true);
  const handleNavClose = () => setIsMobileNav(false);

  return (
    <div>
      <Navbar openNav={handleNavOpen} />
      <MobNavbar isMobileNav={isMobileNav} closeNav={handleNavClose} />
    </div>
  );
}
