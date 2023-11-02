import { useLocale } from "app/localization/hooks/useLocale";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { type ApolloQueryResult, NetworkStatus } from "@apollo/client";

import {
  GetAllProductsListDocument,
  type GetAllProductsListQuery,
} from "generated/graphql";
import { getShortLocaleVersion } from "app/localization/utils/getShortLocaleVersion";
import { apiClient } from "app/api/apiClient";
import { ProductsList } from "app/products/components/products-list/products-list";
import { MainLayout } from "app/shared/components/main-layout/main-layout";

export const getStaticProps: GetStaticProps<{
  products: {
    isLoading: boolean;
    list: ApolloQueryResult<GetAllProductsListQuery>["data"]["products"];
  };
}> = async (context) => {
  const locale = context.locale || context.defaultLocale;

  const allProductsList = await apiClient.query<GetAllProductsListQuery>({
    query: GetAllProductsListDocument,
    variables: {
      isPrimaryCategory: true,
      locale: getShortLocaleVersion(locale),
    },
  });

  return {
    props: {
      products: {
        isLoading: allProductsList?.networkStatus === NetworkStatus.loading,
        list: allProductsList?.data?.products || null,
      },
    },
  };
};

export type AllProducts = InferGetStaticPropsType<typeof getStaticProps>;

type ProductsProps = AllProducts;

export default function ProductsPage({ products }: ProductsProps) {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{t("products.pageTitle")}</title>
        <meta name="description" content={t("products.pageDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="container mx-auto my-6 bg-white text-gray-900 sm:my-12">
          <h1>{t("products.pageHeading")}</h1>
          <div className="mx-12 mt-6">
            {products.list && (
              <ProductsList
                list={products.list}
                isLoading={products.isLoading}
              />
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
