import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen flex justify-center flex-col"
      id="home"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* Top - Pic */}
        <div className="mx-auto block xl:hidden mt-16">
          <Image
            src={"/images/Hero.png"}
            alt="Online Shopping"
            width={400}
            height={400}
          />
        </div>
        {/* Left - Text */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold leading-[2.5rem] md:leading-[3.5rem] text-center sm:text-start">
            TECHNYON
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem] text-center sm:text-start">
            Your One-Stop Tech Destination
          </h1>
          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base font-medium dark:text-gray-300 text-justify">
            Explore top-rated electronics and smart appliances—handpicked to
            upgrade your everyday life. Shop all with the convenience of
            Amazon&apos;s trusted checkout.
          </p>
          {/* Button */}
          <div className="mt-8 flex flex-col items-center sm:flex-row w-full sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">

            <Link href="/allproducts">
            <button className="border dark:border-white dark:text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-900">
              Browse Products
            </button>
            </Link>
            <Link href="https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P" target="_blank">
            <button className="flex items-center justify-center border dark:border-white dark:text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-900">
              Shop Now <BsCart4 className="ml-2"/>
            </button>
            </Link>
          </div>
        </div>
        {/* Right - Pic */}
        <div className="mx-auto hidden xl:block xl:mt-16">
          <Image
            src={"/images/Hero.png"}
            alt="Online Shopping"
            width={580}
            height={580}
          />
        </div>
      </div>
    </div>
  );
}
