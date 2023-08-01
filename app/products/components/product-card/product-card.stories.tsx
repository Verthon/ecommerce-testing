import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from "./product-card";

const meta = {
	title: "Example/ProductCard",
	component: ProductCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description: "Description of uber premium glasses",
		name: "Eyewear Brand Laura",
		price: "109900",
		imageUrl:
			"https://media.graphassets.com/resize=height:300,width:300/ls9CIxIRNWOJofjg7CHL",
	},
};

export const LoadingState: Story = {
	args: {
		description: "Description of uber premium glasses",
		name: "Eyewear Brand Laura",
		price: "109900",
		imageUrl: "",
		isLoading: true,
	},
};
