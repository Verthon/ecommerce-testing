import type { Meta, StoryObj } from "@storybook/react";

import { ClosableAlert } from "./closeable-alert";

const meta = {
  title: "components/ClosableAlert",
  component: ClosableAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClosableAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Successfully uploaded",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Could not send email, please try again",
    type: "error",
  },
};
