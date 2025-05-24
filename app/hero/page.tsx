import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen flex justify-center flex-col"
      id="home"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left - Text */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">
            TECHNYON
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">
            Your One-Stop Tech Destination
          </h1>
          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">
            Explore top-rated electronics and smart appliances—handpicked to
            upgrade your everyday life. Shop all with the convenience of
            Amazon&apos;s trusted checkout.
          </p>
          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="border border-white text-white px-4 py-2 rounded">
              Browse Products
            </button>
            <button className="border border-white text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>
        {/* Right - Pic */}
        <div className="mx-auto hidden xl:block mt-16">
          <Image
            src={"/images/Hero.png"}
            alt="Projector"
            width={580}
            height={580}
          />
        </div>
      </div>
    </div>
  );
}
