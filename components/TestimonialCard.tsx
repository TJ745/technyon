import Image from "next/image";
import React from "react";
import { BsQuote, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

type Props = {
  image: string;
  name: string;
  role: string;
  review: string;
  ratings: number;
};

function renderStars(ratings: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (ratings >= i) {
      stars.push(<BsStarFill key={i} className="text-yellow-500" />);
    } else if (ratings >= i - 0.5) {
      stars.push(<BsStarHalf key={i} className="text-yellow-500" />);
    } else {
      stars.push(<BsStar key={i} className="text-yellow-500" />);
    }
  }
  return <div className="flex gap-1 justify-center mt-6">{stars}</div>;
}

function TestimonialCard({ review, image, name, role, ratings }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
      <BsQuote className="w-14 h-14 text-red-900" />
      <p className="w-[70%] text-center text-gray-800 dark:text-gray-200 text-xl">
        {review}
      </p>
      {renderStars(ratings)}
      <div className="mt-12">
        <Image
          src={image}
          alt="Testimonial"
          width={100}
          height={100}
          className="object-center mx-auto rounded-full"
        />
        <h1 className="text-2xl font-bold text-center mt-4">{name}</h1>
        <h1 className="text-lg text-center text-gray-500">{role}</h1>
      </div>
    </div>
  );
}

export default TestimonialCard;
