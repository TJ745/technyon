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
        image="/images/projector1.png"
        name="Talha Jamil"
        role="Founder of TJ"
        review="TECHNYON made choosing a projector so easy. Their comparison blog helped me pick the right one for my home setup, and it arrived in just two days via Amazon!"
      />
      <TestimonialCard
        image="/images/projector1.png"
        name="Michael Williams"
        role="CEO of MSA"
        review="I found the perfect air fryer for my kitchen thanks to TECHNYON. The buying process was simple and the Amazon link took me straight to what I needed—no guesswork!"
      />
      <TestimonialCard
        image="/images/projector1.png"
        name="Mohammad Wali Bin Ahmad"
        role="Manager"
        review="I love how TECHNYON doesn’t just throw dozens of products at you—they actually explain why each one is worth it. Bought a blender, and I use it every day!"
      />
    </Carousel>
  );
}
