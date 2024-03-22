import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  argTypes: {
    label: {
      options: ["Primary Button", "Normal Button"],
      control: { type: "select" },
    },
  },
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: "Normal Button",
    primary: false,
  },
};
