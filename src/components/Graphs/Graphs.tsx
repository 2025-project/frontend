"use client"; // 클라이언트 컴포넌트 지정

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Graphs = () => {
  return (
    <LineChart
      width={950}
      height={500}
      data={data}
      margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        strokeWidth={3}
        activeDot={{ r: 6 }}
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        strokeWidth={3}
      />
    </LineChart>
  );
};

export default Graphs;
