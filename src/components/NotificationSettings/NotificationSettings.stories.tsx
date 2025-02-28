import type { Meta, StoryObj } from "@storybook/react";
import NotificationSettings from "./NotificationSettings";

const meta: Meta<typeof NotificationSettings> = {
  title: "Components/NotificationSettings",
  component: NotificationSettings,
};

export default meta;

type Story = StoryObj<typeof NotificationSettings>;

export const Default: Story = {};
