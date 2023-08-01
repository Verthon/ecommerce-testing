import * as React from "react";

import { ProductCard } from "../product-card/product-card";
import { AllProducts } from "pages/products";

type ProductsListProps = AllProducts["products"];

export const ProductsList = ({
  list: productsList,
  isLoading,
}: ProductsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 xl:gap-x-12">
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={String(product.price)}
          slug={product.slug}
          imageUrl={product.images[0]?.url}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};
