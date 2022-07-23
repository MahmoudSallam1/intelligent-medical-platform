import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "March",
    patients: 120,
  },
  {
    name: "April",
    patients: 160,
  },
  {
    name: "May",
    patients: 220,
  },
  {
    name: "June",
    patients: 300,
  },
  {
    name: "July",
    patients: 420,
  },
  {
    name: "August",
    patients: 560,
  },
  {
    name: "September",
    patients: 680,
  },
];
function NumberOfPatientsChart() {
  return (
    <div>
      <ResponsiveContainer height={240}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#1DB5E4"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NumberOfPatientsChart;
