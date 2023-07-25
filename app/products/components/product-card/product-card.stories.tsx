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

export const Primary: Story = {
	args: {
		description: "blablable",
		name: "KEK",
    price: '123 $',
    imageUrl: ''
	},
};
