"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen flex justify-center flex-col"
      id="home"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Top - Pic */}
        <motion.div
          className="mx-auto block xl:hidden mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/images/Hero.png"}
            alt="Online Shopping"
            width={400}
            height={400}
          />
        </motion.div>
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold leading-[2.5rem] md:leading-[3.5rem] text-center sm:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            TECHNYON
          </motion.h1>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl  mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem] text-center sm:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Your One-Stop Tech Destination
          </motion.h1>
          {/* Subheading */}
          <motion.p
            className="text-xs sm:text-sm md:text-base font-medium dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Explore our top-rated electronics and smart appliances to upgrade
            your everyday life. Shop all with the convenience of Amazon&apos;s
            trusted checkout.
          </motion.p>
          {/* Button */}

          <motion.div
            className="mt-8 flex flex-col items-center sm:flex-row w-full sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Link href="/allproducts">
              <button className="flex items-center gap-2 bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition mx-auto cursor-pointer">
                Browse Products
              </button>
            </Link>
            <Link
              href="https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P"
              target="_blank"
            >
              <button className="flex items-center gap-2 bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition mx-auto cursor-pointer">
                Shop Now <BsCart4 className="ml-2" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
        {/* Right - Pic */}
        <motion.div
          className="mx-auto hidden xl:block xl:mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <Image
            src={"/images/Hero.png"}
            alt="Online Shopping"
            width={580}
            height={580}
          />
        </motion.div>
      </div>
    </div>
  );
}
