import { HeartIcon } from "@heroicons/react/20/solid";
import type { CartProduct } from "app/cart/models/CartProduct";

import { createCartManager } from "app/cart/services/createCartManager";
import { useLocale } from "app/localization/hooks/useLocale";
import { isServer } from "app/shared/utils/isServer";

type AddToCartProps = {
  product: CartProduct;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const { t } = useLocale();

  if (isServer) return null;

  const cartManager = createCartManager();

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault();

    cartManager.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      url: `/products/${product.url}`,
    });
  };

  return (
    <form className="mt-6" onSubmit={handleAddToCart}>
      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          {t("productDetails.addToCart")}
        </button>

        <button
          type="button"
          className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>
  );
};

export default AddToCart;
