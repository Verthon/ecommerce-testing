import NextLink from "next/link";

import { LinkProps } from "./Link.types";

export const Link = ({ href, children, variant }: LinkProps) => {
	if (variant === "outline") {
		return (
			<NextLink
				className="px-12 py-3 mt-8 text-sm font-medium text-gray-900 transition bg-white border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
				href={href}
			>
				{children}
			</NextLink>
		);
	}

	if (variant === "filled") {
		return (
			<NextLink
				className="px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
				href={href}
			>
				{children}
			</NextLink>
		);
	}

	return (
		<NextLink className="text-inherit" href={href}>
			{children}
		</NextLink>
	);
};
