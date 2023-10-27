import Head from "next/head";
import { useParams, notFound } from "next/navigation";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ApolloQueryResult, NetworkStatus } from "@apollo/client";

import { apiClient } from "app/api/apiClient";
import { getShortLocaleVersion } from "app/localization/utils/getShortLocaleVersion";
import {
  GetAllPrimaryCategoriesSlugsDocument,
  GetAllPrimaryCategoriesSlugsQuery,
  GetProductsByCategorySlugDocument,
  GetProductsByCategorySlugQuery,
} from "generated/graphql";
import { ProductsList } from "app/products/components/products-list/products-list";
import { useLocale } from "app/localization/hooks/useLocale";
import { MainLayout } from "app/shared/components/main-layout/main-layout";

export const getStaticPaths = (async () => {
  const primaryCategoriesSlugs =
    await apiClient.query<GetAllPrimaryCategoriesSlugsQuery>({
      query: GetAllPrimaryCategoriesSlugsDocument,
    });

  const paths = primaryCategoriesSlugs.data.categories.flatMap((category) => [
    {
      params: { slug: category.slug },
      locale: "pl-PL",
    },
    {
      params: { slug: category.slug },
      locale: "en-US",
    },
  ]);

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<{
  products: {
    isLoading: boolean;
    list: ApolloQueryResult<GetProductsByCategorySlugQuery>["data"]["products"];
  };
}> = async (context) => {
  if (
    typeof context?.params?.slug !== "string"
  ) {

    return notFound();
  }

  const allProductsList = await apiClient.query<GetProductsByCategorySlugQuery>(
    {
      query: GetProductsByCategorySlugDocument,
      variables: {
        categorySlugName: context.params.slug,
        locales: [getShortLocaleVersion("pl-PL"), getShortLocaleVersion("en-US")],
      },
    },
  );

  return {
    props: {
      products: {
        isLoading: allProductsList?.networkStatus === NetworkStatus.loading,
        list: allProductsList?.data?.products || null,
      },
    },
  };
};

export type ProductsByCategory = InferGetStaticPropsType<typeof getStaticProps>;

type ProductsByCategoryProps = ProductsByCategory;

export default function ProductsByCategoryPage({
  products,
}: ProductsByCategoryProps) {
  const params = useParams();
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>Category: {params?.slug}</title>
        <meta name="description" content="Generated by create next app" />
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
