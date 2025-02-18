import type { Meta, StoryObj } from "@storybook/react";
import StockDetails from "../components/StockDetails/StockDetails";

const meta: Meta<typeof StockDetails> = {
  title: "Stock/StockDetails",
  component: StockDetails,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StockDetails>;

export const Default: Story = {
  args: {
    name: "엔비디아",
    symbol: "NVDA",
    priceKRW: "202,016원",
    priceUSD: "$145.06",
    marketData: [
      {
        price: "208,016원",
        volume: "100",
        changeRate: "-1.41%",
        tradeVolume: "292,626",
        time: "15:19:49",
      },
      {
        price: "208,018원",
        volume: "90",
        changeRate: "-1.41%",
        tradeVolume: "292,626",
        time: "15:19:49",
      },
      {
        price: "208,071원",
        volume: "1",
        changeRate: "-1.41%",
        tradeVolume: "292,626",
        time: "15:19:49",
      },
      {
        price: "208,061원",
        volume: "100",
        changeRate: "-1.41%",
        tradeVolume: "292,626",
        time: "15:19:48",
      },
      {
        price: "208,013원",
        volume: "32",
        changeRate: "-1.41%",
        tradeVolume: "292,626",
        time: "15:19:48",
      },
    ],
  },
};
