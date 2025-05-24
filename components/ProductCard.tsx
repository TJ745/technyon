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
    <div className="bg-white dark:bg-black border rounded-lg shadow hover:shadow-lg transition overflow-hidden mr-6">
      <Image
        src={product.image}
        alt={product.name}
        className="w-48 h-48 mx-auto mt-4"
        width={480}
        height={480}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {product.description}
        </p>
        <Link
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          View on Amazon
        </Link>
      </div>
    </div>
  );
}
