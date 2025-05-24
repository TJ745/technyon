import Image from "next/image";
import React from "react";
import { BsQuote } from "react-icons/bs";

type Props = {
  image: string;
  name: string;
  role: string;
  review: string;
};

function TestimonialCard({ review, image, name, role }: Props) {
  return (
    <div>
      <BsQuote className="w-14 h-14 text-red-900" />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        {review}
      </p>
      <div className="mt-6">
        <Image
          src={image}
          alt="Testimonial"
          width={100}
          height={100}
          className="object-center mx-auto rounded-full"
        />
        <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
        <h1 className="text-center text-gray-500">{role}</h1>
      </div>
    </div>
  );
}

export default TestimonialCard;
