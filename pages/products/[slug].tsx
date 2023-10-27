import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NetworkStatus } from "@apollo/client";
import Image from "next/image";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";

import { apiClient } from "app/api/apiClient";
import { getShortLocaleVersion } from "app/localization/utils/getShortLocaleVersion";
import {
  GetAllProductSlugsDocument,
  GetAllProductSlugsQuery,
  GetProductBySlugDocument,
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables,
} from "generated/graphql";
import { useLocale } from "app/localization/hooks/useLocale";
import {
  SingleProductSchema,
  singleProductSchema,
} from "app/products/models/single-product.schema";
import { isArray } from "@apollo/client/utilities";
import { notFound } from "next/navigation";
import { MainLayout } from "app/shared/components/main-layout/main-layout";

export const getStaticPaths = (async () => {
  const productSlugs = await apiClient.query<GetAllProductSlugsQuery>({
    query: GetAllProductSlugsDocument,
  });

  const paths = productSlugs.data.products.flatMap((product) => [
    { params: { slug: product.slug }, locale: "en-US" },
    { params: { slug: product.slug }, locale: "pl-PL" },
  ]);

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

const validateData = async ({
  product,
  networkStatus,
}: {
  product: unknown;
  networkStatus: NetworkStatus;
}) => {
  try {
    const validatedData = await singleProductSchema.safeParseAsync(product);

    if (validatedData.success) {
      return {
        props: {
          product: {
            isLoading: networkStatus === NetworkStatus.loading,
            data: validatedData.data,
          },
        },
      };
    }

    return {
      props: {
        product: {
          isLoading: false,
          data: null,
        },
      },
    };
  } catch (error) {
    console.error("Validation error: ", error);
    return {
      props: {
        product: {
          isLoading: false,
          data: null,
        },
      },
    };
  }
};

export const getStaticProps = (async (context) => {
  if (!context?.params?.slug || isArray(context.params.slug)) {
    return notFound();
  }

  try {
    const response = await apiClient.query<
      GetProductBySlugQuery,
      GetProductBySlugQueryVariables
    >({
      query: GetProductBySlugDocument,
      variables: {
        slug: context?.params?.slug,
        locale: getShortLocaleVersion(context.locale),
      },
    });

    if (!response.data.product) {
      return {
        props: {
          product: {
            isLoading: false,
            data: null,
          },
        },
      };
    }

    const data = await validateData({
      product: response.data.product,
      networkStatus: response.networkStatus,
    });

    return data;
  } catch (e) {
    console.error("error", e);

    return {
      props: {
        product: {
          isLoading: false,
          data: null,
        },
      },
    };
  }
}) satisfies GetStaticProps<{
  product: {
    isLoading: boolean;
    data: SingleProductSchema | null;
  };
}>;

export type ProductsByCategory = InferGetStaticPropsType<typeof getStaticProps>;

type ProductsByCategoryProps = ProductsByCategory;

export default function ProductDetails({ product }: ProductsByCategoryProps) {
  const { t } = useLocale();

  console.log(product.data, "product");

  if (!product.data) return null;

  return (
    <>
      <Head>
        <title>{product.data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {product.data?.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  {/* <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p> */}
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {product.data?.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    {t("productDetails.inStockAndReadyToShip")}
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              {product.data?.images[0]?.url && (
                <Image
                  src={product.data?.images[0]?.url}
                  height={product.data?.images[0]?.height}
                  width={product.data?.images[0]?.width}
                  alt={product.data?.description}
                />
              )}
            </div>

            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="sm:flex sm:justify-between">
                    {/* Size selector */}
                    {/* <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                      Size
                    </RadioGroup.Label>
                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          as="div"
                          key={size.name}
                          value={size}
                          className={({ active }) =>
                            classNames(
                              active ? "ring-2 ring-indigo-500" : "",
                              "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none",
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label
                                as="p"
                                className="text-base font-medium text-gray-900"
                              >
                                {size.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="p"
                                className="mt-1 text-sm text-gray-500"
                              >
                                {size.description}
                              </RadioGroup.Description>
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-lg",
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup> */}
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      {t("productDetails.addToCart")}
                    </button>
                  </div>
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="group inline-flex text-base font-medium"
                    >
                      <ShieldCheckIcon
                        className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="text-gray-500 hover:text-gray-700">
                        Lifetime Guarantee
                      </span>
                    </a>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
