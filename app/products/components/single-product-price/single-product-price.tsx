import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type SingleProductPriceProps = {
  price?: string;
};

export const SingleProductPrice = ({ price }: SingleProductPriceProps) => {
  if (!price) {
    return (
      <div className="rounded-md bg-blue-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">
              You need to login to display the price
            </p>
            <p className="mt-3 text-sm md:ml-6 md:mt-0">
              <Link
                href="/login"
                className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
              >
                Login
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-900">{price}</p>
    </>
  );
};
