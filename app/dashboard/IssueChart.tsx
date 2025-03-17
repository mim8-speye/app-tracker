"use client";

import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueChart = ({ open, closed, inProgress }: Props) => {
  return (
    <Card>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={[
            { name: "Open", value: open },
            { name: "In Progress", value: inProgress },
            { name: "Closed", value: closed },
          ]}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            barSize={60}
            dataKey="value"
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
