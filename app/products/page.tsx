"use client";
import ProductSlider from "@/components/ProductSlider";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProductsPage() {
  return (
    <section className="pt-16 pb-16 scroll-mt-[12vh]" id="products">
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Our Products
      </motion.h1>
      <motion.span
        className="block w-16 h-1 bg-red-950 mx-auto mt-3"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      ></motion.span>
      <motion.p
        className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Tech That Elevates Your Everyday
      </motion.p>
      {/* <div className="w-[80%] mx-auto mt-12"> */}
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-8">
        <ProductSlider />
      </div>
      <motion.div
        className="w-[80%] mx-auto mt-8 text-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Link href="/allproducts">
          <button className="flex items-center gap-2 bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition mx-auto cursor-pointer">
            Browse Products
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
