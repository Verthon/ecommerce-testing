import Link from "next/link";
import { useRouter } from "next/router";

import { useLocale } from "hooks/useLocale/useLocale";
import { NavItem } from "./nav-item/nav-item";
import { UserMenu } from "./user-menu/user-menu";
import { LangSwitcher } from "components/lang-switcher/lang-switcher";

const useNavLinks = () => {
	const { t } = useLocale();
	const { pathname } = useRouter();

	const isActiveRoute = (route: string) => {
		return pathname.includes(route);
	};

	return {
		navLinks: [
			{
				id: 1,
				href: "/products",
				label: t("home.navbar.products"),
				isActive: isActiveRoute("products"),
			},
			{
				id: 2,
				href: "/about",
				label: t("home.navbar.aboutBrand"),
				isActive: isActiveRoute("about"),
			},
			{
				id: 3,
				href: "/contact",
				label: t("home.navbar.contact"),
				isActive: isActiveRoute("contact"),
			},
		],
	};
};

export const Navbar = () => {
	const { t } = useLocale();
	const { navLinks } = useNavLinks();
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link href="/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-6 mr-3 sm:h-9"
						alt="Pillow Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Brand Eyewear
					</span>
				</Link>
				<div className="flex items-center md:order-2">
					<UserMenu />
					<LangSwitcher />
					<div
						className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
						id="user-dropdown"
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								Bonnie Green
							</span>
							<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-1" aria-labelledby="user-menu-button">
							<li>
								<Link
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Sign out
								</Link>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="mobile-menu-2"
				>
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
						{navLinks.map((navlink) => {
							return (
								<NavItem
									key={navlink.id}
									href={navlink.href}
									label={navlink.label}
									isActive={navlink.isActive}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
