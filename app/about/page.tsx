"use client";
import Image from "next/image";
import { motion } from "motion/react";
export default function AboutPage() {
  return (
    <section className="pt-16 pb-16 scroll-mt-[12vh]" id="about">
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        ABOUT US
      </motion.h1>
      <motion.span
        className="block w-16 h-1 bg-red-950 mx-auto mt-3"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      ></motion.span>
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* About Us */}
        <motion.div
          className="mx-auto hidden xl:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src={"/images/AboutUs.png"}
            alt="About Us"
            width={600}
            height={600}
          />
        </motion.div>
        <motion.div
          className="mx-auto xl:hidden block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src={"/images/AboutUs.png"}
            alt="About Us"
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-justify">
            At TECHNYON, we believe technology should make life easier, smarter,
            and more enjoyable. We bring you a curated selection of top-quality
            electronics that fit seamlessly into modern living. <br />
            From smart kitchen tools to entertainment systems and cutting-edge
            gadgets, we choose only what we&apos;d use ourselves. Every item is
            selected for its performance, reliability, and value. Right now, we
            connect you to trusted Amazon listings for a smooth and secure
            experience. But that&apos;s just the beginning. Soon, you&apos;ll be
            able to shop directly through our platform with added benefits and
            exclusive offers. We&apos;re building a future where convenience
            meets quality in one smart destination. Discover a better way to
            shop tech items with TECHNYON by your side.
          </p>
          <div className="flex mt-10 gap-8">
            <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
              100% Satisfied Customers
            </h1>
            <p className="w-3/4 text-justify">
              We take pride in having 100% satisfied customers who trust us for
              exceptional quality and service. Your happiness is our top
              priority, and we go above and beyond to exceed expectations every
              time.
            </p>
          </div>
          <div className="flex mt-10 gap-8">
            <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
              5-Star Reviews
            </h1>
            <p className="w-3/4 text-justify">
              Our countless 5-star reviews reflect the trust and satisfaction of
              our valued customers. Each review is a testament to our commitment
              to delivering exceptional quality and service.
            </p>
          </div>
          <div className="flex mt-10 gap-8">
            <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
              Expert Team Members
            </h1>
            <p className="w-3/4 text-justify">
              Our expert team members bring unmatched skill, dedication, and
              passion to every product they handle. With years of experience and
              a commitment to excellence, they ensure outstanding results every
              time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
