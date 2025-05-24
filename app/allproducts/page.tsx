import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
// import ProductSlider from "@/components/ProductSlider";

export default function AllProductsPage() {
  return (
    <section className="pt-26 pb-16">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Our Products
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Tech That Elevates Your Everyday
      </p>
      <div className="w-[80%] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* <ProductSlider /> */}
      </div>
    </section>
  );
}
