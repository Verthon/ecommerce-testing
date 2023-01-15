import Head from "next/head";

import { CoreValues } from "../components/core-values/core-values";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";


export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About us</title>
				<meta name="description" content="About Brand Eyewear" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
      <CoreValues />
			<Footer />
		</>
	);
}