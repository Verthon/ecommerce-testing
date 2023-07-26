import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NetworkStatus } from '@apollo/client';

import { ContentGrid } from "../components/content-grid/content-grid";
import { FeaturedSection } from "../components/featured-section/featured-section";
import { Footer } from "../components/footer/Footer";
import { HeroHomepage } from "../components/hero-homepage/hero-hompage";
import { Navbar } from "../components/navbar/Navbar";
import {
	GetAllCategoriesByPrimaryWithLocaleQuery,
	GetAllCategoriesByPrimaryWithLocaleDocument
} from "../generated/graphql";
import { ApolloQueryResult } from "@apollo/client";
import { MainCategories } from "main-categories/main-categories";
import { useLocale } from "app/localization/hooks/useLocale";
import { getShortLocaleVersion } from "app/localization/utils/getShortLocaleVersion";
import { apiClient } from "app/api/apiClient";

export const getStaticProps: GetStaticProps<{
	productCategories: {
		isLoading: boolean;
		categories: ApolloQueryResult<GetAllCategoriesByPrimaryWithLocaleQuery>["data"]["categories"];
	};
}> = async (context) => {
	const primaryProductsCategories =
		await apiClient.query<GetAllCategoriesByPrimaryWithLocaleQuery>({
			query: GetAllCategoriesByPrimaryWithLocaleDocument,
			variables: { isPrimaryCategory: true, locale: getShortLocaleVersion(context.locale) },
		});

	return {
		props: {
			productCategories: {
				isLoading: primaryProductsCategories?.networkStatus === NetworkStatus.loading,
				categories: primaryProductsCategories?.data?.categories || null,
			},
		},
	};
};

export type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({
	productCategories,
}: HomeProps) {
	const { t } = useLocale();

	return (
		<>
			<Head>
				<title>{t('home.pageTitle')}</title>
				<meta name="description" content={t('home.pageDescription')} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<HeroHomepage />
			{ productCategories.categories && <MainCategories categories={productCategories.categories} />}
			<FeaturedSection />
			<ContentGrid />
			<Footer />
		</>
	);
}
