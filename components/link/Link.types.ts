import type { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = {
	variant?: "outline" | "filled" | "subtle";
	disabled?: boolean;
	children?: React.ReactNode;
} & NextLinkProps;
