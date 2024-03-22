import Form from "./Form";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
// import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/test";

const meta = {
  title: "Form",
  component: Form,
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    expect(input).toHaveTextContent("");
    await userEvent.type(input, "test");
    await expect(canvas.getByDisplayValue("test")).toBeInTheDocument();
  },
};
