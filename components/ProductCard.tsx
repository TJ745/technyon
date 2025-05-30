import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  amazonUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
      <div className="border border-red-950 rounded-lg shadow hover:shadow-lg transition overflow-hidden w-[95%] h-[450px] flex flex-col justify-center items-center ">
        <Image
          src={product.image}
          alt={product.name}
          className="w-52 h-52 mx-auto mt-8"
          width={500}
          height={500}
        />
        <div className="p-6">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {product.description}
          </p>
          {product.amazonUrl && (
            <Link
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block mt-3 text-white"
            >
              <button className="w-full bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition  cursor-pointer">
                View on Amazon
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
