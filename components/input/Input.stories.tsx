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
    onBlur: async () => console.log("blur"),
    onChange: async () => console.log("change"),
  },
};

export const DisabledInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "disabled",
    onBlur: async () => console.log("blur"),
    onChange: async () => console.log("change"),
  },
};

export const LoadingInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "loading",
    onBlur: async () => console.log("blur"),
    onChange: async () => console.log("change"),
  },
};

export const ErrorInput: Story = {
  args: {
    name: "my-input",
    inputStatus: "error",
    onBlur: async () => console.log("blur"),
    onChange: async () => console.log("change"),
  },
};
