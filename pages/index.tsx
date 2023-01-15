import Head from "next/head";
import { Announcement } from "../components/announcement/announcement";
import { ContentGrid } from "../components/content-grid/content-grid";
import { FeaturedSection } from "../components/featured-section/featured-section";
import { Footer } from "../components/footer/Footer";
import { HeroHomepage } from "../components/hero-homepage/hero-hompage";
import { Navbar } from "../components/navbar/Navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Optyk sklep</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Announcement />
			<Navbar />
			<HeroHomepage />
			<FeaturedSection />
			<ContentGrid />
			<Footer />
		</>
	);
}
