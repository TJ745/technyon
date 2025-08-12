"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialSlider() {
  return (
    <Carousel
      //   swipeable={false}
      //   draggable={false}
      //   showDots={true}
      responsive={responsive}
      //   ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      //   customTransition="all .5"
      //   transitionDuration={500}
      //   containerClass="carousel-container"
      //   removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      //   dotListClass="custom-dot-list-style"
      //   itemClass="carousel-item-padding-40-px"
    >
      <TestimonialCard
        image="/images/Male-Avatar.png"
        name="Talha Jamil"
        role="Customer"
        review="TECHNYON made choosing a projector so easy. They support me pick the right one for my home setup, and it arrived in just two days via Amazon!"
        ratings={5}
      />
      <TestimonialCard
        image="/images/Male-Avatar.png"
        name="Michael Williams"
        role="Customer"
        review="I found the perfect projector for my home thanks to TECHNYON. The buying process was simple and the Amazon link took me straight to what I needed no guesswork!"
        ratings={4.5}
      />
      <TestimonialCard
        image="/images/Male-Avatar.png"
        name="Osama Ali"
        role="Customer"
        review="I love how TECHNYON doesn't just throw dozens of products at you. They actually explain why each one is worth it. Bought a projector, and I use it every day!"
        ratings={4.5}
      />
      <TestimonialCard
        image="/images/Male-Avatar.png"
        name="Ian Kevin"
        role="Customer"
        review="I was overwhelmed by the choices for projectors, but TECHNYON made it easy. Their detailed reviews and Amazon links helped me find exactly what I needed without any hassle."
        ratings={4.5}
      />
      <TestimonialCard
        image="/images/Male-Avatar.png"
        name="Andy B"
        role="Customer"
        review="Fantastic price, fantastic product. Needed something for entertaining the kids whilst away in the caravan - this gives us our own cinema in the awning and they absolutely love it! The picture quality is great and it's pretty straight forward to set up. Glad I went ahead and purchased this :)"
        ratings={5}
      />
    </Carousel>
  );
}
