import Link from "next/link";

import type { NavItemProps } from "./nav-item.types";

export const NavItem = ({ href, label }: NavItemProps) => {
	return (
		<li>
			<Link
				href={href}
				className="capitalize block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
			>
				{label}
			</Link>
		</li>
	);
};
