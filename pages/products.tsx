import { useLocale } from "hooks/useLocale/useLocale";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export default function ProductsPage() {
	const { t } = useLocale();

	return (
		<>
			<Head>
				<title>{t("account.pageTitle")}</title>
				<meta name="description" content="About Brand Eyewear" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>Products</h1>
			<Footer />
		</>
	);
}
