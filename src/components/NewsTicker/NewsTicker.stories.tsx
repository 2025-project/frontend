import type { Meta, StoryObj } from "@storybook/react";
import NewsTicker from "./NewsTicker";

const meta: Meta<typeof NewsTicker> = {
  title: "Components/NewsTicker",
  component: NewsTicker,
};

export default meta;

type Story = StoryObj<typeof NewsTicker>;

export const Default: Story = {};
