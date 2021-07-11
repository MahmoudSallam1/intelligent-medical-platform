import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Parkinson's",
    male: 100,
    female: 60,
  },
  {
    name: "Alzheimer's",
    male: 110,
    female: 105,
  },
  {
    name: "Huntington",
    male: 17,
    female: 9,
  },
  {
    name: "Epilepsy",
    male: 203,
    female: 170,
  },
  {
    name: "Migraines",
    male: 130,
    female: 250,
  },

];
function CommonDiseasesChart() {
  return (
    <div>
      <ResponsiveContainer height={240}>
        <BarChart
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
          <Bar dataKey="male" fill="#1DB5E4" background={{ fill: "#eee" }} />
          <Bar dataKey="female" fill="#FAB91C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CommonDiseasesChart;
