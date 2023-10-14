import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import { useLocale } from "app/localization/hooks/useLocale";
import { NavItem } from "./nav-item/nav-item";
import { LangSwitcher } from "components/lang-switcher/lang-switcher";
import { useSession } from "next-auth/react";
import {
  Bars3Icon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

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

const LoginAndLogout = ({
  status,
  handleLogout,
}: {
  status: "authenticated" | "unauthenticated" | "loading";
  handleLogout: VoidFunction;
}) => {
  const { t } = useLocale();

  if (status === "authenticated")
    return (
      <button
        type="button"
        onClick={handleLogout}
        className="mr-2 rounded-lg border border-gray-200 bg-white px-5 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
      >
        {t("home.navbar.logout")}
      </button>
    );
  return (
    <Link
      href="/api/auth/signin"
      className="mr-2 rounded-lg border border-gray-200 bg-white px-5 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
    >
      {t("home.navbar.login")}
    </Link>
  );
};

export const Navbar = () => {
  const { t } = useLocale();
  const { navLinks } = useNavLinks();
  const { status } = useSession();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Eywear brand Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Brand Eyewear
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <LangSwitcher />
          <LoginAndLogout status={status} handleLogout={handleLogout} />
          <div
            className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
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
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
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
