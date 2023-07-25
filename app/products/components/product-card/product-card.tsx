import Image from "next/image";

import { ProductCardProps } from "./product-card.types";

export const ProductCard = ({ name, price, description, imageUrl }: ProductCardProps) => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-6 w-72">
			<Image
				className="w-full h-48 object-cover rounded-lg mb-4"
				src={imageUrl}
				alt={name}
			/>
			<h3 className="text-xl font-semibold mb-2">{name}</h3>
			<p className="text-gray-600 mb-2">{description}</p>
			<div className="flex justify-between items-center">
				<span className="text-lg font-semibold">{price}</span>
				<button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
					Add to Cart
				</button>
			</div>
		</div>
	);
};
