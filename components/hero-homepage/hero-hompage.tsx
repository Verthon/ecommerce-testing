import { Link } from "components/link/Link";
import { useLocale } from "hooks/useLocale/useLocale";
import Image from "next/image";

import heroImage from "./assets/hero-image.jpg";

export const HeroHomepage = () => {
	const { t } = useLocale();

	return (
		<section className="container mx-auto my-6 sm:my-12 text-gray-900 bg-white">

			<div className="grid lg:grid-cols-2 px-4 py-8 sm:px-6 md:px-28 md:py-20 bg-gray-50 ">
				<div className="max-w-xl order-2 sm:order-1 mb-12 sm:mb-0 text-center sm:text-left sm:pl-6">
					<h1 className="text-3xl font-bold sm:text-4xl mb-8">
						{t("home.heroTitle.art")}
						<strong className="block font-bold">
							{t("home.heroTitle.handcrafted")}
						</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-lg sm:leading-loose text-gray-500">
						{t("home.heroDescription")}
					</p>

					<div className="mt-8 flex mx-auto flex-wrap gap-4">
						<Link href="/products" variant="filled">
							{t("home.shopNow")}
						</Link>
					</div>
				</div>
				<div className="flex justify-self-end mb-6 sm:mb-0 order-1 sm:order-2 sm:pr-6">
					<Image src={heroImage} width={640} height={420} alt="" quality={100} />
				</div>
			</div>
		</section>
	);
};
