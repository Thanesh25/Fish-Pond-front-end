import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
    YAxis,
    Pie,
  PieChart,
} from "recharts";
const ChartPage = () => {
  const sampleData = [
    { time: "10:00 AM", temperature: 21 },
    { time: "11:00 AM", temperature: 24 },
    { time: "12:00 PM", temperature: 25 },
    { time: "1:00 PM", temperature: 27 },
    { time: "2:00 PM", temperature: 21 },
    { time: "3:00 PM", temperature: 24 },
  ];
  return (
    <div style={{ margin: "20px" }}>
      <h3>Temperature Chart</h3>
      <LineChart
        width={600}
        height={300}
        data={sampleData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default ChartPage;
