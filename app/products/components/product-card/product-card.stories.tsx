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
    name: "Eyewear Brand Laura",
    imageUrl:
      "https://media.graphassets.com/resize=height:300,width:300/ls9CIxIRNWOJofjg7CHL",
    slug: "/bob",
  },
};

export const LoadingState: Story = {
  args: {
    name: "Eyewear Brand Laura",
    imageUrl: "",
    isLoading: true,
    slug: "/laura",
  },
};
