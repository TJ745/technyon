import TestimonialSlider from "@/components/TestimonialSlider";
import React from "react";

function TestimonialPage() {
  return (
    <div className="pt-16 pb-16 scroll-mt-[12vh]" id="testimonials">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-900 dark:text-white font-bold">
        10k+ Customer&apos;s Trust Us
      </h1>
      <span className="w-16 h-1 bg-red-950 mx-auto mt-3 block"></span>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
        {/* Slider */}
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default TestimonialPage;
