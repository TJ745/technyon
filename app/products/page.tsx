// import { products } from "@/data/products";
// import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <section className="pt-16 pb-16 scroll-mt-[8vh]" id="products">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Our Products
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Tech That Elevates Your Everyday
      </p>
      <div className="w-[80%] mx-auto mt-8">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        <ProductSlider />
      </div>
      <div className="w-[80%] mx-auto mt-8 text-center ">
        <Link href="/allproducts">
          <button className="border border-white text-white px-4 py-2 rounded-md cursor-pointer">
            Browse Products
          </button>
        </Link>
      </div>
    </section>
  );
}
