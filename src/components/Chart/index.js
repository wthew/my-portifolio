import React from "react";
import styled from "styled-components";
import { XAxis, ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";

import CardBase from "../Card";

const Card = styled(CardBase)`
  height: 200px;
  min-width: 90%;

`;

const SimpleLineChart = () => {
  const data = [
    { name: "Node", score: 10 },
    { name: "Web", score: 9 },
    { name: "Dart", score: 5 },
    { name: "Linux", score: 15 },
    { name: "C#", score: 4 },
    { name: "Python", score: 15 },
    { name: "Sql", score: 7 },
  ];

  return (
    <Card title="Knowledge Distribution">
      <ResponsiveContainer>
        <AreaChart
          data={data}
        >
          <YAxis tick={<div />} />
          <XAxis dataKey="name" />
          <Area
            type="natural"
            dataKey="score"
            stroke="#8be9fd"
            fill="#282a36"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SimpleLineChart;
