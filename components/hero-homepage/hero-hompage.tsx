import { useLocale } from "hooks/useLocale/useLocale";
import Link from "next/link";

export const HeroHomepage = () => {
	const { t } = useLocale();

	return (
		<section className="relative bg-[url(https://images.unsplash.com/photo-1576781775559-4921ba325ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxleWV3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)] bg-cover bg-center bg-no-repeat">
			<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						The art of
						<strong className="block font-extrabold text-rose-700">
							handcrafted eyewear.
						</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
						{t('home.heroTitle')}
					</p>

					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<Link
							href="/products"
							className="block sx-auto rounded px-12 py-3 text-sm font-bold text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
						>
							{t('home.shopNow')}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
