import { useLocale } from "hooks/useLocale/useLocale";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export default function AccountPage() {
	const { t } = useLocale();
	const { status } = useSession();
	const router = useRouter();

	if (status === "unauthenticated") {
		router.push("/login");
		return;
	}

	return (
		<>
			<Head>
				<title>{t("account.pageTitle")}</title>
				<meta name="description" content="About Brand Eyewear" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>Account</h1>
			<Footer />
		</>
	);
}
