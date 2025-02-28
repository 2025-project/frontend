import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import StockList from "./StockList";

const meta: Meta<typeof StockList> = {
  title: "Components/StockList",
  component: StockList,
};

export default meta;
type Story = StoryObj<typeof StockList>;

export const Default: Story = {
  render: () => <StockList />,
};
