import type { Meta, StoryObj } from "@storybook/react";
import RankingBox from "./Ranking";

const meta: Meta<typeof RankingBox> = {
  title: "Components/RankingBox",
  component: RankingBox,
};

export default meta;

type Story = StoryObj<typeof RankingBox>;

export const Default: Story = {};
