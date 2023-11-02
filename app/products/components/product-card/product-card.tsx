import NextImage from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  imageUrl?: string;
  name: string;
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
  imageUrl,
  slug,
  isLoading,
}: ProductCardProps) => {
  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <Link className="max-w-md`" href={`/products/${slug}`}>
      <div className="group relative max-w-md rounded-lg bg-white">
        {imageUrl && (
          <NextImage
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            quality={100}
          />
        )}
        <h3 className="mt-1 font-semibold text-gray-900">
          <span className="absolute inset-0" />
          {name}
        </h3>
      </div>
    </Link>
  );
};
