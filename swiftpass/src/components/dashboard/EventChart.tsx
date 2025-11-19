"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", tickets: 40 },
  { month: "Feb", tickets: 80 },
  { month: "Mar", tickets: 65 },
  { month: "Apr", tickets: 120 },
  { month: "May", tickets: 90 },
];

export default function EventChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tickets" stroke="currentColor" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
