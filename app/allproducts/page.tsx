"use client";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : [
          ...products
            .filter((p) => p.category === selectedCategory || p.isFeatured)
            .filter(
              (p, index, self) =>
                index === self.findIndex((other) => other.id === p.id)
            ),
        ];

  return (
    <section className="pt-26 pb-16">
      <h1 className="mt-8 text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Our Products
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      {/* <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Tech That Elevates Your Everyday
      </p> */}

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors w-34 cursor-pointer ${
              selectedCategory === category
                ? "bg-red-950 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-[80%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
