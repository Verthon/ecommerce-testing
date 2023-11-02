import { useLocale } from "app/localization/hooks/useLocale";
import Image from "next/image";
import Link from "next/link";

import type { MainCategoriesProps } from "./main-categories.types";

export const MainCategories = ({ categories }: MainCategoriesProps) => {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="mb-8 text-xl font-bold text-gray-900 sm:text-3xl">
        {t("home.productLines.title")}
      </h2>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-items-center justify-self-center"
          >
            <Link
              href={`/categories/${category.slug}`}
              className="group block cursor-pointer"
            >
              {category?.image?.url && (
                <Image
                  className="object-fit rounded"
                  src={category?.image?.url}
                  alt={category?.name}
                  height={300}
                  width={300}
                />
              )}

              <div className="mt-3">
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {category?.name}
                </h3>

                <p className="mt-2 max-w-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
