import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    name: "my-input",
  },
};

export const DisabledInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "disabled",
  },
};

export const LoadingInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "loading",
  },
};

export const ErrorInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "error",
  },
};
