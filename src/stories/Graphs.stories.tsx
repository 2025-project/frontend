import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Graphs from "../components/Graphs/Graphs";

export default {
  title: "Components/Graph",
  component: Graphs,
} as Meta;

const Template: StoryFn = (args) => <Graphs {...args} />;

export const Default = Template.bind({});
Default.args = {};
