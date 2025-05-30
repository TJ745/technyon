"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import React from "react";
import { motion } from "motion/react";
function TestimonialPage() {
  return (
    <div className="pt-16 pb-16 scroll-mt-[12vh]" id="testimonials">
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-900 dark:text-white font-bold uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Customers Reviews
      </motion.h1>
      <motion.span
        className="w-16 h-1 bg-red-950 mx-auto mt-3 block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      ></motion.span>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
        {/* Slider */}
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default TestimonialPage;
