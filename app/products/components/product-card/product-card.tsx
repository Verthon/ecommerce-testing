import Image from "next/image";

export type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  isLoading?: boolean;
  slug: string;
};

const ProductCardSkeleton = () => {
  return (
    <div className="w-80 animate-pulse">
      <div className="mb-4 h-[200px] bg-gray-200"></div>

      <div className="w-full">
        <div className="mb-2 h-4 rounded-md bg-gray-200"></div>
        <div className="mb-2 h-3 rounded-md bg-gray-200"></div>
        <div className="h-4 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  name,
  price,
  description,
  imageUrl,
  slug,
  isLoading,
}: ProductCardProps) => {
  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <a className="max-w-md`" href={`/${slug}`}>
      <div className="group relative max-w-md rounded-lg bg-white shadow-lg">
        <Image
          className="mb-4 h-48 w-full rounded-lg object-cover"
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          quality={100}
        />
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-2 text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{price}</span>
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
            Add to Cart
          </button>
        </div>
      </div>
    </a>
  );
};
