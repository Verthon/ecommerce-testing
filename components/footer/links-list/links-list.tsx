import Link from "next/link";
import { LinkItem } from "../Footer.types";

export type LinksListProps = {
	links: LinkItem[];
};

export const LinksList = ({ links }: LinksListProps) => {
	return (
		<ul className="text-gray-600">
			{links.map((link) => (
				<li key={link.url} className="mb-4">
					<Link href={link.url} className="hover:underline">
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};
