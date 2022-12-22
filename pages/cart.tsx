import { useSession } from "next-auth/react";
import Head from "next/head";
import { CartContent } from "../components/cart-content/cart-content";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export default function CartPage() {
	const t = useSession();

	console.log(t);
	return (
		<>
			<Head>
				<title>Cart</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
      <CartContent />
			<Footer />
		</>
	);
}