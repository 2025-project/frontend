import type { Meta, StoryObj } from "@storybook/react";
import SortDropdown from "./SortDropdown";

const meta: Meta<typeof SortDropdown> = {
  title: "Components/SortDropdown",
  component: SortDropdown,
};

export default meta;

type Story = StoryObj<typeof SortDropdown>;

export const Default: Story = {};
