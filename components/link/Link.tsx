import NextLink from "next/link";

import type { LinkProps } from "./Link.types";

export const Link = ({ href, children, variant }: LinkProps) => {
  if (variant === "outline") {
    return (
      <NextLink
        className="mt-8 rounded border border-gray-900 bg-white px-12 py-3 text-sm font-medium text-gray-900 transition hover:shadow focus:outline-none focus:ring"
        href={href}
      >
        {children}
      </NextLink>
    );
  }

  if (variant === "filled") {
    return (
      <NextLink
        className="mt-8 rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
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
