import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="pt-16 pb-16 scroll-mt-[12vh]" id="about">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        About Us
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* About Us */}
        <div className="mx-auto hidden xl:block">
          <Image
            src={"/images/About.png"}
            alt="About Us"
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-white font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-justify">
            At TECHNYON, we believe technology should make life easier, smarter,
            and more enjoyable. That&apos;s why we curate the best electronic
            products across categories—whether you&apos;re upgrading your
            kitchen, setting up a home theatre, or staying connected with the
            latest gadgets. Our platform brings together quality, convenience,
            and innovation. Every product featured on our website is handpicked
            for its performance, reliability, and value. Currently, we link you
            directly to Amazon for a smooth, secure shopping experience. But
            we’re just getting started—soon, you&apos;ll be able to shop
            directly from our website for even more convenience and exclusive
            offers. Join us on this journey as we shape the future of tech
            shopping—one smart choice at a time.
          </p>
        </div>
         <div className="mx-auto xl:hidden block">
          <Image
            src={"/images/About.png"}
            alt="About Us"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
